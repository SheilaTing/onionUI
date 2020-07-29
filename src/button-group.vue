<template>
  <div class="o-button-group">
       <slot></slot>
  </div>
</template>

<script>
    export default {
        mounted(){
          //判断该组件内部只允许o-button 标签
          console.log(this.$el.children)
          for(let node of this.$el.children){
            if(node.nodeName.toLowerCase() !== 'button'){
              console.warn(`o-button-grop 的子元素应该全是 button 而你的是${node.nodeName.toLowerCase()}`)
            }
          }
        }
    }
</script>

<style lang="scss">
  .o-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .o-button {
      cursor: pointer;
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        color:darkcyan;
        border-color:darkcyan;
        position: relative;
        z-index: 1;
      }
    }
  }
</style>