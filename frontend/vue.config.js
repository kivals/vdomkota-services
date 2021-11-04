module.exports = {
  publicPath: "/cms/",
  devServer: {
    disableHostCheck: true,
    port: 3000,
    //proxy: "http://vdomkota.local/cms/",
    //publicPath: "/cms/",
    public: "0.0.0.0:3000/cms",
  },
};
