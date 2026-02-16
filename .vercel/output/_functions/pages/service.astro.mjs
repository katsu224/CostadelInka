import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_D2Mq50ll.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Service = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Restaurante",
      description: "Disfrute de la mejor gastronom\xEDa local e internacional en un ambiente elegante.",
      icon: "\u{1F37D}\uFE0F",
      href: "/restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Sala de Eventos",
      description: "Espacios vers\xE1tiles para conferencias, matrimonios y celebraciones especiales.",
      icon: "\u{1F389}",
      href: "/evento",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
    },
    {
      title: "Cochera Privada",
      description: "Seguridad total para su veh\xEDculo dentro de nuestras instalaciones.",
      icon: "\u{1F697}",
      href: "/cochera",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Terrazas",
      description: "\xC1reas al aire libre con vistas panor\xE1micas para su relax.",
      icon: "\u2600\uFE0F",
      href: "/terraza",
      image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=1854&auto=format&fit=crop"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Servicios - Todo lo que necesita", "description": "Listado completo de servicios del Hotel Costa del Inka: Restaurante, Sala de Eventos, Cochera y Terrazas." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Nuestros Servicios", "subtitle": "Dise\xF1ados para hacer su estancia inolvidable", "backgroundImage": "https://images.unsplash.com/photo-1571896349842-6e53ce41e887?q=80&w=2070&auto=format&fit=crop" })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-12"> ${services.map((service, index) => renderTemplate`<div class="group relative overflow-hidden rounded-sm bg-dark-800 border border-white/5 hover:border-primary-500/50 transition-all duration-300"> <div class="h-64 overflow-hidden"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> </div> <div class="p-8"> <div class="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center text-2xl mb-4 text-primary-500 shadow-lg -mt-14 relative z-10 border border-primary-500/20"> ${service.icon} </div> <h3 class="font-heading text-2xl text-white font-bold mb-3">${service.title}</h3> <p class="text-white/60 mb-6 leading-relaxed"> ${service.description} </p> ${renderComponent($$result3, "Button", $$Button, { "href": service.href, "variant": "outline", "size": "sm" }, { "default": ($$result4) => renderTemplate`
Ver Detalles
` })} </div> </div>`)} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "background": "alt", "padding": "md" }, { "default": ($$result3) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> <h3 class="font-heading text-3xl text-white font-bold mb-8">Servicios Adicionales</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> <div class="p-4 border border-white/5 rounded-sm hover:bg-white/5 transition-colors"> <span class="text-3xl mb-4 block">📶</span> <span class="text-white font-bold block mb-1">WiFi Gratis</span> <span class="text-white/50 text-xs">Alta velocidad</span> </div> <div class="p-4 border border-white/5 rounded-sm hover:bg-white/5 transition-colors"> <span class="text-3xl mb-4 block">☕</span> <span class="text-white font-bold block mb-1">Café & Té</span> <span class="text-white/50 text-xs">Cortesía en lobby</span> </div> <div class="p-4 border border-white/5 rounded-sm hover:bg-white/5 transition-colors"> <span class="text-3xl mb-4 block">🧴</span> <span class="text-white font-bold block mb-1">Amenities</span> <span class="text-white/50 text-xs">Premium included</span> </div> <div class="p-4 border border-white/5 rounded-sm hover:bg-white/5 transition-colors"> <span class="text-3xl mb-4 block">🧹</span> <span class="text-white font-bold block mb-1">Limpieza</span> <span class="text-white/50 text-xs">Diaria</span> </div> </div> </div> ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/service.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/service.astro";
const $$url = "/service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Service,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
