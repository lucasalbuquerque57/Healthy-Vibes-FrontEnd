const baseConfig =
  process.env.NODE_ENV === "production"
    ? // when running the Netify CLI or building on Netlify, we want to use
      {
        server: "./server.js",
        serverBuildPath: ".netlify/functions-internal/server.js",
      }
    : // otherwise support running remix dev, i.e. no custom server
      undefined;

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ...baseConfig,
  ignoredRouteFiles: ["**/.*"],
  // See https://remix.run/docs/en/main/file-conventions/route-files-v2
  serverModuleFormat: "cjs",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: [
    /^axios.*/,
],
};

module.exports.browserNodeBuiltinsPolyfill = {
  modules: {
    buffer: true, // Provide a JSPM polyfill
    fs: "empty", // Provide an empty polyfill
  },
  globals: {
    Buffer: true,
  },
};