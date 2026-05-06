import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://hennessychauffeurs.ie");
const $$LandingNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingNav;
  const pathname = Astro2.url.pathname;
  const links = [
    { label: "Services", href: "/services" },
    { label: "Tours", href: "/tours" },
    { label: "About", href: "/aboutMe" },
    { label: "Blog", href: "/blog" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-50 w-full glass-nav shadow-[0_40px_60px_rgba(231,229,229,0.05)]"> <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-8 md:py-6"> <a href="/" class="font-headline text-xl font-bold uppercase tracking-[0.2em] text-on-surface">
Hennessy Chauffeurs
</a> <nav class="hidden items-center gap-4 lg:gap-6 xl:gap-8 md:flex"> ${links.map((link) => {
    const isActive = pathname === link.href || link.href === "/blog" && pathname.startsWith("/blog");
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
      "font-headline tracking-tight transition-colors duration-500",
      isActive ? "border-b border-primary/30 pb-1 text-primary" : "text-on-surface-variant hover:text-on-surface"
    ], "class:list")}> ${link.label} </a>`;
  })} </nav> <div class="hidden md:flex md:items-center"> <a href="/contact" class="metallic-gradient rounded-sm px-6 py-2.5 font-label text-sm font-semibold uppercase tracking-widest text-on-primary transition-all duration-500 hover:opacity-90">
Book Now
</a> </div> <details class="dropdown dropdown-end md:hidden"> <summary class="btn btn-ghost border border-outline-variant/30 bg-transparent px-3 py-2 text-on-surface hover:bg-surface-container-high">
Menu
</summary> <ul class="menu dropdown-content z-[1] mt-3 w-56 rounded-sm border border-outline-variant/30 bg-surface-container p-2 text-on-surface shadow-lg"> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")}${addAttribute(pathname === link.href ? "text-primary" : "text-on-surface-variant", "class")}> ${link.label} </a> </li>`)} <li><a href="/contact" class="font-semibold text-primary">Book Now</a></li> </ul> </details> </div> </header>`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/components/LandingNav.astro", void 0);

const $$LandingFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-on-surface-variant/15 bg-black px-8 py-20 font-body text-sm tracking-wide"> <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3"> <div> <p class="text-lg font-bold uppercase tracking-widest text-on-surface">Hennessy Chauffeur</p> <p class="mt-4 max-w-xs leading-relaxed text-on-surface-variant">
Dublin&apos;s premier bespoke chauffeur service. Providing unmatched luxury and professionalism across the Emerald Isle.
</p> <div class="mt-6 flex gap-4 text-primary"> <span class="material-symbols-outlined">share</span> <span class="material-symbols-outlined">mail</span> </div> </div> <div class="grid grid-cols-2 gap-8"> <div> <p class="mb-4 font-semibold uppercase tracking-wider text-on-surface">Explore</p> <ul class="space-y-2 text-on-surface-variant"> <li><a href="/services" class="hover:text-on-surface">Services</a></li> <li><a href="/tours" class="hover:text-on-surface">Tours</a></li> <li><a href="/aboutMe" class="hover:text-on-surface">About</a></li> <li><a href="/blog" class="hover:text-on-surface">Blog</a></li> </ul> </div> <div> <p class="mb-4 font-semibold uppercase tracking-wider text-on-surface">Company</p> <ul class="space-y-2 text-on-surface-variant"> <li><a href="/privacy" class="hover:text-on-surface">Privacy Policy</a></li> <li><a href="/terms" class="hover:text-on-surface">Terms of Service</a></li> <li><a href="/faq" class="hover:text-on-surface">Booking FAQ</a></li> <li><a href="/contact" class="hover:text-on-surface">Contact</a></li> </ul> </div> </div> <div> <p class="mb-2 font-semibold uppercase tracking-wider text-on-surface">The Newsletter</p> <p class="mb-6 text-on-surface-variant">Stay informed about exclusive seasonal tours and fleet updates.</p> <form class="flex items-center gap-2"> <input type="email" placeholder="email@address.com" class="w-full border-b border-outline-variant/30 bg-surface-container-highest px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none"> <button type="button" class="rounded-sm border border-outline-variant/30 p-3 text-primary hover:bg-surface-container-high"> <span class="material-symbols-outlined">east</span> </button> </form> </div> </div> <div class="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between border-t border-outline-variant/10 pt-8 text-xs uppercase tracking-widest text-on-surface-variant md:flex-row"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Hennessy Chauffeur's. All Rights Reserved.</p> <p class="mt-4 md:mt-0">Built for Distinction</p> </div> </footer>`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/components/LandingFooter.astro", void 0);

export { $$LandingNav as $, $$LandingFooter as a };
