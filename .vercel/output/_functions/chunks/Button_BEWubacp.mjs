import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, n as renderSlot } from './astro/server_zQVrf1Pb.mjs';
import 'piccolore';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    variant = "primary",
    size = "md",
    class: className,
    type = "button",
    ...rest
  } = Astro2.props;
  const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 uppercase tracking-widest";
  const variants = {
    primary: "bg-primary-500 text-dark-900 hover:bg-primary-400 hover:scale-105 shadow-lg shadow-primary-500/20",
    secondary: "bg-dark-800 text-white hover:bg-dark-700 hover:scale-105 border border-white/10",
    outline: "border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-dark-900",
    ghost: "text-white hover:text-primary-400 hover:bg-white/5"
  };
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };
  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    className
  ].join(" ");
  const Tag = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "type": !href ? type : void 0, "class": classes, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
