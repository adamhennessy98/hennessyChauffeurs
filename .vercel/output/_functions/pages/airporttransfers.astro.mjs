import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C-tuGI7x.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$AirportTransfers = createComponent(async ($$result, $$props, $$slots) => {
  const siteUrl = "https://hennessychauffeurs.ie";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Airport Transfers Leinster | Dublin Airport Chauffeur | Hennessy Chauffeurs", "description": "Reliable Dublin Airport & Cork Airport transfer service from \u20AC50. Flight tracking, meet & greet, luggage assistance. Book your Leinster airport chauffeur today.", "breadcrumb": [{ name: "Home", url: siteUrl }, { name: "Airport Transfers" }] }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="max-w-4xl mx-auto px-4 py-16"> <div class="text-center mb-12"> <h1 class="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-wide">\nAirport Transfers\n</h1> <p class="text-lg md:text-xl text-lavender">\nProfessional airport pickup and drop-off services\n</p> </div> <!-- Service Details --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <!-- Content --> <div> <h2 class="text-2xl font-semibold mb-6 text-navy">Reliable Airport Transportation</h2> <p class="text-lg text-navy/90 leading-relaxed mb-6">\nExperience stress-free airport transfers with Hennessy Chauffeurs. Our professional \n          service ensures you arrive at your destination on time, every time.\n</p> <h3 class="text-xl font-semibold mb-4 text-navy">Our Airport Transfer Services Include:</h3> <ul class="space-y-3 mb-6"> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Dublin Airport transfers</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Cork Airport transfers</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Flight monitoring and tracking</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Meet & greet service</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Luggage assistance</span> </li> </ul> <div class="bg-mint/50 border border-lavender/30 p-6 rounded-lg mb-6"> <h3 class="text-xl font-semibold mb-2 text-navy">Starting from \u20AC50</h3> <p class="text-lavender">Competitive rates for reliable airport transportation</p> </div> <!-- Contact Button --> <div class="mt-8"> <a href="/contact" class="inline-block rounded-lg px-12 py-3 bg-gold text-navy font-medium hover:bg-gold/90 transition-colors duration-200 text-sm">\nBook Airport Transfer\n</a> </div> </div> <!-- Image --> <div> <img src="/serviceImage1.webp" alt="Professional chauffeur awaiting client at Dublin Airport arrivals - Hennessy Chauffeurs" class="w-full h-auto rounded-lg shadow-lg object-cover border border-lavender/30"> </div> </div> </section> '])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Airport Transfers",
    "description": "Professional airport pickup and drop-off services for Dublin Airport and Cork Airport. Flight monitoring, meet & greet, and luggage assistance across Leinster, Ireland.",
    "url": `${siteUrl}/airportTransfers`,
    "provider": { "@id": siteUrl },
    "areaServed": { "@type": "Place", "name": "Leinster, Ireland" },
    "offers": {
      "@type": "Offer",
      "priceSpecification": { "@type": "PriceSpecification", "price": "50", "priceCurrency": "EUR" },
      "description": "From \u20AC50"
    }
  })), maybeRenderHead()) })}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/airportTransfers.astro", void 0);

const $$file = "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/airportTransfers.astro";
const $$url = "/airportTransfers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AirportTransfers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
