<template>
    <div>
        <!-- 要实现的效果是loading和seting只显示一个图标，所以要写在一起控制 -->
        <button class='o-button' :class="{ [`icon-${iconposition}`]: true }">
            <o-icon :name="icon" class="icon"></o-icon>
            <o-icon class="loading" name="loading"></o-icon>
           <div class="content">
                <slot></slot>
           </div>
        </button>
    </div>
</template>

<script>
    export default {
        // props:['icon','iconposition']
        props:{
            icon:{},
            iconposition:{
                type:String,
                default:'left',
                validator(value){
                    // return value==='left' || value === 'right'
                    // 这个值必须匹配下列字符串中的一个
                    return ['left', 'right'].indexOf(value) !== -1
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}

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
        margin-left:10px;
        > .icon{
            // 图标默认order:1 左侧
            order:1;  
            margin-right: .3em;
        }
        > .content{
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
            > .icon{
                order:1;
                margin-right: .3em;
            }
            >.content{
                order:2;
            }
        }
        &.icon-right{
            > .icon{
                order:2;
                margin-left: .3em;
                margin-right: 0; // 发现右侧也有空隙，去除
            }
            >.content{
                order:1
            }
        }
        .loading{
            animation: spin 2s  infinite linear;
        }
     }
</style>