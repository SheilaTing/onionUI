<template>
  <!-- 在组件外点击事件，其实最后点击的也是组件内的元素，所以要在组件内部写函数 -->
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "onionTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    //根据用户传递的selected 得到当前对象是否被选中
    return {
      active: "",
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    },
  },
  methods: {
    onClick(e) {
      // item被点击切换selectedTab,把当前tab的name传过去
      if (this.disabled) {
        return;
      }
      // click 再次发布事件，this为了计算 css
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      //   this.$emit("click", this);
    },
  },
  mounted() {
    //2.订阅（其他子组件订阅也一样） 一旦事件中心中selectedTab 有变化就做一些处理
    this.eventBus.$on("update:selected", (selectedTab) => {
      //如果用户传递来的tab跟自身name一样，就选中自身
      this.active = selectedTab === this.name;
    });
  },
};
</script>

<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: grey;
.tabs-item {
  cursor: pointer;
  padding: 0 2em;
  display: flex;
  align-items: center;
  height: 100%;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>