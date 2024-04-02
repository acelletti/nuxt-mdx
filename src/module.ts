import { defineNuxtModule } from "@nuxt/kit";
import mdx from "@mdx-js/rollup";
import { type Plugin as VitePlugin } from "vite";

export default defineNuxtModule<{}>({
  meta: {
    name: "@nuxt/content",
    configKey: "mdx",
  },
  defaults: {},
  setup(_, nuxt) {
    if (!nuxt.options.extensions.includes(".mdx"))
      nuxt.options.extensions.push(".mdx");

    nuxt.hook("vite:extendConfig", (config) => {
      config.plugins?.push({
        enforce: "pre",
        ...mdx({ jsxImportSource: "vue", providerImportSource: "@mdx-js/vue" }),
      } as VitePlugin);
    });
  },
});
