<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
  >
      <div style="border:1px solid green">
            <slot></slot>
      </div>
   
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String], //span属性接收两种数据类型值
    },
    offset: {
      type: [Number, String],
    },
  },
  data(){
      return {
          gutter:0
      }
  }
};
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  width: 50%; // 如果父容器空间够大，就显示，而50%，显然只能完整显示两个元素的宽度，如果更多元素，就会等比例缩小
  border: 1px solid red;
  //使用循环生成相应选择器
  //生成col-1 ---- col-24选择器，并设置宽度
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  // 生成 offset
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>