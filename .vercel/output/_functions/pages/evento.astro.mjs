import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_D2Mq50ll.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Evento = createComponent(($$result, $$props, $$slots) => {
  const events = [
    {
      title: "Conferencias",
      desc: "Equipamiento audiovisual de \xFAltima generaci\xF3n.",
      icon: "\u{1F3A4}"
    },
    {
      title: "Matrimonios",
      desc: "Elegancia y servicio integral para su d\xEDa especial.",
      icon: "\u{1F48D}"
    },
    {
      title: "Capacitaciones",
      desc: "Ambientes propicios para el aprendizaje y networking.",
      icon: "\u{1F4C8}"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Sala de Eventos", "description": "Detalles sobre las instalaciones para eventos, conferencias y celebraciones en Hotel Costa del Inka." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Eventos y Conferencias", "subtitle": "El escenario perfecto para sus momentos importantes", "backgroundImage": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto text-center mb-16"> <h2 class="font-heading text-3xl text-white font-bold mb-6">Instalaciones Versátiles</h2> <p class="text-white/80 leading-relaxed text-lg">
Contamos con salones adaptables para todo tipo de eventos. Desde reuniones corporativas hasta grandes celebraciones sociales, nuestro equipo se encarga de cada detalle para asegurar el éxito de su evento.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"> ${events.map((item) => renderTemplate`<div class="bg-dark-800 p-8 rounded-sm border border-white/5 text-center hover:bg-dark-700 transition-colors"> <div class="text-4xl mb-4">${item.icon}</div> <h3 class="font-heading text-xl text-white font-bold mb-2">${item.title}</h3> <p class="text-white/60 text-sm">${item.desc}</p> </div>`)} </div> <div class="bg-dark-800 p-8 md:p-12 rounded-sm border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div> <h3 class="font-heading text-2xl text-primary-500 font-bold mb-4">Servicios Incluidos</h3> <ul class="space-y-4 text-white/70"> <li class="flex items-center gap-3"> <span class="text-primary-500">✓</span> Proyector Multimedia y Ecran
</li> <li class="flex items-center gap-3"> <span class="text-primary-500">✓</span> Sistema de Sonido Profesional
</li> <li class="flex items-center gap-3"> <span class="text-primary-500">✓</span> Coffee Break y Catering
</li> <li class="flex items-center gap-3"> <span class="text-primary-500">✓</span> Aire Acondicionado
</li> <li class="flex items-center gap-3"> <span class="text-primary-500">✓</span> Mobiliario y Decoración
</li> </ul> <div class="mt-8"> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact" }, { "default": ($$result4) => renderTemplate`Cotizar Evento` })} </div> </div> <div class="grid grid-cols-2 gap-4"> <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" class="rounded-sm w-full h-40 object-cover" alt="Conferencia"> <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" class="rounded-sm w-full h-40 object-cover translate-y-4" alt="Boda"> </div> </div> ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/evento.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/evento.astro";
const $$url = "/evento";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Evento,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
