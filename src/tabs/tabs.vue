<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "onionTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      defaul: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) > -1;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus, // data中的eventBus
    };
  },
  methods: {
    selectTab() {
      //1.发布  用户传递 selected 时，向事件中心发送一个事件,传递用户传递的要选中的tab名称
      this.$children.forEach((vm) => {
        if (vm.$options.name === "onionHead") {
          vm.$children.forEach((childVm) => {
            if (
              childVm.$options.name === "onionTabsItem" &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit("update:selected", this.selected, childVm);
            }
          });
        }
      });
    },
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            "tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件"
          );
      }
    },
  },
  mounted() {
    this.checkChildren();
    this.selectTab();
  },
};
</script>

<style lang="scss" scoped>
</style>