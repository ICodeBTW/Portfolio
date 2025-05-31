globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as renderHead, b as renderSlot, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_D8U83nHe.mjs';
import CountDown from '../chunks/CountDown_CYxBp5t_.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Shreenidhi Bharadwaj - SRE/Fullstack Developer</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/app/src/layouts/BaseLayout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CountDown", CountDown, { "title": "Cooking up a site in", "server:defer": true, "server:component-directive": "defer", "server:component-path": "/app/src/components/CountDown", "server:component-export": "default" })} ` })}`;
}, "/app/src/pages/index.astro", "self");

const $$file = "/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
