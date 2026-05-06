import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C-tuGI7x.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BusinessTravel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Executive Business Travel Chauffeur | Corporate Transport Leinster | Hennessy Chauffeurs", "description": "Professional executive chauffeur service in Leinster from \u20AC40/hour. Corporate accounts, luxury vehicles, WiFi & punctual service for business meetings & events.", "breadcrumb": [{ name: "Home", url: "https://hennessychauffeurs.ie" }, { name: "Business Travel" }] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="max-w-4xl mx-auto px-4 py-16"> <div class="text-center mb-12"> <h1 class="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-wide">\nBusiness Travel\n</h1> <p class="text-lg md:text-xl text-lavender">\nExecutive transportation for business meetings\n</p> </div> <!-- Service Details --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <!-- Content --> <div> <h2 class="text-2xl font-semibold mb-6 text-navy">Professional Executive Transportation</h2> <p class="text-lg text-navy/90 leading-relaxed mb-6">\nMake the right impression with our premium business travel service. Perfect for \n          executives, corporate meetings, and professional events throughout Leinster.\n</p> <h3 class="text-xl font-semibold mb-4 text-navy">Business Travel Features:</h3> <ul class="space-y-3 mb-6"> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Corporate accounts available</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Executive luxury vehicles</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Punctual and reliable service</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>WiFi available in vehicles</span> </li> <li class="flex items-start"> <span class="text-teal mr-2">\u2713</span> <span>Complimentary newspaper service</span> </li> </ul> <div class="bg-mint/50 border border-lavender/30 p-6 rounded-lg mb-6"> <h3 class="text-xl font-semibold mb-2 text-navy">From \u20AC40/hour</h3> <p class="text-lavender">Competitive hourly rates for business transportation</p> </div> <!-- Contact Button --> <div class="mt-8"> <a href="/contact" class="inline-block rounded-lg px-12 py-3 bg-gold text-navy font-medium hover:bg-gold/90 transition-colors duration-200 text-sm">\nBook Business Travel\n</a> </div> </div> <!-- Image --> <div> <img src="/serviceImage2.webp" alt="Executive chauffeur car for business travel in Leinster - Hennessy Chauffeurs" class="w-full h-auto rounded-lg shadow-lg object-cover border border-lavender/30"> </div> </div> </section> '])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Travel",
    "description": "Executive transportation for business meetings. Corporate accounts, luxury vehicles, WiFi and punctual service across Leinster, Ireland.",
    "url": "https://hennessychauffeurs.ie/businessTravel",
    "provider": { "@id": "https://hennessychauffeurs.ie" },
    "areaServed": { "@type": "Place", "name": "Leinster, Ireland" },
    "offers": {
      "@type": "Offer",
      "priceSpecification": { "@type": "UnitPriceSpecification", "priceCurrency": "EUR", "price": "40", "unitText": "HOUR" },
      "description": "From \u20AC40/hour"
    }
  })), maybeRenderHead()) })}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/businessTravel.astro", void 0);

const $$file = "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/businessTravel.astro";
const $$url = "/businessTravel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BusinessTravel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
