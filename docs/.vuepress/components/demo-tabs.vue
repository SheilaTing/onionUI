<template>
  <div style="paddino-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <o-tabs :selected="selected">
      <o-tabs-head>
        <o-tabs-item name="1">1</o-tabs-item>
        <o-tabs-item name="2">2</o-tabs-item>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name="1">content 1</o-tabs-pane>
        <o-tabs-pane name="2">content 2</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import oTabs from '../../../src/tabs/tabs'
  import oTabsBody from '../../../src/tabs/tabs-body'
  import oTabsHead from '../../../src/tabs/tabs-head'
  import oTabsItem from '../../../src/tabs/tabs-item'
  import oTabsPane from '../../../src/tabs/tabs-panel'
  export default {
    components: {oTabs, oTabsBody, oTabsHead, oTabsItem, oTabsPane},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }
          <o-tabs :selected="selected">
            <o-tabs-head>
              <o-tabs-item name="1">1</o-tabs-item>
              <o-tabs-item name="2">2</o-tabs-item>
            </o-tabs-head>
            <o-tabs-body>
              <o-tabs-pane name="1">content 1</o-tabs-pane>
              <o-tabs-pane name="2">content 2</o-tabs-pane>
            </o-tabs-body>
          </o-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>