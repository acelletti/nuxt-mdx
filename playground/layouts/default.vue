<template>
  <div class="layout">
    <MDXProvider :components="components">
      <slot />
    </MDXProvider>
  </div>
</template>

<script setup lang="ts">
import { MDXProvider } from "@mdx-js/vue";
import SplitPane from "../components/SplitPane.vue";

const components = {
  SplitPane,
};
</script>
