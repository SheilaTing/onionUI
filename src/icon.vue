<template>
  <div>
        <svg v-if="name" class="icon">
        <use :xlink:href="[`#icon-${name}`]"></use>
    </svg>
  </div>
</template>

<script>
    export default {
        props:['name'] // 图标名称
    }
</script>

<style lang="scss" scoped>
    .icon{
        width:1em;
        height:1em;
    }
</style>