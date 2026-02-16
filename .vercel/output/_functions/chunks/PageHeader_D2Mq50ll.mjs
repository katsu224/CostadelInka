import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro } from './astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const {
    title,
    subtitle,
    backgroundImage = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0 z-0"> <img${addAttribute(backgroundImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-dark-900/70"></div> </div> <div class="relative z-10 text-center container mx-auto px-6"> <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 animate-fade-in-up"> ${title} </h1> ${subtitle && renderTemplate`<p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light animate-fade-in-up delay-100"> ${subtitle} </p>`} <div class="w-24 h-1 bg-primary-500 mx-auto mt-8 animate-scale-in delay-200"></div> </div> </section>`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
