import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CQV3aX8r.mjs';
import { manifest } from './manifest_D-aZUT_x.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/aboutme.astro.mjs');
const _page2 = () => import('./pages/airporttransfers.astro.mjs');
const _page3 = () => import('./pages/api/create-post.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/businesstravel.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/cookies.astro.mjs');
const _page9 = () => import('./pages/privacy.astro.mjs');
const _page10 = () => import('./pages/services.astro.mjs');
const _page11 = () => import('./pages/specialoccasions.astro.mjs');
const _page12 = () => import('./pages/terms.astro.mjs');
const _page13 = () => import('./pages/thank-you.astro.mjs');
const _page14 = () => import('./pages/tours.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/aboutMe.astro", _page1],
    ["src/pages/airportTransfers.astro", _page2],
    ["src/pages/api/create-post.ts", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/businessTravel.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/cookies.astro", _page8],
    ["src/pages/privacy.astro", _page9],
    ["src/pages/services.astro", _page10],
    ["src/pages/specialOccasions.astro", _page11],
    ["src/pages/terms.astro", _page12],
    ["src/pages/thank-you.astro", _page13],
    ["src/pages/tours.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1ff0539d-71b4-4a2a-8c50-347c038b3e2c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
