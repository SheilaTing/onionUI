# tangerineui

## 介绍
使用 vue 做的一个 ui 框架，欢迎使用
## 开始使用
1.添加样式

    使用前，请在 CSS 中开启 border-box
  
    *,*::before,*::after{ box-sizing:border-box; }

2.安装
```
yarn add --save tangerineui
或者 
npm i --save tangerineui
```
3.使用
```
import { Button,ButtonGroup,Icon } from 'tangerineui'
import 'tangerineui/dist/index.css'

export default{
    name:'app',
    components:{
        'o-button':Button,
        'o-button-group':ButtonGroup,
        'o-icon':Icon
    }
}
```

## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码