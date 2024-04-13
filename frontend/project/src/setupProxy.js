const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http:/192.168.19.111:8081",
      changeOrigin: true,
    })
  );
};
