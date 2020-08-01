<template>
  <div
    class="col"
    :class="colClass"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
  >
    <div style="border:1px solid green">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  keys.forEach((key) => {
    return ["span", "offset"].includes(key);
  });
};
export default {
  props: {
    span: {
      type: [Number, String], //span属性接收两种数据类型值
    },
    offset: {
      type: [Number, String],
    },
    phone: {
      tylpe: Object,
      validator,
    },
    ipad: {
      tylpe: Object,
      validator,
    },
    narrowPc: {
      tylpe: Object,
      validator,
    },
    pc: {
      tylpe: Object,
      validator,
    },
    widePc: {
      tylpe: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      //如果用户传入了 phone 生成一个 class: col-phone-n
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone ? [`col-phone-${phone.span}`] : []),
        ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(widePc ? [`col-wide-pc-${widePc.span}`] : []),
      ];
    },
  },
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

//响应式---手机
@media (max-width: 576px) {
  $class-prefix: col-phone-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-phone-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
// ipad
@media (min-width: 577px) and (max-width: 768px) {
  $class-prefix: col-ipad-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-ipad-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
// 窄pc
@media (min-width: 769px) and (max-width: 992px) {
  $class-prefix: col-narrow-pc-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-narrow-pc-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}

// pc
@media (min-width: 993px) and (max-width: 1200px) {
  $class-prefix: col-pc-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-pc-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>