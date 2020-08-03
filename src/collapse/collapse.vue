<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    single: {
      type: Boolean, //是否只打开一个，其他关闭
      default: false,
    },
    selected: {
      type: Array, //默认打开的item
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
    // mounted() {
    //   //当用户传递默认打开参数时，通知子组件要打开的name
    //   this.eventBus.$emit("update:selected", this.selected);
    //   //父组件监听子组件传递来的用户的操作item个,更新数组
    //   this.eventBus.$on("update:addSlected", (name) => {
    //     //由于selected 数组也是用户传递来的，所以我们不要直接修改外部数据，自己将这个数据深拷贝一份，
    //     // 操作后，传递出去
    //     let selectedCopy = JSON.parse(JSON.stringify(this.selected));
    //     //接收到数据后首先判断下用户是否传递了只打开一个的选项，如果有，则直接更新 数组 = 单个item
    //     if (this.single) {
    //       selectedCopy = [name];
    //     } else {
    //       selectedCopy.push(name);
    //     }
    //     //更新完成后，将更改后的数据派发出去
    //     this.eventBus.$emit("update:selected", selectedCopy);
    //      //告知外界自己的展示的列表
    //     this.$emit('udpate:selected',selectedCopy);
    //   });
    //   // 监听子组件传递来的用户关闭操作
    //   this.eventBus.$on("update:removeSelected", (name) => {
    //       let selectedCopy = JSON.parse(JSON.stringify(this.selected))
    //       //从数组中删除
    //     let index = selectedCopy.indexOf(name)
    //     selectedCopy.splice(index, 1)
    //     //告知子组件更新后的要展示的列表
    //     this.eventBus.$emit('update:selected', selectedCopy)
    //      //告知外界自己的展示的列表
    //     this.$emit('update:selected', selectedCopy)
    //   });
    // },

     mounted () {
      this.eventBus.$emit('update:selected', this.selected)
      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if (this.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })
      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })
    }

};
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid #ccc;
  border-radius: 4px;
  // border-bottom:none;
}
</style>