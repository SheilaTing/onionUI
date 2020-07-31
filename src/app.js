import Vue from "vue";
import Button from './button.vue';
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import chai, { expect } from "chai";
import spies from 'chai-spies';
import Input from './input.vue'
import Row from './row.vue';
import Col from './col.vue'
chai.use(spies);

Vue.component('o-button',Button)
Vue.component('o-icon',Icon)
Vue.component('o-button-group',ButtonGroup)
Vue.component('o-input',Input);
Vue.component('o-row',Row);
Vue.component('o-col',Col)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false
    },
    methods:{
        handlechange(event){
            console.log(event.target.value)
        }
    }
})

//使用 chai 测试
// 对组件的每个入参都要做测试
//第一个
{
    //获取 Button 组件的内容
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        // 测试组件的参数部分，如下方式传参 文档有写
        propsData:{
            icon:'setting'
        }
    });
    button.$mount() // 将这个按钮挂载到页面测试 也可以不传递dom,不报错就通过了
    //测试 icon 图标，获取 use标签
    let useElement = button.$el.querySelector('use')
    //因为传入了 setting,所以期待标签里的 href 等于 setting
   expect( useElement.getAttribute('xlink:href')).to.eq('#icon-setting')
   button.$el.remove()
   button.$destroy()
}
//测试 loading参数，期待传入后，setting不显示
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    });
    button.$mount() // 将这个按钮挂载到页面测试 也可以不传递dom,不报错就通过了
    //测试 icon 图标，获取 use标签
    let useElement = button.$el.querySelector('use')
    //因为传入了 setting,所以期待标签里的 href 等于 setting
    expect( useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
    button.$el.remove()
    button.$destroy()
}
//测试 position
{
    const div = document.createElement('div');
    document.body.append(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true,
            //未传递 iconposition 默认order 1

        }
    });
    button.$mount(div) // 将这个按钮挂载到页面测试 也可以不传递dom,不报错就通过了
    //测试 positon 获取 图标的order
    let svg = button.$el.querySelector('.icon')
    //获取 svg的样式,获取设置的order
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq("1")
    button.$el.remove()
    button.$destroy()
}
//     //传递 position
{
    const div = document.createElement('div');
    document.body.append(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true,
            iconposition:'right'

        }
    });
    button.$mount(div) // 将这个按钮挂载到页面测试 也可以不传递dom,不报错就通过了
    //测试 positon 获取 图标的order
    let svg = button.$el.querySelector('svg')
    //获取 svg的样式,获取设置的order
    let {order} = window.getComputedStyle(svg);
    let href = svg.getAttribute('xlink:href')
    // expect(href).to.eq("2")
    //成功后，删除mount到页面的 内容
    button.$el.remove()
    button.$destroy()
}
// //测试点击事件

{
    const Constructor = Vue.extend(Button);
    let obutton = new Constructor({
        propsData:{
            icon:'setting',
            loading:true,
            iconposition:'right'
        }
    });
    obutton.$mount();
    //间谍函数
    let spy = chai.spy(function(){

    })
    //click button 时执行spy函数
    obutton.$on('click',spy)
    //找到组件中的button
    let button = obutton.$el;
    //触发事件
    button.click();
    expect(spy).to.have.been.called()
}