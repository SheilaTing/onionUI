<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <o-input value="你好"></o-input>
    <o-input value="你好" disabled></o-input>
    <o-input value="你好" readonly></o-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import oInput from '../../../src/input'
  export default {
    components: {oInput},
    data () {
      return {
        selected: '1',
        content: `
          <o-input></o-input>
          <o-input value="你好"></o-input>
          <o-input value="你好" disabled></o-input>
          <o-input value="你好" readonly></o-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>