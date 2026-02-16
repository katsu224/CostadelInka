import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_zQVrf1Pb.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Section } from '../chunks/Section_C9wZ6PQt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_D2Mq50ll.mjs';
import { $ as $$Button } from '../chunks/Button_BEWubacp.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Cont\xE1ctanos", "description": "Formulario de contacto, ubicaci\xF3n y reservas en Hotel Costa del Inka." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Contacto", "subtitle": "Estamos aqu\xED para atenderle", "backgroundImage": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop" })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-16">  <div> <h2 class="font-heading text-3xl text-white font-bold mb-8">Información de Contacto</h2> <div class="space-y-8"> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-dark-800 rounded-sm flex items-center justify-center text-primary-500 text-2xl border border-white/5 shrink-0">
📍
</div> <div> <h3 class="font-heading text-lg text-white font-bold mb-2">Visítanos</h3> <p class="text-white/60 leading-relaxed">
Mz w2 Lt 24-25, Av Anchoveta <br>
Miguel Grau, Nuevo Chimbote <br>
Áncash, Perú
</p> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-dark-800 rounded-sm flex items-center justify-center text-primary-500 text-2xl border border-white/5 shrink-0">
📞
</div> <div> <h3 class="font-heading text-lg text-white font-bold mb-2">Llámanos</h3> <p class="text-white/60">Fijo: <a href="tel:043319657" class="hover:text-primary-500 transition-colors">043-319657</a></p> <p class="text-white/60">Celular 1: <a href="tel:+51987893845" class="hover:text-primary-500 transition-colors">+51 987 893 845</a></p> <p class="text-white/60">Celular 2: <a href="tel:+51933250639" class="hover:text-primary-500 transition-colors">+51 933 250 639</a></p> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-dark-800 rounded-sm flex items-center justify-center text-primary-500 text-2xl border border-white/5 shrink-0">
✉️
</div> <div> <h3 class="font-heading text-lg text-white font-bold mb-2">Escríbenos</h3> <p class="text-white/60"><a href="mailto:costadelinka@gmail.com" class="hover:text-primary-500 transition-colors">costadelinka@gmail.com</a></p> </div> </div> </div> <div class="mt-12"> ${renderComponent($$result3, "Button", $$Button, { "href": "https://wa.me/51987893845", "target": "_blank", "class": "w-full md:w-auto" }, { "default": ($$result4) => renderTemplate`
Contactar por WhatsApp
` })} </div> </div>  <div class="bg-dark-800 p-8 rounded-sm border border-white/5"> <h2 class="font-heading text-2xl text-white font-bold mb-6">Envíenos un Mensaje</h2> <form id="contact-form" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-white/80 mb-2">Nombre Completo</label> <input type="text" id="name" name="name" class="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="Su nombre" required> </div> <div> <label for="email" class="block text-sm font-medium text-white/80 mb-2">Correo Electrónico</label> <input type="email" id="email" name="email" class="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="su@email.com" required> </div> <div> <label for="subject" class="block text-sm font-medium text-white/80 mb-2">Asunto</label> <select id="subject" name="subject" class="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"> <option value="consulta">Consulta General</option> <option value="reserva">Reservas</option> <option value="evento">Eventos</option> <option value="otro">Otro</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-white/80 mb-2">Mensaje</label> <textarea id="message" name="message" rows="4" class="w-full bg-dark-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="¿En qué podemos ayudarle?" required></textarea> </div> ${renderComponent($$result3, "Button", $$Button, { "type": "submit", "class": "w-full justify-center" }, { "default": ($$result4) => renderTemplate`Enviar Mensaje` })} </form> <div id="form-success" class="hidden mt-4 bg-green-500/20 text-green-300 p-4 rounded-sm border border-green-500/30">
¡Gracias! Su mensaje ha sido enviado correctamente.
</div> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "padding": "none" }, { "default": ($$result3) => renderTemplate`  <div class="h-96 w-full grayscale invert-[.8]"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.0123456789!2d-78.5!3d-9.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDYnMDAuMCJTIDc4wrAzMCcwMC.0Ilc!5e0!3m2!1ses!2spe!4v1600000000000!5m2!1ses!2spe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe> </div> ` })} ` })} ${renderScript($$result, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/contact.astro", void 0);

const $$file = "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
