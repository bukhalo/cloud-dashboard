module.exports = {
  chainWebpack: config => {
    config.plugin("provide").use(require("webpack").ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }
    ]);
  }
};
