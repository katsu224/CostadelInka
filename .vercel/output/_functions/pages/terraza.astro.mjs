import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_D2Mq50ll.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Terraza = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Terrazas", "description": "Descripci\xF3n de las \xE1reas de terraza disponibles para los hu\xE9spedes en Hotel Costa del Inka." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Nuestras Terrazas", "subtitle": "Espacios al aire libre para relajarse y disfrutar", "backgroundImage": "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=1854&auto=format&fit=crop" })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center max-w-3xl mx-auto mb-16"> <h2 class="font-heading text-3xl text-white font-bold mb-6">Relax con Vista</h2> <p class="text-white/80 leading-relaxed text-lg">
Disfrute de nuestras amplias terrazas, ideales para tomar un café, leer un libro o simplemente contemplar la vista panorámica de Nuevo Chimbote.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"> <div class="relative group overflow-hidden rounded-sm h-80"> <img src="https://images.unsplash.com/photo-1596178065849-0f852e18eb8b?q=80&w=2070&auto=format&fit=crop" alt="Terraza Lounge" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent flex items-end p-8"> <h3 class="font-heading text-2xl text-white font-bold">Zona Lounge</h3> </div> </div> <div class="relative group overflow-hidden rounded-sm h-80"> <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop" alt="Vista Panorámica" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent flex items-end p-8"> <h3 class="font-heading text-2xl text-white font-bold">Vistas Panorámicas</h3> </div> </div> </div> <div class="bg-dark-800 border border-white/5 p-8 rounded-sm text-center"> <p class="text-white/80 italic mb-6">"El lugar perfecto para desconectar después de un día de trabajo o turismo."</p> ${renderComponent($$result3, "Button", $$Button, { "href": "/room" }, { "default": ($$result4) => renderTemplate`Ver Habitaciones` })} </div> ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/terraza.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/terraza.astro";
const $$url = "/terraza";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terraza,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
