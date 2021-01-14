const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)?$/,
  options: {
    remarkPlugins: [require("remark-math")],
    rehypePlugins: [
      require("@mapbox/rehype-prism"),
      require("rehype-join-line"),
      require("rehype-katex"),
    ],
  },
});

const nextConfig = {
  target: "serverless",

  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],

  cssModules: true,

  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },

  env: {
    VERSION: require("./package.json").version,
  },

  webpack(config) {
    // eslint-disable-next-line no-undef
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = withMDX(nextConfig);
