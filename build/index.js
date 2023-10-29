var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/main.css
var main_default = "/build/_assets/main-FBAGZDJ2.css";

// app/root.tsx
var import_react_vlibras = __toESM(require("@moreiraste/react-vlibras")), import_core2 = require("@hookstate/core");

// app/script/changeTheme.ts
var import_core = require("@hookstate/core"), themePage = (0, import_core.hookstate)("");

// node_modules/primereact/resources/themes/lara-light-indigo/theme.css
var theme_default = "/build/_assets/theme-PZFOFDM5.css";

// node_modules/primereact/resources/primereact.min.css
var primereact_min_default = "/build/_assets/primereact.min-K5UNRXF6.css";

// node_modules/primeicons/primeicons.css
var primeicons_default = "/build/_assets/primeicons-7WOCLA2T.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css", integrity: "sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter&display=swap", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@800&display=swap" },
  { rel: "stylesheet", href: theme_default },
  { rel: "stylesheet", href: primereact_min_default },
  { rel: "stylesheet", href: primeicons_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
  { rel: "stylesheet", href: main_default }
];
function Document({
  children
}) {
  let changeTheme = (0, import_core2.useHookstate)(themePage);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "pt-br", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { src: "https://kit.fontawesome.com/6c49cfa42c.js", crossOrigin: "anonymous" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { "data-theme": changeTheme.get(), children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_vlibras.default, { forceOnload: !0 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", integrity: "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL", crossOrigin: "anonymous" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { src: "https://kit.fontawesome.com/6c49cfa42c.js", crossOrigin: "anonymous" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react2.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "oopss", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "error-text", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorHandle, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "hmpg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: "back", children: "Back To Home" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 88,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
  function ErrorHandle() {
    return (0, import_react2.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
        " ",
        error.status,
        " "
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.statusText }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.data }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Error" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Unknown Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 113,
      columnNumber: 14
    }, this);
  }
}

// app/routes/ExercicioDetalhes.$excId.tsx
var ExercicioDetalhes_excId_exports = {};
__export(ExercicioDetalhes_excId_exports, {
  default: () => ExercicioDetalhes,
  links: () => links2,
  meta: () => meta2
});

// app/components/Footer.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col pb-4 pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "/IconeLogo.png", alt: "Logo do HealthyVibes", className: "col-12 col-md-6 logoFooter" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 11,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer-socials px-4 px-md-0 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", id: "youtube", title: "YouTube", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "fa-brands fa-youtube" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 14,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 13,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", id: "whatsapp", title: "Whatsapp", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "fa-brands fa-whatsapp" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 17,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", id: "facebook", title: "Facebook", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "fa-brands fa-facebook-f" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 20,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 19,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", id: "instagram", title: "Instagram", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "fa-brands fa-instagram" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 23,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 22,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col d-flex justify-content-center align-items-center pb-4 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "footer-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Deixe-nos ajudar voc\xEA" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 30,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 29,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Receita" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Dietas" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 36,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 35,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Calculadora" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 39,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Exerc\xEDcios" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 42,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 41,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Controle de \xC1gua" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 45,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 44,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 28,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col pb-4 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "footer-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Bem-vindo" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 52,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 51,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Sobre N\xF3s" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 55,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 54,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Contato" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 58,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Termos de Servi\xE7o" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 61,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "#", className: "footer-link", children: "Pol\xEDtica de Privacidade" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 64,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 50,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/Header.tsx
var import_react4 = require("@remix-run/react"), import_react5 = require("react");
var import_core3 = require("@hookstate/core"), import_browser = __toESM(require("@hotjar/browser")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Header() {
  import_browser.default.init(3702227, 6, {
    debug: !0
  });
  let [size, setSize] = (0, import_react5.useState)(1), changeFontSize = (tipoOperacao) => {
    tipoOperacao == "aumentar" && size < 2 ? setSize(1.3) : tipoOperacao == "diminuir" && size > 1 && setSize(1), document.documentElement.style.fontSize = `${size}rem`;
  }, changeTheme = (0, import_core3.useHookstate)(themePage), [theme, setTheme] = (0, import_react5.useState)(changeTheme.get());
  (0, import_react5.useEffect)(() => {
    localStorage.setItem("theme", theme), changeTheme.set(theme);
  }, [changeTheme, theme]);
  let switchContraste = () => {
    setTheme(theme === "contraOn" ? "contraOff" : "contraOn");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "navbar navbar-expand-xl", id: "topo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container-fluid baseNav", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "navbar-brand trapezio", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/IconeLogo.png", alt: "Logo do Healthy Vibes", className: "logoHeader" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 52,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 51,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 50,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "navbar-toggler navBarButton", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapsibleNavbar", "aria-controls": "collapsibleNavbar", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "fa-solid fa-bars navBarIcon" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 56,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 55,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "collapse navbar-collapse navSla", id: "collapsibleNavbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "nav-link", to: "/profile", children: "Dietas" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 62,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 61,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "nav-link", to: "/CalculadoraNutricional", children: "Calculadora" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 65,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 64,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "nav-link", to: "/Exercicios", children: "Exerc\xEDcios" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 68,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 67,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { className: "nav-link", to: "/controleConsumo", children: "Controle de Consumo" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 71,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 70,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hr", { className: "nav-item-divider w-100 d-block d-lg-none mx-2" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 75,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "profile nav-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "logCadButtons", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/Login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "btn  loginButton", children: "Entrar" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 80,
            columnNumber: 51
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 80,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/Cadastro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "btn  cadButton", children: "Cadastre-se" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 82,
            columnNumber: 54
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 82,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 78,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "itensAcessibilidade", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/AcessFontSizeBiggerV2.png", className: "iconeAcessibilidade", title: "Aumentar Fonte", alt: "Aumentar fonte", onClick: () => changeFontSize("aumentar") }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 87,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/AcessFontSizeLowerV2.png", className: "iconeAcessibilidade", title: "Diminuir Fonte", alt: "Diminuir Fonte", onClick: () => changeFontSize("diminuir") }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 88,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: `/AcessFontHighConrV2${theme == "contraOn" ? "-inverso" : ""}.png`, className: "iconeAcessibilidade", title: "Alto contraste", alt: "Alto contraste", onClick: switchContraste }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 89,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/Acessibilidade", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/AcessFontInfoV2.png", className: "iconeAcessibilidade infoAcess", alt: "acesso a acessibilidae" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 90,
            columnNumber: 60
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 90,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 85,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 76,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 58,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 49,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

// app/routes/ExercicioDetalhes.$excId.tsx
var import_react6 = require("@remix-run/react");

// app/styles/exerciciosDetalhes.css
var exerciciosDetalhes_default = "/build/_assets/exerciciosDetalhes-FFG7WM5I.css";

// app/routes/ExercicioDetalhes.$excId.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: exerciciosDetalhes_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta2 = () => ({
  title: "Exerc\xEDcios"
});
function ExercicioDetalhes() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { id: "conteudo", className: " texto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "title text-center py-3", children: "Tr\xEDceps" }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 31,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "barraHoriz container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "/exercicios", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", title: "Excluir", className: "buttonCards m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "px-2 fa-solid fa-arrow-left fa-2xl", style: { color: "var(--text-quadenary)" } }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 36,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 35,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 34,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container-fluid text-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("iframe", { className: "video", src: "https://www.youtube.com/embed/A2FAa4Q-4eg?si=1y-fgwSsrG1coOM5", title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-3 mx-md-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h5", { children: "Repeti\xE7\xF5es" }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "rep rounded", children: "Fazer no m\xEDnimo 4 x 10" }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h5", { className: "texto-justificado m-md-4 mx-md-5 mx-3", children: "Fazer pranchas melhora significativamente uma postura erecta e est\xE1vel. Atrav\xE9s do fortalecimento de core, o corpo ser\xE1 capaz de manter uma postura correcta porque os m\xFAsculos no abd\xF3men t\xEAm grande influ\xEAncia sobre a estabilidade do pesco\xE7o, ombros, peito e costas." }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 53,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 60,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
    lineNumber: 28,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/CalculadoraNutricional/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => CalculadoraNutricional,
  links: () => links3,
  meta: () => meta3
});

// app/styles/calculadoras.css
var calculadoras_default = "/build/_assets/calculadoras-OVGULBOO.css";

// app/routes/CalculadoraNutricional/FormCalculadora.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function FormCalculadora(props) {
  function handleForm(event) {
    event.preventDefault();
    let formData = new FormData(event.target), resultados = {
      calorias: 50,
      carboidratos: 50,
      proteina: 50,
      gorduras: 50,
      opcaoPeso: `${Object.fromEntries(formData).options}`
    };
    props.resultados(
      resultados
    ), props.show(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { onSubmit: handleForm, method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "row m-auto cardBox", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            id: "tudo",
            required: !0,
            defaultChecked: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 39,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "form-check-label", htmlFor: "tudo", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "img",
            {
              className: "card-img-top imgTipoDieta",
              src: "/calculadora/tudo_Cnutricional.png",
              alt: "Variados alimentos"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
              lineNumber: 48,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "card-text cardTxtTipoDieta", children: "Tudo" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 54,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 53,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            id: "vegetariana",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 59,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "vegetariana", className: "form-check-label lblFdp", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "img",
            {
              className: "card-img-top imgTipoDieta",
              src: "/calculadora/vegetariana_Cnutricional.png",
              alt: "Diversas frutas e vegetais"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
              lineNumber: 67,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "card-text cardTxtTipoDieta", children: "Vegetariana" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 73,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 72,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 66,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            id: "cetogenica",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 79,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "cetogenica", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "img",
            {
              className: "card-img-top imgTipoDieta",
              src: "/calculadora/cetogenica_Cnutricional.png",
              alt: "Aveia e um abacate"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
              lineNumber: 87,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "card-text cardTxtTipoDieta", children: "Cetog\xEAnica" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 93,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 92,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 86,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "tituloCategoria", children: "Deseja...?" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "d-flex justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "radio",
          className: "btn-check ",
          name: "options",
          id: "option1",
          autoComplete: "off",
          value: "Perder Peso",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 101,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "btn btn-secondary pontaEsquerda", htmlFor: "option1", children: "Perder peso" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 110,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "radio",
          className: "btn-check",
          name: "options",
          id: "option2",
          autoComplete: "off",
          value: "Manter-se ativo",
          required: !0,
          defaultChecked: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 113,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "btn btn-secondary pontaNenhuma", htmlFor: "option2", children: "Manter-se ativo" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 123,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "radio",
          className: "btn-check ",
          name: "options",
          id: "option3",
          autoComplete: "off",
          value: "Manter-se ativo",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 126,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "btn btn-secondary pontaDireita", htmlFor: "option3", children: "Ganhar m\xFAsculo" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 136,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "tituloCategoria", children: "Sexo" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 141,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "d-flex justify-content-center textoOscuro", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-check sexo", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            className: "form-check-input",
            type: "radio",
            name: "flexRadioDefault",
            id: "sexoFeminino",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 144,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "form-check-label", htmlFor: "sexoFeminino", children: "Feminino" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 151,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 143,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-check sexo", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            className: "form-check-input",
            type: "radio",
            name: "flexRadioDefault",
            id: "sexoMasculino",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 156,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "form-check-label", htmlFor: "sexoMasculino", children: "Masculino" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 163,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 155,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 142,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container col-md-3 col-lg-2 pt-1 textoOscuro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "row d-flex justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: "Idade:" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 173,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "form-control border border-secondary ", type: "number", name: "idade", placeholder: "Idade", required: !0 }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 174,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 172,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: "Altura" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 178,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "form-control border border-secondary", type: "number", name: "altura", placeholder: "Altura em Cm", required: !0 }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 179,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 177,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: "Peso" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 183,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "form-control border border-secondary", type: "number", name: "peso", placeholder: "Peso em Kg", required: !0, step: "0.01" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 184,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 182,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 170,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 169,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "tituloCategoria", children: "N\xEDvel de Atividade" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 189,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container col-lg-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("select", { className: "form-select form-select-sm selectCalculadora", "aria-label": "Default select example", defaultValue: "", required: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "", disabled: !0, children: "Selecione" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 192,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "1", children: "Sedent\xE1rio" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 193,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "2", children: "Baixa atividade" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 194,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "3", children: "Ativo" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 195,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "4", children: "Muito ativo" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 196,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 191,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 190,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container pt-5 col-lg-2 d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "botaoCalcular w-50", type: "submit", children: "Calcular" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 200,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 199,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this);
}

// app/routes/CalculadoraNutricional/ModalAviso.tsx
var import_react7 = require("react"), import_react_bootstrap = require("react-bootstrap"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function ModalAviso() {
  let [show, setShow] = (0, import_react7.useState)(!1), handleClose = () => setShow(!1);
  return (0, import_react7.useEffect)(() => {
    setShow(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react_bootstrap.Modal,
    {
      show,
      onHide: handleClose,
      centered: !0,
      backdrop: "static",
      keyboard: !1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap.Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap.Modal.Title, { className: "text-center text-warning fw-bold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "fa-solid fa-triangle-exclamation" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
            lineNumber: 24,
            columnNumber: 21
          }, this),
          " Aviso em nome de sua sa\xFAde"
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "alert alert-info border border-info border-2 p-2", children: "Essa calculadora utiliza do c\xE1lculo Gasto Energ\xE9tico Basal (GEB) para determinar quantas calorias, prote\xEDnas e gordura deve-se consumir" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap.Modal.Footer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "alert alert-light", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "fw-bold", children: "Vale Ressaltar:" }, void 0, !1, {
              fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
              lineNumber: 36,
              columnNumber: 51
            }, this),
            " Este site n\xE3o substitui uma consulta com especialistas m\xE9dicos"
          ] }, void 0, !0, {
            fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap.Button, { className: "btn-comum", onClick: handleClose, children: "Estou Ciente" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
}

// app/routes/CalculadoraNutricional/ModalResultado.tsx
var import_react_bootstrap2 = require("react-bootstrap"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ModalResultado(props) {
  let navigate = (0, import_react8.useNavigate)();
  function navigateReceitas() {
    navigate("/Receitas");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react_bootstrap2.Modal,
    {
      ...props.modal,
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: !0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_bootstrap2.Modal.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_bootstrap2.Modal.Title, { className: "container-fluid text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "fw-bold", children: "Seu gasto cal\xF3rico por dia \xE9:" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 28,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
            props.resultados?.calorias,
            " calorias"
          ] }, void 0, !0, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 29,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_bootstrap2.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container-fluid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "row text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: [
            "Sugerido para: ",
            props.resultados?.opcaoPeso
          ] }, void 0, !0, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 35,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 34,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "row text-center pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-md-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h6", { children: "Calorias Sugeridas" }, void 0, !1, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 39,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
                (props.resultados?.calorias || 0) / 1e3,
                " kcal"
              ] }, void 0, !0, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 40,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
              lineNumber: 38,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h6", { children: "Carboidratos" }, void 0, !1, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 43,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
                props.resultados?.carboidratos,
                " g"
              ] }, void 0, !0, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 44,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
              lineNumber: 42,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h6", { children: "Prote\xEDnas" }, void 0, !1, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 47,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
                props.resultados?.proteina,
                " g"
              ] }, void 0, !0, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 48,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
              lineNumber: 46,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h6", { children: "Gorduras" }, void 0, !1, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 52,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
                props.resultados?.gorduras,
                " g"
              ] }, void 0, !0, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 53,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
              lineNumber: 51,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 37,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_bootstrap2.Modal.Footer, { className: "d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "botaoCalcular w-50", type: "button", onClick: navigateReceitas, children: "Gerar Receitas" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
}

// app/routes/CalculadoraNutricional/route.tsx
var import_react9 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: calculadoras_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta3 = () => ({
  title: "Calculadora Nutricional"
});
function CalculadoraNutricional() {
  let [show, setShow] = (0, import_react9.useState)(!1), [resultados, setResultados] = (0, import_react9.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "tituloPagina pt-4", children: "Calculadora Nutricional" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "tituloCategoria", children: "Qual \xE9 o seu tipo de dieta?" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      FormCalculadora,
      {
        show: setShow,
        resultados: setResultados
      },
      void 0,
      !1,
      {
        fileName: "app/routes/CalculadoraNutricional/route.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      ModalResultado,
      {
        modal: {
          show,
          onHide: () => setShow(!1)
        },
        resultados
      },
      void 0,
      !1,
      {
        fileName: "app/routes/CalculadoraNutricional/route.tsx",
        lineNumber: 50,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ModalAviso, {}, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/CalculadoraNutricional/route.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/controleConsumo._index.tsx
var controleConsumo_index_exports = {};
__export(controleConsumo_index_exports, {
  default: () => ControleConsumo,
  links: () => links4,
  meta: () => meta4
});

// app/styles/controleConsumo.css
var controleConsumo_default = "/build/_assets/controleConsumo-KP643X7A.css";

// app/routes/controleConsumo._index.tsx
var import_calendar = require("primereact/calendar");
var import_react10 = require("react"), import_react_bootstrap3 = require("react-bootstrap"), import_react11 = require("@remix-run/react");

// app/script/handleData.ts
function handleControleConsumo(date) {
  return `date=${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

// app/routes/controleConsumo._index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), meta4 = () => ({
  title: "controle Consumo"
}), links4 = () => [{ rel: "stylesheet", href: controleConsumo_default }];
function ControleConsumo() {
  let [date, setDate] = (0, import_react10.useState)(/* @__PURE__ */ new Date()), navigate = (0, import_react11.useNavigate)(), dateTemplate = (date2) => date2.day > 10 && date2.day < 15 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("strong", { className: "border border-3 border-success rounded-circle px-1", children: date2.day }, void 0, !1, {
    fileName: "app/routes/controleConsumo._index.tsx",
    lineNumber: 28,
    columnNumber: 14
  }, this) : date2.day;
  function useHandleSearch(e) {
    e.preventDefault(), navigate(handleControleConsumo(date));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/controleConsumo._index.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { id: "conteudo", className: "container-fluid texto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "first-title", children: "Controle de Consumo" }, void 0, !1, {
        fileName: "app/routes/controleConsumo._index.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "d-flex justify-content-center align-items-center my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react_bootstrap3.Card,
        {
          bg: "info",
          text: "white",
          style: { width: "26rem" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_bootstrap3.Card.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_bootstrap3.Card.Title, { children: "Instru\xE7\xE3o " }, void 0, !1, {
              fileName: "app/routes/controleConsumo._index.tsx",
              lineNumber: 55,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_bootstrap3.Card.Text, { children: "Os dias circulados em verde possuem dados registrados" }, void 0, !1, {
              fileName: "app/routes/controleConsumo._index.tsx",
              lineNumber: 56,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/controleConsumo._index.tsx",
            lineNumber: 54,
            columnNumber: 25
          }, this)
        },
        "info",
        !1,
        {
          fileName: "app/routes/controleConsumo._index.tsx",
          lineNumber: 48,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/controleConsumo._index.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { className: "d-flex flex-column justify-content-center align-items-center", onSubmit: useHandleSearch, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_calendar.Calendar,
          {
            value: date,
            onChange: (e) => {
              setDate(new Date(e.target.value || ""));
            },
            dateFormat: "dd/mm/yy",
            inline: !0,
            dateTemplate
          },
          void 0,
          !1,
          {
            fileName: "app/routes/controleConsumo._index.tsx",
            lineNumber: 65,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/controleConsumo._index.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_bootstrap3.Button, { type: "submit", size: "lg", className: "my-4 btn-comum", children: [
          "Pesquisar ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("i", { className: "fa-solid fa-magnifying-glass" }, void 0, !1, {
            fileName: "app/routes/controleConsumo._index.tsx",
            lineNumber: 76,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/controleConsumo._index.tsx",
          lineNumber: 75,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/controleConsumo._index.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo._index.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo._index.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/controleConsumo._index.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/controleConsumo._index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/Profile.acompanharProg/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => AcompanharProgresso,
  links: () => links5
});

// app/styles/acompanharProgresso.css
var acompanharProgresso_default = "/build/_assets/acompanharProgresso-A7FWIFNI.css";

// app/routes/Profile.acompanharProg/Card_IMC.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function CardIMC(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "col p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "cardimc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "card-body p-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "conteudo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h5", { className: "card-title", children: [
        "IMC: ",
        props.IMC
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
        lineNumber: 13,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h5", { className: "card-text", children: [
        "Data: ",
        props.data
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
        lineNumber: 14,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
      lineNumber: 12,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "icon text-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("i", { className: "fa-solid fa-trash mx-2" }, void 0, !1, {
        fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
        lineNumber: 17,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("i", { className: "fa-solid fa-pen-to-square" }, void 0, !1, {
        fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
        lineNumber: 18,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
      lineNumber: 16,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
    lineNumber: 10,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/routes/Profile.acompanharProg/route.tsx
var import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
import_chart.Chart.register(
  import_chart.CategoryScale,
  import_chart.LinearScale,
  import_chart.PointElement,
  import_chart.LineElement,
  import_chart.Title,
  import_chart.Tooltip,
  import_chart.Legend
);
var links5 = () => [
  { rel: "stylesheet", href: acompanharProgresso_default }
];
function AcompanharProgresso() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "conteudoprog", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "row gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "campo-prog col p-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { className: "rotulo", children: "Altura" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { className: "inpProg", type: "number", id: "altura", name: "nome", placeholder: "altura em Cm" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "campo-prog col p-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { className: "rotulo", children: "Peso" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { className: "inpProg", type: "number", id: "peso", name: "text", placeholder: "Peso em Kg", step: "0.01" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "buttonAdd col p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { type: "button", className: "stylebuttonadd", children: "Adicionar" }, void 0, !1, {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center mt-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "row mx-1 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        CardIMC,
        {
          IMC: "23.2",
          data: "23/12/2022"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 88,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        CardIMC,
        {
          IMC: "22.2",
          data: "13/02/2023"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 92,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        CardIMC,
        {
          IMC: "20.2",
          data: "25/03/2023"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 96,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center graphic-imc mt-4 w-md-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_chartjs_2.Line, { options: {
      responsive: !0,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: !1,
          text: "Chart.js Line Chart"
        }
      }
    }, data: {
      labels: ["Dezembro (2022)", "Janeiro", "Fevereiro", "Abril", "Maio"],
      datasets: [
        {
          label: "IMC",
          data: [23.3, 22.2, 20.2, 23, 21.4],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          color: "rgba(255,000,000, 1.0"
        }
      ]
    } }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 105,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.acompanharProg/route.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile.acompanharProg/route.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

// app/routes/Profile.dietasDetalhes.tsx
var Profile_dietasDetalhes_exports = {};
__export(Profile_dietasDetalhes_exports, {
  default: () => DietasDetalhes,
  links: () => links6,
  meta: () => meta5
});

// app/styles/dietasDetalhes.css
var dietasDetalhes_default = "/build/_assets/dietasDetalhes-KAFPZPSD.css";

// app/routes/Profile.dietasDetalhes.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links6 = () => [
  { rel: "stylesheet", href: dietasDetalhes_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta5 = () => ({
  title: "Exerc\xEDcios Generico"
});
function DietasDetalhes() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "container-fluid", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "tituloDieta", children: "Dieta Tal" }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "titulo-refeicao", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Caf\xE9 da Manh\xE3" }, void 0, !1, {
        fileName: "app/routes/Profile.dietasDetalhes.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "botao adiciona", children: "Adicionar" }, void 0, !1, {
        fileName: "app/routes/Profile.dietasDetalhes.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.dietasDetalhes.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "receita", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { className: "imagemComida", src: "/IconeLogo.png", alt: "finge que tem uma imagem aqui" }, void 0, !1, {
        fileName: "app/routes/Profile.dietasDetalhes.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "textos-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "texto", children: "Torrada Integral com Salsa" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "texto", children: "Dificuldade: F\xE1cil" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "texto", children: "Por\xE7\xF5es: 2" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.dietasDetalhes.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "botoes2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "botao", children: "Favoritar" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "botao", children: "Op\xE7\xF5es" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "botao", children: "Excluir" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.dietasDetalhes.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.dietasDetalhes.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "receita", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { className: "imagemComida", src: "/IconeLogo.png", alt: "finge que tem uma imagem aqui" }, void 0, !1, {
        fileName: "app/routes/Profile.dietasDetalhes.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "textos-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "texto", children: "Sanduiche de Peito de Frango" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "texto", children: "Dificuldade: F\xE1cil" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "texto", children: "Por\xE7\xF5es: 1" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.dietasDetalhes.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "botoes2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "botao", children: "Favoritar" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "botao", children: "Op\xE7\xF5es" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "botao", children: "Excluir" }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.dietasDetalhes.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.dietasDetalhes.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.dietasDetalhes.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile.dietasDetalhes.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/controleConsumo.$date/route.tsx
var route_exports3 = {};
__export(route_exports3, {
  default: () => ControleConsumo2,
  links: () => links7,
  loader: () => loader,
  meta: () => meta6
});
var import_chart2 = require("chart.js"), import_react_chartjs_22 = require("react-chartjs-2");
var import_react13 = require("react"), import_react_bootstrap5 = require("react-bootstrap");

// app/routes/controleConsumo.$date/CardInfos.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function CardInfos(props) {
  function handleClickUpdate() {
    props.setUpdateOrInsert("update"), props.handleShow(props.typeCard);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "col-4", style: { width: "10rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "cardcontrole p-2 border rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "conteudo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "card-title", children: [
        "Hor\xE1rio: ",
        props.horario,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
        lineNumber: 22,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "card-text", children: [
        "Qtd: ",
        props.quantidade
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
        lineNumber: 23,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "icon text-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { className: "fa-solid fa-trash mx-2" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
        lineNumber: 26,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("i", { className: "fa-solid fa-pen-to-square pens", onClick: () => {
        handleClickUpdate();
      } }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
        lineNumber: 27,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
      lineNumber: 25,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
    lineNumber: 20,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/routes/controleConsumo.$date/ModalInsert.tsx
var import_react12 = require("react"), import_react_bootstrap4 = require("react-bootstrap"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ModalInsert(props) {
  let [measure, setMeasure] = (0, import_react12.useState)("");
  (0, import_react12.useEffect)(() => {
    props.formFor == "\xC1gua" ? setMeasure("Ml") : setMeasure("Kcal");
  }, [props.formFor]);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap4.Modal, { ...props.modal, size: "sm", centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap4.Modal.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap4.Modal.Title, { children: [
      "Inserir ",
      props.formFor
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 31,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap4.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("label", { htmlFor: "quantidade", className: "form-label", children: "Valor:" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 35,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "number", className: "form-control", id: "quantidade", name: "quantidade", required: !0 }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 36,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { id: "emailHelp", className: "form-text", children: [
        "Insira a quanto ingeriu de ",
        props.formFor,
        " em ",
        measure
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "invalid-feedback", children: "Insira um valor v\xE1lido" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 34,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap4.Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap4.Button, { variant: "danger", onClick: props.modal.onHide, type: "reset", children: "Cancelar" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap4.Button, { variant: "primary", type: "submit", children: "Confirmar" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

// app/routes/controleConsumo.$date/route.tsx
var import_react14 = require("@remix-run/react"), import_core4 = require("@hookstate/core");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
import_chart2.Chart.register(import_chart2.ArcElement, import_chart2.Tooltip, import_chart2.Legend, import_chart2.Title);
async function loader({
  params
}) {
  let urlParams = new URLSearchParams(params.date);
  if (params.date?.includes(".") && urlParams.has("date"))
    return (urlParams.get("date") || "").replaceAll(".", "/");
  throw new Error("Url inv\xE1lida");
}
var meta6 = ({
  data
}) => ({
  title: "Dia: " + data
}), links7 = () => [{ rel: "stylesheet", href: controleConsumo_default }];
function ControleConsumo2() {
  let data = (0, import_react14.useLoaderData)(), [show, setShow] = (0, import_react13.useState)(!1), [contentModal, setContentModal] = (0, import_react13.useState)(""), [updateOrInsert, setUpdateOrInsert] = (0, import_react13.useState)("insert"), handleClose = () => setShow(!1), changeTheme = (0, import_core4.useHookstate)(themePage);
  function handleShow(typeOperation) {
    setShow(!0), setContentModal(typeOperation);
  }
  let [diet, setDiet] = (0, import_react13.useState)("");
  (0, import_react13.useEffect)(() => {
    setDiet(localStorage.getItem("selectedDiet") || "");
  }, []);
  let options = {
    responsive: !0,
    plugins: {
      title: {
        display: !0,
        text: "Quantidade Ideal de \xE1gua: 2L",
        color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"
      },
      legend: {
        display: !0,
        labels: {
          color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"
        }
      }
    }
  }, optionsfood = {
    responsive: !0,
    plugins: {
      title: {
        display: !0,
        text: "Quantidade de Calorias desejadas: 20Kcal",
        color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"
      },
      legend: {
        display: !0,
        labels: {
          color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"
        }
      }
    }
  }, water = {
    labels: ["QT. de \xC1gua", "QT. Restante de \xC1gua"],
    datasets: [
      {
        label: "Controle de \xC1gua",
        data: [500, 2e3],
        color: [changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"],
        backgroundColor: [
          /* 'rgba(175, 205, 223, 1.0)',
          'rgba(211, 211, 211, 1.0)' */
          changeTheme.get() == "contraOn" ? "rgba(255,255,000)" : "rgba(51,69,155, 0.61)",
          changeTheme.get() == "contraOn" ? "rgba(30,30,30)" : "rgba(211, 211, 211, 1.0)"
        ]
      }
    ]
  }, food = {
    labels: ["QT. de Calorias Ingeridas", "QT. Restante de calorias"],
    datasets: [
      {
        label: "Controle de Calorias",
        data: [932, 2500],
        backgroundColor: [
          changeTheme.get() == "contraOn" ? "rgba(255,255,000)" : "rgba(10,153,6,0.60)",
          changeTheme.get() == "contraOn" ? "rgba(30,30,30)" : "rgba(211, 211, 211, 1.0)"
        ]
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/controleConsumo.$date/route.tsx",
      lineNumber: 139,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { id: "conteudo", className: "container-fluid texto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "first-title", children: "Controle de Consumo" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/route.tsx",
        lineNumber: 142,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "first-title", children: data }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/route.tsx",
        lineNumber: 143,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "graphics row mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "controlwater col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "title text-center my-3", children: "E a\xED, j\xE1 bebeu \xE1gua?" }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 148,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "graphicwater d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_chartjs_22.Doughnut, { options, data: water }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 151,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 150,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "container d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "row g-2 pt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              CardInfos,
              {
                horario: "15:00",
                quantidade: "300 Ml",
                setUpdateOrInsert,
                handleShow,
                typeCard: "\xC1gua"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 158,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              CardInfos,
              {
                horario: "12:20",
                quantidade: "200 Ml",
                setUpdateOrInsert,
                handleShow,
                typeCard: "\xC1gua"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 165,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              import_react_bootstrap5.Button,
              {
                variant: "success",
                className: "m-md-4 float-end float-md-none",
                onClick: () => {
                  handleShow("\xC1gua"), setUpdateOrInsert("insert");
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("i", { className: "fa-solid fa-circle-plus fa-2xl" }, void 0, !1, {
                  fileName: "app/routes/controleConsumo.$date/route.tsx",
                  lineNumber: 180,
                  columnNumber: 41
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 174,
                columnNumber: 37
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/controleConsumo.$date/route.tsx",
              lineNumber: 173,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 156,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 154,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/controleConsumo.$date/route.tsx",
          lineNumber: 146,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "controlfood col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "titlefood text-center my-3", children: "O que voc\xEA comeu?" }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 192,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "graphicfood d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_chartjs_22.Doughnut, { options: optionsfood, data: food }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 195,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 194,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "container d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "row g-2 pt-3 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              CardInfos,
              {
                horario: "15:00",
                quantidade: "300 Kcal",
                setUpdateOrInsert,
                handleShow,
                typeCard: "Calorias"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 199,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              CardInfos,
              {
                horario: "12:20",
                quantidade: "200 Kcal",
                setUpdateOrInsert,
                handleShow,
                typeCard: "Calorias"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 206,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              import_react_bootstrap5.Button,
              {
                variant: "success",
                className: "m-md-4 float-end float-md-none",
                onClick: () => {
                  handleShow("Calorias"), setUpdateOrInsert("insert");
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("i", { className: "fa-solid fa-circle-plus fa-2xl" }, void 0, !1, {
                  fileName: "app/routes/controleConsumo.$date/route.tsx",
                  lineNumber: 221,
                  columnNumber: 41
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 215,
                columnNumber: 37
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/controleConsumo.$date/route.tsx",
              lineNumber: 214,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 198,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 197,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "d-flex justify-content-center align-items-center my-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { htmlFor: "Diet", className: "mx-3", children: "Escolha a Dieta:" }, void 0, !1, {
              fileName: "app/routes/controleConsumo.$date/route.tsx",
              lineNumber: 228,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "select",
              {
                className: "form-select selectConsumo",
                "aria-label": "Default select example",
                defaultValue: diet,
                id: "Diet",
                onChange: (e) => {
                  setDiet(e.target.value), localStorage.setItem("selectedDiet", e.target.value);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "", disabled: !0, children: "Escolha uma para base" }, void 0, !1, {
                    fileName: "app/routes/controleConsumo.$date/route.tsx",
                    lineNumber: 236,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "salve", children: "One" }, void 0, !1, {
                    fileName: "app/routes/controleConsumo.$date/route.tsx",
                    lineNumber: 237,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "2", children: "Two" }, void 0, !1, {
                    fileName: "app/routes/controleConsumo.$date/route.tsx",
                    lineNumber: 238,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "3", children: "Three" }, void 0, !1, {
                    fileName: "app/routes/controleConsumo.$date/route.tsx",
                    lineNumber: 239,
                    columnNumber: 33
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 229,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 227,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/controleConsumo.$date/route.tsx",
          lineNumber: 191,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/route.tsx",
        lineNumber: 145,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/route.tsx",
      lineNumber: 140,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      ModalInsert,
      {
        modal: {
          onHide: handleClose,
          show
        },
        formFor: contentModal,
        updateOrInsert
      },
      void 0,
      !1,
      {
        fileName: "app/routes/controleConsumo.$date/route.tsx",
        lineNumber: 248,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/controleConsumo.$date/route.tsx",
      lineNumber: 257,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/controleConsumo.$date/route.tsx",
    lineNumber: 138,
    columnNumber: 5
  }, this);
}

// app/routes/Acessibilidade.tsx
var Acessibilidade_exports = {};
__export(Acessibilidade_exports, {
  default: () => Acessibilidade,
  links: () => links8,
  meta: () => meta7
});

// app/styles/acessibilidade.css
var acessibilidade_default = "/build/_assets/acessibilidade-TBF7W2HG.css";

// app/routes/Acessibilidade.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), meta7 = () => ({
  title: "Acessibilidade"
}), links8 = () => [{ rel: "stylesheet", href: acessibilidade_default }];
function Acessibilidade() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "texto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "text-center py-3", children: "Acessibilidade" }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h5", { className: "texto-justificado container-fluid", children: [
      "Este site foi desenvolvido para que pessoas com defici\xEAncia visual, baixa vis\xE3o, daltonismo, defici\xEAncia auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte, teclas de atalho, tradu\xE7\xE3o para a L\xEDngua Brasileira de Sinais e navega\xE7\xE3o por teclado.Para aumentar a fonte, \xE9 s\xF3 clicar no s\xEDmbolo de A+ em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, \xE9 s\xF3 clicar em A-.Se for necess\xE1rio, voc\xEA tamb\xE9m pode usar o zoom nativo do seu navegador, pressionando as teclas ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("mark", { children: "\u201CCtrl\u201D e \u201C+\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 36,
        columnNumber: 45
      }, this),
      " para aumentar todo o site e ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("mark", { children: "\u201CCtrl\u201D e \u201C-\u201C" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 37,
        columnNumber: 34
      }, this),
      " para diminuir. Para voltar ao padr\xE3o, pressione ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("mark", { children: "\u201CCtrl\u201D e \u201C0\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 38,
        columnNumber: 39
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "text-center pt-5 pb-3", children: "Teclas de atalho por navegadores" }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "text-justify py-1 px-3", children: "Internet Explorer e Google Chrome:" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C1\u201D - ir para o conte\xFAdo" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C2\u201D - ir para o menu" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C3\u201D - ir para o rodap\xE9" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Firefox:" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { className: "text-justify py-1 px-3", children: "\u201CAlt\u201D + \u201CShift\u201D + \u201Cn\xFAmero\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Opera:" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { className: "text-justify py-1 px-3", children: "\u201CShift\u201D + \u201CEscape\u201D + \u201Cn\xFAmero\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Safari e OmniWeb:" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h6", { className: "text-justify py-1 px-3", children: "\u201CCtrl\u201D + \u201Cn\xFAmero\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "text-center pt-5 pb-3", children: "Navega\xE7\xE3o por tabula\xE7\xE3o" }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h5", { className: "text-justify py-2 px-3", children: [
      "Use a tecla Tab para navegar por elementos que recebem a\xE7\xE3o do usu\xE1rio no site, tais como links, bot\xF5es, campos de formul\xE1rio e outros na ordem em que eles s\xE3o apresentados na p\xE1gina, e",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("mark", { children: "Shift + Tab" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      " para retornar. Use as setas direcionais para acessar as informa\xE7\xF5es textuais."
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "text-center pt-5 pb-3", children: "Sugest\xF5es de programas dispon\xEDveis para pessoas com defici\xEAncia" }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "headline text mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Nitrous Voice Flux: controla o computador por voz;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "NVDA: software livre para ler tela \u2013 v\xE1rios idiomas (Windows);" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "YeoSoft Text: leitor de tela em ingl\xEAs e portugu\xEAs;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Jaws for Windows: leitor de tela \u2013 v\xE1rios idiomas;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Virtual Vision: leitor de telas em portugu\xEAs do Brasil;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "DOSVOX: sistema para deficientes visuais (Windows ou Linux);" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "Talckback: leitor de tela dispon\xEDvel em smartphones Android;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: "VLibras: ferramentas gratuitas que traduz conte\xFAdos digitais (texto, \xE1udio e v\xEDdeo) em Portugu\xEAs para Libras." }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Acessibilidade.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/Profile._index/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  default: () => dietasProfile
});
var import_react16 = require("@remix-run/react");

// app/routes/Profile._index/Card_Dieta.tsx
var import_react15 = require("@remix-run/react"), import_sweetalert2 = __toESM(require("sweetalert2")), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function CardDieta(props) {
  function changeAnimation(e) {
    e.currentTarget.className += " fa-shake";
  }
  function changeToDefault(e) {
    e.currentTarget.className = e.currentTarget.className.replace(" fa-shake", "");
  }
  function handleDelete(e) {
    e.preventDefault(), import_sweetalert2.default.fire({
      title: "Quer deletar?",
      showDenyButton: !0,
      /* showCancelButton: true, */
      confirmButtonText: "Deletar",
      denyButtonText: "Cancelar"
    }).then((result) => {
      result.isConfirmed ? import_sweetalert2.default.fire("Deletado!", "", "success") : result.isDenied && import_sweetalert2.default.fire("N\xE3o deletado", "", "info");
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react15.Link, { to: "/profile/dietasDetalhes", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "card-top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "ImageAdress", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "/PastaIcon.png", alt: "Imagem Dieta" }, void 0, !1, {
      fileName: "app/routes/Profile._index/Card_Dieta.tsx",
      lineNumber: 44,
      columnNumber: 40
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/Card_Dieta.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/Card_Dieta.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "card-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "title", children: props?.title }, void 0, !1, {
        fileName: "app/routes/Profile._index/Card_Dieta.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h6", { className: "tag tag-travel", children: "Dieta Perder Peso" }, void 0, !1, {
        fileName: "app/routes/Profile._index/Card_Dieta.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, void 0, !1, {
        fileName: "app/routes/Profile._index/Card_Dieta.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-end iconsCard", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { type: "button", title: "Excluir", className: "buttonCards", onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "i",
          {
            className: "px-2 fa-solid fa-trash text-danger",
            onMouseEnter: changeAnimation,
            onMouseLeave: changeToDefault
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Profile._index/Card_Dieta.tsx",
            lineNumber: 52,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/Profile._index/Card_Dieta.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { type: "button", title: "Atualizar", className: "buttonCards", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "i",
          {
            className: "px-2 fa-solid fa-ellipsis text-info",
            title: "Atualizar",
            onMouseEnter: changeAnimation,
            onMouseLeave: changeToDefault
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Profile._index/Card_Dieta.tsx",
            lineNumber: 59,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/Profile._index/Card_Dieta.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile._index/Card_Dieta.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile._index/Card_Dieta.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile._index/Card_Dieta.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile._index/Card_Dieta.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/Profile._index/route.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function dietasProfile() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "card-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        CardDieta,
        {
          title: "Dieta Sla"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile._index/route.tsx",
          lineNumber: 9,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        CardDieta,
        {
          title: "Dieta Sla"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile._index/route.tsx",
          lineNumber: 12,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        CardDieta,
        {
          title: "Dieta Sla"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile._index/route.tsx",
          lineNumber: 15,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 8,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "container-fluid mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react16.Link, { to: "/CalculadoraNutricional", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { className: "float-end stylebutton me-4 p-0 px-4 py-2", type: "button", children: "Adicionar Dieta" }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 22,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 21,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile._index/route.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/alterarDados.tsx
var alterarDados_exports = {};
__export(alterarDados_exports, {
  default: () => alterarDados,
  links: () => links9,
  meta: () => meta8
});

// app/styles/cadastro.css
var cadastro_default = "/build/_assets/cadastro-JEF3DW7I.css";

// app/routes/alterarDados.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), links9 = () => [
  { rel: "stylesheet", href: cadastro_default }
], meta8 = () => ({
  title: "sla"
});
function alterarDados() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "box", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "box-img fundoPossivel", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
        "Healthy",
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/alterarDados.tsx",
          lineNumber: 22,
          columnNumber: 31
        }, this),
        "Vibes"
      ] }, void 0, !0, {
        fileName: "app/routes/alterarDados.tsx",
        lineNumber: 22,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { src: "/cadImg1.jpg", alt: "img temporaria" }, void 0, !1, {
        fileName: "app/routes/alterarDados.tsx",
        lineNumber: 23,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/alterarDados.tsx",
      lineNumber: 21,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "form-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { children: "Altera\xE7\xE3o de Dados" }, void 0, !1, {
        fileName: "app/routes/alterarDados.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("form", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "nome", children: "Nome" }, void 0, !1, {
            fileName: "app/routes/alterarDados.tsx",
            lineNumber: 29,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "text", name: "nome", placeholder: "Digite o seu nome completo", required: !0 }, void 0, !1, {
            fileName: "app/routes/alterarDados.tsx",
            lineNumber: 30,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/alterarDados.tsx",
          lineNumber: 28,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "email", children: "E-mail" }, void 0, !1, {
            fileName: "app/routes/alterarDados.tsx",
            lineNumber: 33,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "email", name: "email", placeholder: "Digite seu e-mail", required: !0 }, void 0, !1, {
            fileName: "app/routes/alterarDados.tsx",
            lineNumber: 34,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/alterarDados.tsx",
          lineNumber: 32,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "senha", children: "Senha" }, void 0, !1, {
            fileName: "app/routes/alterarDados.tsx",
            lineNumber: 37,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "password", name: "senha", placeholder: "Digite o sua senha", required: !0 }, void 0, !1, {
            fileName: "app/routes/alterarDados.tsx",
            lineNumber: 38,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/alterarDados.tsx",
          lineNumber: 36,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { children: "Salvar" }, void 0, !1, {
          fileName: "app/routes/alterarDados.tsx",
          lineNumber: 41,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/alterarDados.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/alterarDados.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/alterarDados.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/alterarDados.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/alterarDados.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/Exercicios/route.tsx
var route_exports5 = {};
__export(route_exports5, {
  default: () => Exercicios,
  links: () => links10,
  meta: () => meta9
});

// app/routes/Exercicios/Exercicio_Base.tsx
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ExercicioBase(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react17.Link, { to: `/ExercicioDetalhes/exercise=${props.id}`, style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "card-top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "ImageAdress", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: `/treino/${props.imgSrc}`, alt: props.altImg }, void 0, !1, {
      fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "card-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "title", children: props.cardTitle }, void 0, !1, {
        fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h6", { className: "tag tag-travel", children: "Muscula\xE7\xE3o" }, void 0, !1, {
        fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: props.textoCard }, void 0, !1, {
        fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/Exercicios/Filtro_Barra.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function FiltroBarra(props) {
  return (
    /* n to conseguindo fzr esse fdp ser do tamanho do body */
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "d-flex flex-column flex-shrink-0 p-3 bg-light barraDeFiltros col col-md-4", id: "barraDeFiltros", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("a", { href: "/", className: "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("svg", { className: "bi me-2", width: "40", height: "32" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 14,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "fs-4", children: "Filtros" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("hr", {}, void 0, !1, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { className: "mb-1 listaCategoria", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { className: "btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro", "data-bs-toggle": "collapse", "data-bs-target": "#areas-collapse", "aria-expanded": "true", children: "\xC1reas" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "collapse show", id: "areas-collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { className: "btn-toggle-nav list-unstyled fw-normal pb-1 small grupoCategoria", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 26,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Alongamento" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 27,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 25,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 24,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 34,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Perna" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 35,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 33,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 32,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 42,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Bra\xE7o" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 43,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 41,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 40,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 50,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Tr\xEDceps" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 51,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 49,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 48,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 58,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Peito" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 59,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 57,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 56,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("hr", {}, void 0, !1, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { className: "mb-1 listaCategoria", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { className: "btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro", "data-bs-toggle": "collapse", "data-bs-target": "#intensidade-collapse", "aria-expanded": "true", children: "Intensidade" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "collapse", id: "intensidade-collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { className: "btn-toggle-nav list-unstyled fw-normal pb-1 small grupoCategoria", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "range", className: "form-range", min: "0", max: "3", defaultValue: "0", id: "customRange2" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 74,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 73,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("hr", {}, void 0, !1, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { className: "mb-1 listaCategoria", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { className: "btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro", "data-bs-toggle": "collapse", "data-bs-target": "#duracao-collapse", "aria-expanded": "true", children: "Dura\xE7\xE3o" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "collapse", id: "duracao-collapse", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { className: "form-check-input", type: "radio", name: "flexRadioDefault", id: "flexRadioDefault1" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 85,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexRadioDefault1", children: "Curto" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 86,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 84,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { className: "form-check-input", type: "radio", name: "flexRadioDefault", id: "flexRadioDefault1" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 91,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexRadioDefault1", children: "Longo" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 92,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 90,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  );
}

// app/styles/exercicios.css
var exercicios_default = "/build/_assets/exercicios-TTQCOVTH.css";

// app/routes/Exercicios/route.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), links10 = () => [
  { rel: "stylesheet", href: exercicios_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta9 = () => ({
  title: "Exerc\xEDcios"
});
function Exercicios() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("main", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Exercicios/route.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(FiltroBarra, {}, void 0, !1, {
        fileName: "app/routes/Exercicios/route.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("section", { className: "card-container col-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "peito.png",
            altImg: "Homem_PranchaCurto",
            cardTitle: "Prancha - Longo",
            textoCard: "\xC9 o exerc\xEDcio ideal para trabalhar a musculatura abdominal."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 31,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "abraco.png",
            altImg: "Mulher_BracoCurto",
            cardTitle: "Bra\xE7o - Curto",
            textoCard: "Treinar os bra\xE7os evita problemas futuros de mobilidade."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 38,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "pernas.png",
            altImg: "Mulher_agachamentoCurto",
            cardTitle: "Agachamento - Curto",
            textoCard: "Trabalha os membros e m\xFAsculos inferiores de uma forma bem completa."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 45,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "alongamento.png",
            altImg: "Mulher_alogamentoCurto",
            cardTitle: "Alongamento - Curto",
            textoCard: "Reduz o encurtamento muscular e melhora a coordena\xE7\xE3o motora."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 52,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "funcional.png",
            altImg: "Homem_FuncionalCurto",
            cardTitle: "Funcional - Curto",
            textoCard: "O treino funcional ajuda a fortalecer os m\xFAsculos, emagrecer ou melhorar o condicionamento f\xEDsico."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 59,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "prancha.jpg",
            altImg: "Exercicio_Prancha",
            cardTitle: "Prancha - Curto",
            textoCard: "Pode auxiliar a coluna lombar e a pelve a manterem a estabilidade do tronco."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 66,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "triceps.png",
            altImg: "Mulher_tricepsCurto",
            cardTitle: "Triceps - Curto",
            textoCard: "O treino de tr\xEDceps contribui para o crescimento e desenvolvimento dos m\xFAsculos."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 73,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "abdominal.png",
            altImg: "Homem_AbdominalCurto",
            cardTitle: "Abdominal - Curto",
            textoCard: "O abdominal pode ajudar na diminui\xE7\xE3o do desgaste da coluna, reduzindo significativamente as dores nas costas."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 80,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "peito.png",
            altImg: "Exercicio_Peito",
            cardTitle: "Peito - Curto",
            textoCard: "O aumento do t\xF4nus abaixo do tecido gorduroso que forma o seio, o que dar\xE1 mais sustenta\xE7\xE3o a ele, al\xE9m de um maior equil\xEDbrio corporal."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 87,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "alongamento_avancado.png",
            altImg: "Exercicio_Alongamento",
            cardTitle: "Alongamento - Longo",
            textoCard: " O alongamento ajuda a Melhorar a circula\xE7\xE3o do sangue, prevenindo problemas articulares."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 94,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "braco_longo.jpg",
            altImg: "Exercicio_Braco",
            cardTitle: "Bra\xE7o - Longo",
            textoCard: "O treino b\xEDceps ajuda muito a aumentar a estabilidade do corpo.E contribui para a realiza\xE7\xE3o dos movimentos do dia a dia."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 101,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          ExercicioBase,
          {
            id: "1",
            imgSrc: "funcional_avancado.png",
            altImg: "Exercicio_Funcional",
            cardTitle: "Funcional - Longo",
            textoCard: "O treino usa os m\xFAsculos para movimentos naturais do corpo para melhorar a for\xE7a e a resist\xEAncia."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Exercicios/route.tsx",
            lineNumber: 108,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/Exercicios/route.tsx",
        lineNumber: 30,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Exercicios/route.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/Exercicios/route.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/Exercicios/route.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Exercicios/route.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro.tsx
var cadastro_exports = {};
__export(cadastro_exports, {
  default: () => Index,
  links: () => links11,
  meta: () => meta10
});
var import_react18 = require("@remix-run/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), links11 = () => [
  { rel: "stylesheet", href: cadastro_default }
], meta10 = () => ({
  title: "Cadastro"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "box", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "box-img fundoPossivel", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: [
        "Healthy",
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 22,
          columnNumber: 21
        }, this),
        "Vibes"
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("img", { src: "/cadImg1.jpg", alt: "img temporaria" }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "form-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { children: "Cadastro" }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("form", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "nome", children: "Nome Completo" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "text", name: "nome", placeholder: "Digite o seu nome completo", required: !0 }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "email", children: "E-mail" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "email", name: "email", placeholder: "Digite seu e-mail", required: !0 }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "senha", children: "Senha" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "password", name: "senha", placeholder: "Digite o sua senha", required: !0 }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "Confirmarsenha", children: "Confirmar Senha" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "password", name: "Confirmarsenha", placeholder: "Confirme a senha", required: !0 }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { children: "Cadastrar" }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "link-login", children: [
          "J\xE1 \xE9 um membro?",
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react18.Link, { to: "/login", children: "Login" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 47,
            columnNumber: 54
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cadastro.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/Receitas/route.tsx
var route_exports6 = {};
__export(route_exports6, {
  default: () => Receitas,
  links: () => links12,
  meta: () => meta11
});

// app/styles/receitas.css
var receitas_default = "/build/_assets/receitas-WA76WDOA.css";

// app/routes/Receitas/CardReceita.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function CardReceita(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "col-13 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "card-horizontal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "img-square-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "img",
        {
          className: "",
          src: "/PastaIcon.png",
          alt: "Card cap"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Receitas/CardReceita.tsx",
          lineNumber: 17,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/Receitas/CardReceita.tsx",
        lineNumber: 16,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "card-body", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h4", { className: "card-title", children: props?.title }, void 0, !1, {
          fileName: "app/routes/Receitas/CardReceita.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "card-text", children: [
          "Dificuldade: ",
          props?.dificuldade
        ] }, void 0, !0, {
          fileName: "app/routes/Receitas/CardReceita.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: [
          props?.porcao,
          " Por\xE7\xE3o(\xF5es)"
        ] }, void 0, !0, {
          fileName: "app/routes/Receitas/CardReceita.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Receitas/CardReceita.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Receitas/CardReceita.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "card-footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("small", { className: "text-muted", children: "Last updated 3 mins ago" }, void 0, !1, {
      fileName: "app/routes/Receitas/CardReceita.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/Receitas/CardReceita.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Receitas/CardReceita.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/Receitas/CardReceita.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/Receitas/CardReceita.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/Receitas/CardReceita.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/Receitas/route.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), links12 = () => [
  { rel: "stylesheet", href: receitas_default }
], meta11 = () => ({
  title: "Receitas"
});
function Receitas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "blocoReceitas", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "container-receita", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { children: "Caf\xE9 da Manh\xE3" }, void 0, !1, {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 30,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "container-gerar", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { className: "gerarNov", children: "Gerar Novamente" }, void 0, !1, {
            fileName: "app/routes/Receitas/route.tsx",
            lineNumber: 32,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("img", { className: "gerarNov", src: "/IconRestaurar.png", alt: "" }, void 0, !1, {
            fileName: "app/routes/Receitas/route.tsx",
            lineNumber: 33,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 31,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(CardReceita, { title: "P\xE3o com Ovo", dificuldade: "F\xE1cil", porcao: "1" }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(CardReceita, { title: "Caf\xE9", dificuldade: "F\xE1cil", porcao: "2" }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Receitas/route.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/Profile/route.tsx
var route_exports7 = {};
__export(route_exports7, {
  default: () => Profile,
  links: () => links13,
  meta: () => meta12
});
var import_react19 = require("@remix-run/react");

// app/styles/profile.css
var profile_default = "/build/_assets/profile-VR6MNSXZ.css";

// app/routes/Profile/route.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), meta12 = () => ({
  title: "Perfil"
}), links13 = () => [{ rel: "stylesheet", href: profile_default }];
function Profile() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Profile/route.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("nav", { className: "d-flex container-fluid justify-content-center align-items-center my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "row barraPerfil text-center border rounded pt-3 textNav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react19.Link, { to: "/Profile/Dietas", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h6", { children: "Dietas Salvas" }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 31,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react19.Link, { to: "/Profile/acompanharProg", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h6", { children: "Acompanhar Progresso" }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react19.Link, { to: "/alterarDados", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h6", { children: "Configura\xE7\xF5es" }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile/route.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile/route.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
      fileName: "app/routes/Profile/route.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/Profile/route.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile/route.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/_index/route.tsx
var route_exports8 = {};
__export(route_exports8, {
  default: () => Index2,
  links: () => links14,
  meta: () => meta13
});

// app/styles/home.css
var home_default = "/build/_assets/home-O7XMENOY.css";

// app/routes/_index/CardsHome.tsx
var import_react20 = require("@remix-run/react"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function CardsHome() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "row m-auto cardBox", children: [
    {
      imgSrc: "recursos_home.png",
      altImg: "Pessoa se pesando na balan\xE7a",
      cardTitle: "Calculadora nutricional",
      textoCard: "Monte sua dieta conforme suas necessidades espec\xEDficas",
      link: "/CalculadoraNutricional"
    },
    {
      imgSrc: "exercicio_home.png",
      altImg: "Uma mulher se alongando",
      cardTitle: "Exerc\xEDcios",
      textoCard: "Escolha entre diversos exerc\xEDcios de acordo com suas prioridades",
      link: "/Exercicios"
    },
    {
      imgSrc: "calculadora_home.png",
      altImg: "Um p\xE3o e copo de \xE1gua",
      cardTitle: "Recursos adicionais",
      textoCard: "Monitore seu IMC, consumo de \xE1gua e calorias",
      link: "/profile"
    }
  ].map((card) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "column my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react20.Link, { to: card.link, style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("img", { src: `/home/${card.imgSrc}`, className: "card-img-top", alt: card.altImg }, void 0, !1, {
      fileName: "app/routes/_index/CardsHome.tsx",
      lineNumber: 35,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h5", { className: "card-title", children: card.cardTitle }, void 0, !1, {
      fileName: "app/routes/_index/CardsHome.tsx",
      lineNumber: 36,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "textoCard", children: card.textoCard }, void 0, !1, {
      fileName: "app/routes/_index/CardsHome.tsx",
      lineNumber: 37,
      columnNumber: 37
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/CardsHome.tsx",
    lineNumber: 34,
    columnNumber: 33
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/CardsHome.tsx",
    lineNumber: 33,
    columnNumber: 29
  }, this) }, card.cardTitle, !1, {
    fileName: "app/routes/_index/CardsHome.tsx",
    lineNumber: 32,
    columnNumber: 25
  }, this)) }, void 0, !1, {
    fileName: "app/routes/_index/CardsHome.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

// app/routes/_index/route.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), links14 = () => [{ rel: "stylesheet", href: home_default }], meta13 = () => ({
  title: "Home"
});
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "bannerPrincipal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("img", { src: "/BannerPicV2.png", className: "bannerImage", alt: "Banner com frutas" }, void 0, !1, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "textoCentradoBanner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h1", { className: "Title textoCentradoBannerContent", children: [
          "Melhore sua Vida!",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "Title textoCentradoBannerContentSub", children: [
          "Com nossa ajuda",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "parteFuncoes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h3", { className: "subtitulo", children: "Navegue entre as " }, void 0, !1, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h3", { className: "subtituloPt2", children: "fun\xE7\xF5es do site " }, void 0, !1, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(CardsHome, {}, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Index3,
  links: () => links15,
  meta: () => meta14
});

// app/styles/login.css
var login_default = "/build/_assets/login-SS4AIISW.css";

// app/routes/login.tsx
var import_react21 = require("@remix-run/react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), links15 = () => [{ rel: "stylesheet", href: login_default }], meta14 = () => ({
  title: "Login"
});
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center box", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "img-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { children: [
        "Healthy",
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        "Vibes"
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("img", { src: "/treino/mulherLogin.jpg", alt: "mulher" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("form", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "email", children: "E-mail" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "input",
            {
              type: "email",
              name: "email",
              placeholder: "Digite seu e-mail",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 32,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "senha", children: "Senha" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            "input",
            {
              type: "password",
              name: "senha",
              placeholder: "Digite a sua senha",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 41,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react21.Link, { to: "#", children: "Esqueceu a senha?" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { children: "Entrar" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "link-login", children: [
          "N\xE3o \xE9 um membro?",
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react21.Link, { to: "/cadastro", className: "cadRedirect", children: "Cadastre-se" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FNTQ45LA.js", imports: ["/build/_shared/chunk-JXHNNPNR.js", "/build/_shared/chunk-H36SQQE5.js", "/build/_shared/chunk-JF36ZJ2E.js", "/build/_shared/chunk-JKUASME7.js", "/build/_shared/chunk-ISRSX2TJ.js", "/build/_shared/chunk-N4FG5RPV.js", "/build/_shared/chunk-TVZC3ZTX.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BEV2B7ZU.js", imports: ["/build/_shared/chunk-KDFPXZLR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !0 }, "routes/Acessibilidade": { id: "routes/Acessibilidade", parentId: "root", path: "Acessibilidade", index: void 0, caseSensitive: void 0, module: "/build/routes/Acessibilidade-OCCQRDVG.js", imports: ["/build/_shared/chunk-FMAARA2P.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/CalculadoraNutricional": { id: "routes/CalculadoraNutricional", parentId: "root", path: "CalculadoraNutricional", index: void 0, caseSensitive: void 0, module: "/build/routes/CalculadoraNutricional-IYR5UMT7.js", imports: ["/build/_shared/chunk-VLOXNAGO.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FMAARA2P.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/ExercicioDetalhes.$excId": { id: "routes/ExercicioDetalhes.$excId", parentId: "root", path: "ExercicioDetalhes/:excId", index: void 0, caseSensitive: void 0, module: "/build/routes/ExercicioDetalhes.$excId-ENNRK4OO.js", imports: ["/build/_shared/chunk-FMAARA2P.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Exercicios": { id: "routes/Exercicios", parentId: "root", path: "Exercicios", index: void 0, caseSensitive: void 0, module: "/build/routes/Exercicios-JCPJV2EI.js", imports: ["/build/_shared/chunk-FMAARA2P.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Profile": { id: "routes/Profile", parentId: "root", path: "Profile", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile-MFFETOGX.js", imports: ["/build/_shared/chunk-FMAARA2P.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Profile._index": { id: "routes/Profile._index", parentId: "routes/Profile", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/Profile._index-FAULGVDS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Profile.acompanharProg": { id: "routes/Profile.acompanharProg", parentId: "routes/Profile", path: "acompanharProg", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile.acompanharProg-ZUC4DMPA.js", imports: ["/build/_shared/chunk-DXPYZJJI.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Profile.dietasDetalhes": { id: "routes/Profile.dietasDetalhes", parentId: "routes/Profile", path: "dietasDetalhes", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile.dietasDetalhes-JBLDWSFT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Receitas": { id: "routes/Receitas", parentId: "root", path: "Receitas", index: void 0, caseSensitive: void 0, module: "/build/routes/Receitas-5NKMNNO6.js", imports: ["/build/_shared/chunk-FMAARA2P.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6UTJWESJ.js", imports: ["/build/_shared/chunk-FMAARA2P.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/alterarDados": { id: "routes/alterarDados", parentId: "root", path: "alterarDados", index: void 0, caseSensitive: void 0, module: "/build/routes/alterarDados-LR7O5DYB.js", imports: ["/build/_shared/chunk-3RW55RAI.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/cadastro": { id: "routes/cadastro", parentId: "root", path: "cadastro", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro-4NK2VNEC.js", imports: ["/build/_shared/chunk-3RW55RAI.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/controleConsumo.$date": { id: "routes/controleConsumo.$date", parentId: "root", path: "controleConsumo/:date", index: void 0, caseSensitive: void 0, module: "/build/routes/controleConsumo.$date-HZHGMSB5.js", imports: ["/build/_shared/chunk-5FVIZEQE.js", "/build/_shared/chunk-VLOXNAGO.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FMAARA2P.js", "/build/_shared/chunk-DXPYZJJI.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/controleConsumo._index": { id: "routes/controleConsumo._index", parentId: "root", path: "controleConsumo", index: !0, caseSensitive: void 0, module: "/build/routes/controleConsumo._index-C6IISCBD.js", imports: ["/build/_shared/chunk-5FVIZEQE.js", "/build/_shared/chunk-VLOXNAGO.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FMAARA2P.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-3IQXLK4P.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "2ef41951", hmr: { runtime: "/build/_shared\\chunk-ISRSX2TJ.js", timestamp: 1698601352308 }, url: "/build/manifest-2EF41951.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/ExercicioDetalhes.$excId": {
    id: "routes/ExercicioDetalhes.$excId",
    parentId: "root",
    path: "ExercicioDetalhes/:excId",
    index: void 0,
    caseSensitive: void 0,
    module: ExercicioDetalhes_excId_exports
  },
  "routes/CalculadoraNutricional": {
    id: "routes/CalculadoraNutricional",
    parentId: "root",
    path: "CalculadoraNutricional",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/controleConsumo._index": {
    id: "routes/controleConsumo._index",
    parentId: "root",
    path: "controleConsumo",
    index: !0,
    caseSensitive: void 0,
    module: controleConsumo_index_exports
  },
  "routes/Profile.acompanharProg": {
    id: "routes/Profile.acompanharProg",
    parentId: "routes/Profile",
    path: "acompanharProg",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/Profile.dietasDetalhes": {
    id: "routes/Profile.dietasDetalhes",
    parentId: "routes/Profile",
    path: "dietasDetalhes",
    index: void 0,
    caseSensitive: void 0,
    module: Profile_dietasDetalhes_exports
  },
  "routes/controleConsumo.$date": {
    id: "routes/controleConsumo.$date",
    parentId: "root",
    path: "controleConsumo/:date",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/Acessibilidade": {
    id: "routes/Acessibilidade",
    parentId: "root",
    path: "Acessibilidade",
    index: void 0,
    caseSensitive: void 0,
    module: Acessibilidade_exports
  },
  "routes/Profile._index": {
    id: "routes/Profile._index",
    parentId: "routes/Profile",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports4
  },
  "routes/alterarDados": {
    id: "routes/alterarDados",
    parentId: "root",
    path: "alterarDados",
    index: void 0,
    caseSensitive: void 0,
    module: alterarDados_exports
  },
  "routes/Exercicios": {
    id: "routes/Exercicios",
    parentId: "root",
    path: "Exercicios",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports5
  },
  "routes/cadastro": {
    id: "routes/cadastro",
    parentId: "root",
    path: "cadastro",
    index: void 0,
    caseSensitive: void 0,
    module: cadastro_exports
  },
  "routes/Receitas": {
    id: "routes/Receitas",
    parentId: "root",
    path: "Receitas",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports6
  },
  "routes/Profile": {
    id: "routes/Profile",
    parentId: "root",
    path: "Profile",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports7
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports8
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
