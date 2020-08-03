<template>
  <div style="padding-top: 16px;">
    <h2>用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <o-collapse :selected.sync="selectedCollapse" :single="true">
      <o-collapse-item title="标题1" name="item1">内容一</o-collapse-item>
      <o-collapse-item title="标题2" name="item2">内容二</o-collapse-item>
      <o-collapse-item title="标题3" name="item3">内容三</o-collapse-item>
    </o-collapse>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <p>
      <strong>data</strong>
    </p>
    <pre><code>{{content1}}</code></pre>
  </div>
</template>

<script>
import oCollapse from "../../../src/collapse/collapse.vue";
import oCollapseItem from "../../../src/collapse/collapse-item";
export default {
  components: { oCollapse, oCollapseItem },
  data() {
    return {
      selectedCollapse: ["item1,item2"],
      content: `
        <o-collapse :selected.sync="selectedCollapse" :single="true">
            <o-collapse-item title="标题1" name="item1">内容一</o-collapse-item>
            <o-collapse-item title="标题2" name="item2">内容二</o-collapse-item>
            <o-collapse-item title="标题3" name="item3">内容三</o-collapse-item>
         </o-collapse>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      content1: `
            data(){
                return {
                      selectedCollapse: ["item1,item2"], //默认展开项
                }
            }
        `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>