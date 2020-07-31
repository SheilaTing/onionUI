const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在', () => {
        expect(Input).to.exist
    })

    describe('属性测试', () => {
        const Constructor = Vue.extend(Input)
        // beforeEach(function () {
           
        // })
        let vm;
        afterEach(()=>{
            vm.$destroy();
        })

        it('测试value属性', () => {
             vm = new Constructor({
                propsData: {
                    value: '我是一个input'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input');
            expect(useElement.value).to.equal('我是一个input');
            vm.$destroy()
        })
        it('测试 disabled 属性', () => {

             vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input');
            expect(useElement.disabled).to.equal(true);
            vm.$destroy()
        })
        it('测试 readonly 属性', () => {
             vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input');
            expect(useElement.readOnly).to.equal(true);
            vm.$destroy()
        })
        it('测试 error 属性', () => {
             vm = new Constructor({
                propsData: {
                    error: "error 信息"
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
            const errorMsg = vm.$el.querySelector('.errorMessage');
            expect(errorMsg.innerText).to.equal('error 信息');
            vm.$destroy()
        })
    })
    describe('事件测试', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy()
        })
        // it('测试 change 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     //监听 input 触发的事件(我写的可是 handleChange)
        //     //如果你出发的事件名称取得与原生事件相同，就更方便监听多个事件了,
        //     vm.$on('handlechange',callback);
        //     let event = new Event('change'); // 参数是事件名,这是 js 事件
        //     let inputElement = vm.$el.querySelector('input');
        //     inputElement.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // })
        it('测试 change 事件', () => {
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName,callback);
                let event = new Event(eventName); // 参数是事件名,这是 js 事件
                Object.defineProperty(
                    event,'target',{
                        value:{value:'hi'},
                        enumerable:true
                    }
                )
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event);
            })
        })
    })
})