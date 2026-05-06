import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C-tuGI7x.mjs';
import { $ as $$LandingNav, a as $$LandingFooter } from '../chunks/LandingFooter_KoWKwg_7.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = "https://hennessychauffeurs.ie";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | The Driver & The Fleet | Hennessy Chauffeurs", "description": "Meet your chauffeur, explore the Mercedes-Benz fleet, and learn why owner-operated service means consistency, discretion, and Irish hospitality on every journey.", "breadcrumb": [{ name: "Home", url: siteUrl }, { name: "About" }], "showSiteChrome": false, "bodyClass": "bg-black text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container", "ogImage": "/images/hero-mercedes.png" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingNav", $$LandingNav, {})} ${maybeRenderHead()}<article class="bg-black text-on-surface"> <!-- Hero --> <header class="relative min-h-[88vh] w-full overflow-hidden"> <img src="/images/hero-mercedes.png" alt="Black luxury Mercedes-Benz in evening city light." class="absolute inset-0 h-full w-full object-cover object-center" width="1920" height="1080" fetchpriority="high"> <div class="absolute inset-0 bg-black/55"></div> <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div> <div class="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36"> <p class="mb-4 font-label text-xs font-medium uppercase tracking-[0.35em] text-primary/90">
A chauffeur driven experience
</p> <h1 class="mb-8 max-w-4xl font-display text-4xl font-normal leading-[1.08] tracking-tight text-on-surface sm:text-5xl md:text-6xl lg:text-7xl">
The driver &amp; the detail.
</h1> <p class="max-w-2xl font-body text-base leading-relaxed text-on-surface-variant sm:text-lg">
A curated journey with a dedicated chauffeur and the warmth of genuine Irish hospitality — where anticipation, routecraft, and discretion matter as much as the vehicle itself.
</p> </div> </header> <!-- Meet your chauffeur --> <section class="border-t border-white/5" aria-labelledby="chauffeur-heading"> <div class="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-28"> <div> <p class="mb-4 font-label text-xs font-medium uppercase tracking-[0.3em] text-on-surface-variant">
Meet your chauffeur
</p> <h2 id="chauffeur-heading" class="mb-8 font-display text-3xl font-normal tracking-tight text-on-surface md:text-4xl lg:text-5xl">
A legacy of service
</h2> <p class="mb-6 font-body leading-relaxed text-on-surface-variant">
With more than fifteen years behind the wheel for executives, families, and visitors to Ireland, I bring calm confidence to every itinerary — from first greeting to final goodbye.
</p> <p class="mb-10 font-body leading-relaxed text-on-surface-variant">
Discretion is non-negotiable: your conversations, schedule, and preferences stay between us. The cabin is yours — quiet when you need focus, attentive when you need support.
</p> <div class="mb-10 grid grid-cols-2 gap-6 border-y border-white/10 py-10"> <div> <p class="font-display text-4xl text-on-surface md:text-5xl">15+</p> <p class="mt-2 font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">Years experience</p> </div> <div> <p class="font-display text-4xl text-on-surface md:text-5xl">100%</p> <p class="mt-2 font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">Safety record</p> </div> </div> <blockquote class="border-l-2 border-primary/50 pl-6 font-display text-lg italic leading-relaxed text-on-surface md:text-xl">
Luxury isn&apos;t only the vehicle — it&apos;s the peace of mind knowing your driver anticipates your needs before you speak.
</blockquote> </div> <div class="relative mx-auto w-full max-w-md md:max-w-none"> <div class="aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-[#111] md:aspect-[4/5]"> <img src="/aboutme.webp" alt="Hennessy Chauffeurs — your professional chauffeur." class="h-full w-full object-cover object-top" width="800" height="1000" loading="lazy"> </div> </div> </div> </section> <!-- The fleet --> <section id="vehicle" class="scroll-mt-28 border-t border-white/5 px-6 py-20 md:px-8 md:py-28" aria-labelledby="fleet-heading"> <div class="mx-auto max-w-7xl"> <div class="mx-auto mb-14 max-w-3xl text-center md:mb-16"> <p class="mb-3 font-label text-xs font-medium uppercase tracking-[0.35em] text-on-surface-variant">
The fleet
</p> <h2 id="fleet-heading" class="mb-6 font-display text-3xl font-normal tracking-tight text-on-surface md:text-4xl lg:text-5xl">
Mercedes-Benz E220d
</h2> <p class="font-body leading-relaxed text-on-surface-variant">
Long-wheelbase comfort, refined diesel efficiency, and an interior finished for extended journeys — whether you are crossing Dublin or the country.
</p> </div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"> <div class="relative min-h-[260px] overflow-hidden rounded-sm md:min-h-[300px]"> <img src="/images/hero-mercedes.png" alt="Mercedes-Benz executive saloon at night in the city." class="absolute inset-0 h-full w-full object-cover" width="1920" height="1080" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> </div> <div class="flex flex-col justify-center rounded-sm border border-white/10 bg-[#141414] p-8 md:p-10"> <span class="material-symbols-outlined mb-4 text-primary" aria-hidden="true">thermostat</span> <h3 class="font-display text-xl text-on-surface md:text-2xl">Precision climate</h3> <p class="mt-3 text-sm leading-relaxed text-on-surface-variant">
Dual-zone control and rear comfort settings so the cabin stays exactly where you want it — meeting to meeting, hour after hour.
</p> </div> <div class="flex flex-col justify-center rounded-sm border border-white/10 bg-[#141414] p-8 md:p-10"> <span class="material-symbols-outlined mb-4 text-primary" aria-hidden="true">chair</span> <h3 class="font-display text-xl text-on-surface md:text-2xl">Leather interior</h3> <p class="mt-3 text-sm leading-relaxed text-on-surface-variant">
Supple seating and generous rear legroom — a mobile office or a quiet lounge, depending on the day.
</p> </div> <div class="relative min-h-[260px] overflow-hidden rounded-sm md:min-h-[300px]"> <img src="/images/service-executive-docklands.png" alt="Mercedes-Benz cabin — leather, wood trim, and ambient lighting." class="absolute inset-0 h-full w-full object-cover" width="1200" height="900" loading="lazy"> <div class="absolute inset-0 bg-black/25"></div> </div> </div> <!-- Amenities row --> <ul class="mt-12 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4"> <li class="text-center lg:text-left"> <span class="material-symbols-outlined mb-3 text-primary" aria-hidden="true">wifi</span> <p class="font-display text-lg text-on-surface">Onboard Wi-Fi</p> <p class="mt-2 text-sm leading-relaxed text-on-surface-variant">Stay connected for email and video without relying on public networks.</p> </li> <li class="text-center lg:text-left"> <span class="material-symbols-outlined mb-3 text-primary" aria-hidden="true">water_drop</span> <p class="font-display text-lg text-on-surface">Refreshments</p> <p class="mt-2 text-sm leading-relaxed text-on-surface-variant">Chilled water and thoughtful extras on request for longer runs.</p> </li> <li class="text-center lg:text-left"> <span class="material-symbols-outlined mb-3 text-primary" aria-hidden="true">battery_charging_full</span> <p class="font-display text-lg text-on-surface">Device charging</p> <p class="mt-2 text-sm leading-relaxed text-on-surface-variant">Power for laptop and phone so you land ready, not depleted.</p> </li> <li class="text-center lg:text-left"> <span class="material-symbols-outlined mb-3 text-primary" aria-hidden="true">shield</span> <p class="font-display text-lg text-on-surface">Privacy glass</p> <p class="mt-2 text-sm leading-relaxed text-on-surface-variant">Discreet travel through the city without an audience in the rear.</p> </li> </ul> </div> </section> <!-- Solo operator --> <section class="border-t border-white/5 bg-[#0d0d0d]" aria-labelledby="solo-heading"> <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28"> <div> <p class="mb-4 font-label text-xs font-medium uppercase tracking-[0.3em] text-on-surface-variant">
The luxury of consistency
</p> <h2 id="solo-heading" class="mb-8 font-display text-3xl font-normal tracking-tight text-on-surface md:text-4xl lg:text-5xl">
The consistency of a solo operator.
</h2> <p class="mb-6 font-body leading-relaxed text-on-surface-variant">
Hennessy Chauffeurs is owner-operated. The person you email is the person who drives — no call centre, no rotating roster of strangers.
</p> <p class="mb-10 font-body leading-relaxed text-on-surface-variant">
That means predictable standards, direct communication, and a relationship that deepens over time. For frequent travellers, it is the difference between a transaction and a partnership.
</p> <a href="/contact" class="inline-flex rounded-sm border border-on-surface-variant/50 px-8 py-3.5 font-label text-sm font-semibold uppercase tracking-[0.15em] text-on-surface transition-colors hover:border-on-surface hover:bg-white/5">
Contact the chauffeur
</a> </div> <div class="relative aspect-square max-w-lg overflow-hidden rounded-sm border border-white/10 md:max-w-none"> <img src="/as-directed-service.png" alt="Chauffeur service — attention to detail and personal standards." class="h-full w-full object-cover" width="800" height="800" loading="lazy"> <div class="absolute inset-0 bg-black/15"></div> </div> </div> </section> </article> ${renderComponent($$result2, "LandingFooter", $$LandingFooter, {})} ` })}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/aboutMe.astro", void 0);

const $$file = "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/aboutMe.astro";
const $$url = "/aboutMe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutMe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
