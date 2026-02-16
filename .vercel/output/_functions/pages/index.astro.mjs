import { e as createComponent, m as maybeRenderHead, g as addAttribute, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const heroImage = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop";
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0"> <img${addAttribute(heroImage, "src")} alt="Hotel Costa del Inka Luxury Room" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-dark-900/30"></div> </div> <!-- Content --> <div class="relative z-10 container mx-auto px-6 text-center"> <div class="mb-6 animate-fade-in-up"> <span class="inline-block py-1 px-3 border border-primary-500/50 rounded-full bg-dark-900/50 backdrop-blur-sm text-primary-400 text-sm tracking-[0.2em] uppercase mb-4">
Nuevo Chimbote, Perú
</span> <h1 class="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6"> <span class="block text-primary-500">HOTEL</span>
COSTA DEL INKA
</h1> <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
El mejor hotel en la ciudad de Chimbote. Una experiencia única con servicio personalizado en un ambiente cómodo y atractivo.
</p> </div> <div class="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200"> ${renderComponent($$result, "Button", $$Button, { "href": "/room", "size": "lg" }, { "default": ($$result2) => renderTemplate`
Ver Habitaciones
` })} ${renderComponent($$result, "Button", $$Button, { "href": "/contact", "variant": "outline", "size": "lg" }, { "default": ($$result2) => renderTemplate`
Contáctanos
` })} </div> </div> <!-- Scroll Down Indicator --> <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"> <a href="#welcome" class="text-white/50 hover:text-white transition-colors p-2"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </a> </div> </section>`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Section", $$Section, { "id": "welcome", "background": "alt" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <div class="space-y-6"> <h2 class="font-heading text-4xl text-white font-bold">
Bienvenidos a <br> <span class="text-primary-500">Costa del Inka</span> </h2> <div class="w-20 h-1 bg-primary-500"></div> <p class="text-white/80 leading-relaxed text-lg">
En el Hotel Costa del Inka, cada huésped vive una experiencia única con un servicio personalizado en un ambiente cómodo y atractivo.
</p> <p class="text-white/60 leading-relaxed">
Nuestra moderna edificación ofrece habitaciones dobles, matrimoniales y suites, todas decoradas de manera individual y totalmente equipadas. Nos enfocamos en la calidad, el confort y la responsabilidad social.
</p> <div class="pt-4"> ${renderComponent($$result3, "Button", $$Button, { "href": "/about", "variant": "outline" }, { "default": ($$result4) => renderTemplate`Nuestra Historia` })} </div> </div> <div class="relative"> <div class="absolute -inset-4 border-2 border-primary-500/20 translate-x-4 translate-y-4 hidden md:block"></div> <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Hotel Interior" class="relative w-full aspect-[4/3] object-cover shadow-2xl shadow-black/50"> <div class="absolute -bottom-6 -left-6 bg-dark-800 p-6 shadow-xl border border-white/5 hidden md:block"> <p class="font-heading text-4xl text-primary-500 font-bold">40+</p> <p class="text-white/60 text-sm uppercase tracking-wider">Habitaciones</p> </div> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "id": "services" }, { "default": ($$result3) => renderTemplate` <div class="text-center max-w-3xl mx-auto mb-16"> <span class="text-primary-500 text-sm font-bold tracking-widest uppercase mb-2 block">Experiencia Completa</span> <h2 class="font-heading text-4xl text-white font-bold mb-4">Nuestros Servicios</h2> <div class="w-16 h-1 bg-primary-500 mx-auto mb-6"></div> <p class="text-white/60">
Disfrute de una estancia inolvidable con nuestra gama completa de servicios diseñados para su confort y satisfacción.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">  <div class="group relative bg-dark-800 p-8 border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2"> <div class="w-14 h-14 bg-dark-900 rounded-full flex items-center justify-center text-primary-500 text-2xl mb-6 group-hover:bg-primary-500 group-hover:text-dark-900 transition-colors">
🍽️
</div> <h3 class="font-heading text-xl text-white font-bold mb-3">Restaurante</h3> <p class="text-white/60 text-sm mb-6">
Variedad gastronómica local e internacional. Desayuno, almuerzo y cena con los mejores ingredientes.
</p> <a href="/restaurant" class="text-primary-500 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
Ver Menú <span>→</span> </a> </div>  <div class="group relative bg-dark-800 p-8 border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2"> <div class="w-14 h-14 bg-dark-900 rounded-full flex items-center justify-center text-primary-500 text-2xl mb-6 group-hover:bg-primary-500 group-hover:text-dark-900 transition-colors">
🎉
</div> <h3 class="font-heading text-xl text-white font-bold mb-3">Sala de Eventos</h3> <p class="text-white/60 text-sm mb-6">
Espacios equipados para conferencias, seminarios y celebraciones sociales con servicio integral.
</p> <a href="/evento" class="text-primary-500 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
Más Detalles <span>→</span> </a> </div>  <div class="group relative bg-dark-800 p-8 border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2"> <div class="w-14 h-14 bg-dark-900 rounded-full flex items-center justify-center text-primary-500 text-2xl mb-6 group-hover:bg-primary-500 group-hover:text-dark-900 transition-colors">
🚗
</div> <h3 class="font-heading text-xl text-white font-bold mb-3">Cochera Privada</h3> <p class="text-white/60 text-sm mb-6">
Estacionamiento seguro dentro de nuestras instalaciones, incluido para todos nuestros huéspedes.
</p> <a href="/cochera" class="text-primary-500 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
Info <span>→</span> </a> </div> </div> ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/index.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
