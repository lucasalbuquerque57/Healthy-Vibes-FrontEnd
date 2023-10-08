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
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
var main_default = "/build/_assets/main-W6D2OR2G.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css", integrity: "sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter&display=swap", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@800&display=swap" },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
  { rel: "stylesheet", href: main_default }
];
function Document({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "pt-br", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("script", { src: "https://kit.fontawesome.com/6c49cfa42c.js", crossOrigin: "anonymous" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("script", { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", integrity: "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL", crossOrigin: "anonymous" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("script", { src: "https://kit.fontawesome.com/6c49cfa42c.js", crossOrigin: "anonymous" })
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}) });
}
function ErrorBoundary() {
  let error = (0, import_react2.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: "oopss", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { id: "error-text", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ErrorHandle, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "hmpg", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/", className: "back", children: "Back To Home" }) })
  ] }) }) });
  function ErrorHandle() {
    return (0, import_react2.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
        " ",
        error.status,
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: error.statusText }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: error.data })
    ] }) : error instanceof Error ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Error" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: error.message })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "Unknown Error" });
  }
}

// app/routes/CalculadoraNutricional/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => CalculadoraNutricional,
  links: () => links2,
  meta: () => meta2
});

// app/components/Footer.tsx
var import_react3 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "col pb-4 pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: "/IconeLogo.png", alt: "Logo do HealthyVibes", className: "col-12 col-md-6 logoFooter" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-socials px-4 px-md-0 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", id: "youtube", title: "YouTube", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fa-brands fa-youtube" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", id: "whatsapp", title: "Whatsapp", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fa-brands fa-whatsapp" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", id: "facebook", title: "Facebook", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fa-brands fa-facebook-f" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", id: "instagram", title: "Instagram", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { className: "fa-brands fa-instagram" }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "col d-flex justify-content-center align-items-center pb-4 pt-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "footer-list", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Deixe-nos ajudar voc\xEA" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Receita" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Dietas" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Calculadora" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Exerc\xEDcios" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Controle de \xC1gua" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "col pb-4 pt-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "footer-list", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Bem-vindo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Sobre N\xF3s" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Contato" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Termos de Servi\xE7o" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "#", className: "footer-link", children: "Pol\xEDtica de Privacidade" }) })
    ] }) })
  ] }) });
}

// app/components/Header.tsx
var import_react4 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { className: "navbar navbar-expand-xl", id: "topo", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "container-fluid baseNav", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "navbar-brand trapezio", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "/IconeLogo.png", alt: "Logo do Healthy Vibes", className: "logoHeader" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "navbar-toggler navBarButton", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapsibleNavbar", "aria-controls": "collapsibleNavbar", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { className: "fa-solid fa-bars navBarIcon" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "collapse navbar-collapse navSla", id: "collapsibleNavbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { className: "nav-link", to: "", children: "Receitas" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { className: "nav-link", to: "", children: "Dietas" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { className: "nav-link", to: "/CalculadoraNutricional", children: "Calculadora" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { className: "nav-link", to: "/Exercicios", children: "Exerc\xEDcios" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { className: "nav-link", to: "", children: "Controle de Consumo" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("hr", { className: "nav-item-divider w-100 d-block d-md-none mx-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "profile nav-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "logCadButtons", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { to: "/Login", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "btn  loginButton", children: "Entrar" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { to: "/Cadastro", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "btn  cadButton", children: "Cadastre-se" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "itensAcessibilidade", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "/AcessFontSizeBiggerV2.png", className: "iconeAcessibilidade", title: "Aumentar Fonte", alt: "Aumentar fonte" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "/AcessFontSizeLowerV2.png", className: "iconeAcessibilidade", title: "Diminuir Fonte", alt: "Diminuir Fonte" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "/AcessFontHighConrV2.png", className: "iconeAcessibilidade", title: "Alto contraste", alt: "Alto contraste" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Link, { to: "/Acessibilidade", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "/AcessFontInfoV2.png", className: "iconeAcessibilidade infoAcess", alt: "acesso a acessibilidae" }) })
        ] })
      ] })
    ] })
  ] }) }) });
}

// app/styles/calculadoras.css
var calculadoras_default = "/build/_assets/calculadoras-UH7GUC3F.css";

// app/routes/CalculadoraNutricional/FormCalculadora.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("form", { onSubmit: handleForm, method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "row m-auto cardBox", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            id: "tudo",
            required: !0,
            defaultChecked: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "form-check-label", htmlFor: "tudo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "img",
            {
              className: "card-img-top imgTipoDieta",
              src: "/calculadora/tudo_Cnutricional.png",
              alt: "Variados alimentos"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "card-text cardTxtTipoDieta", children: "Tudo" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            id: "vegetariana",
            required: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { htmlFor: "vegetariana", className: "form-check-label lblFdp", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "img",
            {
              className: "card-img-top imgTipoDieta",
              src: "/calculadora/vegetariana_Cnutricional.png",
              alt: "Diversas frutas e vegetais"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "card-text cardTxtTipoDieta", children: "Vegetariana" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            id: "cetogenica",
            required: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { htmlFor: "cetogenica", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "img",
            {
              className: "card-img-top imgTipoDieta",
              src: "/calculadora/cetogenica_Cnutricional.png",
              alt: "Aveia e um abacate"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "card-text cardTxtTipoDieta", children: "Cetog\xEAnica" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "tituloCategoria", children: "Deseja...?" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "d-flex justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          type: "radio",
          className: "btn-check ",
          name: "options",
          id: "option1",
          autoComplete: "off",
          value: "Perder Peso",
          required: !0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: "btn btn-secondary pontaEsquerda", htmlFor: "option1", children: "Perder peso" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: "btn btn-secondary pontaNenhuma", htmlFor: "option2", children: "Manter-se ativo" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          type: "radio",
          className: "btn-check ",
          name: "options",
          id: "option3",
          autoComplete: "off",
          value: "Manter-se ativo",
          required: !0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: "btn btn-secondary pontaDireita", htmlFor: "option3", children: "Ganhar m\xFAsculo" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "tituloCategoria", children: "Sexo" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "d-flex justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "form-check sexo", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            className: "form-check-input",
            type: "radio",
            name: "flexRadioDefault",
            id: "sexoFeminino",
            required: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: "form-check-label", htmlFor: "sexoFeminino", children: "Feminino" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "form-check sexo", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            className: "form-check-input",
            type: "radio",
            name: "flexRadioDefault",
            id: "sexoMasculino",
            required: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: "form-check-label", htmlFor: "sexoMasculino", children: "Masculino" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "container col-md-3 col-lg-2 pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "row d-flex justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { children: "Idade:" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { className: "form-control border border-secondary ", type: "number", name: "idade", placeholder: "Idade", required: !0 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { children: "Altura" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { className: "form-control border border-secondary", type: "number", name: "altura", placeholder: "Altura em Cm", required: !0 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { children: "Peso" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { className: "form-control border border-secondary", type: "number", name: "peso", placeholder: "Peso em Kg", required: !0 })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "tituloCategoria", children: "N\xEDvel de Atividade" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "container col-lg-2", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("select", { className: "form-select form-select-sm selectCalculadora", "aria-label": "Default select example", defaultValue: "", required: !0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "", disabled: !0, children: "Selecione" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "1", children: "Sedent\xE1rio" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "2", children: "Baixa atividade" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "3", children: "Ativo" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "4", children: "Muito ativo" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "container pt-5 col-lg-2 d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "botaoCalcular w-50", type: "submit", children: "Calcular" }) })
  ] });
}

// app/routes/CalculadoraNutricional/ModalAviso.tsx
var import_react5 = require("react"), import_react_bootstrap = require("react-bootstrap"), import_jsx_runtime6 = require("react/jsx-runtime");
function ModalAviso() {
  let [show, setShow] = (0, import_react5.useState)(!1), handleClose = () => setShow(!1);
  return (0, import_react5.useEffect)(() => {
    setShow(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_react_bootstrap.Modal,
    {
      show,
      onHide: handleClose,
      centered: !0,
      backdrop: "static",
      keyboard: !1,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_bootstrap.Modal.Title, { className: "text-center text-warning fw-bold", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: "fa-solid fa-triangle-exclamation" }),
          " Aviso em nome de sua sa\xFAde"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "alert alert-info border border-info border-2 p-2", children: "Essa calculadora utiliza do c\xE1lculo Gasto Energ\xE9tico Basal (GEB) para determinar quantas calorias, prote\xEDnas e gordura deve-se consumir" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_bootstrap.Modal.Footer, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "alert alert-light", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "fw-bold", children: "Vale Ressaltar:" }),
            " Este site n\xE3o substitui uma consulta com especialistas m\xE9dicos"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_bootstrap.Button, { variant: "success", onClick: handleClose, children: "Estou Ciente" })
        ] })
      ]
    }
  );
}

// app/routes/CalculadoraNutricional/ModalResultado.tsx
var import_react_bootstrap2 = require("react-bootstrap"), import_react6 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime");
function ModalResultado(props) {
  var _a, _b, _c, _d, _e, _f;
  let navigate = (0, import_react6.useNavigate)();
  function navigateReceitas() {
    navigate("/Receitas");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    import_react_bootstrap2.Modal,
    {
      ...props.modal,
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: !0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap2.Modal.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_bootstrap2.Modal.Title, { className: "container-fluid text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "fw-bold", children: "Seu gasto cal\xF3rico por dia \xE9:" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
            (_a = props.resultados) == null ? void 0 : _a.calorias,
            " calorias"
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap2.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container-fluid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "row text-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h4", { children: [
            "Sugerido para: ",
            (_b = props.resultados) == null ? void 0 : _b.opcaoPeso
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "row text-center pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "col-md-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h6", { children: "Calorias Sugeridas" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
                (((_c = props.resultados) == null ? void 0 : _c.calorias) || 0) / 1e3,
                " kcal"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h6", { children: "Carboidratos" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
                (_d = props.resultados) == null ? void 0 : _d.carboidratos,
                " g"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h6", { children: "Prote\xEDnas" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
                (_e = props.resultados) == null ? void 0 : _e.proteina,
                " g"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h6", { children: "Gorduras" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
                (_f = props.resultados) == null ? void 0 : _f.gorduras,
                " g"
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_bootstrap2.Modal.Footer, { className: "d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "botaoCalcular w-50", type: "button", onClick: navigateReceitas, children: "Gerar Receitas" }) })
      ]
    }
  );
}

// app/routes/CalculadoraNutricional/route.tsx
var import_react7 = require("react"), import_jsx_runtime8 = require("react/jsx-runtime"), links2 = () => [
  { rel: "stylesheet", href: calculadoras_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta2 = () => ({
  title: "Calculadora Nutricional"
});
function CalculadoraNutricional() {
  let [show, setShow] = (0, import_react7.useState)(!1), [resultados, setResultados] = (0, import_react7.useState)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("main", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "tituloPagina pt-4", children: "Calculadora Nutricional" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "tituloCategoria", children: "Qual \xE9 o seu tipo de dieta?" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      FormCalculadora,
      {
        show: setShow,
        resultados: setResultados
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ModalResultado,
      {
        modal: {
          show,
          onHide: () => setShow(!1)
        },
        resultados
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ModalAviso, {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Footer, {})
  ] });
}

// app/routes/Profile.acompanharProg.tsx
var Profile_acompanharProg_exports = {};
__export(Profile_acompanharProg_exports, {
  data: () => data,
  default: () => AcompanharProgresso,
  links: () => links3,
  options: () => options
});

// app/styles/acompanharProgresso.css
var acompanharProgresso_default = "/build/_assets/acompanharProgresso-BEERWMNE.css";

// app/routes/Profile.acompanharProg.tsx
var import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2");

// app/components/Card_IMC.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function CardIMC(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "col container-fluid", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "cardimc", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "conteudo", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h5", { className: "card-title", children: [
        "IMC: ",
        props.IMC
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h5", { className: "card-text", children: [
        "Data: ",
        props.data
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "icon", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("i", { className: "fa-solid fa-trash" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("i", { className: "fa-solid fa-pen-to-square pens" })
    ] })
  ] }) }) });
}

// app/routes/Profile.acompanharProg.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
import_chart.Chart.register(
  import_chart.CategoryScale,
  import_chart.LinearScale,
  import_chart.PointElement,
  import_chart.LineElement,
  import_chart.Title,
  import_chart.Tooltip,
  import_chart.Legend
);
var options = {
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
}, labels = ["Dezembro (2022)", "Janeiro", "Fevereiro", "Abril", "Maio"], data = {
  labels,
  datasets: [
    {
      label: "IMC",
      data: [23.3, 22.2, 20.2, 23, 21.4],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
}, links3 = () => [
  { rel: "stylesheet", href: acompanharProgresso_default }
];
function AcompanharProgresso() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "conteudoprog", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "container-prog", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "campo-prog", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "rotulo", children: "Altura" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { type: "text", id: "nome", name: "nome", placeholder: "1.87" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "campo-prog", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: "rotulo", children: "Peso" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { type: "email", id: "email", name: "email", placeholder: "87.6" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "buttonAdd", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", className: "stylebuttonadd", children: "Adicionar" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "card-imc-prog", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        CardIMC,
        {
          IMC: "23.2",
          data: "23/12/2022"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        CardIMC,
        {
          IMC: "22.2",
          data: "13/02/2023"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        CardIMC,
        {
          IMC: "20.2",
          data: "25/03/2023"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "graphic-imc", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_chartjs_2.Line, { options, data }) })
  ] }) });
}

// app/routes/Profile.dietasDetalhes.tsx
var Profile_dietasDetalhes_exports = {};
__export(Profile_dietasDetalhes_exports, {
  default: () => DietasDetalhes,
  links: () => links4
});
var import_react_bootstrap3 = require("react-bootstrap");

// app/styles/dietasDetalhes.css
var dietasDetalhes_default = "/build/_assets/dietasDetalhes-HJ7U42YI.css";

// app/routes/Profile.dietasDetalhes.tsx
var import_jsx_runtime11 = require("react/jsx-runtime"), links4 = () => [
  { rel: "stylesheet", href: dietasDetalhes_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
];
function DietasDetalhes() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "Abas", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    import_react_bootstrap3.Tabs,
    {
      defaultActiveKey: "config",
      id: "fill-tab-example",
      className: "mb-3",
      justify: !0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_bootstrap3.Tab, { eventKey: "dietasSalvas", title: "Dietas Salvas", className: "tab-teste", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "container-fluid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "tituloDieta", children: "Dieta Tal" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "titulo-refeicao", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { children: "Caf\xE9 da Manh\xE3" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao adiciona", children: "Adicionar" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "receita", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { className: "imagemComida", src: "/IconeLogo.png", alt: "finge que tem uma imagem aqui" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "textos-info", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "texto", children: "Torrada Integral com Salsa" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "texto", children: "Dificuldade: F\xE1cil" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "texto", children: "Por\xE7\xF5es: 2" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "botoes2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao", children: "Favoritar" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao", children: "Op\xE7\xF5es" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao", children: "Excluir" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "receita", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { className: "imagemComida", src: "/IconeLogo.png", alt: "finge que tem uma imagem aqui" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "textos-info", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "texto", children: "Sanduiche de Peito de Frango" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "texto", children: "Dificuldade: F\xE1cil" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "texto", children: "Por\xE7\xF5es: 1" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "botoes2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao", children: "Favoritar" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao", children: "Op\xE7\xF5es" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao", children: "Excluir" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_bootstrap3.Tab, { eventKey: "acompanharProg", title: "Acompanhar Progresso", className: "tab-teste", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("form", { className: "input-form", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "group-input", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { children: "Altura" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { name: "altura" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("label", { children: "Peso" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { name: "peso" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao acomp", children: "Adicionar" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "caixas", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "caixa-dados", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "IMC: 27,5" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "Data: 31/02/2012" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao dado", children: "excluir" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao dado", children: "editar" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "caixa-dados", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "IMC: 27,5" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "Data: 31/02/2012" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao dado", children: "excluir" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao dado", children: "editar" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grafico", children: "Gr\xE1fico" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_bootstrap3.Tab, { eventKey: "meusExerc", title: "Meus Exerc\xEDcios", className: "tab-teste", children: "Tab content for Contact" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_bootstrap3.Tab, { eventKey: "config", title: "Configura\xE7\xF5es", className: "tab-teste", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { children: "Alterar Informa\xE7\xF5es de Cadastro" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("form", { className: "input-form", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "edit-group-input", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "row-input", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { name: "edit-nome", placeholder: "Novo nome" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao edit-botao", children: "Salvar" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "row-input", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { name: "edit-email", type: "email", placeholder: "Insira o novo email" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao edit-botao", children: "Salvar" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "row-input", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { name: "edit-senha", type: "password", placeholder: "Insira a nova senha" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { className: "botao edit-botao", children: "Salvar" })
            ] })
          ] }) })
        ] })
      ]
    }
  ) }) }) });
}

// app/routes/controleConsumo.tsx
var controleConsumo_exports = {};
__export(controleConsumo_exports, {
  default: () => ControleConsumo,
  links: () => links5,
  meta: () => meta3,
  options: () => options2,
  optionsfood: () => optionsfood
});
var import_chart2 = require("chart.js"), import_react_chartjs_22 = require("react-chartjs-2");

// app/styles/controleConsumo.css
var controleConsumo_default = "/build/_assets/controleConsumo-Y56ZMASI.css";

// app/components/Card_Agua.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function CardAgua(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "col container-fluid", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "cardcontrole", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "conteudo", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("h5", { className: "card-title", children: [
        "Hor\xE1rio: ",
        props.horario,
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("h5", { className: "card-text", children: [
        "Quantidade: ",
        props.quantidade,
        " ml"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "icon", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("i", { className: "fa-solid fa-trash" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("i", { className: "fa-solid fa-pen-to-square pens" })
    ] })
  ] }) }) });
}

// app/components/Card_Calorias.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function CardCalorias(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "col container-fluid", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "cardcontrolecal", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "conteudo", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h5", { className: "card-title", children: [
        "Hor\xE1rio: ",
        props.horario,
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h5", { className: "card-text", children: [
        "Quantidade: ",
        props.quantidade,
        " kcal"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "icon", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("i", { className: "fa-solid fa-trash" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("i", { className: "fa-solid fa-pen-to-square pens" })
    ] })
  ] }) }) });
}

// app/routes/controleConsumo.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
import_chart2.Chart.register(import_chart2.ArcElement, import_chart2.Tooltip, import_chart2.Legend, import_chart2.Title);
var meta3 = () => ({
  title: "controleConsumo"
}), links5 = () => [{ rel: "stylesheet", href: controleConsumo_default }], options2 = {
  /* scales: {
      y: {
          min: 0,
          max: 100,
      },
  }, */
  responsive: !0,
  plugins: {
    title: {
      display: !1,
      text: "E a\xED, j\xE1 bebeu \xE1gua?"
    }
  }
}, water = {
  options: options2,
  labels: ["QT. de \xC1gua", "QT. Ideal de \xC1gua"],
  datasets: [
    {
      label: "Controle de \xC1gua",
      data: [500, 2e3],
      backgroundColor: [
        "rgba(175, 205, 223, 1.0)",
        "rgba(211, 211, 211, 1.0)"
      ]
    }
  ]
}, optionsfood = {
  /* scales: {
      y: {
          min: 0,
          max: 100,
      },
  }, */
  responsive: !0,
  plugins: {
    title: {
      display: !1,
      text: "O que voc\xEA comeu?"
    }
  }
}, food = {
  labels: ["QT. de Calorias Ingeridas", "QT. Ideal de Calorias"],
  datasets: [
    {
      label: "Controle de Calorias",
      data: [932, 2500],
      backgroundColor: [
        "rgba(144, 238, 144, 1.0)",
        "rgba(211, 211, 211, 1.0)"
      ]
    }
  ]
};
function ControleConsumo() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("main", { id: "conteudo", className: "container-fluid texto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { className: "first-title", children: "Controle de Consumo" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "graphics", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "controlwater", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { className: "title", children: "E a\xED, j\xE1 bebeu \xE1gua?" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "graphicwater", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_chartjs_22.Doughnut, { options: options2, data: water }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                CardAgua,
                {
                  horario: "12:20",
                  quantidade: "200"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                CardAgua,
                {
                  horario: "15:00",
                  quantidade: "300"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "adiciona", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("i", { className: "fa-solid fa-circle-plus fa-2xl" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "controlfood", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { className: "titlefood", children: "O que voc\xEA comeu?" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "graphicfood", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_chartjs_22.Doughnut, { options: optionsfood, data: food }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              CardCalorias,
              {
                horario: "14:43",
                quantidade: "732"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "adiciona", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("i", { className: "fa-solid fa-circle-plus fa-2xl" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Footer, {})
  ] });
}

// app/routes/Acessibilidade.tsx
var Acessibilidade_exports = {};
__export(Acessibilidade_exports, {
  default: () => Acessibilidade,
  links: () => links6,
  meta: () => meta4
});

// app/styles/acessibilidade.css
var acessibilidade_default = "/build/_assets/acessibilidade-LMQNEEF7.css";

// app/routes/Acessibilidade.tsx
var import_jsx_runtime15 = require("react/jsx-runtime"), meta4 = () => ({
  title: "Acessibilidade"
}), links6 = () => [{ rel: "stylesheet", href: acessibilidade_default }];
function Acessibilidade() {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("main", { id: "conteudo", className: "container-fluid texto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "text-center py-3", children: "Acessibilidade" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("h5", { className: "texto-justificado", children: [
        "Este site foi desenvolvido para que pessoas com defici\xEAncia visual, baixa vis\xE3o, daltonismo, defici\xEAncia auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte, teclas de atalho, tradu\xE7\xE3o para a L\xEDngua Brasileira de Sinais e navega\xE7\xE3o por teclado.Para aumentar a fonte, \xE9 s\xF3 clicar no s\xEDmbolo de A+ em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, \xE9 s\xF3 clicar em A-.Se for necess\xE1rio, voc\xEA tamb\xE9m pode usar o zoom nativo do seu navegador, pressionando as teclas ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("mark", { children: "\u201CCtrl\u201D e \u201C+\u201D" }),
        " para aumentar todo o site e ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("mark", { children: "\u201CCtrl\u201D e \u201C-\u201C" }),
        " para diminuir. Para voltar ao padr\xE3o, pressione ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("mark", { children: "\u201CCtrl\u201D e \u201C0\u201D" }),
        "."
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-center pt-5 pb-3", children: "Teclas de atalho por navegadores" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-justify py-1 px-3", children: "Internet Explorer e Google Chrome:" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C1\u201D - ir para o conte\xFAdo" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C2\u201D - ir para o menu" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C3\u201D - ir para o rodap\xE9" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Firefox:" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h6", { className: "text-justify py-1 px-3", children: "\u201CAlt\u201D + \u201CShift\u201D + \u201Cn\xFAmero\u201D" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Opera:" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h6", { className: "text-justify py-1 px-3", children: "\u201CShift\u201D + \u201CEscape\u201D + \u201Cn\xFAmero\u201D" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Safari e OmniWeb:" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h6", { className: "text-justify py-1 px-3", children: "\u201CCtrl\u201D + \u201Cn\xFAmero\u201D" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-center pt-5 pb-3", children: "Navega\xE7\xE3o por tabula\xE7\xE3o" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("h5", { className: "text-justify py-2 px-3", children: [
        "Use a tecla Tab para navegar por elementos que recebem a\xE7\xE3o do usu\xE1rio no site, tais como links, bot\xF5es, campos de formul\xE1rio e outros na ordem em que eles s\xE3o apresentados na p\xE1gina, e",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("mark", { children: "Shift + Tab" }),
        " para retornar. Use as setas direcionais para acessar as informa\xE7\xF5es textuais."
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-center pt-5 pb-3", children: "Sugest\xF5es de programas dispon\xEDveis para pessoas com defici\xEAncia" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "Nitrous Voice Flux: controla o computador por voz;" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "NVDA: software livre para ler tela \u2013 v\xE1rios idiomas (Windows);" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "YeoSoft Text: leitor de tela em ingl\xEAs e portugu\xEAs;" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "Jaws for Windows: leitor de tela \u2013 v\xE1rios idiomas;" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "Virtual Vision: leitor de telas em portugu\xEAs do Brasil;" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "DOSVOX: sistema para deficientes visuais (Windows ou Linux);" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "Talckback: leitor de tela dispon\xEDvel em smartphones Android;" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "VLibras: ferramentas gratuitas que traduz conte\xFAdos digitais (texto, \xE1udio e v\xEDdeo) em Portugu\xEAs para Libras." })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "my-2", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "btn-builder mx-2 p-2 px-4 rounded col-md-2 col-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "obsComp col my-2" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "my-2", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "btn-builder mx-2 p-2 px-4 rounded col-md-2 col-2" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "obsComp col my-2" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Footer, {})
  ] });
}

// app/routes/Profile.dietas/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => dietasProfile
});
var import_react9 = require("@remix-run/react");

// app/routes/Profile.dietas/Card_Dieta.tsx
var import_react8 = require("@remix-run/react"), import_jsx_runtime16 = require("react/jsx-runtime");
function CardDieta(props) {
  function changeAnimation(e) {
    e.currentTarget.className += " fa-shake";
  }
  function changeToDefault(e) {
    e.currentTarget.className = e.currentTarget.className.replace(" fa-shake", "");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react8.Link, { to: "", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "card-top", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "ImageAdress", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: "/PastaIcon.png", alt: "Imagem Dieta" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "card-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "title", children: props == null ? void 0 : props.title }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h6", { className: "tag tag-travel", children: "Dieta Perder Peso" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "text-end iconsCard", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", title: "Excluir", style: { border: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "i",
          {
            className: "px-2 fa-solid fa-trash text-danger",
            onMouseEnter: changeAnimation,
            onMouseLeave: changeToDefault
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", title: "Excluir", style: { border: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "i",
          {
            className: "px-2 fa-solid fa-ellipsis text-info",
            title: "Atualizar",
            onMouseEnter: changeAnimation,
            onMouseLeave: changeToDefault
          }
        ) })
      ] })
    ] })
  ] }) });
}

// app/routes/Profile.dietas/route.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function dietasProfile() {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "card-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        CardDieta,
        {
          title: "Dieta Sla"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        CardDieta,
        {
          title: "Dieta Sla"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        CardDieta,
        {
          title: "Dieta Sla"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "container-fluid mb-5", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react9.Link, { to: "/CalculadoraNutricional", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { className: "float-end stylebutton me-4 p-0 px-4 py-2", type: "button", children: "Adicionar Dieta" }) }) })
  ] });
}

// app/routes/Profile._index.tsx
var Profile_index_exports = {};
__export(Profile_index_exports, {
  default: () => homeProfile
});
var import_jsx_runtime18 = require("react/jsx-runtime");
function homeProfile() {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h1", { className: "titulo", children: "Alterar informa\xE7\xF5es de cadastro" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "container-fluid d-flex justify-content-center align-items-center box", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "img-box", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { src: "/treino/treino.jpg", alt: "mulher na esteira" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "form-box", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("form", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "nome", children: "Nome" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "text", name: "nome", placeholder: "Atualize seu nome", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "email", children: "E-mail" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "email", name: "email", placeholder: "Atualize seu e-mail", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "input-group w50", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "senha", children: "Senha" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "password", name: "senha", placeholder: "Atualize a sua senha", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { children: "Atualizar" }) })
      ] }) })
    ] })
  ] });
}

// app/routes/Exercicios.tsx
var Exercicios_exports = {};
__export(Exercicios_exports, {
  default: () => Exercicios,
  links: () => links7,
  meta: () => meta5
});

// app/components/Exercicio_Base.tsx
var import_react10 = require("@remix-run/react"), import_jsx_runtime19 = require("react/jsx-runtime");
function Exercicio_Base(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react10.Link, { to: "", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "card-top", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "ImageAdress", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: "/treino/abdominal.png", alt: "Unsplash Photo" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "card-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "title", children: "Maromba" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h6", { className: "tag tag-travel", children: "Muscula\xE7\xE3o" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] })
  ] }) });
}

// app/components/Filtro_Barra.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function Filtro_Barra(props) {
  return (
    /* n to conseguindo fzr esse fdp ser do tamanho do body */
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "d-flex flex-column flex-shrink-0 p-3 bg-light barraDeFiltros", id: "barraDeFiltros", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("a", { href: "/", className: "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { className: "bi me-2", width: "40", height: "32" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "fs-4", children: "Filtros" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("hr", {}),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("li", { className: "mb-1 listaCategoria", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro", "data-bs-toggle": "collapse", "data-bs-target": "#areas-collapse", "aria-expanded": "true", children: "\xC1reas" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "collapse show", id: "areas-collapse", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("ul", { className: "btn-toggle-nav list-unstyled fw-normal pb-1 small grupoCategoria", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Alongamento" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Perna" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Bra\xE7o" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Tr\xEDceps" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Peito" })
          ] }) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("hr", {}),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("li", { className: "mb-1 listaCategoria", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro", "data-bs-toggle": "collapse", "data-bs-target": "#intensidade-collapse", "aria-expanded": "true", children: "Intensidade" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "collapse show", id: "intensidade-collapse", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "btn-toggle-nav list-unstyled fw-normal pb-1 small grupoCategoria", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { type: "range", className: "form-range", min: "0", max: "3", defaultValue: "0", id: "customRange2" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("hr", {}),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("li", { className: "mb-1 listaCategoria", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro", "data-bs-toggle": "collapse", "data-bs-target": "#duracao-collapse", "aria-expanded": "true", children: "Dura\xE7\xE3o" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "collapse show", id: "duracao-collapse", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { className: "form-check-input", type: "radio", name: "flexRadioDefault", id: "flexRadioDefault1" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "form-check-label", htmlFor: "flexRadioDefault1", children: "Curto" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { className: "form-check-input", type: "radio", name: "flexRadioDefault", id: "flexRadioDefault1" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("label", { className: "form-check-label", htmlFor: "flexRadioDefault1", children: "Longo" })
          ] })
        ] })
      ] })
    ] })
  );
}

// app/styles/exercicios.css
var exercicios_default = "/build/_assets/exercicios-ZMM34D3I.css";

// app/routes/Exercicios.tsx
var import_jsx_runtime21 = require("react/jsx-runtime"), links7 = () => [
  { rel: "stylesheet", href: exercicios_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta5 = () => ({
  title: "Exerc\xEDcios"
});
function Exercicios() {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("main", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "container-fluid d-flex align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Filtro_Barra, {}),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("section", { className: "card-container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Exercicio_Base,
          {
            title: "Dieta Sla"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Exercicio_Base,
          {
            title: "Dieta Sla"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Exercicio_Base,
          {
            title: "Dieta Sla"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Exercicio_Base,
          {
            title: "Dieta Sla"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Exercicio_Base,
          {
            title: "Dieta Sla"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Exercicio_Base,
          {
            title: "Dieta Sla"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Footer, {})
  ] });
}

// app/routes/cadastro.tsx
var cadastro_exports = {};
__export(cadastro_exports, {
  default: () => Index,
  links: () => links8,
  meta: () => meta6
});

// app/styles/cadastro.css
var cadastro_default = "/build/_assets/cadastro-WMWW46DG.css";

// app/routes/cadastro.tsx
var import_react11 = require("@remix-run/react"), import_jsx_runtime22 = require("react/jsx-runtime"), links8 = () => [
  { rel: "stylesheet", href: cadastro_default }
], meta6 = () => ({
  title: "Cadastro"
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("body", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "box", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "box-img", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
        "Healthy",
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
        "Vibes"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { src: "/cadImg1.png", alt: "img temporaria" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "form-box", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "Cadastro" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("form", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { htmlFor: "nome", children: "Nome Completo" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: "text", name: "nome", placeholder: "Digite o seu nome completo", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { htmlFor: "email", children: "E-mail" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: "email", name: "email", placeholder: "Digite seu e-mail", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { htmlFor: "senha", children: "Senha" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: "password", name: "senha", placeholder: "Digite o sua senha", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { htmlFor: "Confirmarsenha", children: "Confirmar Senha" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: "password", name: "Confirmarsenha", placeholder: "Confirme a senha", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { children: "Cadastrar" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "link-login", children: [
          "J\xE1 \xE9 um membro?",
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react11.Link, { to: "/login", children: "Login" })
        ] })
      ] })
    ] })
  ] }) });
}

// app/routes/Profile/route.tsx
var route_exports3 = {};
__export(route_exports3, {
  default: () => Profile,
  links: () => links9,
  meta: () => meta7
});
var import_react12 = require("@remix-run/react");

// app/styles/profile.css
var profile_default = "/build/_assets/profile-QDAXPXA5.css";

// app/routes/Profile/route.tsx
var import_jsx_runtime23 = require("react/jsx-runtime"), meta7 = () => ({
  title: "Perfil"
}), links9 = () => [{ rel: "stylesheet", href: profile_default }];
function Profile() {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("nav", { className: "d-flex container-fluid justify-content-center align-items-center my-4", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "row barraPerfil text-center border rounded pt-3 textNav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react12.Link, { to: "/Profile/Dietas", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h6", { children: "Dietas Salvas" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react12.Link, { to: "/Profile/Dietas", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h6", { children: "Acompanhar Progresso" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react12.Link, { to: "/Profile/Dietas", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h6", { children: "Meus Exerc\xEDcios" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react12.Link, { to: "/Profile", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h6", { children: "Configura\xE7\xF5es" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react12.Outlet, {}),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Footer, {})
  ] });
}

// app/routes/_index/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  default: () => Index2,
  links: () => links10,
  meta: () => meta8
});

// app/styles/home.css
var home_default = "/build/_assets/home-SEEYU25A.css";

// app/routes/_index/CardsHome.tsx
var import_react13 = require("@remix-run/react"), import_jsx_runtime24 = require("react/jsx-runtime");
function CardsHome() {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "row m-auto cardBox", children: [
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
      link: "/"
    }
  ].map((card) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "column", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react13.Link, { to: card.link, style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("img", { src: `/home/${card.imgSrc}`, className: "card-img-top", alt: card.altImg }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h5", { className: "card-title", children: card.cardTitle }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "textoCard", children: card.textoCard })
  ] }) }) }, card.cardTitle)) });
}

// app/routes/_index/route.tsx
var import_jsx_runtime25 = require("react/jsx-runtime"), links10 = () => [{ rel: "stylesheet", href: home_default }], meta8 = () => ({
  title: "Home"
});
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "bannerPrincipal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { src: "/BannerPicV2.png", className: "bannerImage", alt: "Banner com frutas" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "textoCentradoBanner", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("h1", { className: "Title textoCentradoBannerContent", children: [
          "Melhore sua Vida!",
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("h2", { className: "Title textoCentradoBannerContentSub", children: [
          "Com nossa ajuda",
          " "
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "parteFuncoes", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h3", { className: "subtitulo", children: "Navegue entre as " }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h3", { className: "subtituloPt2", children: "fun\xE7\xF5es do site " })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CardsHome, {}),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Footer, {})
  ] });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Index3,
  links: () => links11,
  meta: () => meta9
});

// app/styles/login.css
var login_default = "/build/_assets/login-NCQ6GLZ5.css";

// app/routes/login.tsx
var import_react14 = require("@remix-run/react"), import_jsx_runtime26 = require("react/jsx-runtime"), links11 = () => [
  { rel: "stylesheet", href: login_default }
], meta9 = () => ({
  title: "Login"
});
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "container-fluid d-flex justify-content-center align-items-center box", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "img-box", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("p", { children: [
        "Healthy",
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
        "Vibes"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("img", { src: "/treino/mulherLogin.jpg", alt: "mulher" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "form-box", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h1", { children: "Login" }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("form", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("label", { htmlFor: "email", children: "E-mail" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("input", { type: "email", name: "email", placeholder: "Digite seu e-mail", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("label", { htmlFor: "senha", children: "Senha" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("input", { type: "password", name: "senha", placeholder: "Digite a sua senha", required: !0 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react14.Link, { to: "#", children: "Esqueceu a senha?" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("button", { children: "Entrar" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("p", { className: "link-login", children: [
          "N\xE3o \xE9 um membro?",
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react14.Link, { to: "/cadastro", className: "cadRedirect", children: "Cadastre-se" })
        ] })
      ] })
    ] })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WNV4U2EY.js", imports: ["/build/_shared/chunk-FODBKIUL.js", "/build/_shared/chunk-I5GAW7XJ.js", "/build/_shared/chunk-NG7227J5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5REBQESZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/Acessibilidade": { id: "routes/Acessibilidade", parentId: "root", path: "Acessibilidade", index: void 0, caseSensitive: void 0, module: "/build/routes/Acessibilidade-OCMIJ3SX.js", imports: ["/build/_shared/chunk-Z5LGJ6VV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/CalculadoraNutricional": { id: "routes/CalculadoraNutricional", parentId: "root", path: "CalculadoraNutricional", index: void 0, caseSensitive: void 0, module: "/build/routes/CalculadoraNutricional-CVLNRET7.js", imports: ["/build/_shared/chunk-K35JXJSP.js", "/build/_shared/chunk-Z5LGJ6VV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Exercicios": { id: "routes/Exercicios", parentId: "root", path: "Exercicios", index: void 0, caseSensitive: void 0, module: "/build/routes/Exercicios-5YHPOGY5.js", imports: ["/build/_shared/chunk-Z5LGJ6VV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Profile": { id: "routes/Profile", parentId: "root", path: "Profile", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile-VLY3BP3S.js", imports: ["/build/_shared/chunk-Z5LGJ6VV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Profile._index": { id: "routes/Profile._index", parentId: "routes/Profile", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/Profile._index-CXJDZTQC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Profile.acompanharProg": { id: "routes/Profile.acompanharProg", parentId: "routes/Profile", path: "acompanharProg", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile.acompanharProg-4WXOHKQT.js", imports: ["/build/_shared/chunk-MERYSKC7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Profile.dietas": { id: "routes/Profile.dietas", parentId: "routes/Profile", path: "dietas", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile.dietas-NV6ZSFG6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Profile.dietasDetalhes": { id: "routes/Profile.dietasDetalhes", parentId: "routes/Profile", path: "dietasDetalhes", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile.dietasDetalhes-DXA5RK4J.js", imports: ["/build/_shared/chunk-K35JXJSP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DMFXCHTA.js", imports: ["/build/_shared/chunk-Z5LGJ6VV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cadastro": { id: "routes/cadastro", parentId: "root", path: "cadastro", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro-7VRSREGV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/controleConsumo": { id: "routes/controleConsumo", parentId: "root", path: "controleConsumo", index: void 0, caseSensitive: void 0, module: "/build/routes/controleConsumo-FBF5V7ZJ.js", imports: ["/build/_shared/chunk-MERYSKC7.js", "/build/_shared/chunk-Z5LGJ6VV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-FL7B735O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "5fe808dc", hmr: void 0, url: "/build/manifest-5FE808DC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !1, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/CalculadoraNutricional": {
    id: "routes/CalculadoraNutricional",
    parentId: "root",
    path: "CalculadoraNutricional",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/Profile.acompanharProg": {
    id: "routes/Profile.acompanharProg",
    parentId: "routes/Profile",
    path: "acompanharProg",
    index: void 0,
    caseSensitive: void 0,
    module: Profile_acompanharProg_exports
  },
  "routes/Profile.dietasDetalhes": {
    id: "routes/Profile.dietasDetalhes",
    parentId: "routes/Profile",
    path: "dietasDetalhes",
    index: void 0,
    caseSensitive: void 0,
    module: Profile_dietasDetalhes_exports
  },
  "routes/controleConsumo": {
    id: "routes/controleConsumo",
    parentId: "root",
    path: "controleConsumo",
    index: void 0,
    caseSensitive: void 0,
    module: controleConsumo_exports
  },
  "routes/Acessibilidade": {
    id: "routes/Acessibilidade",
    parentId: "root",
    path: "Acessibilidade",
    index: void 0,
    caseSensitive: void 0,
    module: Acessibilidade_exports
  },
  "routes/Profile.dietas": {
    id: "routes/Profile.dietas",
    parentId: "routes/Profile",
    path: "dietas",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/Profile._index": {
    id: "routes/Profile._index",
    parentId: "routes/Profile",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: Profile_index_exports
  },
  "routes/Exercicios": {
    id: "routes/Exercicios",
    parentId: "root",
    path: "Exercicios",
    index: void 0,
    caseSensitive: void 0,
    module: Exercicios_exports
  },
  "routes/cadastro": {
    id: "routes/cadastro",
    parentId: "root",
    path: "cadastro",
    index: void 0,
    caseSensitive: void 0,
    module: cadastro_exports
  },
  "routes/Profile": {
    id: "routes/Profile",
    parentId: "root",
    path: "Profile",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports4
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
  publicPath,
  routes
});
