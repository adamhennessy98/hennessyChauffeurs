import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C-tuGI7x.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SpecialOccasions = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = "https://hennessychauffeurs.ie";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Wedding & Event Chauffeur Leinster | Special Occasion Transport | Hennessy Chauffeurs", "description": "Luxury wedding car hire & special occasion chauffeur in Leinster from \u20AC100. Red carpet service, vehicle decorations & group bookings for your perfect day.", "breadcrumb": [{ name: "Home", url: siteUrl }, { name: "Special Occasions" }] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="max-w-4xl mx-auto px-4 py-16"> <div class="text-center mb-12"> <h1 class="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-wide">\nSpecial Occasions\n</h1> <p class="text-lg md:text-xl text-lavender">\nLuxury transport for weddings and special events\n</p> </div> <!-- Service Details --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <!-- Content --> <div> <h2 class="text-2xl font-semibold mb-6 text-navy">Make Your Special Day Perfect</h2> <p class="text-lg text-navy/90 leading-relaxed mb-6">\nCelebrate your special moments with our luxury chauffeur service. From weddings \n          to anniversaries, we ensure your transportation is as memorable as your occasion.\n</p> <h3 class="text-xl font-semibold mb-4 text-navy">Special Occasion Services:</h3> <ul class="space-y-3 mb-6"> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Wedding transportation</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Special event transfers</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Group bookings available</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Luxury vehicles with decorations</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Red carpet service</span> </li> </ul> <div class="bg-mint/50 border border-lavender/30 p-6 rounded-lg mb-6"> <h3 class="text-xl font-semibold mb-2 text-navy">From \u20AC100</h3> <p class="text-lavender">Luxury packages for your special occasions</p> </div> <!-- Contact Button --> <div class="mt-8"> <a href="/contact" class="inline-block rounded-lg px-12 py-3 bg-gold text-navy font-medium hover:bg-gold/90 transition-colors duration-200 text-sm">\nBook Special Occasion\n</a> </div> </div> <!-- Image --> <div> <img src="/serviceImage3.webp" alt="Luxury wedding and event chauffeur car in Leinster - Hennessy Chauffeurs" class="w-full h-auto rounded-lg shadow-lg object-cover border border-lavender/30"> </div> </div> </section> '])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Special Occasions",
    "description": "Luxury transport for weddings and special events. Wedding transportation, red carpet service, and group bookings across Leinster, Ireland.",
    "url": `${siteUrl}/specialOccasions`,
    "provider": { "@id": siteUrl },
    "areaServed": { "@type": "Place", "name": "Leinster, Ireland" },
    "offers": {
      "@type": "Offer",
      "priceSpecification": { "@type": "PriceSpecification", "price": "100", "priceCurrency": "EUR" },
      "description": "From \u20AC100"
    }
  })), maybeRenderHead()) })}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/specialOccasions.astro", void 0);

const $$file = "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/specialOccasions.astro";
const $$url = "/specialOccasions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SpecialOccasions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
