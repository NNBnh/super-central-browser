import adapter from "@sveltejs/adapter-static"; 

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs"
    }),
    paths: {
      base: dev ? "" : "/super-central-browser"
    }
  }
};

export default config;
