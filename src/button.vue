<template>
  <!-- 要实现的效果是loading和seting只显示一个图标，所以要写在一起控制 -->
  <button class="o-button" :class="{ [`icon-${iconposition}`]: true }" @click="$emit('click')">
    <o-icon v-if="icon && !loading" :name="icon" class="icon"></o-icon>
    <o-icon v-if="loading" class="loading icon" name="loading"></o-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  components: {
    "o-icon": Icon,
  },
  // props:['icon','iconposition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconposition: {
      type: String,
      default: "left",
      validator(value) {
        // return value==='left' || value === 'right'
        // 这个值必须匹配下列字符串中的一个
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="scss">
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.o-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  //相邻的元素缝隙
  // & + &{
  //     margin-right:4px;
  // }
  margin-left: 4px;
  > .icon {
    // 图标默认order:1 左侧
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2; // button 内容在右侧
  }

  &:hover {
    border-color: $border-color;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &.icon-left {
    > .icon {
      order: 1;
      margin-right: 0.3em;
    }
    > .content {
      order: 2;
    }
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0; // 发现右侧也有空隙，去除
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>