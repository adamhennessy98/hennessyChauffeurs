import type { APIRoute } from 'astro';

export const prerender = false;

const SITE_URL = 'https://hennessychauffeurs.ie';

function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const secret = import.meta.env.CREATE_POST_SECRET;
  const token = import.meta.env.GITHUB_TOKEN;
  const repo = import.meta.env.GITHUB_REPO;

  if (!secret || !token || !repo) {
    return new Response(
      JSON.stringify({ error: 'Server configuration error: missing env vars' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const authHeader = request.headers.get('Authorization');
  const headerSecret = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : request.headers.get('X-Webhook-Secret');
  let body: { title?: string; content?: string; description?: string; secret?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const providedSecret = headerSecret ?? body.secret;
  if (providedSecret !== secret) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const title = body.title?.trim();
  const content = body.content ?? '';

  if (!title) {
    return new Response(
      JSON.stringify({ error: 'Missing required field: title' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const slug = titleToSlug(title);
  if (!slug) {
    return new Response(
      JSON.stringify({ error: 'Title could not be converted to a valid slug' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const pubDate = new Date().toISOString().slice(0, 10);
  const description = typeof body.description === 'string' ? body.description.trim() : '';

  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `pubDate: ${pubDate}`,
    ...(description ? [`description: "${description.replace(/"/g, '\\"')}"`] : []),
    '---',
    '',
    content.trim(),
    ''
  ].join('\n');

  const path = `src/content/posts/${slug}.md`;
  const base64Content = Buffer.from(frontmatter, 'utf-8').toString('base64');
  const branch = import.meta.env.GITHUB_BRANCH ?? 'main';

  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: `Add blog post: ${title}`,
      content: base64Content,
      branch
    })
  });

  if (!res.ok) {
    const err = await res.text();
    return new Response(
      JSON.stringify({ error: 'GitHub API error', details: err }),
      { status: res.status, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const liveUrl = `${SITE_URL}/blog/${slug}`;
  return new Response(
    JSON.stringify({ success: true, url: liveUrl, slug }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
