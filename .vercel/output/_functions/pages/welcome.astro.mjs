import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Bienvenidos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": "text-center min-h-[80vh] flex flex-col items-center justify-center" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="font-heading text-5xl text-white font-bold mb-6">Bienvenidos a Costa del Inka</h1> <p class="text-xl text-white/80 max-w-2xl mb-12">
Su hogar lejos de casa en Nuevo Chimbote.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "/", "size": "lg" }, { "default": ($$result4) => renderTemplate`Ir al Inicio` })} ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/welcome.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/welcome.astro";
const $$url = "/welcome";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Welcome,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
