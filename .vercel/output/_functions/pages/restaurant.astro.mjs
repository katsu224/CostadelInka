import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_D2Mq50ll.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Restaurant = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Restaurante", "description": "Servicios gastron\xF3micos, men\xFA y horarios de atenci\xF3n del restaurante en Hotel Costa del Inka." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Restaurante Costa del Inka", "subtitle": "Sabores locales e internacionales para deleitar su paladar", "backgroundImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <div class="order-2 md:order-1 relative"> <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Plato Gourmet" class="rounded-sm shadow-xl w-full"> <div class="absolute -bottom-6 -right-6 bg-primary-500 p-6 shadow-xl hidden md:block"> <p class="font-heading text-2xl text-dark-900 font-bold">Menú</p> <p class="text-dark-900/80 text-sm uppercase tracking-wider">Variado</p> </div> </div> <div class="order-1 md:order-2"> <h2 class="font-heading text-3xl text-white font-bold mb-6">Experiencia Gastronómica</h2> <p class="text-white/80 leading-relaxed mb-6">
Nuestro restaurante ofrece una selección cuidadosa de platos de la gastronomía local e internacional. Utilizamos ingredientes frescos y de alta calidad para garantizar una experiencia culinaria memorable.
</p> <p class="text-white/80 leading-relaxed mb-8">
Ya sea para un desayuno energético, un almuerzo de negocios o una cena romántica, nuestro ambiente y servicio están diseñados para su satisfacción. Atendemos a huéspedes y público en general.
</p> <div class="bg-dark-800 p-6 border border-white/5 rounded-sm mb-8"> <h3 class="font-heading text-xl text-primary-500 font-bold mb-4">Horarios de Atención</h3> <ul class="space-y-2 text-white/70 text-sm"> <li class="flex justify-between border-b border-white/5 pb-2"> <span>Desayuno</span> <span>7:00 AM - 10:00 AM</span> </li> <li class="flex justify-between border-b border-white/5 pb-2"> <span>Almuerzo</span> <span>12:30 PM - 3:00 PM</span> </li> <li class="flex justify-between"> <span>Cena</span> <span>7:00 PM - 10:00 PM</span> </li> </ul> </div> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact" }, { "default": ($$result4) => renderTemplate`Reservar Mesa` })} </div> </div> ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/restaurant.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/restaurant.astro";
const $$url = "/restaurant";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Restaurant,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
