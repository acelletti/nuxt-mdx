import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import mdx from "@mdx-js/rollup";
import { type Plugin as VitePlugin } from "vite";
// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@nuxt/content",
    configKey: "mdx",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    if (!nuxt.options.extensions.includes(".mdx"))
      nuxt.options.extensions.push(".mdx");

    nuxt.hook("vite:extendConfig", (config) => {
      config.plugins?.push({
        enforce: "pre",
        ...mdx({ jsxImportSource: "vue" }),
      } as VitePlugin);
    });

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
