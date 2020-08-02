<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: "onionHead",
  //订阅事件中心获取点击的 dom
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
        this.updateLinePosition(vm)
      })
  },
  methods: {
    updateLinePosition(selectedVm) {
      let { width, left } = selectedVm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 40px;
.tabs-head {
  position: relative;
  height: $height;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > .line {
    position: absolute;
    border-bottom: 1px solid blue;
    width: 20px;
    bottom: 0px;
    transition: all 350ms;
  }
}
</style>