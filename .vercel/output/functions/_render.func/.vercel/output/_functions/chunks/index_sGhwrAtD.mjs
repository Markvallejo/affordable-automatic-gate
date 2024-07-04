import { k as createAstro, l as createComponent, m as renderTemplate, o as addAttribute, p as renderHead, q as renderComponent, t as renderSlot } from './astro/server_RA9XIgWt.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */

const AppConfig = {
  site_name: "Affordable Automatic Gate",
  title: "Affordable Automatic Gate",
  description: "Affordable Automatic Gate.",
  author: "Affordable Automatic Gate",
  locale_region: "US",
  locale: "en_US"
};

const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en-US"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(AppConfig.author, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="title" content="Affordable Automatic Gate"><meta name="description" content="Affordable Automatic Gate"><link rel="alternate" type="application/rss+xml" href="/rss.xml"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml">${renderHead()}</head> <body> <header> ${renderComponent($$result, "Header", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/header/header", "client:component-export": "default" })} </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <div id="modal-root"></div> </body></html>`;
}, "C:/Users/Marcos Vallejo/Desktop/portones/affordable-automatic-gate/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { title, description } = AppConfig;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...{ title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cover", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/cover/cover", "client:component-export": "default" })} ${renderComponent($$result2, "GridGates", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/stylesGates/stylesGates", "client:component-export": "default" })} ${renderComponent($$result2, "TechnicalGates", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/technicalGates/technicalGates", "client:component-export": "default" })} ${renderComponent($$result2, "ContactGates", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/contact/contact", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/footer/footer", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Marcos Vallejo/Desktop/portones/affordable-automatic-gate/src/pages/index.astro", void 0);

const $$file = "C:/Users/Marcos Vallejo/Desktop/portones/affordable-automatic-gate/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
