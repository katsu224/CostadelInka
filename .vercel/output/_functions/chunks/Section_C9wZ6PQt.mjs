import { e as createComponent, g as addAttribute, r as renderTemplate, h as createAstro, m as maybeRenderHead, l as renderScript, k as renderComponent, o as renderHead, n as renderSlot } from './astro/server_zQVrf1Pb.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro();
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEOHead;
  const {
    title,
    description,
    image,
    canonicalURL = Astro2.url,
    type = "website"
  } = Astro2.props;
  const siteName = "Hotel Costa del Inka";
  const siteURL = Astro2.site?.toString() || "https://costadelinkahotel.com";
  const resolvedImage = image ? new URL(image, siteURL).toString() : new URL("/og-default.jpg", siteURL).toString();
  const resolvedCanonical = new URL(canonicalURL, siteURL).toString();
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  return renderTemplate`<!-- Primary Meta Tags --><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(resolvedCanonical, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(resolvedCanonical, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(resolvedImage, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(resolvedCanonical, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(resolvedImage, "content")}><!-- Fonts --><!-- Handled by @fontsource imports in MainLayout -->`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/SEOHead.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    { text: "Inicio", href: "/" },
    { text: "Nosotros", href: "/about" },
    { text: "Habitaciones", href: "/room" },
    { text: "Servicios", href: "/service" },
    { text: "Instalaciones", href: "/gallery" },
    // Group restaurant/terraza/evento here or separate?
    { text: "Contacto", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/10"> <div class="container mx-auto px-6 py-4 flex justify-between items-center"> <a href="/" class="flex items-center gap-2"> <!-- Logo placeholder or text --> <div class="flex flex-col"> <span class="font-heading text-2xl font-bold text-primary-500 tracking-wider">COSTA</span> <span class="font-heading text-xl text-white tracking-widest -mt-2">DEL INKA</span> </div> </a> <!-- Desktop Menu --> <nav class="hidden md:flex items-center gap-8"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-sm font-medium text-white/80 hover:text-primary-400 transition-colors uppercase tracking-wide"> ${item.text} </a>`)} <a href="/contact" class="px-6 py-2 bg-primary-600 text-white font-medium rounded-sm hover:bg-primary-700 transition-all uppercase text-sm tracking-wide">
Reservar
</a> </nav> <!-- Mobile Menu Button --> <button id="menu-toggle" class="md:hidden text-white hover:text-primary-400 transition-colors" aria-label="Toggle menu"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu" class="fixed inset-0 bg-dark-900 z-40 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8"> <button id="menu-close" class="absolute top-6 right-6 text-white hover:text-primary-400"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-2xl font-heading text-white hover:text-primary-500 transition-colors"> ${item.text} </a>`)} </div> </header> ${renderScript($$result, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-dark-950 text-white pt-16 pb-8 border-t border-white/5"> <div class="container mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"> <!-- Brand --> <div class="col-span-1 md:col-span-1"> <div class="flex flex-col mb-4"> <span class="font-heading text-2xl font-bold text-primary-500 tracking-wider">COSTA</span> <span class="font-heading text-xl text-white tracking-widest -mt-2">DEL INKA</span> </div> <p class="text-white/60 text-sm leading-relaxed">
Experiencia única y servicio personalizado en Nuevo Chimbote. Confort, calidad y responsabilidad social.
</p> </div> <!-- Links --> <div> <h3 class="font-heading text-lg font-bold text-white mb-6">Enlaces Rápidos</h3> <ul class="space-y-4"> <li><a href="/about" class="text-white/60 hover:text-primary-400 transition-colors text-sm">Nuestra Historia</a></li> <li><a href="/room" class="text-white/60 hover:text-primary-400 transition-colors text-sm">Habitaciones</a></li> <li><a href="/service" class="text-white/60 hover:text-primary-400 transition-colors text-sm">Servicios</a></li> <li><a href="/gallery" class="text-white/60 hover:text-primary-400 transition-colors text-sm">Galería</a></li> </ul> </div> <!-- Services --> <div> <h3 class="font-heading text-lg font-bold text-white mb-6">Servicios</h3> <ul class="space-y-4"> <li><a href="/restaurant" class="text-white/60 hover:text-primary-400 transition-colors text-sm">Restaurante</a></li> <li><a href="/evento" class="text-white/60 hover:text-primary-400 transition-colors text-sm">Sala de Eventos</a></li> <li><a href="/cochera" class="text-white/60 hover:text-primary-400 transition-colors text-sm">Cochera Privada</a></li> <li><a href="/terraza" class="text-white/60 hover:text-primary-400 transition-colors text-sm">Terrazas</a></li> </ul> </div> <!-- Contact --> <div> <h3 class="font-heading text-lg font-bold text-white mb-6">Contáctanos</h3> <ul class="space-y-4 text-sm text-white/60"> <li class="flex items-start gap-3"> <span class="text-primary-500 mt-1">📍</span> <span>Mz w2 Lt 24-25, Av Anchoveta, Miguel Grau, Nuevo Chimbote, Áncash, Perú</span> </li> <li class="flex items-center gap-3"> <span class="text-primary-500">📞</span> <a href="tel:043319657" class="hover:text-white transition-colors">043-319657</a> </li> <li class="flex items-center gap-3"> <span class="text-primary-500">📱</span> <a href="tel:+51987893845" class="hover:text-white transition-colors">+51 987 893 845</a> </li> <li class="flex items-center gap-3"> <span class="text-primary-500">✉️</span> <a href="mailto:costadelinka@gmail.com" class="hover:text-white transition-colors">costadelinka@gmail.com</a> </li> </ul> </div> </div> <div class="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-white/40 text-xs">
&copy; ${year} Hotel Costa del Inka. Todos los derechos reservados.
</p> <div class="flex gap-4"> <!-- Social Icons Placeholder --> <a href="#" class="text-white/40 hover:text-primary-500 transition-colors" aria-label="Facebook"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg> </a> <a href="#" class="text-white/40 hover:text-primary-500 transition-colors" aria-label="Instagram"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> </a> </div> </div> </div> </footer>`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title,
    description = "Hotel Costa del Inka - Experiencia \xFAnica y servicio personalizado en Nuevo Chimbote. Habitaciones modernas, restaurante, sala de eventos y m\xE1s.",
    image,
    type
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEOHead", $$SEOHead, { "title": title, "description": description, "image": image, "type": type })}${renderHead()}</head> <body class="bg-dark-900 text-dark-50 antialiased selection:bg-primary-500/30 selection:text-white flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow pt-20"> <!-- pt-20 to account for fixed header --> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    id,
    class: className,
    background = "default",
    padding = "lg"
  } = Astro2.props;
  const backgrounds = {
    default: "bg-dark-900",
    alt: "bg-dark-950",
    darker: "bg-black"
  };
  const paddings = {
    none: "",
    sm: "py-12",
    md: "py-20",
    lg: "py-28"
  };
  const classes = [
    backgrounds[background],
    paddings[padding],
    className
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(classes, "class")}> <div class="container mx-auto px-6"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/ui/Section.astro", void 0);

export { $$MainLayout as $, $$Section as a };
