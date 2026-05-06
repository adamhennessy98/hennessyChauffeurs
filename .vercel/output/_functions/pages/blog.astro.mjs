import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C-tuGI7x.mjs';
import { $ as $$LandingNav, a as $$LandingFooter } from '../chunks/LandingFooter_KoWKwg_7.mjs';
import { a as getCollection } from '../chunks/_astro_content_BgZmmOTn.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const siteUrl = "https://hennessychauffeurs.ie";
  const allPosts = await getCollection("posts");
  const posts = allPosts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Journal | Hennessy Chauffeurs", "description": "Notes from the road \u2014 travel, Ireland, and the craft of chauffeur service. Hennessy Chauffeurs, Dublin & Leinster.", "breadcrumb": [{ name: "Home", url: siteUrl }, { name: "Blog" }], "showSiteChrome": false, "bodyClass": "bg-black text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container", "ogImage": "/images/hero-mercedes.png" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingNav", $$LandingNav, {})} ${maybeRenderHead()}<article class="bg-black text-on-surface"> <header class="mx-auto max-w-7xl border-b border-white/5 px-6 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32"> <p class="mb-4 font-label text-xs font-medium uppercase tracking-[0.35em] text-on-surface-variant">
From the road
</p> <h1 class="max-w-3xl font-display text-4xl font-normal leading-[1.08] tracking-tight text-on-surface sm:text-5xl md:text-6xl">
Journal
</h1> <p class="mt-6 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant sm:text-lg">
Short reads on routes, airports, events, and the details that make private travel effortless. New pieces will appear here as we publish.
</p> </header> <section class="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24" aria-labelledby="posts-heading"> <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"> <h2 id="posts-heading" class="font-display text-2xl font-normal text-on-surface md:text-3xl">
Latest
</h2> ${posts.length > 0 && renderTemplate`<p class="font-label text-xs uppercase tracking-widest text-on-surface-variant">${posts.length} article${posts.length === 1 ? "" : "s"}</p>`} </div> ${posts.length > 0 ? renderTemplate`<ul class="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.id}`, "href")} class="group flex h-full flex-col rounded-sm border border-white/10 bg-[#0f0f0f] p-8 transition-colors duration-300 hover:border-primary/40 hover:bg-[#141414]"> <time class="font-label text-xs uppercase tracking-widest text-on-surface-variant"${addAttribute(post.data.pubDate.toISOString(), "datetime")}> ${post.data.pubDate.toLocaleDateString("en-IE", { dateStyle: "long" })} </time> <h3 class="mt-4 font-display text-xl font-normal leading-snug text-on-surface transition-colors group-hover:text-primary md:text-2xl"> ${post.data.title} </h3> ${post.data.description && renderTemplate`<p class="mt-3 flex-1 font-body text-sm leading-relaxed text-on-surface-variant line-clamp-3"> ${post.data.description} </p>`} <span class="mt-6 inline-flex items-center gap-1 font-label text-xs font-semibold uppercase tracking-[0.2em] text-primary">
Read
<span class="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span> </span> </a> </li>`)} </ul>` : renderTemplate`<div class="space-y-10"> <p class="max-w-xl font-body text-on-surface-variant">
No articles yet. When your automated pipeline or Markdown posts go live, they will show in this grid.
</p> <ul class="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3" aria-hidden="true"> ${[1, 2, 3].map((i) => renderTemplate`<li class="rounded-sm border border-dashed border-white/15 bg-[#0a0a0a] p-8"> <div class="h-3 w-24 rounded bg-white/10"></div> <div class="mt-5 h-6 w-4/5 max-w-[240px] rounded bg-white/10"></div> <div class="mt-3 h-3 w-full rounded bg-white/[0.06]"></div> <div class="mt-2 h-3 w-[90%] rounded bg-white/[0.06]"></div> <div class="mt-2 h-3 w-3/5 rounded bg-white/[0.06]"></div> <div class="mt-8 h-3 w-20 rounded bg-white/10"></div> </li>`)} </ul> </div>`} </section> </article> ${renderComponent($$result2, "LandingFooter", $$LandingFooter, {})} ` })}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/blog/index.astro", void 0);

const $$file = "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
