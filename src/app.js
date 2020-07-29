import Vue from "vue";
import Button from './button.vue';
import Icon from './icon.vue'

Vue.component('o-button',Button)
Vue.component('o-icon',Icon)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false
    }
})