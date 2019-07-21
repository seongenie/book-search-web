// vue.config.js
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => options);
  },
};
