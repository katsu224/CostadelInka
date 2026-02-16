import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_zQVrf1Pb.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_zqQJl4kx.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/","cacheDir":"file:///C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/node_modules/.astro/","outDir":"file:///C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/dist/","srcDir":"file:///C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/","publicDir":"file:///C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/public/","buildClientDir":"file:///C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/dist/client/","buildServerDir":"file:///C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/cochera","isIndex":false,"type":"page","pattern":"^\\/cochera\\/?$","segments":[[{"content":"cochera","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cochera.astro","pathname":"/cochera","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/evento","isIndex":false,"type":"page","pattern":"^\\/evento\\/?$","segments":[[{"content":"evento","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/evento.astro","pathname":"/evento","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/restaurant","isIndex":false,"type":"page","pattern":"^\\/restaurant\\/?$","segments":[[{"content":"restaurant","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/restaurant.astro","pathname":"/restaurant","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/room","isIndex":false,"type":"page","pattern":"^\\/room\\/?$","segments":[[{"content":"room","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/room.astro","pathname":"/room","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/service","isIndex":false,"type":"page","pattern":"^\\/service\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service.astro","pathname":"/service","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/terraza","isIndex":false,"type":"page","pattern":"^\\/terraza\\/?$","segments":[[{"content":"terraza","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terraza.astro","pathname":"/terraza","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/welcome","isIndex":false,"type":"page","pattern":"^\\/welcome\\/?$","segments":[[{"content":"welcome","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/welcome.astro","pathname":"/welcome","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcun1_iJ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/cochera.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/evento.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/restaurant.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/room.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/service.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/terraza.astro",{"propagation":"none","containsHead":true}],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/welcome.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/cochera@_@astro":"pages/cochera.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/evento@_@astro":"pages/evento.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/restaurant@_@astro":"pages/restaurant.astro.mjs","\u0000@astro-page:src/pages/room@_@astro":"pages/room.astro.mjs","\u0000@astro-page:src/pages/service@_@astro":"pages/service.astro.mjs","\u0000@astro-page:src/pages/terraza@_@astro":"pages/terraza.astro.mjs","\u0000@astro-page:src/pages/welcome@_@astro":"pages/welcome.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BJ-hcoxk.mjs","C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CU-UDUZo.mjs","C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.BHaJnczU.js","C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.zZ3rtfq8.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"contact-form\"),t=document.getElementById(\"form-success\");e?.addEventListener(\"submit\",s=>{s.preventDefault(),setTimeout(()=>{e.reset(),t?.classList.remove(\"hidden\"),setTimeout(()=>t?.classList.add(\"hidden\"),5e3)},1e3)});"],["C:/Users/aguil/OneDrive/Escritorio/CreadorDeLandingPageAstro/segundaPagina/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"menu-toggle\"),n=document.getElementById(\"menu-close\"),l=document.getElementById(\"mobile-menu\");function e(){l?.classList.toggle(\"translate-x-full\"),document.body.classList.toggle(\"overflow-hidden\")}t?.addEventListener(\"click\",e);n?.addEventListener(\"click\",e);"]],"assets":["/_astro/inter-cyrillic-ext-400-normal.BQZuk6qB.woff2","/_astro/playfair-display-cyrillic-400-normal.CjW2EstV.woff2","/_astro/playfair-display-vietnamese-400-normal.BV2APVTb.woff2","/_astro/playfair-display-latin-400-normal.CFtfchNt.woff2","/_astro/inter-cyrillic-400-normal.obahsSVq.woff2","/_astro/playfair-display-latin-ext-400-normal.BxlSGspa.woff2","/_astro/inter-latin-ext-400-normal.C1nco2VV.woff2","/_astro/inter-vietnamese-400-normal.DMkecbls.woff2","/_astro/inter-greek-400-normal.B4URO6DV.woff2","/_astro/inter-greek-ext-400-normal.DGGRlc-M.woff2","/_astro/inter-latin-400-normal.C38fXH4l.woff2","/_astro/inter-cyrillic-ext-400-normal.DQukG94-.woff","/_astro/playfair-display-vietnamese-400-normal.BbvUAu4N.woff","/_astro/playfair-display-latin-400-normal.DHYHbkg3.woff","/_astro/playfair-display-cyrillic-400-normal.ZiRag6zj.woff","/_astro/inter-cyrillic-400-normal.HOLc17fK.woff","/_astro/playfair-display-latin-ext-400-normal.qdZwdvNS.woff","/_astro/inter-latin-ext-400-normal.77YHD8bZ.woff","/_astro/inter-vietnamese-400-normal.Bbgyi5SW.woff","/_astro/inter-greek-400-normal.q2sYcFCs.woff","/_astro/inter-greek-ext-400-normal.KugGGMne.woff","/_astro/inter-latin-400-normal.CyCys3Eg.woff","/_astro/about.Bcun1_iJ.css","/favicon.ico","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"+yzg3PakkfJjWgzTPtL4NCUVle6oK2IIzTLJD9qvb5o="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
