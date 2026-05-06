import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C-tuGI7x.mjs';
export { renderers } from '../renderers.mjs';

const $$Cookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cookie Policy | Hennessy Chauffeurs", "description": "Cookie policy for Hennessy Chauffeurs. How we use cookies and similar technologies on our website.", "breadcrumb": [{ name: "Home", url: "https://hennessychauffeurs.ie" }, { name: "Cookie Policy" }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-4xl mx-auto px-4 py-16"> <div class="text-center mb-12"> <h1 class="font-display text-3xl md:text-4xl font-bold text-navy mb-6 tracking-wide">
Cookie Policy
</h1> <p class="text-lg md:text-xl text-lavender">
How we use cookies on our website
</p> </div> <div class="prose max-w-none text-navy/90"> <p class="text-lg leading-relaxed mb-6">
This cookie policy explains what cookies are, how Hennessy Chauffeurs uses them on hennessychauffeurs.ie, and your choices regarding cookies.
</p> <h2 class="font-display text-2xl font-semibold text-navy mt-8 mb-4">What are cookies?</h2> <p class="leading-relaxed mb-4">
Cookies are small text files stored on your device when you visit a website. They are widely used to make sites work properly, to remember your preferences, and to understand how visitors use the site.
</p> <h2 class="font-display text-2xl font-semibold text-navy mt-8 mb-4">Cookies we use</h2> <p class="leading-relaxed mb-4">
Our website may use essential cookies necessary for the site to function (for example, remembering preferences during your visit). If we use third-party services that set cookies (such as analytics or contact forms), we will describe them here and, where required, ask for your consent.
</p> <h2 class="font-display text-2xl font-semibold text-navy mt-8 mb-4">Managing cookies</h2> <p class="leading-relaxed mb-4">
You can control and delete cookies through your browser settings. Note that restricting or blocking cookies may affect how the website works or the services we can offer you.
</p> <h2 class="font-display text-2xl font-semibold text-navy mt-8 mb-4">More information</h2> <p class="leading-relaxed mb-8">
For details about how we handle your personal data, see our <a href="/privacy" class="text-teal font-medium hover:text-gold transition-colors duration-200">Privacy Policy</a>. If you have questions about our use of cookies, contact us at <a href="mailto:info@hennessychauffeurs.ie" class="text-teal font-medium hover:text-gold transition-colors duration-200">info@hennessychauffeurs.ie</a> or <a href="tel:+353851315392" class="text-teal font-medium hover:text-gold transition-colors duration-200">+353 85 131 5392</a>.
</p> <p class="text-sm text-lavender">
Last updated: February 2025. We may update this policy from time to time; the current version will be available on this page.
</p> <div class="mt-8"> <a href="/contact" class="inline-block rounded-lg px-8 py-3 bg-gold text-navy font-medium hover:bg-gold/90 transition-colors duration-200 text-sm">
Contact Us
</a> </div> </div> </section> ` })}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/cookies.astro", void 0);

const $$file = "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/cookies.astro";
const $$url = "/cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cookies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
