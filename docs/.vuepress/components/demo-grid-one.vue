<template>
  <div style="padding-top: 16px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <o-row class="demoRow">
      <o-col span="8">
        <div class="demoCol">8</div>
      </o-col>
      <o-col span="8">
        <div class="demoCol">8</div>
      </o-col>
      <o-col span="8">
        <div class="demoCol">8</div>
      </o-col>
    </o-row>
    <o-row class="demoRow">
      <o-col span="6">
        <div class="demoCol">6</div>
      </o-col>
      <o-col span="6">
        <div class="demoCol">6</div>
      </o-col>
      <o-col span="6">
        <div class="demoCol">6</div>
      </o-col>
      <o-col span="6">
        <div class="demoCol">6</div>
      </o-col>
    </o-row>
    <o-row class="demoRow">
      <o-col span="4">
        <div class="demoCol">4</div>
      </o-col>
      <o-col span="4">
        <div class="demoCol">4</div>
      </o-col>
      <o-col span="4">
        <div class="demoCol">4</div>
      </o-col>
      <o-col span="4">
        <div class="demoCol">4</div>
      </o-col>
      <o-col span="4">
        <div class="demoCol">4</div>
      </o-col>
      <o-col span="4">
        <div class="demoCol">4</div>
      </o-col>
    </o-row>
    <o-row class="demoRow">
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
      <o-col span="2">
        <div class="demoCol">2</div>
      </o-col>
    </o-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import Row from '../../../src/row.vue'
  import Col from '../../../src/col.vue'
  export default {
    components: {'o-row':Row,'o-col':Col},
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }
          <o-row class="demoRow">
            <o-col span="8">
              <div class="demoCol">8</div>
            </o-col>
            <o-col span="8">
              <div class="demoCol">8</div>
            </o-col>
            <o-col span="8">
              <div class="demoCol">8</div>
            </o-col>
          </o-row>
          <o-row class="demoRow">
            <o-col span="6">
              <div class="demoCol">6</div>
            </o-col>
            <o-col span="6">
              <div class="demoCol">6</div>
            </o-col>
            <o-col span="6">
              <div class="demoCol">6</div>
            </o-col>
            <o-col span="6">
              <div class="demoCol">6</div>
            </o-col>
          </o-row>
          <o-row class="demoRow">
            <o-col span="4">
              <div class="demoCol">4</div>
            </o-col>
            <o-col span="4">
              <div class="demoCol">4</div>
            </o-col>
            <o-col span="4">
              <div class="demoCol">4</div>
            </o-col>
            <o-col span="4">
              <div class="demoCol">4</div>
            </o-col>
            <o-col span="4">
              <div class="demoCol">4</div>
            </o-col>
            <o-col span="4">
              <div class="demoCol">4</div>
            </o-col>
          </o-row>
          <o-row class="demoRow">
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
            <o-col span="2">
              <div class="demoCol">2</div>
            </o-col>
          </o-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>