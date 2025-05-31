globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderHead, a as renderSlot, b as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_CZ_YnAHL.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_CuWqwHHT.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CuWqwHHT.mjs';
/* empty css                                 */

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Shreenidhi Bharadwaj - SRE/Fullstack Developer</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/app/src/layouts/BaseLayout.astro", void 0);

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center bg-gray-50 p-8"> <p class="text-gray-600 mb-4 text-lg">Meanwhile, check out my</p> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="bg-white rounded-lg shadow-lg px-6 py-3 hover:shadow-xl transition-shadow duration-200 flex items-center gap-3"> <svg class="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> <span class="text-xl font-bold text-gray-900">GitHub</span> </a> </div>`;
}, "/app/src/components/GithubLink.astro", void 0);

function CountDown({ title }) {
  const [timeLeft, setTimeLeft] = reactExports.useState(864e3);
  reactExports.useEffect(() => {
    const timeInt = setInterval(() => {
      setTimeLeft((currTime) => {
        if (currTime <= 1) {
          clearInterval(timeInt);
          return 0;
        }
        return currTime - 1;
      });
    }, 1e3);
    return () => clearInterval(timeInt);
  }, []);
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor(timeLeft % (24 * 60 * 60) / (60 * 60));
  const minutes = Math.floor(timeLeft % (60 * 60) / 60);
  const seconds = timeLeft % 60;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-light text-gray-900 mb-12", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 md:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: days.toString().padStart(2, "0") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-2 font-medium", children: "DAYS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: hours.toString().padStart(2, "0") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-2 font-medium", children: "HOURS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: minutes.toString().padStart(2, "0") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-2 font-medium", children: "MINUTES" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: seconds.toString().padStart(2, "0") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mt-2 font-medium", children: "SECONDS" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center bg-gray-50 p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 text-lg", children: "Meanwhile, check out my" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://github.com/ICodeBTW",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bg-white rounded-lg shadow-lg px-6 py-3 hover:shadow-xl transition-shadow duration-200 flex items-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "w-6 h-6 text-gray-900",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-gray-900", children: "GitHub" })
          ]
        }
      )
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CountDown", CountDown, { "title": "Cooking up a site in", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/app/src/components/CountDown", "client:component-export": "default" })} ` })}`;
}, "/app/src/pages/index.astro", void 0);

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
