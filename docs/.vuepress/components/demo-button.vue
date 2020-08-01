<template>
  <div class="button">
    <o-button>默认按钮</o-button>
    <o-button icon="setting" :loading="loading1" @click="loading1=!loading1">按钮</o-button>
    <o-button
      iconposition="right"
      icon="download"
      :loading="loading2"
      @click="loading2=!loading2"
    >提交</o-button>
    <o-button @click iconposition="left" icon="setting">确定</o-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";
export default {
  components: {
    "o-button": Button,
  },
  data() {
    return {
      loading1: false,
      loading2: true,
      content: `
                <o-button icon="setting" :loading="loading1" @click="loading1=!loading1">按钮</o-button>
                <o-button
                iconposition="right"
                icon="download"
                :loading="loading2"
                @click="loading2=!loading2"
                >提交</o-button>
                <o-button @click iconposition="left" icon="setting">确定</o-button>
                `.replace(/\t+| +/g,'').trim()
                //替换所有的tab和多个空格
    };
  },
};
</script>
<style lang="scss" scoped>
.button {
  display: flex;
  flex-wrap: wrap;
}
</style>

