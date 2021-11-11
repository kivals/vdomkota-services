module.exports = {
  publicPath: "/cms/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/style.scss";`,
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    port: 3000,
    //proxy: "http://vdomkota.local/cms/",
    //publicPath: "/cms/",
    public: "0.0.0.0:3000/cms",
  },
};
