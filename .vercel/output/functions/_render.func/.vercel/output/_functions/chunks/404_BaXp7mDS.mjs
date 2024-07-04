import { l as createComponent, m as renderTemplate, n as maybeRenderHead } from './astro/server_CRwyTHBL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <h1>404 - Page Not Found</h1> <p>Sorry, that page does not exist.</p> </div>`;
}, "C:/Users/Marcos Vallejo/Desktop/portones/affordable-automatic-gate/src/pages/404.astro", void 0);

const $$file = "C:/Users/Marcos Vallejo/Desktop/portones/affordable-automatic-gate/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
