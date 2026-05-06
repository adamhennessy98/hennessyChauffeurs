import { b as createAstro, c as createComponent, m as maybeRenderHead, h as renderScript, a as renderTemplate, d as addAttribute, i as renderSlot, j as renderTransition, r as renderComponent, k as renderHead, u as unescapeHTML } from './astro/server_Df0-Ugd6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro$2 = createAstro("https://hennessychauffeurs.ie");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-navy backdrop-blur border-b border-lavender/20" data-astro-cid-3ef6ksr2> <div class="max-w-6xl mx-auto px-4 flex h-16 items-center justify-between" data-astro-cid-3ef6ksr2> <!-- Logo / Name --> <a href="/" class="font-display font-semibold tracking-wide text-lg text-mint" data-astro-cid-3ef6ksr2>Hennessy Chauffeurs</a> <!-- Nav links --> <nav class="hidden md:flex gap-8 text-sm font-medium" id="main-nav" data-astro-cid-3ef6ksr2> <a href="/" class="text-mint/90 hover:text-gold transition-colors duration-200" data-page-index="0" data-astro-cid-3ef6ksr2>Home</a> <a href="/airportTransfers" class="text-mint/90 hover:text-gold transition-colors duration-200" data-page-index="1" data-astro-cid-3ef6ksr2>Airport Transfers</a> <a href="/businessTravel" class="text-mint/90 hover:text-gold transition-colors duration-200" data-page-index="2" data-astro-cid-3ef6ksr2>Business Travel</a> <a href="/specialOccasions" class="text-mint/90 hover:text-gold transition-colors duration-200" data-page-index="3" data-astro-cid-3ef6ksr2>Special Occasions</a> <a href="/blog" class="text-mint/90 hover:text-gold transition-colors duration-200" data-page-index="4" data-astro-cid-3ef6ksr2>Blog</a> </nav> <!-- CTA --> <div class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <a href="/aboutMe" class="hidden sm:inline text-sm text-mint/90 hover:text-gold transition-colors duration-200" data-astro-cid-3ef6ksr2>About me</a> <a href="/contact" class="rounded-lg px-4 py-2 bg-gold text-navy font-medium hover:bg-gold/90 transition-colors duration-200 text-sm" data-astro-cid-3ef6ksr2>Contact me</a> </div> </div> </header> ${renderScript($$result, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://hennessychauffeurs.ie");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/node_modules/astro/components/ClientRouter.astro", void 0);

const testimonials = [
  {
    name: "Sarah O'Connor",
    role: "Business Executive",
    content: "Hennessy Chauffeurs provides exceptional service. Always punctual and professional.",
    rating: 5
  },
  {
    name: "Michael Walsh",
    role: "Wedding Couple",
    content: "Made our wedding day perfect with their luxury service and attention to detail.",
    rating: 5
  },
  {
    name: "David Murphy",
    role: "Frequent Traveler",
    content: "Reliable airport transfers every time. Highly recommend for business travel.",
    rating: 5
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://hennessychauffeurs.ie");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Premium chauffeur services in Leinster, Ireland. Airport transfers, business travel, special occasions & tours. Professional, reliable luxury transportation.",
    canonicalUrl,
    ogImage = "/stockPhoto1.webp",
    noindex = false,
    breadcrumb,
    showSiteChrome = true,
    bodyClass = "font-sans antialiased text-navy"
  } = Astro2.props;
  const siteUrl = "https://hennessychauffeurs.ie";
  const canonical = canonicalUrl || new URL(Astro2.url.pathname, siteUrl).href;
  const ogImageUrl = new URL(ogImage, siteUrl).href;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteUrl,
    "name": "Hennessy Chauffeurs",
    "description": "Premium chauffeur services in Leinster, Ireland. Airport transfers, business travel, special occasions and tours.",
    "url": siteUrl,
    "telephone": "+353851315392",
    "email": "info@hennessychauffeurs.ie",
    "image": ogImageUrl,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Leinster",
      "addressCountry": "IE"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Leinster, Ireland"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "\u20AC\u20AC",
    "serviceType": ["Chauffeur Service", "Airport Transfer", "Business Travel", "Wedding Transport", "Tour Service"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "reviewCount": testimonials.length,
      "worstRating": "1"
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5, "worstRating": 1 },
      "reviewBody": t.content
    }))
  };
  const breadcrumbSchema = breadcrumb?.length ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumb.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url ?? canonical
    }))
  } : null;
  return renderTemplate(_b || (_b = __template(['<html lang="en" class="dark" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', "><title>", '</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/favicon.svg"><link rel="manifest" href="/site.webmanifest"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"', "><!-- Robots -->", '<!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="Hennessy Chauffeurs"><meta property="og:locale" content="en_IE"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Additional SEO Meta --><meta name="author" content="Hennessy Chauffeurs"><meta name="geo.region" content="IE-L"><meta name="geo.placename" content="Leinster, Ireland"><meta name="theme-color" content="#2D3047"><!-- JSON-LD Structured Data: LocalBusiness with reviews --><script type="application/ld+json">', "<\/script>", "", "", "</head> <body", " data-astro-cid-37fxchfa> ", " <main data-astro-cid-37fxchfa", "> ", " </main> <!-- Footer --> ", " </body></html>"])), addAttribute(description, "content"), title, addAttribute(canonical, "href"), noindex ? renderTemplate`<meta name="robots" content="noindex, nofollow">` : renderTemplate`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`, addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), unescapeHTML(JSON.stringify(localBusinessSchema)), breadcrumbSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(breadcrumbSchema))), renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-37fxchfa": true }), renderHead(), addAttribute(bodyClass, "class"), showSiteChrome && renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })}`, addAttribute(renderTransition($$result, "v5kc4yi6", "", "slide-it"), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), showSiteChrome && renderTemplate`<footer class="bg-navy text-mint" data-astro-cid-37fxchfa> <div class="max-w-6xl mx-auto px-4 py-12" data-astro-cid-37fxchfa> <div class="grid grid-cols-1 md:grid-cols-4 gap-8" data-astro-cid-37fxchfa> <!-- Company Info --> <div data-astro-cid-37fxchfa> <h3 class="font-display text-lg font-semibold mb-4 text-mint" data-astro-cid-37fxchfa>Hennessy Chauffeurs</h3> <p class="text-mint/90 mb-4" data-astro-cid-37fxchfa>Premium chauffeur services in Leinster. Professional, reliable, and luxurious transportation.</p> <div class="flex space-x-4" data-astro-cid-37fxchfa> <span class="text-lavender" data-astro-cid-37fxchfa>Twitter</span> <span class="text-lavender" data-astro-cid-37fxchfa>Instagram</span> <span class="text-lavender" data-astro-cid-37fxchfa>LinkedIn</span> </div> </div> <!-- Services --> <div data-astro-cid-37fxchfa> <h3 class="font-display text-lg font-semibold mb-4 text-mint" data-astro-cid-37fxchfa>Services</h3> <ul class="space-y-2" data-astro-cid-37fxchfa> <li data-astro-cid-37fxchfa><span class="text-lavender" data-astro-cid-37fxchfa>Airport Transfers</span></li> <li data-astro-cid-37fxchfa><span class="text-lavender" data-astro-cid-37fxchfa>Business Travel</span></li> <li data-astro-cid-37fxchfa><span class="text-lavender" data-astro-cid-37fxchfa>Special Occasions</span></li> <li data-astro-cid-37fxchfa><span class="text-lavender" data-astro-cid-37fxchfa>All Services</span></li> </ul> </div> <!-- Quick Links --> <div data-astro-cid-37fxchfa> <h3 class="font-display text-lg font-semibold mb-4 text-mint" data-astro-cid-37fxchfa>Quick Links</h3> <ul class="space-y-2" data-astro-cid-37fxchfa> <li data-astro-cid-37fxchfa><span class="text-lavender" data-astro-cid-37fxchfa>About Us</span></li> <li data-astro-cid-37fxchfa><span class="text-lavender" data-astro-cid-37fxchfa>Pricing</span></li> <li data-astro-cid-37fxchfa><a href="/contact" class="text-mint/90 hover:text-gold transition-colors duration-200" data-astro-cid-37fxchfa>Contact</a></li> <li data-astro-cid-37fxchfa><span class="text-lavender" data-astro-cid-37fxchfa>Contact Me</span></li> </ul> </div> <!-- Contact Info --> <div data-astro-cid-37fxchfa> <h3 class="font-display text-lg font-semibold mb-4 text-mint" data-astro-cid-37fxchfa>Contact</h3> <div class="space-y-2 text-mint/90" data-astro-cid-37fxchfa> <p data-astro-cid-37fxchfa>+353 85 131 5392</p> <p data-astro-cid-37fxchfa>info@hennessychauffeurs.ie</p> <p data-astro-cid-37fxchfa>Leinster, Ireland</p> <p data-astro-cid-37fxchfa>24/7 Service Available</p> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t border-lavender/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" data-astro-cid-37fxchfa> <p class="text-lavender text-sm" data-astro-cid-37fxchfa>© ${(/* @__PURE__ */ new Date()).getFullYear()} Hennessy Chauffeurs. All rights reserved.</p> <div class="flex space-x-6 mt-4 md:mt-0" data-astro-cid-37fxchfa> <a href="/privacy" class="text-lavender hover:text-gold text-sm transition-colors duration-200" data-astro-cid-37fxchfa>Privacy Policy</a> <a href="/terms" class="text-lavender hover:text-gold text-sm transition-colors duration-200" data-astro-cid-37fxchfa>Terms of Service</a> <a href="/cookies" class="text-lavender hover:text-gold text-sm transition-colors duration-200" data-astro-cid-37fxchfa>Cookie Policy</a> </div> </div> </div> </footer>`);
}, "C:/dev/projects/web-apps/Hennessy-chauffeurs/hennessy-chauffeurs/src/layouts/BaseLayout.astro", "self");

export { $$BaseLayout as $ };
