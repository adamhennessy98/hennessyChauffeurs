import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C-tuGI7x.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Thank You - Hennessy Chauffeurs", "description": "Thank you for your booking request. We will get back to you shortly.", "noindex": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-screen"> <!-- Background Image with Blur --> <div class="absolute inset-0 z-0"> <img src="/countrySide.webp" alt="Thank you - Irish countryside, Hennessy Chauffeurs" class="w-full h-full object-cover filter blur-sm brightness-75"> <div class="absolute inset-0 bg-navy/40"></div> </div> <!-- Content Overlay --> <div class="relative z-10 flex items-center justify-center min-h-screen px-4"> <div class="bg-mint/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl text-center max-w-2xl mx-auto border border-lavender/30"> <!-- Success Icon --> <div class="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h1 class="font-display text-3xl md:text-4xl font-bold text-navy mb-6 tracking-wide">
Thank You!
</h1> <p class="text-lg md:text-xl text-navy/80 mb-6 leading-relaxed">
Your booking request has been sent successfully. We appreciate your interest in Hennessy Chauffeurs.
</p> <div class="bg-mint/50 border border-lavender/30 rounded-lg p-6 mb-8"> <h2 class="font-display text-xl font-semibold text-navy mb-4">What happens next?</h2> <div class="space-y-3 text-left"> <div class="flex items-start"> <div class="w-6 h-6 bg-navy rounded-full flex items-center justify-center mr-3 mt-0.5"> <span class="text-mint text-sm font-bold">1</span> </div> <p class="text-navy/80">We'll review your booking request within 2 hours</p> </div> <div class="flex items-start"> <div class="w-6 h-6 bg-navy rounded-full flex items-center justify-center mr-3 mt-0.5"> <span class="text-mint text-sm font-bold">2</span> </div> <p class="text-navy/80">Our team will contact you to confirm details and provide a quote</p> </div> <div class="flex items-start"> <div class="w-6 h-6 bg-navy rounded-full flex items-center justify-center mr-3 mt-0.5"> <span class="text-mint text-sm font-bold">3</span> </div> <p class="text-navy/80">Once confirmed, we'll send you booking confirmation and payment details</p> </div> </div> </div> <div class="bg-teal/10 border border-teal/30 rounded-lg p-6 mb-8"> <h3 class="font-display text-lg font-semibold text-navy mb-2">Need immediate assistance?</h3> <p class="text-navy/80 mb-4">For urgent requests or questions, you can reach us directly:</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="tel:+353851315392" class="inline-flex items-center justify-center bg-gold text-navy font-medium px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors duration-200"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Call Now
</a> <a href="mailto:info@hennessychauffeurs.ie" class="inline-flex items-center justify-center border-2 border-teal text-teal font-medium px-6 py-3 rounded-lg hover:bg-mint transition-colors duration-200"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
Email Us
</a> </div> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/" class="bg-gold text-navy font-medium px-8 py-3 rounded-lg hover:bg-gold/90 transition-colors duration-200">
Return to Homepage
</a> <a href="/blog" class="border-2 border-teal text-teal font-medium px-8 py-3 rounded-lg hover:bg-mint transition-colors duration-200">
Read the Blog
</a> </div> </div> </div> </section> ` })}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/thank-you.astro", void 0);

const $$file = "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
