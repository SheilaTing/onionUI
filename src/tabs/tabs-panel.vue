<template>
  <div class="tabs-panel" v-if="active"  :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "onionPanel",
  inject: ["eventBus"],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
   data(){
      //根据用户传递的selected 得到当前对象是否被选中
     return{
          active:false
     }
  },
    computed:{
      classes(){
          return {
              active:this.active
          }
      }
  },
  created(){
       this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
  },
};
</script>

<style lang="scss" scoped>
.tabs-panel{
    &.active{
       padding:10px 20px;
    }
}
</style>