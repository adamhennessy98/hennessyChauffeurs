import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute, r as renderComponent } from '../chunks/astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C-tuGI7x.mjs';
import { $ as $$LandingNav, a as $$LandingFooter } from '../chunks/LandingFooter_KoWKwg_7.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$LandingHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen w-full overflow-hidden"> <img src="/images/hero-mercedes.png" alt="Sleek black Mercedes-Benz in studio lighting." class="absolute inset-0 h-full w-full scale-105 object-cover opacity-60" width="1920" height="1080"> <div class="absolute inset-0 bg-black/25"></div> <div class="absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/10"></div> <div class="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pt-24 sm:px-6 md:px-8"> <div class="max-w-[760px]"> <h1 class="mb-8 font-headline text-4xl leading-tight tracking-tight text-on-surface sm:text-5xl md:text-7xl lg:text-8xl">
Discrete.<br>
Luxurious.<br> <span class="font-light italic text-primary opacity-80">Ireland-wide.</span> </h1> <p class="mb-12 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
Experience the pinnacle of private travel. From airport arrivals to bespoke nationwide tours, we provide a silent, sophisticated sanctuary on the road.
</p> <div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap"> <a href="/contact" class="metallic-gradient inline-flex w-fit rounded-sm px-7 py-4 font-label text-sm font-bold uppercase tracking-[0.12em] text-on-primary transition-all duration-500 hover:opacity-90 sm:px-10 sm:text-base sm:tracking-[0.15em]">
Book Your Journey
</a> <a href="/services" class="inline-flex w-fit rounded-sm border border-outline-variant/30 px-7 py-4 font-label text-sm uppercase tracking-[0.12em] text-on-surface transition-all duration-500 hover:bg-surface-container-high sm:px-10 sm:text-base sm:tracking-[0.15em]">
View Services
</a> </div> </div> </div> <div class="absolute bottom-12 right-12 hidden items-center space-x-4 text-xs uppercase tracking-[0.3em] text-on-surface-variant lg:flex"> <span>Scroll to explore</span> <span class="material-symbols-outlined">south</span> </div> </section>`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/components/LandingHero.astro", void 0);

const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="services" class="mx-auto max-w-7xl px-8 py-32"> <div class="grid h-auto grid-cols-1 gap-6 md:h-[700px] md:grid-cols-12"> <article class="group relative overflow-hidden rounded-sm bg-surface-container-low md:col-span-7"> <img src="/images/service-executive-docklands.png" alt="Interior of a luxury sedan showing premium leather seating and ambient lighting, emphasizing comfort and high-end materials for executive travel." class="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-[2000ms] group-hover:scale-105" width="1200" height="900"> <div class="relative z-10 flex h-full flex-col justify-end p-10"> <span class="mb-4 block text-sm uppercase tracking-[0.2em] text-primary">Professional</span> <h2 class="mb-4 font-headline text-4xl text-on-surface">Executive Travel</h2> <p class="leading-relaxed text-on-surface-variant">
Punctual, professional, and prepared. Our executive service ensures you arrive at your meetings refreshed and on time.
</p> </div> </article> <article class="group relative overflow-hidden rounded-sm border border-outline-variant/5 bg-surface-container md:col-span-5"> <img src="/images/service-airport-terminal2.png" alt="Airplane wing visible through airport lounge window at dawn, soft blue and orange hues reflecting on the tarmac." class="h-full w-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:grayscale-0" width="900" height="900"> <div class="absolute inset-0 z-10 flex flex-col justify-start p-10"> <span class="mb-4 block text-sm uppercase tracking-[0.2em] text-primary">Reliable</span> <h2 class="mb-4 font-headline text-4xl text-on-surface">Airport Transfers</h2> <p class="leading-relaxed text-on-surface-variant">
Dublin Airport meet and greet service. We track your flight in real-time to ensure seamless transitions from runway to road.
</p> </div> </article> <article class="group relative overflow-hidden rounded-sm bg-surface-container-high md:col-span-12"> <div class="flex flex-col items-center gap-12 p-10 md:flex-row"> <div class="w-full md:w-2/3"> <span class="mb-4 block text-sm uppercase tracking-[0.2em] text-primary">Curated</span> <h2 class="mb-4 font-headline text-4xl text-on-surface">Bespoke Ireland Tours</h2> <p class="leading-relaxed text-on-surface-variant">
Discover the Wild Atlantic Way or the historic gems of Ireland&apos;s Ancient East. Our tours are entirely customizable to your interests and pace.
</p> <a href="/tours" class="mt-8 inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-80">
Explore Itineraries
<span class="material-symbols-outlined">arrow_forward</span> </a> </div> <img src="/images/service-tours-countryside.png" alt="Aerial drone view of the Cliffs of Moher in Ireland, lush green grass meeting the dramatic dark sea cliffs under a moody sky." class="h-full w-full rounded-sm object-cover opacity-60 md:w-1/3" width="900" height="500"> </div> </article> </div> </section>`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/components/ServicesGrid.astro", void 0);

const $$ValueProps = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      icon: "person_pin",
      title: "Solo Driver Experience",
      description: "Work directly with your dedicated chauffeur. A personalized, consistent service where your preferences are remembered every time."
    },
    {
      icon: "directions_car",
      title: "Modern Fleet",
      description: "Our fleet, led by the Mercedes E220d, is meticulously maintained to the highest standards of safety, cleanliness, and comfort."
    },
    {
      icon: "map",
      title: "Nationwide Coverage",
      description: "Based in Dublin, serving all 32 counties. Whether it is a cross-country transfer or a local trip, we go wherever you need us."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-surface-container-low py-32"> <div class="mx-auto max-w-7xl px-8"> <header class="mb-16 text-center"> <h2 class="mb-6 font-headline text-4xl text-on-surface md:text-5xl">The Hennessy Chauffeur Difference</h2> <div class="mx-auto h-px w-24 bg-primary opacity-30"></div> </header> <div class="grid grid-cols-1 gap-16 md:grid-cols-3"> ${items.map((item) => renderTemplate`<article> <span class="material-symbols-outlined text-4xl text-primary"> ${item.icon} </span> <h3 class="mb-4 mt-4 font-headline text-xl text-on-surface">${item.title}</h3> <p class="leading-relaxed text-on-surface-variant">${item.description}</p> </article>`)} </div> </div> </section>`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/components/ValueProps.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      quote: "The most professional service I have encountered in Dublin. Discrete, friendly, and the car was immaculate. Our chauffeur went above and beyond to ensure our multi-city tour was perfect.",
      name: "James Aristhor",
      title: "Global Logistics Director",
      indented: false
    },
    {
      quote: "Seamless airport transfers every time. Having one point of contact makes booking effortless. Truly the silent concierge of travel in Ireland.",
      name: "Sarah McAllister",
      title: "Private Client",
      indented: true
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-5xl overflow-hidden px-8 py-32"> <span class="material-symbols-outlined absolute -left-8 -top-12 text-8xl text-outline-variant/10">format_quote</span> <div class="space-y-16"> ${testimonials.map((item) => renderTemplate`<article${addAttribute([item.indented ? "md:ml-24" : ""], "class:list")}> <blockquote class="mb-8 font-headline text-2xl italic leading-relaxed text-on-surface md:text-3xl">
&ldquo;${item.quote}&rdquo;
</blockquote> <div class="flex items-center"> <div class="mr-6 h-px w-12 bg-primary"></div> <div> <p class="text-sm font-bold uppercase tracking-widest text-on-surface">${item.name}</p> <p class="text-xs uppercase tracking-tighter text-on-surface-variant">${item.title}</p> </div> </div> </article>`)} </div> </section>`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/components/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Hennessy Chauffeur's | Discrete Luxury Travel", "description": "Dublin's premier bespoke chauffeur service for airport transfers, executive travel and bespoke Ireland tours.", "breadcrumb": [{ name: "Home" }], "showSiteChrome": false, "bodyClass": "bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingNav", $$LandingNav, {})} ${renderComponent($$result2, "LandingHero", $$LandingHero, {})} ${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, {})} ${renderComponent($$result2, "ValueProps", $$ValueProps, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${maybeRenderHead()}<section class="mx-auto max-w-7xl px-8 pb-32 text-center"> <a href="/contact" class="metallic-gradient rounded-sm px-10 py-4 font-label text-base font-bold uppercase tracking-[0.15em] text-on-primary transition-all duration-500 hover:opacity-90">
Book Your Journey
</a> </section> ${renderComponent($$result2, "LandingFooter", $$LandingFooter, {})} ` })}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/index.astro", void 0);

const $$file = "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
