const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // La ruta que desees redirigir
    createProxyMiddleware({
      target: 'https://naimcv.pythonanywhere.com',
      changeOrigin: true,
    })
  );
};
