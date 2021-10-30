const path = require("path");

module.exports = {
  pwa: {
    name: "Goaly"
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  }
};
