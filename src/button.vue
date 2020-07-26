<template>
    <div>
        <button class='o-button'>按钮</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

     .o-button{
        font-size:var(--font-size);
        height:var(--button-height) ;
        padding:0 1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        background:var(--button-bg);
        
        &:hover{
            border-color: var(--border-color);
        }
        &:focus{
            outline: none;
        }
        &:active{
            background-color: var(--button-active-bg);
        }
     }
</style>