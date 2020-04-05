const fs = require("fs");
const util = require("util");
const readdir = util.promisify(fs.readdir);

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

  exportPathMap: async function () {
    const pathMap = {};
    pathMap["/"] = { page: "/" };
    pathMap["/whoami"] = { page: "/fixed/profile" };
    pathMap["/blog"] = { page: "/blog" };

    const posts = await readdir("./pages/posts");

    for (const post of posts) {
      const postPath = post.replace(
        /(\d{4})(\d{2})(\d{2})\.mdx/,
        (match, p1, p2, p3) => {
          return `/blog/${p1}/${p2}/${p3}`;
        }
      );
      const pagePath = post.replace(
        /(\d{4})(\d{2})(\d{2})\.mdx/,
        (match, p1, p2, p3) => {
          return `/posts/${p1}${p2}${p3}`;
        }
      );
      pathMap[postPath] = { page: pagePath };
    }

    return pathMap;
  },

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

  experimental: {
    redirects() {
      return [
        {
          source: "/blog/others/:path*",
          permanent: true,
          destination: "/posts/:path*",
        },
        {
          source: "/blog/others/:path*/",
          permanent: true,
          destination: "/posts/:path*",
        },
        {
          source: "/blog/js/:path*",
          permanent: true,
          destination: "/posts/:path*",
        },
        {
          source: "/blog/js/:path*/",
          permanent: true,
          destination: "/posts/:path*",
        },
        {
          source: "/blog/proxy/:path*",
          permanent: true,
          destination: "/posts/:path*",
        },
        {
          source: "/blog/proxy/:path*/",
          permanent: true,
          destination: "/posts/:path*",
        },
        {
          source: "/blog/2019/:m*/:d*/",
          permanent: true,
          destination: "/posts/2019:m*:d*",
        },
        {
          source: "/blog/2020/:m*/:d*/",
          permanent: true,
          destination: "/posts/2020:m*:d*",
        },
        {
          source: "/whoami/",
          permanent: true,
          destination: "/fixed/profile",
        },
      ];
    },
  },
};

module.exports = withMDX(nextConfig);
