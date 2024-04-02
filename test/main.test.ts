import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { setup, $fetch } from "@nuxt/test-utils/e2e";
import { JSDOM } from "jsdom";

describe("@nuxt/mdx", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("../playground", import.meta.url)),
  });

  it("renders the index page", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");

    // take snapshot of main app element
    const dom = new JSDOM(html);
    expect(dom.window.document.getElementById("__nuxt")).toMatchSnapshot();
  });
});
