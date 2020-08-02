<template>
  <svg class="icon">
    <use :xlink:href="[`#icon-${name}`]" />
  </svg>
</template>

<script>
import "./svg.js";
export default {
  props: ["name"], // 图标名称
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>