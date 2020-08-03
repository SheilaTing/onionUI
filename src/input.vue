<template>
    <div class="wrapper" :class="{'error':error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
        @input="$emit('input',$event.target.value)"
        @change="$emit('change',$event.target.value)"
        >
        <template v-if="error">
        <o-icon name = "error" class="icon-error"></o-icon>
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
    display:flex;
    align-items: center;
    margin-left: 8px;
    margin-top:8px;
    > :not(:last-child)*{margin-right: .5em;} // wrapper中每个元素,除了最后一个 半个字间距
   > input{
       border:1px solid $border-color;
      
       padding:4px 1em;
       outline: none;
       &:hover{
           border-color:$border-color-hover;
           border-radius: $border-radius;
           padding:4px 1em;
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
             margin-left:1em;
             margin-right: .5em;
         }
         .errorMessage{
             color:$red;
         }
     }
}

</style>