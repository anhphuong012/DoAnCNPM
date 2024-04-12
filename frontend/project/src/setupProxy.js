const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://172.17.88.196:8081",
      changeOrigin: true,
    })
  );
};
