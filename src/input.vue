<template>
    <div class="wrapper" :class="{'error':error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
        <template v-if="error">
        <o-icon icon = "error" class="icon-error"></o-icon>
        <span class="errorMessage">{{error}}</span>
         </template>
    </div>
</template>

<script>
import Icon from './icon'
    export default {
        components:{
            'o-icon':Icon
        },
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
$height:32px;
$border-color:#999;
$border-color-hover:#666;
$border-radius:4px;
$font-size:12px;
$box-shadow-color:rgba(0,0,0,.5);
$red:#f1453D;
.wrapper{
    font-size: $font-size;
    display:inline-flex;
    align-items: center;
    > ：not(:last-child)*{margin-right: .5em;} // wrapper中每个元素,除了最后一个 半个字间距
   > input{
       border:1px solid $border-color;
       &:hover{
           border-color:$border-color-hover;
           border-radius: $border-radius;
           padding:0 8px;
           font-size: inherit;
       }
       &:focus{
           box-shadow: inset 0 1px 3px $box-shadow-color;
           outline: none;
       }
       &:disabled{
           border-color:#ccc;
           color:#333;
           cursor:not-allowed;  //禁用
       }
    }
     &.error{
         > input{
             border-color:$red;
         }
         .icon-error{
             fill:$red;
         }
         .errorMessage{
             color:$red;
         }
     }
}

</style>