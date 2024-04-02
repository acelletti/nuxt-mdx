<template>
  <div class="pane">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.pane {
  display: flex;
  flex-direction: row;

  & > div {
    flex-grow: 1;
  }
}
</style>
