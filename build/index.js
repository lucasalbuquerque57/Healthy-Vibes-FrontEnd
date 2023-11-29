var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: !0 });
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
var main_default = "/build/_assets/main-YLX2TL2F.css";

// app/root.tsx
var import_react_vlibras = __toESM(require("@moreiraste/react-vlibras")), import_core2 = require("@hookstate/core");

// app/script/changeTheme.ts
var import_core = require("@hookstate/core"), themePage = (0, import_core.hookstate)("");

// node_modules/primereact/resources/themes/lara-light-indigo/theme.css
var theme_default = "/build/_assets/theme-65KC4JXP.css";

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

// app/routes/Profile.dietasDetalhes.$dietaID/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => DietasDetalhes,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});

// app/styles/detalhesDietas.css
var detalhesDietas_default = "/build/_assets/detalhesDietas-Y2FONCJ3.css";

// app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx
var import_react3 = require("@remix-run/react");

// app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx
var import_react_bootstrap = require("react-bootstrap"), import_sweetalert2 = __toESM(require("sweetalert2")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function CardDietaDetalhe(props) {
  function image() {
    return props.image != null ? `data:image/png;base64,${Buffer.from(props.image.img.data).toString("base64")}` : "/IconeLogo.png";
  }
  function handleDelete(e) {
    e.preventDefault(), import_sweetalert2.default.fire({
      title: "Quer deletar?",
      showDenyButton: !0,
      /* showCancelButton: true, */
      denyButtonText: "Cancelar",
      confirmButtonText: "Deletar"
    }).then((result) => {
      result.isConfirmed ? import_sweetalert2.default.fire("Deletado!", "", "success") : result.isDenied && import_sweetalert2.default.fire("N\xE3o deletado", "", "info");
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Card, { className: "cardDetalheDieta mx-3 limiteAltura", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Card.Img, { variant: "top", src: image(), width: "200px", height: "200px" }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Card.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Card.Title, { children: props?.title }, void 0, !1, {
        fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Card.Text, { children: props?.descricao }, void 0, !1, {
        fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Card.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react_bootstrap.OverlayTrigger,
      {
        trigger: "click",
        placement: "auto",
        overlay: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Popover, { id: "popover-basic", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Popover.Header, { as: "h3", children: props?.title }, void 0, !1, {
            fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Popover.Body, { children: [
            "Calorias: ",
            props.calorias,
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
              lineNumber: 78,
              columnNumber: 17
            }, this),
            "Carboidratos: ",
            props.carboidratos,
            "g",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, this),
            "Gorduras: ",
            props.gordura,
            "g",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
              lineNumber: 82,
              columnNumber: 17
            }, this),
            "Proteinas: ",
            props.prote\u00EDna,
            "g",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-bottom border-dark my-1" }, void 0, !1, {
              fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this),
            props.ingredientes.length < 1 ? "N\xE3o h\xE1 ingredientes salvos" : props.ingredientes.map((i, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              i.nome,
              " - ",
              i.qtd
            ] }, index, !0, {
              fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
              lineNumber: 91,
              columnNumber: 25
            }, this))
          ] }, void 0, !0, {
            fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        rootClose: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", title: "Opcoes", className: "buttonCards float-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "i",
          {
            className: "px-2 fa-solid fa-ellipsis iconeCardDetalheMais",
            title: "Opcoes"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
            lineNumber: 101,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardDietaDetalhe.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx
var import_carousel = require("primereact/carousel"), import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function CardRefeicao(props) {
  let [recipes, setRecipes] = (0, import_react4.useState)([]);
  (0, import_react4.useEffect)(() => {
    props.diet?.recipes && setRecipes(props.diet?.recipes.filter((recipe) => recipe.periodoRef.includes(props.titulo)));
  }, [props.diet?.recipes, props.titulo]);
  function cardTemplate(recipe) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      CardDietaDetalhe,
      {
        title: recipe.titulo,
        descricao: recipe.descricao,
        calorias: recipe.calorias,
        carboidratos: recipe.carboidratos,
        gordura: recipe.gordura,
        prote\u00EDna: recipe.prote\u00EDna,
        ingredientes: recipe.ingredientes,
        image: recipe.image
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "dietaNome", children: "Caf\xE9 da Manh\xE3" }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "card-container container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_carousel.Carousel,
      {
        value: recipes,
        numVisible: 1,
        numScroll: 1,
        itemTemplate: cardTemplate,
        className: "adaptLenght"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
        lineNumber: 64,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex justify-content-center align-items-center py-5 me-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "row gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: `/adicionarReceitas/dietaId=${props.diet?._id}&periodoRef=${props.titulo}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "ms-5 buttonForm col btn btn-primary btn-lg", children: "Adicionar outra receita" }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.dietasDetalhes.$dietaID/CardRefeicao.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/Profile.dietasDetalhes.$dietaID/route.tsx
var import_react_bootstrap2 = require("react-bootstrap");

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype, { getPrototypeOf } = Object, kindOf = ((cache) => (thing) => {
  let str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kindOfTest = (type) => (type = type.toLowerCase(), (thing) => kindOf(thing) === type), typeOfTest = (type) => (thing) => typeof thing === type, { isArray } = Array, isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? result = ArrayBuffer.isView(val) : result = val && val.buffer && isArrayBuffer(val.buffer), result;
}
var isString = typeOfTest("string"), isFunction = typeOfTest("function"), isNumber = typeOfTest("number"), isObject = (thing) => thing !== null && typeof thing == "object", isBoolean = (thing) => thing === !0 || thing === !1, isPlainObject = (val) => {
  if (kindOf(val) !== "object")
    return !1;
  let prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}, isDate = kindOfTest("Date"), isFile = kindOfTest("File"), isBlob = kindOfTest("Blob"), isFileList = kindOfTest("FileList"), isStream = (val) => isObject(val) && isFunction(val.pipe), isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData == "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
}, isURLSearchParams = kindOfTest("URLSearchParams"), trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = !1 } = {}) {
  if (obj === null || typeof obj > "u")
    return;
  let i, l;
  if (typeof obj != "object" && (obj = [obj]), isArray(obj))
    for (i = 0, l = obj.length; i < l; i++)
      fn.call(null, obj[i], i, obj);
  else {
    let keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj), len = keys.length, key;
    for (i = 0; i < len; i++)
      key = keys[i], fn.call(null, obj[key], key, obj);
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  let keys = Object.keys(obj), i = keys.length, _key;
  for (; i-- > 0; )
    if (_key = keys[i], key === _key.toLowerCase())
      return _key;
  return null;
}
var _global = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  let { caseless } = isContextDefined(this) && this || {}, result = {}, assignValue = (val, key) => {
    let targetKey = caseless && findKey(result, key) || key;
    isPlainObject(result[targetKey]) && isPlainObject(val) ? result[targetKey] = merge(result[targetKey], val) : isPlainObject(val) ? result[targetKey] = merge({}, val) : isArray(val) ? result[targetKey] = val.slice() : result[targetKey] = val;
  };
  for (let i = 0, l = arguments.length; i < l; i++)
    arguments[i] && forEach(arguments[i], assignValue);
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => (forEach(b, (val, key) => {
  thisArg && isFunction(val) ? a[key] = bind(val, thisArg) : a[key] = val;
}, { allOwnKeys }), a), stripBOM = (content) => (content.charCodeAt(0) === 65279 && (content = content.slice(1)), content), inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2), constructor.prototype.constructor = constructor, Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  }), props && Object.assign(constructor.prototype, props);
}, toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props, i, prop, merged = {};
  if (destObj = destObj || {}, sourceObj == null)
    return destObj;
  do {
    for (props = Object.getOwnPropertyNames(sourceObj), i = props.length; i-- > 0; )
      prop = props[i], (!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop] && (destObj[prop] = sourceObj[prop], merged[prop] = !0);
    sourceObj = filter2 !== !1 && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}, endsWith = (str, searchString, position) => {
  str = String(str), (position === void 0 || position > str.length) && (position = str.length), position -= searchString.length;
  let lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}, toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  let arr = new Array(i);
  for (; i-- > 0; )
    arr[i] = thing[i];
  return arr;
}, isTypedArray = ((TypedArray) => (thing) => TypedArray && thing instanceof TypedArray)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)), forEachEntry = (obj, fn) => {
  let iterator = (obj && obj[Symbol.iterator]).call(obj), result;
  for (; (result = iterator.next()) && !result.done; ) {
    let pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}, matchAll = (regExp, str) => {
  let matches, arr = [];
  for (; (matches = regExp.exec(str)) !== null; )
    arr.push(matches);
  return arr;
}, isHTMLForm = kindOfTest("HTMLFormElement"), toCamelCase = (str) => str.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(m, p1, p2) {
    return p1.toUpperCase() + p2;
  }
), hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype), isRegExp = kindOfTest("RegExp"), reduceDescriptors = (obj, reducer) => {
  let descriptors2 = Object.getOwnPropertyDescriptors(obj), reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    (ret = reducer(descriptor, name, obj)) !== !1 && (reducedDescriptors[name] = ret || descriptor);
  }), Object.defineProperties(obj, reducedDescriptors);
}, freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1)
      return !1;
    let value = obj[name];
    if (isFunction(value)) {
      if (descriptor.enumerable = !1, "writable" in descriptor) {
        descriptor.writable = !1;
        return;
      }
      descriptor.set || (descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      });
    }
  });
}, toObjectSet = (arrayOrString, delimiter) => {
  let obj = {}, define = (arr) => {
    arr.forEach((value) => {
      obj[value] = !0;
    });
  };
  return isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter)), obj;
}, noop = () => {
}, toFiniteNumber = (value, defaultValue) => (value = +value, Number.isFinite(value) ? value : defaultValue), ALPHA = "abcdefghijklmnopqrstuvwxyz", DIGIT = "0123456789", ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}, generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "", { length } = alphabet;
  for (; size--; )
    str += alphabet[Math.random() * length | 0];
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  let stack = new Array(10), visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0)
        return;
      if (!("toJSON" in source)) {
        stack[i] = source;
        let target = isArray(source) ? [] : {};
        return forEach(source, (value, key) => {
          let reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        }), stack[i] = void 0, target;
      }
    }
    return source;
  };
  return visit(obj, 0);
}, isAsyncFn = kindOfTest("AsyncFunction"), isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch), utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = message, this.name = "AxiosError", code && (this.code = code), config && (this.config = config), request && (this.request = request), response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype, descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: !0 });
AxiosError.from = (error, code, config, request, response, customProps) => {
  let axiosError = Object.create(prototype);
  return utils_default.toFlatObject(error, axiosError, function(obj) {
    return obj !== Error.prototype;
  }, (prop) => prop !== "isAxiosError"), AxiosError.call(axiosError, error.message, code, config, request, response), axiosError.cause = error, axiosError.name = error.name, customProps && Object.assign(axiosError, customProps), axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data = __toESM(require("form-data"), 1), FormData_default = import_form_data.default;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  return path ? path.concat(key).map(function(token, i) {
    return token = removeBrackets(token), !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "") : key;
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj))
    throw new TypeError("target must be an object");
  formData = formData || new (FormData_default || FormData)(), options = utils_default.toFlatObject(options, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  let metaTokens = options.metaTokens, visitor = options.visitor || defaultVisitor, dots = options.dots, indexes = options.indexes, useBlob = (options.Blob || typeof Blob < "u" && Blob) && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor))
    throw new TypeError("visitor must be a function");
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value))
      return value.toISOString();
    if (!useBlob && utils_default.isBlob(value))
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    return utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value) ? useBlob && typeof Blob == "function" ? new Blob([value]) : Buffer.from(value) : value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value == "object") {
      if (utils_default.endsWith(key, "{}"))
        key = metaTokens ? key : key.slice(0, -2), value = JSON.stringify(value);
      else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value)))
        return key = removeBrackets(key), arr.forEach(function(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === !0 ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        }), !1;
    }
    return isVisitable(value) ? !0 : (formData.append(renderKey(path, key, dots), convertValue(value)), !1);
  }
  let stack = [], exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (!utils_default.isUndefined(value)) {
      if (stack.indexOf(value) !== -1)
        throw Error("Circular reference detected in " + path.join("."));
      stack.push(value), utils_default.forEach(value, function(el, key) {
        (!(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        )) === !0 && build(el, path ? path.concat(key) : [key]);
      }), stack.pop();
    }
  }
  if (!utils_default.isObject(obj))
    throw new TypeError("data must be an object");
  return build(obj), formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  let charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [], params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function(encoder) {
  let _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params, options) {
  if (!params)
    return url2;
  let _encode = options && options.encode || encode2, serializeFn = options && options.serialize, serializedParams;
  if (serializeFn ? serializedParams = serializeFn(params, options) : serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode), serializedParams) {
    let hashmarkIndex = url2.indexOf("#");
    hashmarkIndex !== -1 && (url2 = url2.slice(0, hashmarkIndex)), url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    return this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : !1,
      runWhen: options ? options.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    this.handlers[id] && (this.handlers[id] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function(h) {
      h !== null && fn(h);
    });
  }
}, InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
};

// node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var import_url = __toESM(require("url"), 1), URLSearchParams_default = import_url.default.URLSearchParams;

// node_modules/axios/lib/platform/node/index.js
var node_default = {
  isNode: !0,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: typeof Blob < "u" && Blob || null
  },
  protocols: ["http", "https", "file", "data"]
};

// node_modules/axios/lib/platform/common/utils.js
var utils_exports = {};
__export(utils_exports, {
  hasBrowserEnv: () => hasBrowserEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv
});
var hasBrowserEnv = typeof window < "u" && typeof document < "u", hasStandardBrowserEnv = ((product) => hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0)(typeof navigator < "u" && navigator.product), hasStandardBrowserWebWorkerEnv = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")();

// node_modules/axios/lib/platform/index.js
var platform_default = {
  ...utils_exports,
  ...node_default
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      return platform_default.isNode && utils_default.isBuffer(value) ? (this.append(key, value.toString("base64")), !1) : helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => match[0] === "[]" ? "" : match[1] || match[0]);
}
function arrayToObject(arr) {
  let obj = {}, keys = Object.keys(arr), i, len = keys.length, key;
  for (i = 0; i < len; i++)
    key = keys[i], obj[key] = arr[key];
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++], isNumericKey = Number.isFinite(+name), isLast = index >= path.length;
    return name = !name && utils_default.isArray(target) ? target.length : name, isLast ? (utils_default.hasOwnProp(target, name) ? target[name] = [target[name], value] : target[name] = value, !isNumericKey) : ((!target[name] || !utils_default.isObject(target[name])) && (target[name] = []), buildPath(path, value, target[name], index) && utils_default.isArray(target[name]) && (target[name] = arrayToObject(target[name])), !isNumericKey);
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    let obj = {};
    return utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    }), obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue))
    try {
      return (parser || JSON.parse)(rawValue), utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError")
        throw e;
    }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function(data, headers) {
    let contentType = headers.getContentType() || "", hasJSONContentType = contentType.indexOf("application/json") > -1, isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data) && (data = new FormData(data)), utils_default.isFormData(data))
      return hasJSONContentType && hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data))
      return data;
    if (utils_default.isArrayBufferView(data))
      return data.buffer;
    if (utils_default.isURLSearchParams(data))
      return headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), data.toString();
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1)
        return toURLEncodedForm(data, this.formSerializer).toString();
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        let _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    return isObjectPayload || hasJSONContentType ? (headers.setContentType("application/json", !1), stringifySafely(data)) : data;
  }],
  transformResponse: [function(data) {
    let transitional2 = this.transitional || defaults.transitional, forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing, JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      let strictJSONParsing = !(transitional2 && transitional2.silentJSONParsing) && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing)
          throw e.name === "SyntaxError" ? AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response) : e;
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), parseHeaders_default = (rawHeaders) => {
  let parsed = {}, key, val, i;
  return rawHeaders && rawHeaders.split(`
`).forEach(function(line) {
    i = line.indexOf(":"), key = line.substring(0, i).trim().toLowerCase(), val = line.substring(i + 1).trim(), !(!key || parsed[key] && ignoreDuplicateOf[key]) && (key === "set-cookie" ? parsed[key] ? parsed[key].push(val) : parsed[key] = [val] : parsed[key] = parsed[key] ? parsed[key] + ", " + val : val);
  }), parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  return value === !1 || value == null ? value : utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  let tokens = /* @__PURE__ */ Object.create(null), tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, match;
  for (; match = tokensRE.exec(str); )
    tokens[match[1]] = match[2];
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2))
    return filter2.call(this, value, header);
  if (isHeaderNameFilter && (value = header), !!utils_default.isString(value)) {
    if (utils_default.isString(filter2))
      return value.indexOf(filter2) !== -1;
    if (utils_default.isRegExp(filter2))
      return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => char.toUpperCase() + str);
}
function buildAccessors(obj, header) {
  let accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: !0
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    let self2 = this;
    function setHeader(_value, _header, _rewrite) {
      let lHeader = normalizeHeader(_header);
      if (!lHeader)
        throw new Error("header name must be a non-empty string");
      let key = utils_default.findKey(self2, lHeader);
      (!key || self2[key] === void 0 || _rewrite === !0 || _rewrite === void 0 && self2[key] !== !1) && (self2[key || _header] = normalizeValue(_value));
    }
    let setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    return utils_default.isPlainObject(header) || header instanceof this.constructor ? setHeaders(header, valueOrRewrite) : utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header) ? setHeaders(parseHeaders_default(header), valueOrRewrite) : header != null && setHeader(valueOrRewrite, header, rewrite), this;
  }
  get(header, parser) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      if (key) {
        let value = this[key];
        if (!parser)
          return value;
        if (parser === !0)
          return parseTokens(value);
        if (utils_default.isFunction(parser))
          return parser.call(this, value, key);
        if (utils_default.isRegExp(parser))
          return parser.exec(value);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return !1;
  }
  delete(header, matcher) {
    let self2 = this, deleted = !1;
    function deleteHeader(_header) {
      if (_header = normalizeHeader(_header), _header) {
        let key = utils_default.findKey(self2, _header);
        key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher)) && (delete self2[key], deleted = !0);
      }
    }
    return utils_default.isArray(header) ? header.forEach(deleteHeader) : deleteHeader(header), deleted;
  }
  clear(matcher) {
    let keys = Object.keys(this), i = keys.length, deleted = !1;
    for (; i--; ) {
      let key = keys[i];
      (!matcher || matchHeaderValue(this, this[key], key, matcher, !0)) && (delete this[key], deleted = !0);
    }
    return deleted;
  }
  normalize(format) {
    let self2 = this, headers = {};
    return utils_default.forEach(this, (value, header) => {
      let key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value), delete self2[header];
        return;
      }
      let normalized = format ? formatHeader(header) : String(header).trim();
      normalized !== header && delete self2[header], self2[normalized] = normalizeValue(value), headers[normalized] = !0;
    }), this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    let obj = /* @__PURE__ */ Object.create(null);
    return utils_default.forEach(this, (value, header) => {
      value != null && value !== !1 && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    }), obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    let computed = new this(first);
    return targets.forEach((target) => computed.set(target)), computed;
  }
  static accessor(header) {
    let accessors = (this[$internals] = this[$internals] = {
      accessors: {}
    }).accessors, prototype3 = this.prototype;
    function defineAccessor(_header) {
      let lHeader = normalizeHeader(_header);
      accessors[lHeader] || (buildAccessors(prototype3, _header), accessors[lHeader] = !0);
    }
    return utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header), this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  let config = this || defaults_default, context = response || config, headers = AxiosHeaders_default.from(context.headers), data = context.data;
  return utils_default.forEach(fns, function(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  }), headers.normalize(), data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message ?? "canceled", AxiosError_default.ERR_CANCELED, config, request), this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: !0
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  let validateStatus2 = response.config.validateStatus;
  !response.status || !validateStatus2 || validateStatus2(response.status) ? resolve(response) : reject(new AxiosError_default(
    "Request failed with status code " + response.status,
    [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
    response.config,
    response.request,
    response
  ));
}

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  return baseURL && !isAbsoluteURL(requestedURL) ? combineURLs(baseURL, requestedURL) : requestedURL;
}

// node_modules/axios/lib/adapters/http.js
var import_proxy_from_env = require("proxy-from-env"), import_http = __toESM(require("http"), 1), import_https = __toESM(require("https"), 1), import_util2 = __toESM(require("util"), 1), import_follow_redirects = __toESM(require("follow-redirects"), 1), import_zlib = __toESM(require("zlib"), 1);

// node_modules/axios/lib/env/data.js
var VERSION = "1.6.2";

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  let match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  let _Blob = options && options.Blob || platform_default.classes.Blob, protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob && (asBlob = !0), protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    let match = DATA_URL_PATTERN.exec(uri);
    if (!match)
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    let mime = match[1], isBase64 = match[2], body = match[3], buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
    if (asBlob) {
      if (!_Blob)
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// node_modules/axios/lib/adapters/http.js
var import_stream4 = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var import_stream = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0, threshold = 1e3 / freq, timer = null;
  return function(force, args) {
    let now = Date.now();
    if (force || now - timestamp > threshold)
      return timer && (clearTimeout(timer), timer = null), timestamp = now, fn.apply(null, args);
    timer || (timer = setTimeout(() => (timer = null, timestamp = Date.now(), fn.apply(null, args)), threshold - (now - timestamp)));
  };
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  let bytes = new Array(samplesCount), timestamps = new Array(samplesCount), head = 0, tail = 0, firstSampleTS;
  return min = min !== void 0 ? min : 1e3, function(chunkLength) {
    let now = Date.now(), startedAt = timestamps[tail];
    firstSampleTS || (firstSampleTS = now), bytes[head] = chunkLength, timestamps[head] = now;
    let i = tail, bytesCount = 0;
    for (; i !== head; )
      bytesCount += bytes[i++], i = i % samplesCount;
    if (head = (head + 1) % samplesCount, head === tail && (tail = (tail + 1) % samplesCount), now - firstSampleTS < min)
      return;
    let passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var kInternals = Symbol("internals"), AxiosTransformStream = class extends import_stream.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => !utils_default.isUndefined(source[prop])), super({
      readableHighWaterMark: options.chunkSize
    });
    let self2 = this, internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    }, _speedometer = speedometer_default(internals.ticksRate * options.samplesCount, internals.timeWindow);
    this.on("newListener", (event) => {
      event === "progress" && (internals.isCaptured || (internals.isCaptured = !0));
    });
    let bytesNotified = 0;
    internals.updateProgress = throttle_default(function() {
      let totalBytes = internals.length, bytesTransferred = internals.bytesSeen, progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self2.destroyed)
        return;
      let rate = _speedometer(progressBytes);
      bytesNotified = bytesTransferred, process.nextTick(() => {
        self2.emit("progress", {
          loaded: bytesTransferred,
          total: totalBytes,
          progress: totalBytes ? bytesTransferred / totalBytes : void 0,
          bytes: progressBytes,
          rate: rate || void 0,
          estimated: rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : void 0
        });
      });
    }, internals.ticksRate);
    let onFinish = () => {
      internals.updateProgress(!0);
    };
    this.once("end", onFinish), this.once("error", onFinish);
  }
  _read(size) {
    let internals = this[kInternals];
    return internals.onReadCallback && internals.onReadCallback(), super._read(size);
  }
  _transform(chunk, encoding, callback) {
    let self2 = this, internals = this[kInternals], maxRate = internals.maxRate, readableHighWaterMark = this.readableHighWaterMark, timeWindow = internals.timeWindow, divider = 1e3 / timeWindow, bytesThreshold = maxRate / divider, minChunkSize = internals.minChunkSize !== !1 ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    function pushChunk(_chunk, _callback) {
      let bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes, internals.bytes += bytes, internals.isCaptured && internals.updateProgress(), self2.push(_chunk) ? process.nextTick(_callback) : internals.onReadCallback = () => {
        internals.onReadCallback = null, process.nextTick(_callback);
      };
    }
    let transformChunk = (_chunk, _callback) => {
      let chunkSize = Buffer.byteLength(_chunk), chunkRemainder = null, maxChunkSize = readableHighWaterMark, bytesLeft, passed = 0;
      if (maxRate) {
        let now = Date.now();
        (!internals.ts || (passed = now - internals.ts) >= timeWindow) && (internals.ts = now, bytesLeft = bytesThreshold - internals.bytes, internals.bytes = bytesLeft < 0 ? -bytesLeft : 0, passed = 0), bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0)
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        bytesLeft < maxChunkSize && (maxChunkSize = bytesLeft);
      }
      maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize && (chunkRemainder = _chunk.subarray(maxChunkSize), _chunk = _chunk.subarray(0, maxChunkSize)), pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err)
        return callback(err);
      _chunk ? transformChunk(_chunk, transformNextChunk) : callback(null);
    });
  }
  setLength(length) {
    return this[kInternals].length = +length, this;
  }
}, AxiosTransformStream_default = AxiosTransformStream;

// node_modules/axios/lib/adapters/http.js
var import_events = __toESM(require("events"), 1);

// node_modules/axios/lib/helpers/formDataToStream.js
var import_util = require("util"), import_stream2 = require("stream");

// node_modules/axios/lib/helpers/readBlob.js
var { asyncIterator } = Symbol, readBlob = async function* (blob) {
  blob.stream ? yield* blob.stream() : blob.arrayBuffer ? yield await blob.arrayBuffer() : blob[asyncIterator] ? yield* blob[asyncIterator]() : yield blob;
}, readBlob_default = readBlob;

// node_modules/axios/lib/helpers/formDataToStream.js
var BOUNDARY_ALPHABET = utils_default.ALPHABET.ALPHA_DIGIT + "-_", textEncoder = new import_util.TextEncoder(), CRLF = `\r
`, CRLF_BYTES = textEncoder.encode(CRLF), CRLF_BYTES_COUNT = 2, FormDataPart = class {
  constructor(name, value) {
    let { escapeName } = this.constructor, isStringValue = utils_default.isString(value), headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
    isStringValue ? value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF)) : headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`, this.headers = textEncoder.encode(headers + CRLF), this.contentLength = isStringValue ? value.byteLength : value.size, this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT, this.name = name, this.value = value;
  }
  async *encode() {
    yield this.headers;
    let { value } = this;
    utils_default.isTypedArray(value) ? yield value : yield* readBlob_default(value), yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, (match) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[match]);
  }
}, formDataToStream = (form, headersHandler, options) => {
  let {
    tag = "form-data-boundary",
    size = 25,
    boundary = tag + "-" + utils_default.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils_default.isFormData(form))
    throw TypeError("FormData instance required");
  if (boundary.length < 1 || boundary.length > 70)
    throw Error("boundary must be 10-70 characters long");
  let boundaryBytes = textEncoder.encode("--" + boundary + CRLF), footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF), contentLength = footerBytes.byteLength, parts = Array.from(form.entries()).map(([name, value]) => {
    let part = new FormDataPart(name, value);
    return contentLength += part.size, part;
  });
  contentLength += boundaryBytes.byteLength * parts.length, contentLength = utils_default.toFiniteNumber(contentLength);
  let computedHeaders = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`
  };
  return Number.isFinite(contentLength) && (computedHeaders["Content-Length"] = contentLength), headersHandler && headersHandler(computedHeaders), import_stream2.Readable.from(async function* () {
    for (let part of parts)
      yield boundaryBytes, yield* part.encode();
    yield footerBytes;
  }());
}, formDataToStream_default = formDataToStream;

// node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js
var import_stream3 = __toESM(require("stream"), 1), ZlibHeaderTransformStream = class extends import_stream3.default.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk), callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0 && (this._transform = this.__transform, chunk[0] !== 120)) {
      let header = Buffer.alloc(2);
      header[0] = 120, header[1] = 156, this.push(header, encoding);
    }
    this.__transform(chunk, encoding, callback);
  }
}, ZlibHeaderTransformStream_default = ZlibHeaderTransformStream;

// node_modules/axios/lib/helpers/callbackify.js
var callbackify = (fn, reducer) => utils_default.isAsyncFn(fn) ? function(...args) {
  let cb = args.pop();
  fn.apply(this, args).then((value) => {
    try {
      reducer ? cb(null, ...reducer(value)) : cb(null, value);
    } catch (err) {
      cb(err);
    }
  }, cb);
} : fn, callbackify_default = callbackify;

// node_modules/axios/lib/adapters/http.js
var zlibOptions = {
  flush: import_zlib.default.constants.Z_SYNC_FLUSH,
  finishFlush: import_zlib.default.constants.Z_SYNC_FLUSH
}, brotliOptions = {
  flush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH
}, isBrotliSupported = utils_default.isFunction(import_zlib.default.createBrotliDecompress), { http: httpFollow, https: httpsFollow } = import_follow_redirects.default, isHttps = /https:?/, supportedProtocols = platform_default.protocols.map((protocol) => protocol + ":");
function dispatchBeforeRedirect(options) {
  options.beforeRedirects.proxy && options.beforeRedirects.proxy(options), options.beforeRedirects.config && options.beforeRedirects.config(options);
}
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== !1) {
    let proxyUrl = (0, import_proxy_from_env.getProxyForUrl)(location);
    proxyUrl && (proxy = new URL(proxyUrl));
  }
  if (proxy) {
    if (proxy.username && (proxy.auth = (proxy.username || "") + ":" + (proxy.password || "")), proxy.auth) {
      (proxy.auth.username || proxy.auth.password) && (proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || ""));
      let base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
    let proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost, options.host = proxyHost, options.port = proxy.port, options.path = location, proxy.protocol && (options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`);
  }
  options.beforeRedirects.proxy = function(redirectOptions) {
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
var isHttpAdapterSupported = typeof process < "u" && utils_default.kindOf(process) === "process", wrapAsync = (asyncExecutor) => new Promise((resolve, reject) => {
  let onDone, isDone, done = (value, isRejected) => {
    isDone || (isDone = !0, onDone && onDone(value, isRejected));
  }, _resolve = (value) => {
    done(value), resolve(value);
  }, _reject = (reason) => {
    done(reason, !0), reject(reason);
  };
  asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
}), resolveFamily = ({ address, family }) => {
  if (!utils_default.isString(address))
    throw TypeError("address must be a string");
  return {
    address,
    family: family || (address.indexOf(".") < 0 ? 6 : 4)
  };
}, buildAddressEntry = (address, family) => resolveFamily(utils_default.isObject(address) ? address : { address, family }), http_default = isHttpAdapterSupported && function(config) {
  return wrapAsync(async function(resolve, reject, onDone) {
    let { data, lookup, family } = config, { responseType, responseEncoding } = config, method = config.method.toUpperCase(), isDone, rejected = !1, req;
    if (lookup) {
      let _lookup = callbackify_default(lookup, (value) => utils_default.isArray(value) ? value : [value]);
      lookup = (hostname, opt, cb) => {
        _lookup(hostname, opt, (err, arg0, arg1) => {
          let addresses = utils_default.isArray(arg0) ? arg0.map((addr) => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
          opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
        });
      };
    }
    let emitter = new import_events.default(), onFinished = () => {
      config.cancelToken && config.cancelToken.unsubscribe(abort), config.signal && config.signal.removeEventListener("abort", abort), emitter.removeAllListeners();
    };
    onDone((value, isRejected) => {
      isDone = !0, isRejected && (rejected = !0, onFinished());
    });
    function abort(reason) {
      emitter.emit("abort", !reason || reason.type ? new CanceledError_default(null, config, req) : reason);
    }
    emitter.once("abort", reject), (config.cancelToken || config.signal) && (config.cancelToken && config.cancelToken.subscribe(abort), config.signal && (config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort)));
    let fullPath = buildFullPath(config.baseURL, config.url), parsed = new URL(fullPath, "http://localhost"), protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === "data:") {
      let convertedData;
      if (method !== "GET")
        return settle(resolve, reject, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config
        });
      try {
        convertedData = fromDataURI(config.url, responseType === "blob", {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config);
      }
      return responseType === "text" ? (convertedData = convertedData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (convertedData = utils_default.stripBOM(convertedData))) : responseType === "stream" && (convertedData = import_stream4.default.Readable.from(convertedData)), settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: "OK",
        headers: new AxiosHeaders_default(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1)
      return reject(new AxiosError_default(
        "Unsupported protocol " + protocol,
        AxiosError_default.ERR_BAD_REQUEST,
        config
      ));
    let headers = AxiosHeaders_default.from(config.headers).normalize();
    headers.set("User-Agent", "axios/" + VERSION, !1);
    let onDownloadProgress = config.onDownloadProgress, onUploadProgress = config.onUploadProgress, maxRate = config.maxRate, maxUploadRate, maxDownloadRate;
    if (utils_default.isSpecCompliantForm(data)) {
      let userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream_default(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || void 0
      });
    } else if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders)) {
      if (headers.set(data.getHeaders()), !headers.hasContentLength())
        try {
          let knownLength = await import_util2.default.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
        } catch {
        }
    } else if (utils_default.isBlob(data))
      data.size && headers.setContentType(data.type || "application/octet-stream"), headers.setContentLength(data.size || 0), data = import_stream4.default.Readable.from(readBlob_default(data));
    else if (data && !utils_default.isStream(data)) {
      if (!Buffer.isBuffer(data))
        if (utils_default.isArrayBuffer(data))
          data = Buffer.from(new Uint8Array(data));
        else if (utils_default.isString(data))
          data = Buffer.from(data, "utf-8");
        else
          return reject(new AxiosError_default(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          ));
      if (headers.setContentLength(data.length, !1), config.maxBodyLength > -1 && data.length > config.maxBodyLength)
        return reject(new AxiosError_default(
          "Request body larger than maxBodyLength limit",
          AxiosError_default.ERR_BAD_REQUEST,
          config
        ));
    }
    let contentLength = utils_default.toFiniteNumber(headers.getContentLength());
    utils_default.isArray(maxRate) ? (maxUploadRate = maxRate[0], maxDownloadRate = maxRate[1]) : maxUploadRate = maxDownloadRate = maxRate, data && (onUploadProgress || maxUploadRate) && (utils_default.isStream(data) || (data = import_stream4.default.Readable.from(data, { objectMode: !1 })), data = import_stream4.default.pipeline([data, new AxiosTransformStream_default({
      length: contentLength,
      maxRate: utils_default.toFiniteNumber(maxUploadRate)
    })], utils_default.noop), onUploadProgress && data.on("progress", (progress) => {
      onUploadProgress(Object.assign(progress, {
        upload: !0
      }));
    }));
    let auth;
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password || "";
      auth = username + ":" + password;
    }
    if (!auth && parsed.username) {
      let urlUsername = parsed.username, urlPassword = parsed.password;
      auth = urlUsername + ":" + urlPassword;
    }
    auth && headers.delete("authorization");
    let path;
    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, "");
    } catch (err) {
      let customErr = new Error(err.message);
      return customErr.config = config, customErr.url = config.url, customErr.exists = !0, reject(customErr);
    }
    headers.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""),
      !1
    );
    let options = {
      path,
      method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };
    !utils_default.isUndefined(lookup) && (options.lookup = lookup), config.socketPath ? options.socketPath = config.socketPath : (options.hostname = parsed.hostname, options.port = parsed.port, setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path));
    let transport, isHttpsRequest = isHttps.test(options.protocol);
    if (options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent, config.transport ? transport = config.transport : config.maxRedirects === 0 ? transport = isHttpsRequest ? import_https.default : import_http.default : (config.maxRedirects && (options.maxRedirects = config.maxRedirects), config.beforeRedirect && (options.beforeRedirects.config = config.beforeRedirect), transport = isHttpsRequest ? httpsFollow : httpFollow), config.maxBodyLength > -1 ? options.maxBodyLength = config.maxBodyLength : options.maxBodyLength = 1 / 0, config.insecureHTTPParser && (options.insecureHTTPParser = config.insecureHTTPParser), req = transport.request(options, function(res) {
      if (req.destroyed)
        return;
      let streams = [res], responseLength = +res.headers["content-length"];
      if (onDownloadProgress) {
        let transformStream = new AxiosTransformStream_default({
          length: utils_default.toFiniteNumber(responseLength),
          maxRate: utils_default.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on("progress", (progress) => {
          onDownloadProgress(Object.assign(progress, {
            download: !0
          }));
        }), streams.push(transformStream);
      }
      let responseStream = res, lastRequest = res.req || req;
      if (config.decompress !== !1 && res.headers["content-encoding"])
        switch ((method === "HEAD" || res.statusCode === 204) && delete res.headers["content-encoding"], (res.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "deflate":
            streams.push(new ZlibHeaderTransformStream_default()), streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "br":
            isBrotliSupported && (streams.push(import_zlib.default.createBrotliDecompress(brotliOptions)), delete res.headers["content-encoding"]);
        }
      responseStream = streams.length > 1 ? import_stream4.default.pipeline(streams, utils_default.noop) : streams[0];
      let offListeners = import_stream4.default.finished(responseStream, () => {
        offListeners(), onFinished();
      }), response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders_default(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === "stream")
        response.data = responseStream, settle(resolve, reject, response);
      else {
        let responseBuffer = [], totalResponseBytes = 0;
        responseStream.on("data", function(chunk) {
          responseBuffer.push(chunk), totalResponseBytes += chunk.length, config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength && (rejected = !0, responseStream.destroy(), reject(new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          )));
        }), responseStream.on("aborted", function() {
          if (rejected)
            return;
          let err = new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err), reject(err);
        }), responseStream.on("error", function(err) {
          req.destroyed || reject(AxiosError_default.from(err, null, config, lastRequest));
        }), responseStream.on("end", function() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            responseType !== "arraybuffer" && (responseData = responseData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (responseData = utils_default.stripBOM(responseData))), response.data = responseData;
          } catch (err) {
            return reject(AxiosError_default.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      emitter.once("abort", (err) => {
        responseStream.destroyed || (responseStream.emit("error", err), responseStream.destroy());
      });
    }), emitter.once("abort", (err) => {
      reject(err), req.destroy(err);
    }), req.on("error", function(err) {
      reject(AxiosError_default.from(err, null, config, req));
    }), req.on("socket", function(socket) {
      socket.setKeepAlive(!0, 1e3 * 60);
    }), config.timeout) {
      let timeout = parseInt(config.timeout, 10);
      if (Number.isNaN(timeout)) {
        reject(new AxiosError_default(
          "error trying to parse `config.timeout` to int",
          AxiosError_default.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));
        return;
      }
      req.setTimeout(timeout, function() {
        if (isDone)
          return;
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
        config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          req
        )), abort();
      });
    }
    if (utils_default.isStream(data)) {
      let ended = !1, errored = !1;
      data.on("end", () => {
        ended = !0;
      }), data.once("error", (err) => {
        errored = !0, req.destroy(err);
      }), data.on("close", () => {
        !ended && !errored && abort(new CanceledError_default("Request stream has been aborted", config, req));
      }), data.pipe(req);
    } else
      req.end(data);
  });
};

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      let cookie = [name + "=" + encodeURIComponent(value)];
      utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString()), utils_default.isString(path) && cookie.push("path=" + path), utils_default.isString(domain) && cookie.push("domain=" + domain), secure === !0 && cookie.push("secure"), document.cookie = cookie.join("; ");
    },
    read(name) {
      let match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    let msie = /(msie|trident)/i.test(navigator.userAgent), urlParsingNode = document.createElement("a"), originURL;
    function resolveURL(url2) {
      let href = url2;
      return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), urlParsingNode.setAttribute("href", href), {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    return originURL = resolveURL(window.location.href), function(requestURL) {
      let parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);

// node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0, _speedometer = speedometer_default(50, 250);
  return (e) => {
    let loaded = e.loaded, total = e.lengthComputable ? e.total : void 0, progressBytes = loaded - bytesNotified, rate = _speedometer(progressBytes), inRange = loaded <= total;
    bytesNotified = loaded;
    let data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate || void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = !0, listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest < "u", xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function(resolve, reject) {
    let requestData = config.data, requestHeaders = AxiosHeaders_default.from(config.headers).normalize(), { responseType, withXSRFToken } = config, onCanceled;
    function done() {
      config.cancelToken && config.cancelToken.unsubscribe(onCanceled), config.signal && config.signal.removeEventListener("abort", onCanceled);
    }
    let contentType;
    if (utils_default.isFormData(requestData)) {
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv)
        requestHeaders.setContentType(!1);
      else if ((contentType = requestHeaders.getContentType()) !== !1) {
        let [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    let fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), !0), request.timeout = config.timeout;
    function onloadend() {
      if (!request)
        return;
      let responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      ), response = {
        data: !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function(value) {
        resolve(value), done();
      }, function(err) {
        reject(err), done();
      }, response), request = null;
    }
    if ("onloadend" in request ? request.onloadend = onloadend : request.onreadystatechange = function() {
      !request || request.readyState !== 4 || request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0) || setTimeout(onloadend);
    }, request.onabort = function() {
      request && (reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request)), request = null);
    }, request.onerror = function() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request)), request = null;
    }, request.ontimeout = function() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
      config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      )), request = null;
    }, platform_default.hasStandardBrowserEnv && (withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config)), withXSRFToken || withXSRFToken !== !1 && isURLSameOrigin_default(fullPath))) {
      let xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      xsrfValue && requestHeaders.set(config.xsrfHeaderName, xsrfValue);
    }
    requestData === void 0 && requestHeaders.setContentType(null), "setRequestHeader" in request && utils_default.forEach(requestHeaders.toJSON(), function(val, key) {
      request.setRequestHeader(key, val);
    }), utils_default.isUndefined(config.withCredentials) || (request.withCredentials = !!config.withCredentials), responseType && responseType !== "json" && (request.responseType = config.responseType), typeof config.onDownloadProgress == "function" && request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, !0)), typeof config.onUploadProgress == "function" && request.upload && request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress)), (config.cancelToken || config.signal) && (onCanceled = (cancel) => {
      request && (reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel), request.abort(), request = null);
    }, config.cancelToken && config.cancelToken.subscribe(onCanceled), config.signal && (config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled)));
    let protocol = parseProtocol(fullPath);
    if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`, isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === !1, adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    let { length } = adapters, nameOrAdapter, adapter, rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      if (adapter = nameOrAdapter, !isResolvedHandle(nameOrAdapter) && (adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()], adapter === void 0))
        throw new AxiosError_default(`Unknown adapter '${id}'`);
      if (adapter)
        break;
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      let reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === !1 ? "is not supported by the environment" : "is not available in the build")
      ), s = length ? reasons.length > 1 ? `since :
` + reasons.map(renderReason).join(`
`) : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken && config.cancelToken.throwIfRequested(), config.signal && config.signal.aborted)
    throw new CanceledError_default(null, config);
}
function dispatchRequest(config) {
  return throwIfCancellationRequested(config), config.headers = AxiosHeaders_default.from(config.headers), config.data = transformData.call(
    config,
    config.transformRequest
  ), ["post", "put", "patch"].indexOf(config.method) !== -1 && config.headers.setContentType("application/x-www-form-urlencoded", !1), adapters_default.getAdapter(config.adapter || defaults_default.adapter)(config).then(function(response) {
    return throwIfCancellationRequested(config), response.data = transformData.call(
      config,
      config.transformResponse,
      response
    ), response.headers = AxiosHeaders_default.from(response.headers), response;
  }, function(reason) {
    return isCancel(reason) || (throwIfCancellationRequested(config), reason && reason.response && (reason.response.data = transformData.call(
      config,
      config.transformResponse,
      reason.response
    ), reason.response.headers = AxiosHeaders_default.from(reason.response.headers))), Promise.reject(reason);
  });
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  let config = {};
  function getMergedValue(target, source, caseless) {
    return utils_default.isPlainObject(target) && utils_default.isPlainObject(source) ? utils_default.merge.call({ caseless }, target, source) : utils_default.isPlainObject(source) ? utils_default.merge({}, source) : utils_default.isArray(source) ? source.slice() : source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a, caseless);
    } else
      return getMergedValue(a, b, caseless);
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b))
      return getMergedValue(void 0, b);
  }
  function defaultToConfig2(a, b) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a);
    } else
      return getMergedValue(void 0, b);
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2)
      return getMergedValue(a, b);
    if (prop in config1)
      return getMergedValue(void 0, a);
  }
  let mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), !0)
  };
  return utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function(prop) {
    let merge2 = mergeMap[prop] || mergeDeepProperties, configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  }), config;
}

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === !1)
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    return version && !deprecatedWarnings[opt] && (deprecatedWarnings[opt] = !0, console.warn(
      formatMessage(
        opt,
        " has been deprecated since v" + version + " and will be removed in the near future"
      )
    )), validator ? validator(value, opt, opts) : !0;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options != "object")
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  let keys = Object.keys(options), i = keys.length;
  for (; i-- > 0; ) {
    let opt = keys[i], validator = schema[opt];
    if (validator) {
      let value = options[opt], result = value === void 0 || validator(value, opt, options);
      if (result !== !0)
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (allowUnknown !== !0)
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators, Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig, this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    typeof configOrUrl == "string" ? (config = config || {}, config.url = configOrUrl) : config = configOrUrl || {}, config = mergeConfig(this.defaults, config);
    let { transitional: transitional2, paramsSerializer, headers } = config;
    transitional2 !== void 0 && validator_default.assertOptions(transitional2, {
      silentJSONParsing: validators2.transitional(validators2.boolean),
      forcedJSONParsing: validators2.transitional(validators2.boolean),
      clarifyTimeoutError: validators2.transitional(validators2.boolean)
    }, !1), paramsSerializer != null && (utils_default.isFunction(paramsSerializer) ? config.paramsSerializer = {
      serialize: paramsSerializer
    } : validator_default.assertOptions(paramsSerializer, {
      encode: validators2.function,
      serialize: validators2.function
    }, !0)), config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    ), config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    let requestInterceptorChain = [], synchronousRequestInterceptors = !0;
    this.interceptors.request.forEach(function(interceptor) {
      typeof interceptor.runWhen == "function" && interceptor.runWhen(config) === !1 || (synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous, requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected));
    });
    let responseInterceptorChain = [];
    this.interceptors.response.forEach(function(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise, i = 0, len;
    if (!synchronousRequestInterceptors) {
      let chain = [dispatchRequest.bind(this), void 0];
      for (chain.unshift.apply(chain, requestInterceptorChain), chain.push.apply(chain, responseInterceptorChain), len = chain.length, promise = Promise.resolve(config); i < len; )
        promise = promise.then(chain[i++], chain[i++]);
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    for (i = 0; i < len; ) {
      let onFulfilled = requestInterceptorChain[i++], onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    for (i = 0, len = responseInterceptorChain.length; i < len; )
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    let fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function(method) {
  Axios.prototype[method] = function(url2, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  function generateHTTPMethod(isForm) {
    return function(url2, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod(), Axios.prototype[method + "Form"] = generateHTTPMethod(!0);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor != "function")
      throw new TypeError("executor must be a function.");
    let resolvePromise;
    this.promise = new Promise(function(resolve) {
      resolvePromise = resolve;
    });
    let token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      for (; i-- > 0; )
        token._listeners[i](cancel);
      token._listeners = null;
    }), this.promise.then = (onfulfilled) => {
      let _resolve, promise = new Promise((resolve) => {
        token.subscribe(resolve), _resolve = resolve;
      }).then(onfulfilled);
      return promise.cancel = function() {
        token.unsubscribe(_resolve);
      }, promise;
    }, executor(function(message, config, request) {
      token.reason || (token.reason = new CanceledError_default(message, config, request), resolvePromise(token.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(listener) : this._listeners = [listener];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners)
      return;
    let index = this._listeners.indexOf(listener);
    index !== -1 && this._listeners.splice(index, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    return {
      token: new CancelToken(function(c) {
        cancel = c;
      }),
      cancel
    };
  }
}, CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === !0;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  let context = new Axios_default(defaultConfig), instance = bind(Axios_default.prototype.request, context);
  return utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: !0 }), utils_default.extend(instance, context, null, { allOwnKeys: !0 }), instance.create = function(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  }, instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig2
} = axios_default;

// app/configs/https.ts
var axiosHealthyApi = axios_default.create({
  baseURL: "https://healthyvibes-rest-api-back-end-production.up.railway.app"
});
axiosHealthyApi.interceptors.request.use(
  (config) => (config.headers.Authorization = localStorage.getItem("access-token") || "", config),
  (error) => Promise.reject(error)
);
axiosHealthyApi.interceptors.response.use(
  (response) => response,
  (error) => error.response.status == 403 ? window.location.assign("/login") : Promise.reject(error)
);

// app/routes/Profile.dietasDetalhes.$dietaID/route.tsx
var import_react5 = require("react"), import_react6 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader({
  params
}) {
  let urlParams = new URLSearchParams(params.dietaID);
  if (urlParams.has("dietaId"))
    return urlParams.get("dietaId");
  throw new Error("Url inv\xE1lida");
}
var links2 = () => [{ rel: "stylesheet", href: detalhesDietas_default }], meta2 = () => ({
  title: "Dieta"
});
function DietasDetalhes() {
  let data = (0, import_react6.useLoaderData)(), [diet, setDiet] = (0, import_react5.useState)(), handleGet = (0, import_react5.useCallback)(async () => {
    await axiosHealthyApi.get(`/diets/${data}`).then((r) => {
      setDiet(r.data), document.title = "Dieta " + r.data.nome;
    }).catch((e) => {
      console.log(e);
    });
  }, [data]);
  return (0, import_react5.useEffect)(() => {
    handleGet();
  }, [handleGet]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_react_bootstrap2.ToastContainer,
      {
        className: "position-sticky container-fluid",
        position: "top-start",
        style: { zIndex: 1 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap2.Toast, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap2.Toast.Body, { className: "fw-bold text-center fs-5", children: [
          "Dieta ",
          diet?.nome
        ] }, void 0, !0, {
          fileName: "app/routes/Profile.dietasDetalhes.$dietaID/route.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/Profile.dietasDetalhes.$dietaID/route.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Profile.dietasDetalhes.$dietaID/route.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardRefeicao, { titulo: "Caf\xE9 da Manh\xE3", diet }, void 0, !1, {
      fileName: "app/routes/Profile.dietasDetalhes.$dietaID/route.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.dietasDetalhes.$dietaID/route.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/AdicionarReceitas.$dietaID/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => Index,
  links: () => links3,
  loader: () => loader2,
  meta: () => meta3
});

// app/components/Footer.tsx
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("footer", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "col pb-4 pt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/IconeLogo.png", alt: "Logo do HealthyVibes", className: "col-12 col-md-6 logoFooter" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 11,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "footer-socials px-4 px-md-0 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", id: "youtube", title: "YouTube", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fa-brands fa-youtube" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 14,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 13,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", id: "whatsapp", title: "Whatsapp", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fa-brands fa-whatsapp" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 17,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", id: "facebook", title: "Facebook", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fa-brands fa-facebook-f" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 20,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 19,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", id: "instagram", title: "Instagram", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fa-brands fa-instagram" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "col d-flex justify-content-center align-items-center pb-4 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "footer-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Deixe-nos ajudar" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 30,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 29,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Receita" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Dietas" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 36,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 35,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Calculadora" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 39,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 38,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Exerc\xEDcios" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 42,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 41,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Controle de \xC1gua" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "col pb-4 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: "footer-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Bem-vindo" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 52,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 51,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Sobre N\xF3s" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 55,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 54,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Contato" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 58,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Termos de Servi\xE7o" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 61,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "#", className: "footer-link", children: "Pol\xEDtica de Privacidade" }, void 0, !1, {
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
var import_react8 = require("@remix-run/react"), import_react9 = require("react");
var import_core3 = require("@hookstate/core"), import_browser = __toESM(require("@hotjar/browser"));
var import_sweetalert22 = __toESM(require("sweetalert2")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Header() {
  let [user, setUser] = (0, import_react9.useState)(), handleGet = (0, import_react9.useCallback)(async () => {
    await axiosHealthyApi.get("/users/myuser").then((r) => {
      setUser(r.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  (0, import_react9.useEffect)(() => {
    handleGet();
  }, [handleGet]);
  let siteId = 3702227, hotjarVersion = 6;
  import_browser.default.init(siteId, hotjarVersion, {
    debug: !0
  });
  let [size, setSize] = (0, import_react9.useState)(1), changeFontSize = (tipoOperacao) => {
    tipoOperacao == "aumentar" && size < 2 ? setSize(1.25) : tipoOperacao == "diminuir" && size > 1 && setSize(1), document.documentElement.style.fontSize = `${size}rem`;
  }, changeTheme = (0, import_core3.useHookstate)(themePage), [theme, setTheme] = (0, import_react9.useState)(changeTheme.get());
  (0, import_react9.useEffect)(() => {
    localStorage.setItem("theme", theme), changeTheme.set(theme);
  }, [changeTheme, theme]);
  let switchContraste = () => {
    setTheme(theme === "contraOn" ? "contraOff" : "contraOn");
  };
  function logout() {
    import_sweetalert22.default.fire({
      title: "Quer realmente sair?",
      showCancelButton: !0,
      confirmButtonText: "Deslogar"
    }).then((result) => {
      result.isConfirmed && (localStorage.removeItem("access-token"), import_sweetalert22.default.fire({
        title: "Deslogado",
        allowEscapeKey: !1,
        allowOutsideClick: !1,
        icon: "success"
      }).then(() => {
        window.location.reload();
      }));
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("nav", { className: "navbar navbar-expand-xl", id: "topo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container-fluid baseNav", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "navbar-brand trapezio", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "img",
      {
        src: "/IconeLogo.png",
        alt: "Logo do Healthy Vibes",
        className: "logoHeader"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 90,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "button",
      {
        className: "navbar-toggler navBarButton",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#collapsibleNavbar",
        "aria-controls": "collapsibleNavbar",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "fa-solid fa-bars navBarIcon" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 97,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: "collapse navbar-collapse navSla",
        id: "collapsibleNavbar",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "nav-link", to: "/profile", children: "Dietas" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 114,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 113,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "nav-link", to: "/CalculadoraNutricional", children: "Calculadora" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 119,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "nav-link", to: "/Exercicios", children: "Exerc\xEDcios" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 123,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "nav-link", to: "/controleConsumo", children: "Controle de Consumo" }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 128,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("hr", { className: "nav-item-divider w-100 d-block d-lg-none mx-2" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "profile nav-item", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "logCadButtons", children: user?.nome == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/Login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn  loginButton", children: "Entrar" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 141,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/Cadastro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn  cadButton", children: "Cadastre-se" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 145,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 144,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "nav-item dropdown perfilDropdownSummoner mt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "button",
                {
                  className: "nav-link dropleft dropdown-toggle",
                  "data-bs-toggle": "dropdown",
                  children: [
                    "Ol\xE1, ",
                    user?.nome
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 150,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end perfilDropdown", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "dropdown-item ItemDropdown", to: "/profile", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "fa fa-user-o" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 158,
                    columnNumber: 25
                  }, this),
                  " Minhas coisas"
                ] }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 157,
                  columnNumber: 23
                }, this),
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "dropdown-item ItemDropdown", onClick: logout, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "fa fa-sign-out", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 163,
                    columnNumber: 25
                  }, this),
                  " ",
                  "Logout"
                ] }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 162,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Header.tsx",
                lineNumber: 156,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 136,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "itensAcessibilidade", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "img",
                {
                  src: "/AcessFontSizeBiggerV2.png",
                  className: "iconeAcessibilidade",
                  title: "Aumentar Fonte",
                  alt: "Aumentar fonte",
                  onClick: () => changeFontSize("aumentar")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 176,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "img",
                {
                  src: "/AcessFontSizeLowerV2.png",
                  className: "iconeAcessibilidade",
                  title: "Diminuir Fonte",
                  alt: "Diminuir Fonte",
                  onClick: () => changeFontSize("diminuir")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 183,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "img",
                {
                  src: `/AcessFontHighConrV2${theme == "contraOn" ? "-inverso" : ""}.png`,
                  className: "iconeAcessibilidade",
                  title: "Alto contraste",
                  alt: "Alto contraste",
                  onClick: switchContraste
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 190,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { to: "/Acessibilidade", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "img",
                {
                  src: "/AcessFontInfoV2.png",
                  className: "iconeAcessibilidade infoAcess",
                  alt: "acesso a acessibilidae"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 199,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 198,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 175,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 108,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 87,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

// app/styles/adicionarReceitas.css
var adicionarReceitas_default = "/build/_assets/adicionarReceitas-V6PH4JB4.css";

// app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx
var import_react_bootstrap3 = require("react-bootstrap"), import_react_hook_form = require("react-hook-form"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function FormularioReceita(props) {
  let {
    register,
    control,
    handleSubmit
  } = (0, import_react_hook_form.useForm)({
    defaultValues: {
      ingredientes: [{ nome: "", qtd: 1 }]
    },
    mode: "onBlur"
  }), { fields, append: append2, remove } = (0, import_react_hook_form.useFieldArray)({
    name: "ingredientes",
    control
  });
  function onSubmit(data) {
    console.log(data);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col d-flex flex-column justify-content-start align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "Titulo", className: "form-label fs-4 tituloInput", children: "Digite o Nome da sua Receita" }, void 0, !1, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 60,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "text", className: "inputPadrao form-control", id: "Titulo", ...register("titulo"), placeholder: "Ex: Dieta da Lua", required: !0 }, void 0, !1, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 61,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { className: "form-label fs-4 tituloInput", children: "Quais s\xE3o os ingredientes?" }, void 0, !1, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 64,
            columnNumber: 29
          }, this),
          fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "row column-gap-2 mb-2 mx-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "text",
                className: "inputPadrao form-control",
                id: `titulo${index}`,
                style: { width: "8rem" },
                required: !0,
                placeholder: "Nome",
                ...register(`ingredientes.${index}.nome`)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
                lineNumber: 69,
                columnNumber: 41
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "text",
                className: "inputPadrao form-control",
                id: `qtd${index}`,
                style: { width: "4rem" },
                required: !0,
                ...register(`ingredientes.${index}.qtd`),
                placeholder: "Qtd"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
                lineNumber: 74,
                columnNumber: 41
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_bootstrap3.Button, { onClick: () => remove(index), size: "sm", className: "ms-4 rounded-circle buttonRemove my-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "fa-solid fa-xmark" }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 79,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 78,
              columnNumber: 41
            }, this)
          ] }, field.id, !0, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 68,
            columnNumber: 37
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_bootstrap3.Button, { className: "buttonAdd rounded-circle", onClick: () => append2({ nome: "", qtd: 1 }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "fa-solid fa-plus" }, void 0, !1, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 85,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 84,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
          lineNumber: 63,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "py-md-5 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "fs-4 tituloInput", children: "Qual modo de preparo?" }, void 0, !1, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 91,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "form-floating", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("textarea", { className: "form-control caixaTexto", placeholder: "Descri\xE7\xE3o de como preparar", id: "floatingTextarea", ...register("modoDePreparo"), style: { height: "10rem" } }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 93,
              columnNumber: 33
            }, this),
            "  "
          ] }, void 0, !0, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 92,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
          lineNumber: 90,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col d-flex flex-column justify-content-start align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "end py-2 valoresNutricionais rounded", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "head px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { children: "Definir Valores Nutricionais" }, void 0, !1, {
          fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
          lineNumber: 107,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
          lineNumber: 106,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "row my-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "calorias", className: "form-label labelNutri mx-1 mx-md-2 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "Calorias" }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 111,
              columnNumber: 111
            }, this) }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 111,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "text",
                className: "inputPadrao form-control",
                id: "calorias",
                style: { width: "10rem" },
                required: !0,
                placeholder: "qtd em Total",
                ...register("calorias")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
                lineNumber: 112,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 110,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "row my-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "carboidratos", className: "form-label labelNutri mx-1 mx-md-2 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "Carboidratos" }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 118,
              columnNumber: 115
            }, this) }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 118,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "text",
                className: "inputPadrao form-control",
                id: "carboidratos",
                style: { width: "10rem" },
                required: !0,
                placeholder: "qtd em gramas (g)",
                ...register("carboidratos")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
                lineNumber: 119,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 117,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "row my-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "gordura", className: "form-label labelNutri mx-1 mx-md-2 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "Gordura" }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 125,
              columnNumber: 110
            }, this) }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 125,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "text",
                className: "inputPadrao form-control",
                id: "gordura",
                style: { width: "10rem" },
                required: !0,
                placeholder: "qtd em gramas (g)",
                ...register("gordura")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
                lineNumber: 126,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 124,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "row my-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "proteina", className: "form-label labelNutri mx-1 mx-md-2 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "Prote\xEDna" }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 132,
              columnNumber: 111
            }, this) }, void 0, !1, {
              fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
              lineNumber: 132,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "text",
                className: "inputPadrao form-control",
                id: "proteina",
                style: { width: "10rem" },
                required: !0,
                placeholder: "qtd em gramas (g)",
                ...register("prote\xEDna")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
                lineNumber: 133,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
            lineNumber: 131,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
          lineNumber: 109,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
        lineNumber: 104,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "d-flex justify-content-center align-items-center py-5 pe-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_bootstrap3.Button, { type: "reset", className: "ms-5 buttonForm float-lg-end col col-md-12", size: "lg", children: "Limpar" }, void 0, !1, {
        fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
        lineNumber: 148,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_bootstrap3.Button, { type: "submit", className: "ms-5 buttonForm col col-md-12", size: "lg", children: "Salvar" }, void 0, !1, {
        fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
        lineNumber: 150,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
      lineNumber: 146,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
      lineNumber: 145,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/AdicionarReceitas.$dietaID/FormularioReceita.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

// app/routes/AdicionarReceitas.$dietaID/route.tsx
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader2({
  params
}) {
  let urlParams = new URLSearchParams(params.dietaID);
  if (urlParams.has("dietaId") && urlParams.has("periodoRef"))
    return params.dietaID;
  throw new Error("Url inv\xE1lida");
}
var links3 = () => [{ rel: "stylesheet", href: adicionarReceitas_default }], meta3 = () => ({
  title: "Adicionar Receita"
});
function Index() {
  let data = (0, import_react10.useLoaderData)(), urlParams = new URLSearchParams(data);
  return console.log(urlParams.get("dietaId")), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/AdicionarReceitas.$dietaID/route.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container-fluid pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      FormularioReceita,
      {
        dietaId: `${urlParams.get("receitaId")}`,
        periodoRef: `${urlParams.get("periodoRef")}`
      },
      void 0,
      !1,
      {
        fileName: "app/routes/AdicionarReceitas.$dietaID/route.tsx",
        lineNumber: 44,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/AdicionarReceitas.$dietaID/route.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/AdicionarReceitas.$dietaID/route.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/AdicionarReceitas.$dietaID/route.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/ExercicioDetalhes.$excId.tsx
var ExercicioDetalhes_excId_exports = {};
__export(ExercicioDetalhes_excId_exports, {
  default: () => ExercicioDetalhes,
  links: () => links4,
  meta: () => meta4
});
var import_react11 = require("@remix-run/react");

// app/styles/exerciciosDetalhes.css
var exerciciosDetalhes_default = "/build/_assets/exerciciosDetalhes-LHAIQGFW.css";

// app/routes/ExercicioDetalhes.$excId.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: exerciciosDetalhes_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta4 = () => ({
  title: "Exerc\xEDcios"
});
function ExercicioDetalhes() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { id: "conteudo", className: " texto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "barraHoriz col-2 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Link, { to: "/exercicios", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "button", title: "Excluir", className: "buttonCards m-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("i", { className: "px-2 fa-solid fa-arrow-left fa-2xl", style: { color: "var(--text-quadenary)" } }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 35,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 34,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 33,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "headline text col-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "title text-center py-3 labelSimples", children: "Tr\xEDceps" }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 41,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 31,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container-fluid text-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("iframe", { className: "video", src: "https://www.youtube.com/embed/A2FAa4Q-4eg?si=1y-fgwSsrG1coOM5", title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 47,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container video d-flex justify-content-start align-items-center flex-column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "exercise", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-md-2 labelSimples titulo fw-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "fw-bold", children: "Repeti\xE7\xF5es" }, void 0, !1, {
          fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
          lineNumber: 55,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "rep rounded", children: "Fazer no m\xEDnimo 4 x 10" }, void 0, !1, {
          fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
          lineNumber: 56,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 54,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 53,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h5", { className: "texto-justificado m-md-4 mx-md-3 labelSimples", children: "Fazer pranchas melhora significativamente uma postura erecta e est\xE1vel. Atrav\xE9s do fortalecimento de core, o corpo ser\xE1 capaz de manter uma postura correcta porque os m\xFAsculos no abd\xF3men t\xEAm grande influ\xEAncia sobre a estabilidade do pesco\xE7o, ombros, peito e costas." }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 60,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 52,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/ExercicioDetalhes.$excId.tsx",
      lineNumber: 69,
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
var route_exports3 = {};
__export(route_exports3, {
  default: () => CalculadoraNutricional,
  links: () => links5,
  meta: () => meta5
});

// app/styles/calculadoras.css
var calculadoras_default = "/build/_assets/calculadoras-OVGULBOO.css";

// app/script/BMRequation.ts
function BRMequation(values) {
  let caloriasNivelAtiv = 0;
  switch (values.genero == "M" ? caloriasNivelAtiv = 88.4 + 13.4 * values.peso + 4.8 * values.altura - 5.68 * values.idade : caloriasNivelAtiv = 447.6 + 9.25 * values.peso + 3.1 * values.altura - 4.33 * values.idade, values.nivelAtividade) {
    case 1:
      caloriasNivelAtiv *= 1.2;
      break;
    case 2:
      caloriasNivelAtiv *= 1.375;
      break;
    case 3:
      caloriasNivelAtiv *= 1.55;
      break;
    case 4:
      caloriasNivelAtiv *= 1.725;
      break;
    case 5:
      caloriasNivelAtiv *= 1.9;
      break;
  }
  values.opcaoPeso == "Perder Peso" ? caloriasNivelAtiv *= 0.8 : values.opcaoPeso == "Ganhar m\xFAsculo" && (caloriasNivelAtiv *= 1.15);
  let carboidratos = caloriasNivelAtiv * 0.25 / 4, gorduras = caloriasNivelAtiv * 0.45 / 9, proteinas = caloriasNivelAtiv * 0.3 / 4;
  return {
    calorias: caloriasNivelAtiv,
    carboidratos,
    gorduras,
    proteina: proteinas,
    opcaoPeso: values.opcaoPeso,
    tipoDieta: values.tipoDieta
  };
}

// app/routes/CalculadoraNutricional/FormCalculadora.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function FormCalculadora(props) {
  function handleForm(event) {
    event.preventDefault();
    let formData = new FormData(event.target), data = Object.fromEntries(formData), resultados = BRMequation({
      peso: Number(data.peso),
      altura: Number(data.altura),
      idade: Number(data.idade),
      genero: String(data.flexRadioDefault),
      nivelAtividade: Number(data.nivelAtiv),
      opcaoPeso: String(data.options),
      tipoDieta: String(data.tipoAli)
    });
    props.resultados(
      resultados
    ), props.show(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { onSubmit: handleForm, method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "row m-auto cardBox", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            id: "tudo",
            value: "tudo",
            required: !0,
            defaultChecked: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 43,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "form-check-label", htmlFor: "tudo", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
              lineNumber: 53,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "card-text cardTxtTipoDieta", children: "Tudo" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 59,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 58,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            value: "vegetariana",
            id: "vegetariana",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 64,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "vegetariana", className: "form-check-label lblFdp", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
              lineNumber: 73,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "card-text cardTxtTipoDieta", children: "Vegetariana" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 79,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 78,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "card cardTeste", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            className: "form-check-input TipoAli",
            type: "radio",
            name: "tipoAli",
            id: "cetogenica",
            value: "Cetog\xEAnica",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 85,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "cetogenica", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
              lineNumber: 94,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "card-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "card-text cardTxtTipoDieta", children: "Cetog\xEAnica" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 100,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 99,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 93,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "tituloCategoria", children: "Deseja...?" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "d-flex justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
          lineNumber: 108,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "btn btn-secondary pontaEsquerda", htmlFor: "option1", children: "Perder peso" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
          lineNumber: 120,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "btn btn-secondary pontaNenhuma", htmlFor: "option2", children: "Manter-se ativo" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 130,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "input",
        {
          type: "radio",
          className: "btn-check ",
          name: "options",
          id: "option3",
          autoComplete: "off",
          value: "Ganhar m\xFAsculo",
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 133,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "btn btn-secondary pontaDireita", htmlFor: "option3", children: "Ganhar m\xFAsculo" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 143,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 107,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "tituloCategoria", children: "Sexo" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 148,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "d-flex justify-content-center textoOscuro", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "form-check sexo", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            className: "form-check-input",
            type: "radio",
            name: "flexRadioDefault",
            id: "sexoFeminino",
            value: "F",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 151,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "form-check-label", htmlFor: "sexoFeminino", children: "Feminino" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 159,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 150,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "form-check sexo", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            className: "form-check-input",
            type: "radio",
            name: "flexRadioDefault",
            id: "sexoMasculino",
            value: "M",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
            lineNumber: 164,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "form-check-label", htmlFor: "sexoMasculino", children: "Masculino" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 172,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 163,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container col-md-3 col-lg-2 pt-1 textoOscuro", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "row d-flex justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { children: "Idade:" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 182,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { className: "form-control border border-secondary ", type: "number", name: "idade", placeholder: "Idade", required: !0 }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 183,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 181,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { children: "Altura" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 187,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { className: "form-control border border-secondary", type: "number", name: "altura", placeholder: "Altura em Cm", required: !0 }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 188,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 186,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { children: "Peso" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 192,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { className: "form-control border border-secondary", type: "number", name: "peso", placeholder: "Peso em Kg", required: !0, step: "0.01" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
          lineNumber: 193,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 191,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 179,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 178,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "tituloCategoria", children: "N\xEDvel de Atividade" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 198,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container col-lg-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("select", { name: "nivelAtiv", className: "form-select form-select-sm selectCalculadora", "aria-label": "Default select example", defaultValue: "", required: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "", disabled: !0, children: "Selecione" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 201,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "1", children: "Sedent\xE1rio" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 202,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "2", children: "Baixa atividade" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 203,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "3", children: "Moderada" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 204,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "4", children: "Ativo" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 205,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: "5", children: "Muito ativo" }, void 0, !1, {
        fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
        lineNumber: 206,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 200,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 199,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container pt-5 col-lg-2 d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "botaoCalcular w-50", type: "submit", children: "Calcular" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 210,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
      lineNumber: 209,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/CalculadoraNutricional/FormCalculadora.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

// app/routes/CalculadoraNutricional/ModalAviso.tsx
var import_react12 = require("react"), import_react_bootstrap4 = require("react-bootstrap"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ModalAviso() {
  let [show, setShow] = (0, import_react12.useState)(!1), handleClose = () => setShow(!1);
  return (0, import_react12.useEffect)(() => {
    setShow(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_react_bootstrap4.Modal,
    {
      show,
      onHide: handleClose,
      centered: !0,
      backdrop: "static",
      keyboard: !1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_bootstrap4.Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_bootstrap4.Modal.Title, { className: "text-center warning-diferenciado fw-bold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("i", { className: "fa-solid fa-triangle-exclamation" }, void 0, !1, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_bootstrap4.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "alert alert-info border border-info border-2 p-2", children: "Essa calculadora utiliza do c\xE1lculo Gasto Energ\xE9tico Basal (GEB) para determinar quantas calorias, prote\xEDnas e gordura deve-se consumir" }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalAviso.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_bootstrap4.Modal.Footer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "alert alert-light", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "fw-bold", children: "Vale Ressaltar:" }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_bootstrap4.Button, { className: "btn-comum", onClick: handleClose, children: "Estou Ciente" }, void 0, !1, {
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
var import_react_bootstrap5 = require("react-bootstrap"), import_react13 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function ModalResultado(props) {
  let navigate = (0, import_react13.useNavigate)(), calorias = Number(props.resultados?.calorias?.toFixed(0)), minCarb = ((props.resultados?.carboidratos || 0) * 0.9).toFixed(0), maxCarb = ((props.resultados?.carboidratos || 0) * 1.1).toFixed(0), minProtein = ((props.resultados?.proteina || 0) * 0.9).toFixed(0), maxProtein = ((props.resultados?.proteina || 0) * 1.1).toFixed(0), minFat = ((props.resultados?.gorduras || 0) * 0.9).toFixed(0), maxFat = ((props.resultados?.gorduras || 0) * 1.1).toFixed(0);
  function navigateReceitas() {
    let resultStorage = {
      calorias,
      /*     carb: {
              max: maxCarb,
              min: minCarb,
          },
          protein: {
              max: maxProtein,
              min: minProtein,
          },
          fat: {
              max: maxFat,
              min: minFat,
          }, */
      opcaoPeso: props.resultados?.opcaoPeso,
      tipoDieta: props.resultados?.tipoDieta
    };
    return localStorage.setItem("resultsCalc", JSON.stringify(resultStorage)), localStorage.removeItem("RecipesLocalStorage"), navigate("/Receitas");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_react_bootstrap5.Modal,
    {
      ...props.modal,
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: !0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_bootstrap5.Modal.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_bootstrap5.Modal.Title, { className: "container-fluid text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "fw-bold", children: "Seu gasto cal\xF3rico por dia \xE9:" }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 59,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
            calorias,
            " calorias"
          ] }, void 0, !0, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 60,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_bootstrap5.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "container-fluid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "row text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h4", { children: [
            "Sugerido para: ",
            props.resultados?.opcaoPeso
          ] }, void 0, !0, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 66,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 65,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "row text-center pt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-md-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h6", { children: "Calorias Sugeridas" }, void 0, !1, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 70,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
                calorias / 1e3,
                " kcal"
              ] }, void 0, !0, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 71,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
              lineNumber: 69,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h6", { children: "Carboidratos" }, void 0, !1, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 74,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
                minCarb,
                " - ",
                maxCarb,
                "g"
              ] }, void 0, !0, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 75,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
              lineNumber: 73,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h6", { children: "Prote\xEDnas" }, void 0, !1, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 80,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
                minProtein,
                " - ",
                maxProtein,
                " g"
              ] }, void 0, !0, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 81,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
              lineNumber: 79,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-md-3 pt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h6", { children: "Gorduras" }, void 0, !1, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 86,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
                minFat,
                " - ",
                maxFat,
                " g"
              ] }, void 0, !0, {
                fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
                lineNumber: 87,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
              lineNumber: 85,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 68,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_bootstrap5.Modal.Footer, { className: "d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "button",
          {
            className: "botaoCalcular w-50",
            type: "button",
            onClick: navigateReceitas,
            children: "Gerar Receitas"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
            lineNumber: 95,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/CalculadoraNutricional/ModalResultado.tsx",
      lineNumber: 52,
      columnNumber: 9
    },
    this
  );
}

// app/routes/CalculadoraNutricional/route.tsx
var import_react14 = require("react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), links5 = () => [
  { rel: "stylesheet", href: calculadoras_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta5 = () => ({
  title: "Calculadora Nutricional"
});
function CalculadoraNutricional() {
  let [show, setShow] = (0, import_react14.useState)(!1), handleClose = () => setShow(!1), [resultados, setResultados] = (0, import_react14.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "tituloPagina pt-4", children: "Calculadora Nutricional" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "tituloCategoria", children: "Qual \xE9 o seu tipo de dieta?" }, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      ModalResultado,
      {
        modal: {
          show,
          onHide: handleClose
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ModalAviso, {}, void 0, !1, {
      fileName: "app/routes/CalculadoraNutricional/route.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Footer, {}, void 0, !1, {
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
  links: () => links6,
  meta: () => meta6
});

// app/styles/controleConsumo.css
var controleConsumo_default = "/build/_assets/controleConsumo-HWPNFFDM.css";

// app/routes/controleConsumo._index.tsx
var import_calendar = require("primereact/calendar");
var import_react15 = require("react"), import_react_bootstrap6 = require("react-bootstrap"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta6 = () => ({
  title: "controle Consumo"
}), links6 = () => [{ rel: "stylesheet", href: controleConsumo_default }];
function ControleConsumo() {
  let [date, setDate] = (0, import_react15.useState)(/* @__PURE__ */ new Date()), navigate = (0, import_react16.useNavigate)(), [createdAt, setCreatedAt] = (0, import_react15.useState)([]), handleGet = (0, import_react15.useCallback)(async () => {
    await axiosHealthyApi.get("/consumptions/myConsumptions").then((r) => {
      setCreatedAt(r.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  (0, import_react15.useEffect)(() => {
    handleGet();
  }, [handleGet]);
  let dateTemplate = (date2) => {
    if (createdAt)
      for (let index = 0; index < createdAt.length; index++) {
        let dateC = new Date(createdAt[index].belongDate);
        if (dateC.getDate() == date2.day && dateC.getMonth() == date2.month && dateC.getFullYear() == date2.year)
          return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { className: "border border-3 border-selecionado rounded-circle px-1", children: date2.day }, void 0, !1, {
            fileName: "app/routes/controleConsumo._index.tsx",
            lineNumber: 52,
            columnNumber: 16
          }, this);
      }
    return date2.day;
  };
  function useHandleSearch(e) {
    e.preventDefault(), navigate(`date=${date.toDateString()}`);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/controleConsumo._index.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { id: "conteudo", className: "container-fluid texto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "first-title", children: "Controle de Consumo" }, void 0, !1, {
        fileName: "app/routes/controleConsumo._index.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "d-flex justify-content-center align-items-center my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_react_bootstrap6.Card,
        {
          bg: "info",
          text: "white",
          style: { width: "26rem" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap6.Card.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap6.Card.Title, { children: "Instru\xE7\xE3o " }, void 0, !1, {
              fileName: "app/routes/controleConsumo._index.tsx",
              lineNumber: 80,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap6.Card.Text, { children: "Os dias circulados em verde possuem dados registrados" }, void 0, !1, {
              fileName: "app/routes/controleConsumo._index.tsx",
              lineNumber: 81,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/controleConsumo._index.tsx",
            lineNumber: 79,
            columnNumber: 25
          }, this)
        },
        "info",
        !1,
        {
          fileName: "app/routes/controleConsumo._index.tsx",
          lineNumber: 73,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/controleConsumo._index.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("form", { className: "d-flex flex-column justify-content-center align-items-center", onSubmit: useHandleSearch, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_calendar.Calendar,
          {
            value: date,
            onChange: (e) => {
              setDate(new Date(e.target.value || ""));
            },
            dateFormat: "dd/mm/yy",
            dateTemplate,
            inline: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/controleConsumo._index.tsx",
            lineNumber: 90,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/controleConsumo._index.tsx",
          lineNumber: 89,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_bootstrap6.Button, { type: "submit", size: "lg", className: "my-4 btn-comum", children: [
          "Pesquisar ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("i", { className: "fa-solid fa-magnifying-glass" }, void 0, !1, {
            fileName: "app/routes/controleConsumo._index.tsx",
            lineNumber: 101,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/controleConsumo._index.tsx",
          lineNumber: 100,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/controleConsumo._index.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo._index.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo._index.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/controleConsumo._index.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/controleConsumo._index.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/routes/Profile.acompanharProg/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  default: () => AcompanharProgresso,
  links: () => links7
});

// app/styles/acompanharProgresso.css
var acompanharProgresso_default = "/build/_assets/acompanharProgresso-RW5YY73C.css";

// app/routes/Profile.acompanharProg/Card_IMC.tsx
var import_sweetalert23 = __toESM(require("sweetalert2")), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function CardIMC(props) {
  function changeAnimation(e) {
    e.currentTarget.className += " fa-shake";
  }
  function changeToDefault(e) {
    e.currentTarget.className = e.currentTarget.className.replace(" fa-shake", "");
  }
  function handleDelete(e) {
    e.preventDefault(), props.imcId(""), import_sweetalert23.default.fire({
      title: "Quer deletar?",
      showDenyButton: !0,
      /* showCancelButton: true, */
      denyButtonText: "Cancelar",
      confirmButtonText: "Deletar"
    }).then((result) => {
      result.isConfirmed ? import_sweetalert23.default.fire("Deletado!", "", "success") : result.isDenied && import_sweetalert23.default.fire("N\xE3o deletado", "", "info");
    });
  }
  function handleUpdate() {
    props.imcId(""), props.handleShow(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "col p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "cardimc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "card-body p-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "conteudo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h5", { className: "card-title", children: [
        "IMC: ",
        props.IMC
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
        lineNumber: 53,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h5", { className: "card-text", children: [
        "Data: ",
        props.data
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
        lineNumber: 54,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
      lineNumber: 52,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "icon text-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "i",
        {
          className: "fa-solid fa-trash mx-2",
          onClick: handleDelete,
          onMouseEnter: changeAnimation,
          onMouseLeave: changeToDefault
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
          lineNumber: 57,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "i",
        {
          className: "fa-solid fa-pen-to-square",
          onClick: handleUpdate,
          onMouseEnter: changeAnimation,
          onMouseLeave: changeToDefault
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
          lineNumber: 62,
          columnNumber: 25
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
      lineNumber: 56,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
    lineNumber: 51,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile.acompanharProg/Card_IMC.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

// app/routes/Profile.acompanharProg/route.tsx
var import_core4 = require("@hookstate/core");
var import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2"), import_react17 = require("react");

// app/routes/Profile.acompanharProg/ModalInsert.tsx
var import_react_bootstrap7 = require("react-bootstrap"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function ModalInsertAcompanharProg(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_bootstrap7.Modal, { ...props.modal, size: "sm", centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_bootstrap7.Modal.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_bootstrap7.Modal.Title, { children: "Editar IMC 20.2" }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
      lineNumber: 22,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
      lineNumber: 21,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_bootstrap7.Modal.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { htmlFor: "altura", className: "form-label", children: "Altura:" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "number", className: "form-control", id: "altura", name: "altura", required: !0 }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
          lineNumber: 27,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { id: "emailHelp", className: "form-text", children: "Insira a altura em Cm" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
          lineNumber: 28,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "invalid-feedback", children: "Insira um valor v\xE1lido" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
          lineNumber: 29,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
        lineNumber: 25,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { htmlFor: "peso", className: "form-label", children: "Peso:" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
          lineNumber: 34,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "number", className: "form-control", id: "peso", name: "peso", required: !0 }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
          lineNumber: 35,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { id: "emailHelp", className: "form-text", children: "Insira o peso em Kg" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
          lineNumber: 36,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "invalid-feedback", children: "Insira um valor v\xE1lido" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
          lineNumber: 37,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_bootstrap7.Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_bootstrap7.Button, { variant: "danger", onClick: props.modal.onHide, type: "reset", children: "Cancelar" }, void 0, !1, {
        fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_bootstrap7.Button, { variant: "primary", type: "submit", children: "Confirmar" }, void 0, !1, {
        fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile.acompanharProg/ModalInsert.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

// app/routes/Profile.acompanharProg/route.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
import_chart.Chart.register(
  import_chart.CategoryScale,
  import_chart.LinearScale,
  import_chart.PointElement,
  import_chart.LineElement,
  import_chart.Title,
  import_chart.Tooltip,
  import_chart.Legend
);
var links7 = () => [
  { rel: "stylesheet", href: acompanharProgresso_default }
];
function AcompanharProgresso() {
  let changeTheme = (0, import_core4.useHookstate)(themePage), [imcID, setImcId] = (0, import_react17.useState)(""), [show, setShow] = (0, import_react17.useState)(!1), handleShow = () => setShow(!0), handleClose = () => setShow(!1), data = {
    labels: ["Dezembro (2022)", "Janeiro", "Fevereiro", "Abril", "Maio"],
    datasets: [
      {
        label: "IMC",
        data: [23.3, 22.2, 20.2, 23, 21.4],
        borderColor: changeTheme.get() == "contraOn" ? "rgba(101,87,5,0.8)" : "rgba(10,153,6,0.60)",
        backgroundColor: [changeTheme.get() == "contraOn" ? "rgba(255,255,000)" : "rgba(10,50,6,0.60)"],
        color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(70,0,70,1)"
      }
    ]
  }, options = {
    responsive: !0,
    scales: {
      y: {
        ticks: {
          color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(0,0,0,1)"
        }
      },
      x: {
        ticks: {
          color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(0,0,0,1)"
        }
      }
    },
    plugins: {
      legend: {
        display: !0,
        labels: {
          color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(70,0,70,1)"
        }
      },
      title: {
        display: !1,
        text: "Chart.js Line Chart",
        color: changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(70,0,70,1)"
      }
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "conteudoprog", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "campo-prog col p-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { className: "rotulo", children: "Altura" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 103,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 102,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { className: "inpProg", type: "number", id: "altura", name: "nome", placeholder: "Altura em Cm" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 101,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "campo-prog col p-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { className: "rotulo", children: "Peso" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 109,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { className: "inpProg", type: "number", id: "peso", name: "text", placeholder: "Peso em Kg", step: "0.01" }, void 0, !1, {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 107,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "buttonAdd col my-2 p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { type: "submit", className: "stylebuttonadd", children: "Adicionar" }, void 0, !1, {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 114,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 113,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center mt-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row mx-1 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        CardIMC,
        {
          IMC: "23.2",
          data: "23/12/2022",
          imcId: setImcId,
          handleShow
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 123,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        CardIMC,
        {
          IMC: "22.2",
          data: "13/02/2023",
          imcId: setImcId,
          handleShow
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 129,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        CardIMC,
        {
          IMC: "20.2",
          data: "25/03/2023",
          imcId: setImcId,
          handleShow
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Profile.acompanharProg/route.tsx",
          lineNumber: 135,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      ModalInsertAcompanharProg,
      {
        imcId: imcID,
        modal: {
          show,
          onHide: handleClose
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Profile.acompanharProg/route.tsx",
        lineNumber: 145,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center graphic-imc mt-4 w-md-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_chartjs_2.Line, { options, data }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 154,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile.acompanharProg/route.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile.acompanharProg/route.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile.acompanharProg/route.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

// app/routes/controleConsumo.$date/route.tsx
var route_exports5 = {};
__export(route_exports5, {
  default: () => ControleConsumo2,
  links: () => links8,
  loader: () => loader3,
  meta: () => meta7
});
var import_chart2 = require("chart.js"), import_react_chartjs_22 = require("react-chartjs-2");
var import_react19 = require("react"), import_react_bootstrap9 = require("react-bootstrap");

// app/routes/controleConsumo.$date/CardInfos.tsx
var import_sweetalert24 = __toESM(require("sweetalert2"));
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function CardInfos(props) {
  function handleClickUpdate() {
    props.setUpdateOrInsert("Atualizar"), props.setId(props.id), props.handleShow(props.typeCard);
  }
  function changeAnimation(e) {
    e.currentTarget.className += " fa-shake";
  }
  function changeToDefault(e) {
    e.currentTarget.className = e.currentTarget.className.replace(" fa-shake", "");
  }
  function handleDelete(e) {
    e.preventDefault(), import_sweetalert24.default.fire({
      title: "Quer deletar?",
      showDenyButton: !0,
      /* showCancelButton: true, */
      denyButtonText: "Cancelar",
      confirmButtonText: "Deletar"
    }).then(async (result) => {
      result.isConfirmed ? await axiosHealthyApi.delete(`/consumptions/${props.id}`).catch((e2) => {
        console.log(e2);
      }).then(() => {
        import_sweetalert24.default.fire("Deletado!", "", "success").then(() => {
          window.location.reload();
        });
      }) : result.isDenied && import_sweetalert24.default.fire("N\xE3o deletado", "", "info");
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-4", style: { width: "10rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "cardcontrole p-2 border rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "card-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "conteudo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "card-title", children: [
        "Hor\xE1rio: ",
        props.horario,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "card-text", children: [
        "Qtd: ",
        props.quantidade
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
      lineNumber: 58,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "icon text-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "i",
        {
          className: "fa-solid fa-trash mx-2",
          onClick: handleDelete,
          onMouseEnter: changeAnimation,
          onMouseLeave: changeToDefault
        },
        void 0,
        !1,
        {
          fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
          lineNumber: 63,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "i",
        {
          className: "fa-solid fa-pen-to-square pens",
          onClick: () => {
            handleClickUpdate();
          },
          onMouseEnter: changeAnimation,
          onMouseLeave: changeToDefault
        },
        void 0,
        !1,
        {
          fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
          lineNumber: 67,
          columnNumber: 25
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
      lineNumber: 62,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
    lineNumber: 57,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
    lineNumber: 56,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/controleConsumo.$date/CardInfos.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

// app/routes/controleConsumo.$date/ModalInsert.tsx
var import_react18 = require("react"), import_react_bootstrap8 = require("react-bootstrap");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ModalInsert(props) {
  let [measure, setMeasure] = (0, import_react18.useState)("");
  (0, import_react18.useEffect)(() => {
    props.formFor == "\xC1gua" ? setMeasure("Ml") : setMeasure("Kcal");
  }, [props.formFor]);
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target), data = Object.fromEntries(formData);
    props.updateOrInsert == "Inserir" ? await axiosHealthyApi.post("/consumptions", {
      quantidade: data.quantidade,
      tipoConsumo: props.formFor,
      belongDate: props.actualDate
    }).catch((e2) => {
      console.log(e2);
    }) : await axiosHealthyApi.patch(`/consumptions/${props.id}`, {
      quantidade: data.quantidade,
      tipoConsumo: props.formFor
    }).catch((e2) => {
      console.log(e2);
    }), props.handleClose(), window.location.reload();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react_bootstrap8.Modal, { ...props.modal, size: "sm", centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react_bootstrap8.Modal.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react_bootstrap8.Modal.Title, { children: [
      props.updateOrInsert,
      " ",
      props.formFor
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 52,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react_bootstrap8.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "quantidade", className: "form-label", children: "Valor:" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "number", className: "form-control", id: "quantidade", name: "quantidade", required: !0 }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { id: "emailHelp", className: "form-text", children: [
        "Insira a quanto ingeriu de ",
        props.formFor,
        " em ",
        measure
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 58,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "invalid-feedback", children: "Insira um valor v\xE1lido" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 55,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react_bootstrap8.Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react_bootstrap8.Button, { variant: "danger", onClick: props.modal.onHide, type: "reset", children: "Cancelar" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react_bootstrap8.Button, { variant: "primary", type: "submit", children: "Confirmar" }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
      lineNumber: 64,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/controleConsumo.$date/ModalInsert.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

// app/routes/controleConsumo.$date/route.tsx
var import_react20 = require("@remix-run/react"), import_core5 = require("@hookstate/core");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
import_chart2.Chart.register(import_chart2.ArcElement, import_chart2.Tooltip, import_chart2.Legend, import_chart2.Title);
async function loader3({
  params
}) {
  let urlParams = new URLSearchParams(params.date), diaMes = new Date(urlParams.get("date") || "");
  if (diaMes.getDate() > 0)
    return diaMes;
  throw new Error("Url inv\xE1lida");
}
var meta7 = ({
  data
}) => {
  let actualDate = new Date(data);
  return {
    title: "Dia: " + actualDate.getDate() + "/" + (actualDate.getMonth() + 1) + "/" + actualDate.getFullYear()
  };
}, links8 = () => [{ rel: "stylesheet", href: controleConsumo_default }];
function ControleConsumo2() {
  let data = (0, import_react20.useLoaderData)(), [show, setShow] = (0, import_react19.useState)(!1), [contentModal, setContentModal] = (0, import_react19.useState)(""), [updateOrInsert, setUpdateOrInsert] = (0, import_react19.useState)("insert"), [actualId, setActualId] = (0, import_react19.useState)(""), handleClose = () => setShow(!1), changeTheme = (0, import_core5.useHookstate)(themePage);
  function handleShow(typeOperation) {
    setShow(!0), setContentModal(typeOperation);
  }
  let [diet, setDiet] = (0, import_react19.useState)("");
  (0, import_react19.useEffect)(() => {
    localStorage.getItem("selectedDiet") && setDiet(localStorage.getItem("selectedDiet") || "");
  }, []);
  let actualDate = new Date(data), [consumptions, setConsumptions] = (0, import_react19.useState)([]), handleGet = (0, import_react19.useCallback)(async () => {
    let actualDate2 = new Date(data);
    await axiosHealthyApi.get("/consumptions/myConsumptions").then((r) => {
      let filterConsumptions = r.data;
      setConsumptions(
        filterConsumptions.filter((c) => {
          let date = new Date(c.belongDate);
          return date.getDate() == actualDate2.getDate() && date.getMonth() == actualDate2.getMonth() && date.getFullYear() == actualDate2.getFullYear();
        })
      );
    }).catch((e) => {
      console.log(e);
    });
  }, [data]);
  (0, import_react19.useEffect)(() => {
    handleGet();
  }, [handleGet]);
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
        data: [
          consumptions.filter((c) => c.tipoConsumo == "\xC1gua").reduce((accumulator, object) => accumulator + object.quantidade, 0),
          consumptions.filter((c) => c.tipoConsumo == "\xC1gua").reduce((accumulator, object) => accumulator + object.quantidade, 0) <= 2e3 ? 2e3 - consumptions.filter((c) => c.tipoConsumo == "\xC1gua").reduce((accumulator, object) => accumulator + object.quantidade, 0) : 0
        ],
        color: [changeTheme.get() == "contraOn" ? "rgba(255,255,255)" : "rgba(30,000,000, 1.0)"],
        backgroundColor: [
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
        // preciso fazer o dietas ainda
        backgroundColor: [
          changeTheme.get() == "contraOn" ? "rgba(255,255,000)" : "rgba(10,153,6,0.60)",
          changeTheme.get() == "contraOn" ? "rgba(30,30,30)" : "rgba(211, 211, 211, 1.0)"
        ]
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/controleConsumo.$date/route.tsx",
      lineNumber: 182,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { id: "conteudo", className: "container-fluid texto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "container-fluid mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "barraHoriz col-2 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react20.Link, { to: "/controleConsumo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "button",
          {
            type: "button",
            title: "Excluir",
            className: "buttonCards m-2 ",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "i",
              {
                className: "px-2 fa-solid fa-arrow-left fa-2xl",
                style: { color: "var(--text-quadenary)" }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 193,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 188,
            columnNumber: 33
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/controleConsumo.$date/route.tsx",
          lineNumber: 187,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/controleConsumo.$date/route.tsx",
          lineNumber: 186,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "headline text col-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "first-title", children: "Controle de Consumo" }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 201,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "first-title", children: actualDate.getDate() + "/" + (actualDate.getMonth() + 1) + "/" + actualDate.getFullYear() }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 202,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/controleConsumo.$date/route.tsx",
          lineNumber: 200,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/route.tsx",
        lineNumber: 185,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/controleConsumo.$date/route.tsx",
        lineNumber: 184,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "graphics row mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "controlwater col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "title text-center my-3", children: "E a\xED, j\xE1 bebeu \xE1gua?" }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 212,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "graphicwater d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react_chartjs_22.Doughnut, { options, data: water }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 215,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 214,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "container d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "row g-2 pt-3", children: [
            consumptions.filter((c) => c.tipoConsumo == "\xC1gua").map((c, index) => {
              let dateC = new Date(c.createdAt), time = `
                                            ${dateC.getHours() < 10 ? "0" : ""}
                                            ${dateC.getHours()}
                                            :${dateC.getMinutes() < 10 ? "0" : ""}
                                            ${dateC.getMinutes()}
                                            `;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                CardInfos,
                {
                  id: c._id,
                  horario: time.replaceAll(/\s/g, ""),
                  quantidade: `${c.quantidade} Ml`,
                  setUpdateOrInsert,
                  handleShow,
                  typeCard: "\xC1gua",
                  setId: setActualId
                },
                `${c._id}${index}`,
                !1,
                {
                  fileName: "app/routes/controleConsumo.$date/route.tsx",
                  lineNumber: 233,
                  columnNumber: 21
                },
                this
              );
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_react_bootstrap9.Button,
              {
                variant: "success",
                className: "m-md-4 float-end float-md-none",
                onClick: () => {
                  handleShow("\xC1gua"), setUpdateOrInsert("Inserir");
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("i", { className: "fa-solid fa-circle-plus fa-2xl" }, void 0, !1, {
                  fileName: "app/routes/controleConsumo.$date/route.tsx",
                  lineNumber: 255,
                  columnNumber: 41
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 249,
                columnNumber: 37
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/controleConsumo.$date/route.tsx",
              lineNumber: 248,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 220,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 218,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/controleConsumo.$date/route.tsx",
          lineNumber: 210,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "controlfood col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "titlefood text-center my-3", children: "O que voc\xEA comeu?" }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 267,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "graphicfood d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react_chartjs_22.Doughnut, { options: optionsfood, data: food }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 270,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 269,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "container d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "row g-2 pt-3 ", children: [
            consumptions.filter((c) => c.tipoConsumo == "Calorias").map((c, index) => {
              let dateC = new Date(c.createdAt), time = `
                                            ${dateC.getHours() < 10 ? "0" : ""}
                                            ${dateC.getHours()}
                                            :${dateC.getMinutes() < 10 ? "0" : ""}
                                            ${dateC.getMinutes()}
                                            `;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                CardInfos,
                {
                  id: c._id,
                  horario: time.replaceAll(/\s/g, ""),
                  quantidade: `${c.quantidade} cal`,
                  setUpdateOrInsert,
                  handleShow,
                  typeCard: "Calorias",
                  setId: setActualId
                },
                `${c._id}${index}`,
                !1,
                {
                  fileName: "app/routes/controleConsumo.$date/route.tsx",
                  lineNumber: 286,
                  columnNumber: 21
                },
                this
              );
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              import_react_bootstrap9.Button,
              {
                variant: "success",
                className: "m-md-4 float-end float-md-none",
                onClick: () => {
                  handleShow("Calorias"), setUpdateOrInsert("Inserir");
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("i", { className: "fa-solid fa-circle-plus fa-2xl" }, void 0, !1, {
                  fileName: "app/routes/controleConsumo.$date/route.tsx",
                  lineNumber: 308,
                  columnNumber: 41
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 302,
                columnNumber: 37
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/controleConsumo.$date/route.tsx",
              lineNumber: 301,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 273,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 272,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "d-flex justify-content-center align-items-center my-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "Diet", className: "mx-3", children: "Escolha a Dieta:" }, void 0, !1, {
              fileName: "app/routes/controleConsumo.$date/route.tsx",
              lineNumber: 315,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "select",
              {
                className: "form-select selectConsumo",
                "aria-label": "Default select example",
                value: diet,
                id: "Diet",
                onChange: (e) => {
                  setDiet(e.target.value), localStorage.setItem("selectedDiet", e.target.value);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "", disabled: !0, children: "Escolha uma para base" }, void 0, !1, {
                    fileName: "app/routes/controleConsumo.$date/route.tsx",
                    lineNumber: 323,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "salve", children: "One" }, void 0, !1, {
                    fileName: "app/routes/controleConsumo.$date/route.tsx",
                    lineNumber: 324,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "2", children: "Two" }, void 0, !1, {
                    fileName: "app/routes/controleConsumo.$date/route.tsx",
                    lineNumber: 325,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("option", { value: "3", children: "Three" }, void 0, !1, {
                    fileName: "app/routes/controleConsumo.$date/route.tsx",
                    lineNumber: 326,
                    columnNumber: 33
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/controleConsumo.$date/route.tsx",
                lineNumber: 316,
                columnNumber: 29
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/controleConsumo.$date/route.tsx",
            lineNumber: 314,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/controleConsumo.$date/route.tsx",
          lineNumber: 266,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/controleConsumo.$date/route.tsx",
        lineNumber: 209,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/controleConsumo.$date/route.tsx",
      lineNumber: 183,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      ModalInsert,
      {
        modal: {
          onHide: handleClose,
          show
        },
        formFor: contentModal,
        updateOrInsert,
        handleClose,
        id: actualId,
        actualDate
      },
      void 0,
      !1,
      {
        fileName: "app/routes/controleConsumo.$date/route.tsx",
        lineNumber: 335,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/controleConsumo.$date/route.tsx",
      lineNumber: 347,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/controleConsumo.$date/route.tsx",
    lineNumber: 181,
    columnNumber: 5
  }, this);
}

// app/routes/Acessibilidade.tsx
var Acessibilidade_exports = {};
__export(Acessibilidade_exports, {
  default: () => Acessibilidade,
  links: () => links9,
  meta: () => meta8
});

// app/styles/acessibilidade.css
var acessibilidade_default = "/build/_assets/acessibilidade-TBF7W2HG.css";

// app/routes/Acessibilidade.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), meta8 = () => ({
  title: "Acessibilidade"
}), links9 = () => [{ rel: "stylesheet", href: acessibilidade_default }];
function Acessibilidade() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("main", { className: "texto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-center py-3", children: "Acessibilidade" }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h5", { className: "texto-justificado container-fluid", children: [
      "Este site foi desenvolvido para que pessoas com defici\xEAncia visual, baixa vis\xE3o, daltonismo, defici\xEAncia auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte, teclas de atalho, tradu\xE7\xE3o para a L\xEDngua Brasileira de Sinais e navega\xE7\xE3o por teclado.Para aumentar a fonte, \xE9 s\xF3 clicar no s\xEDmbolo de A+ em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, \xE9 s\xF3 clicar em A-.Se for necess\xE1rio, voc\xEA tamb\xE9m pode usar o zoom nativo do seu navegador, pressionando as teclas ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("mark", { children: "\u201CCtrl\u201D e \u201C+\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 36,
        columnNumber: 45
      }, this),
      " para aumentar todo o site e ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("mark", { children: "\u201CCtrl\u201D e \u201C-\u201C" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 37,
        columnNumber: 34
      }, this),
      " para diminuir. Para voltar ao padr\xE3o, pressione ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("mark", { children: "\u201CCtrl\u201D e \u201C0\u201D" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { className: "text-center pt-5 pb-3", children: "Teclas de atalho por navegadores" }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-justify py-1 px-3", children: "Internet Explorer e Google Chrome:" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C1\u201D - ir para o conte\xFAdo" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C2\u201D - ir para o menu" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-justify py-2 px-3", children: "\u201CAlt\u201D + \u201C3\u201D - ir para o rodap\xE9" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Firefox:" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-justify py-1 px-3", children: "\u201CAlt\u201D + \u201CShift\u201D + \u201Cn\xFAmero\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Opera:" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-justify py-1 px-3", children: "\u201CShift\u201D + \u201CEscape\u201D + \u201Cn\xFAmero\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h3", { className: "text-justify pt-4 pb-1 px-3", children: "Safari e OmniWeb:" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h6", { className: "text-justify py-1 px-3", children: "\u201CCtrl\u201D + \u201Cn\xFAmero\u201D" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { className: "text-center pt-5 pb-3", children: "Navega\xE7\xE3o por tabula\xE7\xE3o" }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h5", { className: "text-justify py-2 px-3", children: [
      "Use a tecla Tab para navegar por elementos que recebem a\xE7\xE3o do usu\xE1rio no site, tais como links, bot\xF5es, campos de formul\xE1rio e outros na ordem em que eles s\xE3o apresentados na p\xE1gina, e",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("mark", { children: "Shift + Tab" }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "headline text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { className: "text-center pt-5 pb-3", children: "Sugest\xF5es de programas dispon\xEDveis para pessoas com defici\xEAncia" }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Acessibilidade.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "headline text mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: "Nitrous Voice Flux: controla o computador por voz;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: "NVDA: software livre para ler tela \u2013 v\xE1rios idiomas (Windows);" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: "YeoSoft Text: leitor de tela em ingl\xEAs e portugu\xEAs;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: "Jaws for Windows: leitor de tela \u2013 v\xE1rios idiomas;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: "Virtual Vision: leitor de telas em portugu\xEAs do Brasil;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: "DOSVOX: sistema para deficientes visuais (Windows ou Linux);" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: "Talckback: leitor de tela dispon\xEDvel em smartphones Android;" }, void 0, !1, {
        fileName: "app/routes/Acessibilidade.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: "VLibras: ferramentas gratuitas que traduz conte\xFAdos digitais (texto, \xE1udio e v\xEDdeo) em Portugu\xEAs para Libras." }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Footer, {}, void 0, !1, {
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
var route_exports6 = {};
__export(route_exports6, {
  default: () => DietasProfile
});
var import_react22 = require("@remix-run/react");

// app/routes/Profile._index/Card_Dieta.tsx
var import_react21 = require("@remix-run/react"), import_sweetalert25 = __toESM(require("sweetalert2"));
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function CardDieta(props) {
  function changeAnimation(e) {
    e.currentTarget.className += " fa-shake";
  }
  function changeToDefault(e) {
    e.currentTarget.className = e.currentTarget.className.replace(" fa-shake", "");
  }
  function handleDelete(e) {
    e.preventDefault(), import_sweetalert25.default.fire({
      title: "Quer deletar?",
      showDenyButton: !0,
      /* showCancelButton: true, */
      denyButtonText: "Cancelar",
      confirmButtonText: "Deletar"
    }).then((result) => {
      result.isConfirmed ? axiosHealthyApi.delete(`/diets/${props.id}`).then(() => {
        import_sweetalert25.default.fire("Deletado!", "", "success"), window.location.reload();
      }).catch((e2) => {
        console.log(e2);
      }) : result.isDenied && import_sweetalert25.default.fire("N\xE3o deletado", "", "info");
    });
  }
  function handleUpdate(e) {
    e.preventDefault(), props.currentId(props.id), props.showModal(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react21.Link, { to: `/profile/dietasDetalhes/dietaId=${props.id}`, style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "card-top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "ImageAdress", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("img", { src: "/PastaIcon.png", alt: "Imagem Dieta" }, void 0, !1, {
      fileName: "app/routes/Profile._index/Card_Dieta.tsx",
      lineNumber: 62,
      columnNumber: 40
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/Card_Dieta.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/Card_Dieta.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "card-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "title", children: props?.title }, void 0, !1, {
        fileName: "app/routes/Profile._index/Card_Dieta.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h6", { className: "tag tag-travel", children: [
        "Dieta ",
        props.opcao
      ] }, void 0, !0, {
        fileName: "app/routes/Profile._index/Card_Dieta.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: props.descricao }, void 0, !1, {
        fileName: "app/routes/Profile._index/Card_Dieta.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-end iconsCard", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { type: "button", title: "Excluir", className: "buttonCards", onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
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
            lineNumber: 70,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/Profile._index/Card_Dieta.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { type: "button", title: "Atualizar", className: "buttonCards", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          "i",
          {
            className: "px-2 fa-solid fa-ellipsis text-info",
            title: "Atualizar",
            onClick: handleUpdate,
            onMouseEnter: changeAnimation,
            onMouseLeave: changeToDefault
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Profile._index/Card_Dieta.tsx",
            lineNumber: 77,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/Profile._index/Card_Dieta.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Profile._index/Card_Dieta.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile._index/Card_Dieta.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile._index/Card_Dieta.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile._index/Card_Dieta.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/Profile._index/route.tsx
var import_react23 = require("react");

// app/routes/Profile._index/ModalUpdateDiet.tsx
var import_react_bootstrap10 = require("react-bootstrap");
var import_sweetalert26 = __toESM(require("sweetalert2")), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function ModalUpdateDiet(props) {
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target), data = Object.fromEntries(formData);
    await axiosHealthyApi.patch(`/diets/${props.id}`, {
      nome: data.nome,
      descricao: data.descricao
    }).then(() => {
      import_sweetalert26.default.fire({
        title: "Salvo com sucesso",
        allowEscapeKey: !1,
        allowOutsideClick: !1,
        icon: "success"
      }).then(() => {
        window.location.reload();
      });
    }).catch((e2) => {
      console.log(e2);
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react_bootstrap10.Modal, { ...props.modal, centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react_bootstrap10.Modal.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react_bootstrap10.Modal.Title, { children: "Editar Dieta" }, void 0, !1, {
      fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
      lineNumber: 45,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
      lineNumber: 44,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react_bootstrap10.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "nome", className: "form-label", children: "Nome da dieta:" }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 49,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("input", { type: "text", className: "form-control", id: "nome", name: "nome", required: !0 }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 50,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { id: "emailHelp", className: "form-text" }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 51,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "invalid-feedback", children: "Insira um valor v\xE1lido" }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 52,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("label", { htmlFor: "descricao", className: "form-label", children: "Descri\xE7\xE3o da dieta:" }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 55,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("textarea", { className: "form-control caixaTexto", placeholder: "Coloque algo para lembrar da dieta", id: "floatingTextarea", name: "descricao", style: { height: "10rem" } }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { id: "emailHelp", className: "form-text" }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "invalid-feedback", children: "Insira um valor v\xE1lido" }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 58,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
      lineNumber: 48,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react_bootstrap10.Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react_bootstrap10.Button, { variant: "danger", onClick: props.modal.onHide, type: "reset", children: "Cancelar" }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react_bootstrap10.Button, { variant: "primary", type: "submit", children: "Confirmar" }, void 0, !1, {
        fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
    lineNumber: 43,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/Profile._index/ModalUpdateDiet.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

// app/routes/Profile._index/route.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function DietasProfile() {
  let [show, setShow] = (0, import_react23.useState)(!1), [currentId, setCurrentId] = (0, import_react23.useState)(""), handleClose = () => setShow(!1), [diet, setDiet] = (0, import_react23.useState)([]), handleGet = (0, import_react23.useCallback)(async () => {
    await axiosHealthyApi.get("/diets/myDiets").then((r) => {
      setDiet(r.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  return (0, import_react23.useEffect)(() => {
    handleGet();
  }, [handleGet]), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: diet.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "py-5 my-5 text-center container-fluid", children: "N\xE3o h\xE1 dietas salvas" }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("section", { className: "card-container cardDiet", children: diet.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      CardDieta,
      {
        title: d.nome,
        descricao: d.descricao,
        id: d._id,
        opcao: d.opcaoPeso,
        currentId: setCurrentId,
        showModal: setShow
      },
      d._id,
      !1,
      {
        fileName: "app/routes/Profile._index/route.tsx",
        lineNumber: 49,
        columnNumber: 33
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 46,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "container-fluid mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react22.Link, { to: "/CalculadoraNutricional", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { className: "float-end stylebutton me-4 p-0 px-4 py-2", type: "button", children: "Adicionar Dieta" }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 65,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 64,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/Profile._index/route.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      ModalUpdateDiet,
      {
        modal: {
          show,
          onHide: handleClose
        },
        id: currentId
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Profile._index/route.tsx",
        lineNumber: 68,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/Profile._index/route.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

// app/routes/alterarDados/route.tsx
var route_exports7 = {};
__export(route_exports7, {
  default: () => alterarDados,
  links: () => links10,
  meta: () => meta9
});

// app/styles/cadastro.css
var cadastro_default = "/build/_assets/cadastro-AXW2Z574.css";

// app/routes/alterarDados/route.tsx
var import_react25 = require("@remix-run/react");

// app/routes/alterarDados/modalConfirmacao.tsx
var import_react24 = require("react"), import_react_bootstrap11 = require("react-bootstrap"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function ModalConfirmacao() {
  let [show, setShow] = (0, import_react24.useState)(!1), handleClose = () => setShow(!1);
  return (0, import_react24.useEffect)(() => {
    setShow(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_react_bootstrap11.Modal,
    {
      show,
      onHide: handleClose,
      centered: !0,
      backdrop: "static",
      keyboard: !1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react_bootstrap11.Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react_bootstrap11.Modal.Title, { className: "text-center warning-diferenciado fw-bold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("i", { className: "fa-solid fa-triangle-exclamation" }, void 0, !1, {
            fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
            lineNumber: 24,
            columnNumber: 21
          }, this),
          " Confirme sua senha original"
        ] }, void 0, !0, {
          fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react_bootstrap11.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("form", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { htmlFor: "senha", children: "Confirme sua Senha" }, void 0, !1, {
            fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
            lineNumber: 30,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("input", { type: "password", name: "senha", placeholder: "Digite sua Senha", required: !0 }, void 0, !1, {
            fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
            lineNumber: 31,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
          lineNumber: 29,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react_bootstrap11.Modal.Footer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react_bootstrap11.Button, { className: "btn-comum", onClick: handleClose, children: "Confirmo" }, void 0, !1, {
          fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/alterarDados/modalConfirmacao.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
}

// app/routes/alterarDados/route.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), links10 = () => [
  { rel: "stylesheet", href: cadastro_default }
], meta9 = () => ({
  title: "Atualiza\xE7\xE3o de Dados"
});
function alterarDados() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "box-img fundoPossivel", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react25.Link, { className: "nav-link", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { children: [
          "Healthy",
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/alterarDados/route.tsx",
            lineNumber: 26,
            columnNumber: 35
          }, this),
          "Vibes"
        ] }, void 0, !0, {
          fileName: "app/routes/alterarDados/route.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/alterarDados/route.tsx",
          lineNumber: 25,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("img", { src: "/cadImg1.jpg", alt: "img temporaria" }, void 0, !1, {
          fileName: "app/routes/alterarDados/route.tsx",
          lineNumber: 28,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/alterarDados/route.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "form-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h1", { children: "Atualiza\xE7\xE3o de Dados" }, void 0, !1, {
          fileName: "app/routes/alterarDados/route.tsx",
          lineNumber: 31,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("form", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "input-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "nome", children: "Nome" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 34,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "text", name: "nome", placeholder: "Digite seu nome atualizado" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 35,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/alterarDados/route.tsx",
            lineNumber: 33,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "input-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "email", children: "E-mail*" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 38,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "email", name: "email", placeholder: "Digite seu novo e-mail" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 39,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/alterarDados/route.tsx",
            lineNumber: 37,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "input-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "email", children: "Confirmar E-mail*" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 42,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "email", name: "email", placeholder: "Confirme seu novo e-mail" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 43,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/alterarDados/route.tsx",
            lineNumber: 41,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "input-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "senha", children: "Senha*" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 46,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "password", name: "senha", placeholder: "Digite nova senha" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 47,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/alterarDados/route.tsx",
            lineNumber: 45,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "input-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "senha", children: "Confirmar Senha*" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 50,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { type: "password", name: "senha", placeholder: "Confirme a senha" }, void 0, !1, {
              fileName: "app/routes/alterarDados/route.tsx",
              lineNumber: 51,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/alterarDados/route.tsx",
            lineNumber: 49,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("button", { children: "Salvar" }, void 0, !1, {
            fileName: "app/routes/alterarDados/route.tsx",
            lineNumber: 54,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/alterarDados/route.tsx",
            lineNumber: 53,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/alterarDados/route.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/alterarDados/route.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/alterarDados/route.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(ModalConfirmacao, {}, void 0, !1, {
      fileName: "app/routes/alterarDados/route.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/alterarDados/route.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/Macros.$type/route.tsx
var route_exports8 = {};
__export(route_exports8, {
  default: () => Index2,
  links: () => links11,
  loader: () => loader4,
  meta: () => meta10
});
var import_chart3 = require("chart.js"), import_react_chartjs_23 = require("react-chartjs-2");
var import_chartjs_plugin_datalabels = __toESM(require("chartjs-plugin-datalabels"));

// app/styles/macro.css
var macro_default = "/build/_assets/macro-CZA4FPNL.css";

// app/routes/Macros.$type/route.tsx
var import_react26 = require("@remix-run/react"), import_core6 = require("@hookstate/core");
var import_react27 = require("react"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
import_chart3.Chart.register(import_chart3.ArcElement, import_chart3.Tooltip, import_chart3.Legend, import_chartjs_plugin_datalabels.default);
async function loader4({ params }) {
  if (new URLSearchParams(params.type).has("dietaId") || params.type == "notSaved")
    return params.type;
  throw new Error("Url inv\xE1lida");
}
var links11 = () => [{ rel: "stylesheet", href: macro_default }], meta10 = () => ({
  title: "Macros"
});
function Index2() {
  let dataParams = (0, import_react26.useLoaderData)(), [valores, setValores] = (0, import_react27.useState)({
    calorias: 0,
    proteina: {
      calorias: 0,
      gramas: 0
    },
    carboidratos: {
      calorias: 0,
      gramas: 0
    },
    gordura: {
      calorias: 0,
      gramas: 0
    }
  }), valoresFunction = (recipes) => {
    let valores2 = {
      calorias: 0,
      proteina: {
        calorias: 0,
        gramas: 0
      },
      carboidratos: {
        calorias: 0,
        gramas: 0
      },
      gordura: {
        calorias: 0,
        gramas: 0
      }
    };
    recipes.forEach((r) => {
      valores2.calorias += r.calorias, valores2.carboidratos.gramas += r.carboidratos, valores2.proteina.gramas += r.prote\u00EDna, valores2.gordura.gramas += r.gordura;
    }), valores2.gordura.calorias = valores2.gordura.gramas * 9, valores2.proteina.calorias = valores2.proteina.gramas * 4, valores2.carboidratos.calorias = valores2.carboidratos.gramas * 4, setValores(valores2);
  };
  (0, import_react27.useEffect)(() => {
    if (dataParams == "notSaved") {
      let recipes = JSON.parse(
        localStorage.getItem("RecipesLocalStorage") || ""
      );
      valoresFunction(recipes);
    }
  }, [dataParams]);
  let changeTheme = (0, import_core6.useHookstate)(themePage), data = {
    labels: ["Prote\xEDnas", "Carboidratos", "Gordura"],
    datasets: [
      {
        label: "% de calorias",
        data: [
          (valores.proteina.calorias / valores.calorias * 100).toFixed(0),
          (valores.carboidratos.calorias / valores.calorias * 100).toFixed(0),
          (valores.carboidratos.calorias / valores.calorias * 100).toFixed(0)
        ],
        backgroundColor: [
          changeTheme.get() == "contraOn" ? "rgba(30,000,000, 1.0)" : "rgba(151,255,177, 1.0)",
          changeTheme.get() == "contraOn" ? "rgba(30,000,000, 1.0)" : "rgba(255,127,127, 1.0)",
          changeTheme.get() == "contraOn" ? "rgba(30,000,000, 1.0)" : "rgba(159,197,232, 1.0)"
          /* 'rgba(255, 206, 86,1)', */
        ]
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Macros.$type/route.tsx",
      lineNumber: 138,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "container-fluid py-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "container-fluid mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "barraHoriz col-2 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react26.Link, { to: "/receitas", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "button",
          {
            type: "button",
            title: "Excluir",
            className: "buttonCards m-2 ",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
              "i",
              {
                className: "px-2 fa-solid fa-arrow-left fa-2xl",
                style: { color: "var(--text-quadenary)" }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 150,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Macros.$type/route.tsx",
            lineNumber: 145,
            columnNumber: 33
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 144,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 143,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "headline text col-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h1", { className: "title text-center py-3 labelSimples fw-bold", children: "Macros" }, void 0, !1, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 158,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 157,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Macros.$type/route.tsx",
        lineNumber: 142,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/Macros.$type/route.tsx",
        lineNumber: 141,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "row my-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "col d-flex flex-column justify-content-start align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "start pt-3 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react_chartjs_23.Pie, { data, options: {
          responsive: !0,
          plugins: {
            datalabels: {
              formatter: (value) => value + "%",
              color: "#FFF",
              font: {
                size: 20
              }
            }
          }
        }, className: "graficoPizza" }, void 0, !1, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 168,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 167,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 166,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "col d-flex flex-column justify-content-start align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h4", { className: "fw-semibold fs-2 valTotais", children: "Valores totais" }, void 0, !1, {
            fileName: "app/routes/Macros.$type/route.tsx",
            lineNumber: 174,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/Macros.$type/route.tsx",
            lineNumber: 173,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("table", { className: "table fs-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: "Calorias" }, void 0, !1, {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 179,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: valores.calorias }, void 0, !1, {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 180,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/Macros.$type/route.tsx",
              lineNumber: 178,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: "Prote\xEDnas" }, void 0, !1, {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 183,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: [
                valores.proteina.gramas.toFixed(2),
                " g"
              ] }, void 0, !0, {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 184,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/Macros.$type/route.tsx",
              lineNumber: 182,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: "Carboidratos" }, void 0, !1, {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 187,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: [
                valores.carboidratos.gramas.toFixed(2),
                " g"
              ] }, void 0, !0, {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 188,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/Macros.$type/route.tsx",
              lineNumber: 186,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: "Gorduras" }, void 0, !1, {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 191,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("td", { children: [
                valores.gordura.gramas.toFixed(2),
                " g"
              ] }, void 0, !0, {
                fileName: "app/routes/Macros.$type/route.tsx",
                lineNumber: 192,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/Macros.$type/route.tsx",
              lineNumber: 190,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Macros.$type/route.tsx",
            lineNumber: 177,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/Macros.$type/route.tsx",
            lineNumber: 176,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 172,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/Macros.$type/route.tsx",
          lineNumber: 171,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Macros.$type/route.tsx",
        lineNumber: 165,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Macros.$type/route.tsx",
      lineNumber: 140,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/Macros.$type/route.tsx",
      lineNumber: 201,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Macros.$type/route.tsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}

// app/routes/Exercicios/route.tsx
var route_exports9 = {};
__export(route_exports9, {
  default: () => Exercicios,
  links: () => links12,
  meta: () => meta11
});
var import_react29 = require("react");

// app/routes/Exercicios/Exercicio_Base.tsx
var import_react28 = require("@remix-run/react"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function ExercicioBase(props) {
  function image() {
    return props.image != null ? `data:image/png;base64,${Buffer.from(props.image.img.data).toString("base64")}` : "/treino/abdominal.png";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react28.Link, { to: `/ExercicioDetalhes/exercise=${props.id}`, style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card-top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "ImageAdress", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("img", { src: image(), alt: props.cardTitle, className: "teste" }, void 0, !1, {
      fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
      lineNumber: 33,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "card-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h3", { className: "title", children: props.cardTitle }, void 0, !1, {
        fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h6", { className: "tag tag-travel", children: props.duracao }, void 0, !1, {
        fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: props.textoCard }, void 0, !1, {
        fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/Exercicios/Exercicio_Base.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/Exercicios/Filtro_Barra.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function FiltroBarra(props) {
  return (
    /* n to conseguindo fzr esse fdp ser do tamanho do body */
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "d-flex flex-column flex-shrink-0 p-3 bg-light barraDeFiltros col col-md-4 my-2", id: "barraDeFiltros", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { href: "/", className: "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("svg", { className: "bi me-2", width: "40", height: "32" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "fs-4", children: "Filtros" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 16,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("hr", {}, void 0, !1, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { className: "mb-1 listaCategoria", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { className: "btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro", "data-bs-toggle": "collapse", "data-bs-target": "#areas-collapse", "aria-expanded": "true", children: "\xC1reas" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "collapse show", id: "areas-collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("ul", { className: "btn-toggle-nav list-unstyled fw-normal pb-1 small grupoCategoria", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                className: "form-check-input",
                type: "checkbox",
                id: "flexCheckDefault",
                value: "alongamento",
                onChange: (e) => props.update(e.target.checked, "alongamento")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
                lineNumber: 27,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault", children: "Alongamento" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 31,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 26,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 25,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                className: "form-check-input",
                type: "checkbox",
                id: "flexCheckDefault2",
                value: "perna",
                onChange: (e) => props.update(e.target.checked, "perna")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
                lineNumber: 38,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault2", children: "Perna" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 42,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 37,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 36,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                className: "form-check-input",
                type: "checkbox",
                id: "flexCheckDefault3",
                value: "braco",
                onChange: (e) => props.update(e.target.checked, "braco")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
                lineNumber: 49,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault3", children: "Bra\xE7o" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 53,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 48,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 47,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                className: "form-check-input",
                type: "checkbox",
                id: "flexCheckDefault4",
                value: "triceps",
                onChange: (e) => props.update(e.target.checked, "triceps")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
                lineNumber: 60,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault4", children: "Tr\xEDceps" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 63,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 59,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 58,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                className: "form-check-input",
                type: "checkbox",
                id: "flexCheckDefault5",
                value: "peito",
                onChange: (e) => props.update(e.target.checked, "peito")
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
                lineNumber: 70,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexCheckDefault5", children: "Peito" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 74,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 69,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 68,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 24,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("hr", {}, void 0, !1, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("li", { className: "mb-1 listaCategoria", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { className: "btn btn-toggle align-items-center rounded btnCategoriaBarraFiltro", "data-bs-toggle": "collapse", "data-bs-target": "#duracao-collapse", "aria-expanded": "true", children: "Dura\xE7\xE3o" }, void 0, !1, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "collapse", id: "duracao-collapse", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                className: "form-check-input",
                type: "radio",
                name: "flexRadioDefault",
                id: "input1",
                value: "Curto",
                onChange: (e) => {
                  e.target.checked && props.duracao(e.target.value);
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
                lineNumber: 89,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "form-check-label", htmlFor: "input1", children: "Curto" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 96,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 88,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                className: "form-check-input",
                type: "radio",
                name: "flexRadioDefault",
                id: "input2",
                value: "Longo",
                onChange: (e) => props.duracao(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
                lineNumber: 101,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "form-check-label", htmlFor: "input2", children: "Longo" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 106,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 100,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "form-check", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
              "input",
              {
                className: "form-check-input",
                type: "radio",
                name: "flexRadioDefault",
                id: "flexRadioDefault3",
                defaultChecked: !0,
                value: "Todos",
                onChange: (e) => props.duracao(e.target.value)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
                lineNumber: 111,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "form-check-label", htmlFor: "flexRadioDefault3", children: "Todos" }, void 0, !1, {
              fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
              lineNumber: 115,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
            lineNumber: 110,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Exercicios/Filtro_Barra.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  );
}

// app/styles/exercicios.css
var exercicios_default = "/build/_assets/exercicios-JTJ6AHUQ.css";

// app/routes/Exercicios/route.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), links12 = () => [
  { rel: "stylesheet", href: exercicios_default },
  { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" }
], meta11 = () => ({
  title: "Exerc\xEDcios"
});
function Exercicios() {
  let [categoryFilters, setcategoryFilters] = (0, import_react29.useState)(/* @__PURE__ */ new Set());
  function updateFilters(checked, categoryFilter) {
    checked && setcategoryFilters((prev) => new Set(prev).add(categoryFilter)), checked || setcategoryFilters((prev) => {
      let next = new Set(prev);
      return next.delete(categoryFilter), next;
    });
  }
  let [exercicio, setExercicio] = (0, import_react29.useState)([]), handleGet = (0, import_react29.useCallback)(async () => {
    await axiosHealthyApi.get("/exercises/withImage").then((r) => {
      setExercicio(r.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  (0, import_react29.useEffect)(() => {
    handleGet();
  }, [handleGet]);
  let [duracaoEx, setduracaoEx] = (0, import_react29.useState)("Todos"), filteredArea = duracaoEx == "Todos" ? exercicio : exercicio.filter((p) => p.duracao == duracaoEx), filteredExercises = categoryFilters.size == 0 ? filteredArea : filteredArea.filter((p) => categoryFilters.has(p.area));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Exercicios/route.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "container-fluid my-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        FiltroBarra,
        {
          duracao: setduracaoEx,
          update: updateFilters
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Exercicios/route.tsx",
          lineNumber: 95,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("section", { className: "card-container col-md my-5", children: filteredExercises.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        ExercicioBase,
        {
          id: prod._id,
          duracao: prod.duracao,
          cardTitle: prod.nome,
          textoCard: prod.descricaoCurta,
          image: prod.image
        },
        prod._id,
        !1,
        {
          fileName: "app/routes/Exercicios/route.tsx",
          lineNumber: 104,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/Exercicios/route.tsx",
        lineNumber: 99,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Exercicios/route.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/Exercicios/route.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/Exercicios/route.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Exercicios/route.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/cadastro.tsx
var cadastro_exports = {};
__export(cadastro_exports, {
  default: () => Index3,
  links: () => links13,
  meta: () => meta12
});
var import_react30 = require("@remix-run/react"), import_react31 = require("react");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), links13 = () => [
  { rel: "stylesheet", href: cadastro_default }
], meta12 = () => ({
  title: "Cadastro"
});
function Index3() {
  let navigate = (0, import_react30.useNavigate)(), [errorValidate, setErrorValidate] = (0, import_react31.useState)(!1), [carregandoEmailMenssagem, setCarregandoEmailMessagem] = (0, import_react31.useState)(!1), [senha, setSenha] = (0, import_react31.useState)(""), [confirmaSenha, setConfirmaSenha] = (0, import_react31.useState)(""), [carregandoConfirmaSenhaMenssagem, setCarregandoConfirmaSenhaMessagem] = (0, import_react31.useState)(!1);
  async function handleForm(e) {
    e.preventDefault();
    let formData = new FormData(e.target), data = Object.fromEntries(formData);
    data.senha != data.confirmarsenha ? setErrorValidate(!0) : await axiosHealthyApi.post(
      "/users",
      {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        role: "normal"
      }
    ).then(() => {
      navigate("/login");
    }).catch((e2) => {
      e2.response?.data.message == "Email j\xE1 cadastrado" && setCarregandoEmailMessagem(!0), console.log(e2);
    });
  }
  function validaSenha() {
    return setCarregandoConfirmaSenhaMessagem(!1), senha != confirmaSenha ? (setCarregandoConfirmaSenhaMessagem(!0), !1) : !0;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "box", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "box-img fundoPossivel", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: [
        "Healthy",
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        "Vibes"
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("img", { src: "/cadImg1.jpg", alt: "img temporaria" }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "form-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h1", { children: "Cadastro" }, void 0, !1, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("form", { onSubmit: handleForm, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { htmlFor: "nome", children: "Nome Completo" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", name: "nome", placeholder: "Digite o seu nome completo", required: !0 }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { htmlFor: "email", children: "E-mail" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
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
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 87,
              columnNumber: 15
            },
            this
          ),
          carregandoEmailMenssagem && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-danger", children: "E-mail em uso" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { htmlFor: "senha", children: "Senha" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            "input",
            {
              type: "password",
              name: "senha",
              placeholder: "Digite o sua senha",
              required: !0,
              onChange: (e) => setSenha(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 99,
              columnNumber: 15
            },
            this
          ),
          carregandoConfirmaSenhaMenssagem && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-danger", children: "As senhas precisam ser iguais" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "input-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { htmlFor: "Confirmarsenha", children: "Confirmar Senha" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            "input",
            {
              type: "password",
              name: "confirmarsenha",
              placeholder: "Confirme a senha",
              required: !0,
              onChange: (e) => setConfirmaSenha(e.target.value),
              onBlur: validaSenha
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cadastro.tsx",
              lineNumber: 108,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        errorValidate && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-danger text-end", children: "Senha n\xE3o conferem" }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("button", { children: "Cadastrar" }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "link-login", children: [
          "J\xE1 \xE9 um membro?",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react30.Link, { to: "/login", children: "Login" }, void 0, !1, {
            fileName: "app/routes/cadastro.tsx",
            lineNumber: 121,
            columnNumber: 54
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cadastro.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cadastro.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cadastro.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cadastro.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cadastro.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// app/routes/Receitas/route.tsx
var route_exports10 = {};
__export(route_exports10, {
  default: () => Receitas,
  links: () => links14,
  meta: () => meta13
});

// app/styles/receitas.css
var receitas_default = "/build/_assets/receitas-A3T3UR2U.css";

// app/routes/Receitas/CardReceita.tsx
var import_react_bootstrap12 = require("react-bootstrap"), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function CardReceita(props) {
  function image() {
    return props.image != null ? `data:image/png;base64,${Buffer.from(props.image.img.data).toString("base64")}` : "/IconeLogo.png";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_bootstrap12.Card, { className: "cardDetalheDieta mx-md-5 h-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      import_react_bootstrap12.Card.Img,
      {
        variant: "top",
        width: "200px",
        height: "200px",
        src: image(),
        alt: props.title
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Receitas/CardReceita.tsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_bootstrap12.Card.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_bootstrap12.Card.Title, { children: props?.title }, void 0, !1, {
        fileName: "app/routes/Receitas/CardReceita.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_bootstrap12.Card.Text, { children: props?.descricao }, void 0, !1, {
        fileName: "app/routes/Receitas/CardReceita.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Receitas/CardReceita.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_bootstrap12.Card.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      import_react_bootstrap12.OverlayTrigger,
      {
        trigger: "click",
        placement: "auto",
        overlay: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_bootstrap12.Popover, { id: "popover-basic", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_bootstrap12.Popover.Header, { as: "h3", children: props?.title }, void 0, !1, {
            fileName: "app/routes/Receitas/CardReceita.tsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_bootstrap12.Popover.Body, { children: [
            "Calorias: ",
            props.calorias,
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/Receitas/CardReceita.tsx",
              lineNumber: 60,
              columnNumber: 17
            }, this),
            "Carboidratos: ",
            props.carboidratos,
            "g",
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/Receitas/CardReceita.tsx",
              lineNumber: 62,
              columnNumber: 17
            }, this),
            "Gorduras: ",
            props.gordura,
            "g",
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/Receitas/CardReceita.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, this),
            "Proteinas: ",
            props.prote\u00EDna,
            "g",
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "border-bottom border-dark my-1" }, void 0, !1, {
              fileName: "app/routes/Receitas/CardReceita.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this),
            props.ingredientes.length < 1 ? "N\xE3o h\xE1 ingredientes salvos" : props.ingredientes.map((i, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
              i.nome,
              " - ",
              i.qtd
            ] }, index, !0, {
              fileName: "app/routes/Receitas/CardReceita.tsx",
              lineNumber: 73,
              columnNumber: 25
            }, this))
          ] }, void 0, !0, {
            fileName: "app/routes/Receitas/CardReceita.tsx",
            lineNumber: 58,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Receitas/CardReceita.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        rootClose: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("button", { type: "button", title: "Opcoes", className: "buttonCards float-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "i",
          {
            className: "px-2 fa-solid fa-ellipsis iconeCardDetalheMais",
            title: "Opcoes"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Receitas/CardReceita.tsx",
            lineNumber: 83,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/Receitas/CardReceita.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Receitas/CardReceita.tsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/Receitas/CardReceita.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Receitas/CardReceita.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/Receitas/route.tsx
var import_react_bootstrap14 = require("react-bootstrap"), import_react33 = require("@remix-run/react");
var import_react34 = require("react"), import_carousel2 = require("primereact/carousel");

// app/routes/Receitas/ModalInsertDiet.tsx
var import_react_bootstrap13 = require("react-bootstrap");
var import_sweetalert27 = __toESM(require("sweetalert2")), import_react32 = require("@remix-run/react"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function ModalInserDiet(props) {
  let navigate = (0, import_react32.useNavigate)();
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target), data = Object.fromEntries(formData), recipes = JSON.parse(localStorage.getItem("RecipesLocalStorage") || ""), result = JSON.parse(localStorage.getItem("resultsCalc") || "");
    await axiosHealthyApi.post("/diets", {
      nome: data.nome,
      recipes: recipes.map((r) => r._id),
      opcaoPeso: result.opcaoPeso,
      descricao: data.descricao
    }).then(() => {
      import_sweetalert27.default.fire({
        title: "Salvo com sucesso",
        allowEscapeKey: !1,
        allowOutsideClick: !1,
        icon: "success"
      }).then(() => (localStorage.removeItem("RecipesLocalStorage"), navigate("/Profile")));
    }).catch((e2) => {
      console.log(e2);
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react_bootstrap13.Modal, { ...props.modal, centered: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react_bootstrap13.Modal.Header, { closeButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react_bootstrap13.Modal.Title, { children: "Salvar Dieta" }, void 0, !1, {
      fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
      lineNumber: 52,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react_bootstrap13.Modal.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "nome", className: "form-label", children: "Nome da dieta:" }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("input", { type: "text", className: "form-control", id: "nome", name: "nome", required: !0 }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { id: "emailHelp", className: "form-text" }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 58,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "invalid-feedback", children: "Insira um valor v\xE1lido" }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "descricao", className: "form-label", children: "Descri\xE7\xE3o da dieta:" }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("textarea", { className: "form-control caixaTexto", placeholder: "Coloque algo para lembrar da dieta", id: "floatingTextarea", name: "descricao", style: { height: "10rem" } }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { id: "emailHelp", className: "form-text" }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 64,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "invalid-feedback", children: "Insira um valor v\xE1lido" }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 65,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
      lineNumber: 55,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react_bootstrap13.Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react_bootstrap13.Button, { variant: "danger", onClick: props.modal.onHide, type: "reset", children: "Cancelar" }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react_bootstrap13.Button, { variant: "primary", type: "submit", children: "Confirmar" }, void 0, !1, {
        fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/Receitas/ModalInsertDiet.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

// app/routes/Receitas/route.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), links14 = () => [{ rel: "stylesheet", href: receitas_default }], meta13 = () => ({
  title: "Receitas"
}), responsiveOptions = [
  {
    breakpoint: "1199px",
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1
  }
];
function Receitas() {
  let navigate = (0, import_react33.useNavigate)(), [recipesFiltered, setRecipesFiltered] = (0, import_react34.useState)([]), [numVisible, setNumVisible] = (0, import_react34.useState)(0), [numScroll, setNumScroll] = (0, import_react34.useState)(0), [show, setShow] = (0, import_react34.useState)(!1), handleClose = () => setShow(!1);
  function generateRecipe(recipes) {
    if (localStorage.getItem("resultsCalc")) {
      let result = JSON.parse(localStorage.getItem("resultsCalc") || ""), r = [], caloriasPorRefeicao = {
        cafeDaManha: result.calorias * 0.25,
        almoco: result.calorias * 0.3,
        lanche: result.calorias * 0.15,
        janta: result.calorias * 0.3
      }, calorias = {
        cafeDaManha: 0,
        almoco: 0,
        lanche: 0,
        janta: 0
      };
      do {
        let randomIdex = Math.floor(Math.random() * recipes.length);
        recipes[randomIdex].periodoRef == "Caf\xE9 da Manh\xE3" && (calorias.cafeDaManha += recipes[randomIdex].calorias, r.push(recipes[randomIdex]));
      } while (calorias.cafeDaManha < caloriasPorRefeicao.cafeDaManha);
      do {
        let randomIdex = Math.floor(Math.random() * recipes.length);
        recipes[randomIdex].periodoRef == "Almo\xE7o" && (calorias.almoco += recipes[randomIdex].calorias, r.push(recipes[randomIdex]));
      } while (calorias.almoco < caloriasPorRefeicao.almoco);
      do {
        let randomIdex = Math.floor(Math.random() * recipes.length);
        recipes[randomIdex].periodoRef == "Lanche" && (calorias.lanche += recipes[randomIdex].calorias, r.push(recipes[randomIdex]));
      } while (calorias.lanche < caloriasPorRefeicao.lanche);
      do {
        let randomIdex = Math.floor(Math.random() * recipes.length);
        recipes[randomIdex].periodoRef == "Janta" && (calorias.janta += recipes[randomIdex].calorias, r.push(recipes[randomIdex]));
      } while (calorias.janta < caloriasPorRefeicao.janta);
      return localStorage.setItem("RecipesLocalStorage", JSON.stringify(r)), setRecipesFiltered(r);
    }
  }
  let handleGet = (0, import_react34.useCallback)(async () => {
    await axiosHealthyApi.get("/recipes/recipesWIthNoUser").then((r) => {
      generateRecipe(r.data);
    }).catch(() => {
      throw new Error("N\xE3o foi poss\xEDvel conectar");
    });
  }, []);
  (0, import_react34.useEffect)(() => {
    if (!localStorage.getItem("RecipesLocalStorage"))
      handleGet();
    else {
      let recipes = JSON.parse(localStorage.getItem("RecipesLocalStorage") || "");
      setRecipesFiltered(recipes);
    }
  }, [handleGet]), (0, import_react34.useEffect)(() => {
    window.innerWidth < 1199 ? (setNumScroll(1), setNumVisible(1)) : window.innerWidth < 991 ? (setNumScroll(1), setNumVisible(2)) : window.innerWidth < 767 ? (setNumScroll(1), setNumVisible(1)) : (setNumScroll(3), setNumVisible(3));
  }, []);
  function cardTemplate(recipe) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      CardReceita,
      {
        title: recipe.titulo,
        descricao: recipe.descricao,
        calorias: recipe.calorias,
        carboidratos: recipe.carboidratos,
        gordura: recipe.gordura,
        prote\u00EDna: recipe.prote\u00EDna,
        ingredientes: recipe.ingredientes,
        image: recipe.image
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 171,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    recipesFiltered.length == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h1", { className: "py-5 my-5 text-center container-fluid", children: "N\xE3o h\xE1 valores, use a Calculadora Nutricional para obter" }, void 0, !1, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "dietaNome", children: "Caf\xE9 da Manh\xE3" }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("section", { className: "card-container container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: `
              ${recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Caf\xE9 da Manh\xE3")).length < 3 && "d-flex"} 
              justify-content-center align-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_carousel2.Carousel,
        {
          value: recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Caf\xE9 da Manh\xE3")),
          numVisible,
          numScroll,
          responsiveOptions,
          itemTemplate: cardTemplate,
          className: recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Caf\xE9 da Manh\xE3")).length < 3 ? "adaptLenght" : "",
          containerClassName: "mx-lg-5 px-lg-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 202,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 198,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "dietaNome", children: "Almo\xE7o" }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("section", { className: "card-container container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: `
              ${recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Almo\xE7o")).length < 3 && "d-flex"} 
              justify-content-center align-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_carousel2.Carousel,
        {
          value: recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Almo\xE7o")),
          numVisible,
          numScroll,
          responsiveOptions,
          itemTemplate: cardTemplate,
          className: recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Almo\xE7o")).length < 3 ? "adaptLenght" : "",
          containerClassName: "mx-lg-5 px-lg-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 228,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 224,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 222,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 221,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "dietaNome", children: "Lanche" }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 246,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("section", { className: "card-container container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: `
              ${recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Lanche")).length < 3 && "d-flex"} 
              justify-content-center align-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_carousel2.Carousel,
        {
          value: recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Lanche")),
          numVisible,
          numScroll,
          responsiveOptions,
          itemTemplate: cardTemplate,
          className: recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Lanche")).length < 3 ? "adaptLenght" : "",
          containerClassName: "mx-lg-5 px-lg-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 254,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 250,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 248,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "dietaNome", children: "Janta" }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 272,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("section", { className: "card-container container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: `
              ${recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Janta")).length < 3 && "d-flex"} 
              justify-content-center align-items-center`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_carousel2.Carousel,
        {
          value: recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Janta")),
          numVisible,
          numScroll,
          responsiveOptions,
          itemTemplate: cardTemplate,
          className: recipesFiltered.filter((recipe) => recipe.periodoRef.includes("Janta")).length < 3 ? "adaptLenght" : "",
          containerClassName: "mx-lg-5 px-lg-5"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 280,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 276,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 274,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 273,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "container-fluid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "d-flex justify-content-center align-items-center py-5 me-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "row gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        import_react_bootstrap14.Button,
        {
          type: "submit",
          className: "ms-5 buttonForm col",
          size: "lg",
          onClick: () => {
            navigate("/CalculadoraNutricional");
          },
          children: "Voltar para Calculadora"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 303,
          columnNumber: 13
        },
        this
      ),
      recipesFiltered.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          import_react_bootstrap14.Button,
          {
            type: "button",
            className: "ms-5 buttonForm col",
            size: "lg",
            onClick: () => {
              navigate("/Macros/notSaved");
            },
            children: "Detalhes Macro"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Receitas/route.tsx",
            lineNumber: 316,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react_bootstrap14.Button, { type: "button", className: "ms-5 buttonForm col", size: "lg", onClick: () => setShow(!0), children: "Salvar Dieta" }, void 0, !1, {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 327,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Receitas/route.tsx",
        lineNumber: 315,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        ModalInserDiet,
        {
          modal: {
            show,
            onHide: handleClose
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Receitas/route.tsx",
          lineNumber: 333,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 302,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 301,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 300,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/Receitas/route.tsx",
      lineNumber: 343,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Receitas/route.tsx",
    lineNumber: 185,
    columnNumber: 5
  }, this);
}

// app/routes/Profile/route.tsx
var route_exports11 = {};
__export(route_exports11, {
  default: () => Profile,
  links: () => links15,
  meta: () => meta14
});
var import_react35 = require("@remix-run/react");

// app/styles/profile.css
var profile_default = "/build/_assets/profile-DPSMQRIL.css";

// app/routes/Profile/route.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), meta14 = () => ({
  title: "Perfil"
}), links15 = () => [{ rel: "stylesheet", href: profile_default }];
function Profile() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/Profile/route.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("nav", { className: "d-flex container-fluid justify-content-center align-items-center my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "row barraPerfil text-center border rounded pt-3 textNav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react35.Link, { to: "/Profile", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h6", { children: "Dietas Salvas" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react35.Link, { to: "/Profile/acompanharProg", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h6", { children: "Acompanhar Progresso" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "col py-2 pt-md-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react35.Link, { to: "/alterarDados", style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h6", { children: "Configura\xE7\xF5es" }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Profile/route.tsx",
        lineNumber: 39,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react35.Outlet, {}, void 0, !1, {
      fileName: "app/routes/Profile/route.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/Profile/route.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Profile/route.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/_index/route.tsx
var route_exports12 = {};
__export(route_exports12, {
  default: () => Index4,
  links: () => links16,
  meta: () => meta15
});

// app/styles/home.css
var home_default = "/build/_assets/home-O7XMENOY.css";

// app/routes/_index/CardsHome.tsx
var import_react36 = require("@remix-run/react"), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function CardsHome() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "row m-auto cardBox", children: [
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
  ].map((card) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "column my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react36.Link, { to: card.link, style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("img", { src: `/home/${card.imgSrc}`, className: "card-img-top", alt: card.altImg }, void 0, !1, {
      fileName: "app/routes/_index/CardsHome.tsx",
      lineNumber: 35,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h5", { className: "card-title", children: card.cardTitle }, void 0, !1, {
      fileName: "app/routes/_index/CardsHome.tsx",
      lineNumber: 36,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "textoCard", children: card.textoCard }, void 0, !1, {
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
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), links16 = () => [{ rel: "stylesheet", href: home_default }], meta15 = () => ({
  title: "Home"
});
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "bannerPrincipal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("img", { src: "/BannerPicV2.png", className: "bannerImage", alt: "Banner com frutas" }, void 0, !1, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "textoCentradoBanner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h1", { className: "Title textoCentradoBannerContent", children: [
          "Melhore sua Vida!",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/_index/route.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "Title textoCentradoBannerContentSub", children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "parteFuncoes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h3", { className: "subtitulo", children: "Navegue entre as " }, void 0, !1, {
        fileName: "app/routes/_index/route.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h3", { className: "subtituloPt2", children: "fun\xE7\xF5es do site " }, void 0, !1, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(CardsHome, {}, void 0, !1, {
      fileName: "app/routes/_index/route.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Footer, {}, void 0, !1, {
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
  default: () => Index5,
  links: () => links17,
  meta: () => meta16
});

// app/styles/login.css
var login_default = "/build/_assets/login-EFHWHQTZ.css";

// app/routes/login.tsx
var import_react37 = require("@remix-run/react");
var import_sweetalert28 = __toESM(require("sweetalert2")), import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), links17 = () => [{ rel: "stylesheet", href: login_default }], meta16 = () => ({
  title: "Login"
});
function Index5() {
  let navigate = (0, import_react37.useNavigate)();
  async function handleForm(e) {
    e.preventDefault();
    let formData = new FormData(e.target), data = Object.fromEntries(formData);
    import_sweetalert28.default.fire({
      title: "Realizando Login",
      timer: 1e3,
      timerProgressBar: !0,
      allowEscapeKey: !1,
      allowOutsideClick: !1,
      didOpen: () => {
        import_sweetalert28.default.showLoading(null);
      }
    }).then(async (result) => {
      result.dismiss === import_sweetalert28.default.DismissReason.timer && await axiosHealthyApi.post("/users/login", {
        email: data.email,
        senha: data.senha
      }).then((r) => {
        import_sweetalert28.default.fire({
          title: "Logado",
          allowEscapeKey: !1,
          allowOutsideClick: !1,
          icon: "success"
        }).then(() => (localStorage.setItem("access-token", r.data.accessToken), navigate("/")));
      }).catch((e2) => {
        import_sweetalert28.default.fire({
          icon: "error",
          title: "Oops...",
          text: `${e2.code == 401 ? e2.response?.data.message : e2.message}`
        });
      });
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "container-fluid d-flex justify-content-center align-items-center box", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "img-box", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { children: [
        "Healthy",
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        "Vibes"
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: "/treino/mulherLogin.jpg", alt: "mulher" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "form-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("form", { onSubmit: handleForm, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { className: "tituloLogin", children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "input-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("label", { htmlFor: "email", children: "E-mail" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
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
            lineNumber: 87,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "input-group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("label", { htmlFor: "senha", children: "Senha" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
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
            lineNumber: 96,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react37.Link, { to: "#", children: "Esqueceu a senha?" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 104,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("button", { children: "Entrar" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 108,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "link-login", children: [
        "N\xE3o \xE9 um membro?",
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react37.Link, { to: "/cadastro", className: "cadRedirect", children: "Cadastre-se" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 110,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 72,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FCTN6WIX.js", imports: ["/build/_shared/chunk-64WBDZMO.js", "/build/_shared/chunk-FALC3FAV.js", "/build/_shared/chunk-DSMJMTHW.js", "/build/_shared/chunk-J4QDNQJS.js", "/build/_shared/chunk-SJBEQ4F6.js", "/build/_shared/chunk-DBC5GNZQ.js", "/build/_shared/chunk-K5OIIMCN.js", "/build/_shared/chunk-PMEQ6IKM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MBIWWYEE.js", imports: ["/build/_shared/chunk-6YRXKZMF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !0 }, "routes/Acessibilidade": { id: "routes/Acessibilidade", parentId: "root", path: "Acessibilidade", index: void 0, caseSensitive: void 0, module: "/build/routes/Acessibilidade-DJJSAOVR.js", imports: ["/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/AdicionarReceitas.$dietaID": { id: "routes/AdicionarReceitas.$dietaID", parentId: "root", path: "AdicionarReceitas/:dietaID", index: void 0, caseSensitive: void 0, module: "/build/routes/AdicionarReceitas.$dietaID-FBVDBMYN.js", imports: ["/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/CalculadoraNutricional": { id: "routes/CalculadoraNutricional", parentId: "root", path: "CalculadoraNutricional", index: void 0, caseSensitive: void 0, module: "/build/routes/CalculadoraNutricional-XN77FBEK.js", imports: ["/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/ExercicioDetalhes.$excId": { id: "routes/ExercicioDetalhes.$excId", parentId: "root", path: "ExercicioDetalhes/:excId", index: void 0, caseSensitive: void 0, module: "/build/routes/ExercicioDetalhes.$excId-QYGBSZRF.js", imports: ["/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Exercicios": { id: "routes/Exercicios", parentId: "root", path: "Exercicios", index: void 0, caseSensitive: void 0, module: "/build/routes/Exercicios-KAD4DSGA.js", imports: ["/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Macros.$type": { id: "routes/Macros.$type", parentId: "root", path: "Macros/:type", index: void 0, caseSensitive: void 0, module: "/build/routes/Macros.$type-GU7FRCH6.js", imports: ["/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-UBUNFJCV.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/Profile": { id: "routes/Profile", parentId: "root", path: "Profile", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile-GUBYDYYQ.js", imports: ["/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Profile._index": { id: "routes/Profile._index", parentId: "routes/Profile", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/Profile._index-QUYE4PKS.js", imports: ["/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Profile.acompanharProg": { id: "routes/Profile.acompanharProg", parentId: "routes/Profile", path: "acompanharProg", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile.acompanharProg-QDKF2AVN.js", imports: ["/build/_shared/chunk-UBUNFJCV.js", "/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js", "/build/_shared/chunk-6YRXKZMF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/Profile.dietasDetalhes.$dietaID": { id: "routes/Profile.dietasDetalhes.$dietaID", parentId: "routes/Profile", path: "dietasDetalhes/:dietaID", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile.dietasDetalhes.$dietaID-LA7CJZEL.js", imports: ["/build/_shared/chunk-5T2TWAF3.js", "/build/_shared/chunk-PNC7QCQB.js", "/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/Receitas": { id: "routes/Receitas", parentId: "root", path: "Receitas", index: void 0, caseSensitive: void 0, module: "/build/routes/Receitas-7LZQNHNG.js", imports: ["/build/_shared/chunk-5T2TWAF3.js", "/build/_shared/chunk-PNC7QCQB.js", "/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-Z4K7UOCR.js", imports: ["/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/alterarDados": { id: "routes/alterarDados", parentId: "root", path: "alterarDados", index: void 0, caseSensitive: void 0, module: "/build/routes/alterarDados-OMD4LE6B.js", imports: ["/build/_shared/chunk-OZVKPABT.js", "/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/cadastro": { id: "routes/cadastro", parentId: "root", path: "cadastro", index: void 0, caseSensitive: void 0, module: "/build/routes/cadastro-6UVAE5H7.js", imports: ["/build/_shared/chunk-OZVKPABT.js", "/build/_shared/chunk-FAWJALZN.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/controleConsumo.$date": { id: "routes/controleConsumo.$date", parentId: "root", path: "controleConsumo/:date", index: void 0, caseSensitive: void 0, module: "/build/routes/controleConsumo.$date-OM4ZMNNS.js", imports: ["/build/_shared/chunk-V4IBMFZP.js", "/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-UBUNFJCV.js", "/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/controleConsumo._index": { id: "routes/controleConsumo._index", parentId: "root", path: "controleConsumo", index: !0, caseSensitive: void 0, module: "/build/routes/controleConsumo._index-7G3ZR3LY.js", imports: ["/build/_shared/chunk-V4IBMFZP.js", "/build/_shared/chunk-PNC7QCQB.js", "/build/_shared/chunk-4P5CUWXC.js", "/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-OQ7N6Z2B.js", "/build/_shared/chunk-X2MRA3PQ.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-MV5LPLQE.js", imports: ["/build/_shared/chunk-FAWJALZN.js", "/build/_shared/chunk-M6UI6LEF.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "7523f748", hmr: { runtime: "/build/_shared\\chunk-SJBEQ4F6.js", timestamp: 1701223154809 }, url: "/build/manifest-7523F748.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/Profile.dietasDetalhes.$dietaID": {
    id: "routes/Profile.dietasDetalhes.$dietaID",
    parentId: "routes/Profile",
    path: "dietasDetalhes/:dietaID",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/AdicionarReceitas.$dietaID": {
    id: "routes/AdicionarReceitas.$dietaID",
    parentId: "root",
    path: "AdicionarReceitas/:dietaID",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
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
    module: route_exports3
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
    module: route_exports4
  },
  "routes/controleConsumo.$date": {
    id: "routes/controleConsumo.$date",
    parentId: "root",
    path: "controleConsumo/:date",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports5
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
    module: route_exports6
  },
  "routes/alterarDados": {
    id: "routes/alterarDados",
    parentId: "root",
    path: "alterarDados",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports7
  },
  "routes/Macros.$type": {
    id: "routes/Macros.$type",
    parentId: "root",
    path: "Macros/:type",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports8
  },
  "routes/Exercicios": {
    id: "routes/Exercicios",
    parentId: "root",
    path: "Exercicios",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports9
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
    module: route_exports10
  },
  "routes/Profile": {
    id: "routes/Profile",
    parentId: "root",
    path: "Profile",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports11
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports12
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
