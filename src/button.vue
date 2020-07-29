<template>
    <div>
        <button class='o-button' :class="{ [`icon-${iconPosition}`]: true }">
            <o-icon icon="`${icon}`"></o-icon>
           <div class="content">
                <slot></slot>
           </div>
        </button>
    </div>
</template>

<script>
    export default {
        props:['icon','iconPosition']
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
        display:flex;
        justify-content: center;
        align-items: center;
        vertical-align:middle;
        >.icon{
            // 图标默认order:1 左侧
            order:1;  
            margin-right: .3em;
        }
        >.contnet{
            order:2;  // button 内容在右侧
        }
        
        &:hover{
            border-color: var(--border-color);
        }
        &:focus{
            outline: none;
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &.icon-left{
            >.icon{
                order:1;
                margin-right: .3em;
            }
            >.content{
                order:2;
            }
        }
        &.icon-right{
            >.icon{
                order:2;
                margin-left: .3em;
                margin-right: 0; // 发现右侧也有空隙，去除
            }
            >.content{
                order:1
            }
        }
     }
</style>