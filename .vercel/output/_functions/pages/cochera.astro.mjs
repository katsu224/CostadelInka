import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_D2Mq50ll.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Cochera = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Cochera Privada", "description": "Estacionamiento privado y seguro incluido para todos los hu\xE9spedes del Hotel Costa del Inka." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Estacionamiento Privado", "subtitle": "Seguridad y comodidad para su veh\xEDculo", "backgroundImage": "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop" })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <div> <h2 class="font-heading text-3xl text-white font-bold mb-6">Seguridad Total</h2> <p class="text-white/80 leading-relaxed text-lg mb-6">
Sabemos lo importante que es la seguridad de su vehículo. Por eso, ofrecemos servicio de cochera privada dentro de nuestras mismas instalaciones, con vigilancia las 24 horas.
</p> <ul class="space-y-4 mb-8"> <li class="flex items-center gap-4 bg-dark-800 p-4 rounded-sm border border-white/5"> <span class="text-3xl">🛡️</span> <div> <h4 class="font-bold text-white">Vigilancia 24/7</h4> <p class="text-sm text-white/60">Monitoreo constante</p> </div> </li> <li class="flex items-center gap-4 bg-dark-800 p-4 rounded-sm border border-white/5"> <span class="text-3xl">🆓</span> <div> <h4 class="font-bold text-white">Servicio Gratuito</h4> <p class="text-sm text-white/60">Incluido para huéspedes</p> </div> </li> <li class="flex items-center gap-4 bg-dark-800 p-4 rounded-sm border border-white/5"> <span class="text-3xl">🚗</span> <div> <h4 class="font-bold text-white">Acceso Directo</h4> <p class="text-sm text-white/60">Comodidad garantizada</p> </div> </li> </ul> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact" }, { "default": ($$result4) => renderTemplate`Reservar Estadía` })} </div> <div class="relative h-full min-h-[400px]"> <img src="https://images.unsplash.com/photo-1470224114660-3f6686c562eb?q=80&w=2070&auto=format&fit=crop" alt="Parking Seguro" class="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl"> <div class="absolute inset-0 bg-primary-500/10 rounded-sm"></div> </div> </div> ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/cochera.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/cochera.astro";
const $$url = "/cochera";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cochera,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
