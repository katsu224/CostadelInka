import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B33yHdgL.mjs';
import { manifest } from './manifest_BJ-hcoxk.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/cochera.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/evento.astro.mjs');
const _page5 = () => import('./pages/gallery.astro.mjs');
const _page6 = () => import('./pages/restaurant.astro.mjs');
const _page7 = () => import('./pages/room.astro.mjs');
const _page8 = () => import('./pages/service.astro.mjs');
const _page9 = () => import('./pages/terraza.astro.mjs');
const _page10 = () => import('./pages/welcome.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/cochera.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/evento.astro", _page4],
    ["src/pages/gallery.astro", _page5],
    ["src/pages/restaurant.astro", _page6],
    ["src/pages/room.astro", _page7],
    ["src/pages/service.astro", _page8],
    ["src/pages/terraza.astro", _page9],
    ["src/pages/welcome.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "449244f7-72f1-445f-95bf-9222e46dcc9d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
