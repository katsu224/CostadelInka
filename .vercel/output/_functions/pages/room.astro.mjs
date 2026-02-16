import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_D2Mq50ll.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Room = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Room;
  const previewToken = Astro2.url.searchParams.get("token");
  const isPreview = previewToken === "ANSJDSA98DSANIDNAUBDAsadSADOAJI2IENIWDIWNDIAS";
  const API_BASE = "http://localhost:3000";
  const API_URL = `${API_BASE}/api/v1/delivery/websites/5d86b344-037c-41b2-a616-8e271325b98c/pages/room${isPreview ? `?preview=true&nocache=${Date.now()}` : ""}`;
  const fetchHeaders = isPreview ? {
    "Cache-Control": "no-cache",
    "Authorization": `Bearer ${"ANSJDSA98DSANIDNAUBDAsadSADOAJI2IENIWDIWNDIAS"}`
    // <-- Arquitectura Limpia
  } : {};
  let rooms = [];
  let headerData = {
    title: "Habitaciones",
    subtitle: ""
  };
  let error = null;
  try {
    const res = await fetch(API_URL, {
      cache: isPreview ? "no-store" : "force-cache",
      // Si es preview no guarda caché
      headers: fetchHeaders
    });
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }
    const json = await res.json();
    const blocks = json.data?.blocks || [];
    const headerBlock = blocks.find((b) => b.type === "header");
    if (headerBlock?.content) {
      headerData = {
        title: headerBlock.content.titulo || "Habitaciones",
        subtitle: headerBlock.content.subtitulo || ""
      };
    }
    const habitacionesBlock = blocks.find((b) => b.type === "habitaciones");
    if (habitacionesBlock?.content?.habitaciones) {
      const rawData = habitacionesBlock.content.habitaciones;
      rooms = rawData.map((item, index) => {
        return {
          id: String(index + 1),
          title: item.nombre_del_cuarto || "Habitación Estándar",
          image: item.imagen || "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
          description: item.descripcion_del_cuarto || "Sin descripción disponible.",
          features: item.caracteristicas ? item.caracteristicas.map((f) => f.caracteristica) : [],
          price: item.precio ?? null
        };
      });
    }
  } catch (e) {
    console.error("Failed to fetch rooms:", e);
    error = true;
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${headerData.title} - Confort y Lujo`, "description": headerData.subtitle }, { "default": async ($$result2) => renderTemplate`${isPreview && renderTemplate`${maybeRenderHead()}<div class="fixed top-0 left-0 w-full bg-[#9D2B48] text-white text-center py-2 text-sm font-bold z-50 animate-pulse">
Modo Vista Previa: Estás viendo los cambios sin publicar.
</div>`}${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": headerData.title, "subtitle": headerData.subtitle, "backgroundImage": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate`${error ? renderTemplate`<div class="text-center py-20"> <h3 class="text-2xl text-red-500 font-bold">
Lo sentimos, no pudimos cargar las habitaciones.
</h3> <p class="text-white/60">
Por favor, intente nuevamente más tarde.
</p> </div>` : renderTemplate`<div class="grid grid-cols-1 gap-16"> ${rooms.map((room, index) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">  <div${addAttribute(`relative h-[400px] overflow-hidden rounded-sm group ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`, "class")}> <img${addAttribute(room.image, "src")}${addAttribute(room.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent lg:hidden"></div> </div>  <div${addAttribute(`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`, "class")}> <span class="text-primary-500 font-bold tracking-widest uppercase text-sm mb-2 block">
Categoría <span class="text-white/40 ml-2 text-xs">#${room.id}</span> </span> <h2 class="font-heading text-3xl md:text-4xl text-white font-bold mb-6"> ${room.title} </h2> <p class="text-white/70 text-lg leading-relaxed mb-6"> ${room.description} </p> ${room.price !== null && renderTemplate`<p class="text-primary-400 text-xl font-semibold mb-6">
$${room.price} / noche
</p>`} ${room.features.length > 0 && renderTemplate`<ul class="grid grid-cols-2 gap-4 mb-8"> ${room.features.map((feature) => renderTemplate`<li class="flex items-center gap-3 text-white/60 text-sm"> <span class="text-primary-500">✓</span> ${feature} </li>`)} </ul>`} <div class="mt-auto">  ${renderComponent($$result3, "Button", $$Button, { "href": `/rooms/${room.id}${isPreview ? `?token=${previewToken}` : ""}`, "size": "lg" }, { "default": async ($$result4) => renderTemplate`
Reservar Ahora
` })} </div> </div> </div>`)} </div>`}` })} ${renderComponent($$result2, "Section", $$Section, { "background": "alt", "padding": "md" }, { "default": async ($$result3) => renderTemplate` <div class="text-center max-w-2xl mx-auto"> <h3 class="font-heading text-3xl text-white font-bold mb-6">
Servicios Incluidos
</h3> </div> ` })} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/room.astro", void 0);
const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/room.astro";
const $$url = "/room";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Room,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
