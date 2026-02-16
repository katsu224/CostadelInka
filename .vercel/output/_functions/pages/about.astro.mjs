import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_D2Mq50ll.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Nosotros - Historia y Filosof\xEDa", "description": "Conozca la historia, misi\xF3n y visi\xF3n del Hotel Costa del Inka. Compromiso con la calidad, el servicio personalizado y la responsabilidad social." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Nuestra Historia", "subtitle": "Tradici\xF3n de hospitalidad y compromiso con la excelencia", "backgroundImage": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"> <div> <h2 class="font-heading text-3xl text-white font-bold mb-6">Sobre Nosotros</h2> <p class="text-white/80 leading-relaxed mb-6">
El Hotel Costa del Inka nació con la promesa de ofrecer una experiencia única y un servicio personalizado. Nuestra moderna edificación cuenta con 40 habitaciones en categorías dobles, matrimoniales y suites, todas diseñadas individualmente y equipadas para brindar el máximo confort.
</p> <p class="text-white/80 leading-relaxed">
Ubicados estratégicamente en Nuevo Chimbote, nos hemos convertido en un referente de calidad y hospitalidad en la región, combinando instalaciones modernas con un trato cálido y familiar.
</p> </div> <div class="relative"> <div class="absolute inset-0 bg-primary-500/20 translate-x-4 translate-y-4 rounded-sm"></div> <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop" alt="Hotel Lobby" class="relative rounded-sm shadow-xl w-full"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">  <div class="bg-dark-800 p-10 rounded-sm border border-white/5 hover:border-primary-500/50 transition-all duration-300"> <div class="w-16 h-16 bg-dark-900 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 text-primary-500">
🎯
</div> <h3 class="font-heading text-xl text-white font-bold mb-4">Misión</h3> <p class="text-white/60 text-sm leading-relaxed">
Proporcionar una genuina atención así como productos y servicios que sean de entera comodidad; teniendo como base la responsabilidad social y ambiental que vayan dejando huellas en la comunidad.
</p> </div>  <div class="bg-dark-800 p-10 rounded-sm border border-white/5 hover:border-primary-500/50 transition-all duration-300 relative transform md:-translate-y-4"> <div class="w-16 h-16 bg-dark-900 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 text-primary-500">
👁️
</div> <h3 class="font-heading text-xl text-white font-bold mb-4">Visión</h3> <p class="text-white/60 text-sm leading-relaxed">
Ser el mejor en el rubro hotelero teniendo como bases significativas los proyectos de vida. Aspiramos a ser reconocidos por nuestra excelencia y compromiso.
</p> </div>  <div class="bg-dark-800 p-10 rounded-sm border border-white/5 hover:border-primary-500/50 transition-all duration-300"> <div class="w-16 h-16 bg-dark-900 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 text-primary-500">
💎
</div> <h3 class="font-heading text-xl text-white font-bold mb-4">Valores</h3> <ul class="text-white/60 text-sm leading-relaxed space-y-2 text-left inline-block"> <li>✨ Calidad en el servicio</li> <li>🤝 Servicio personalizado</li> <li>🛋️ Confort y comodidad</li> <li>🌱 Responsabilidad social y ambiental</li> <li>❤️ Actitud, motivación y compromiso</li> </ul> </div> </div> ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/about.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
