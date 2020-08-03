<template>
    <div class="collapse-item" @click="toggle">
        <div class="title" :class="{active:open}">
           
            {{title}}
              <o-icon class="icon" :name="iconClass"></o-icon>
        </div>
        <div class="content" v-if="open">
           <slot></slot>
        </div>
    </div>
</template>

<script>
import OIcon from '../icon.vue'
    export default {
        components:{OIcon},
        inject:['eventBus'],
        name:'onionCollapseItem',
        props:{
            title:{
             type:String,
             required:true
            },
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return {
                open:false
            }
        },
        computed:{
            iconClass(){
                return this.open ? 'down' : 'right'
            }
        },
        methods:{
            //用户点击切换打开列表，由于一开始是父组件通知子组件要打开的列表，所以根据单向数据流的特点，
            // 我们即使知道用户点击的item也不要直接打开它，而是通知父组件用户点击了这个 item，让
            //父组件把要打开的列表传递给子组件
            toggle(){
                if(this.open){
                    // 因为用户一次只会点击一个列表，而父组件传递的默认打开的列表可以是多个，所以，
                    //我们不能直接把现在的单个值传递给父组件，所以额外使用 eventBus 触发一个事件,传递单个item
                    // 父组件监听到事件后，更新 selected 数组的值即可
                    this.eventBus.$emit('update:removeSelected',this.name)
                }else{
                    //如果是关闭就打开，则告知父组件往数组中增加一个要打开的列表 name
                    this.eventBus.$emit('update:addSelected',this.name)
                }
            },
            close(){
                this.open =false;
            }
        },
        mounted(){
            //接收父组件传递的要选中的 item的names 数组
            this.eventBus && this.eventBus.$on('update:selected',(names)=>{
             if(names.indexOf(this.name)>-1){
                 this.open = true
             }else{
                 this.open = false
             }
            })
        }
    }
</script>

<style lang="scss" scoped>
$border-radius:4px;
.collapse-item{
    cursor: pointer;
    > .title{
        border:1px solid #ccc;
        margin-top:-1px;
        margin-right: -1px;
        margin-left:-1px;
        padding:4px 8px;
        font-size:20px;
        &.active{
            color:blue;
        }
        display: flex;
        align-items: center;
        >.icon{
            margin-left:auto;
        }
    }
    &:first-child{
        > .title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    &:last-child{
        // title 也是最后一个元素 last-chid 选择的是最后一个元素并且是title的，我对这个选择器又有了认识
      > .title:last-child{
          border-bottom:1px solid #ccc;
          border-bottom-left-radius: $border-radius;
          border-bottom-right-radius: $border-radius;
      }
    }
    > .content{
        padding:15px;
    }
}
</style>