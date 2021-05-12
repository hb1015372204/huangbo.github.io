### vue源码
<https://vue-js.com/learn-vue/>

vue：
数据驱动视图--->数据变化引起视图变化
    <font color="red">UI = render(state)</font>
状态state是输入，页面UI输出,状态输入变化页面输出也随之变化==>就是数据驱动视图

Object 的变化和侦测：
    通过

### 虚拟DOM
简单来说就是用JS对象来描述一个DOM节点（用JS模拟一个DOM节点，称为`虚拟DOM`节点，数据发生变化，对比变化前后的虚拟DOM节点，通过DOM-Diff算法计算需更新的地方再更新视图）

这个JS对象就是真实DOM节点的虚拟DOM节点

操作真实DOM耗性能 所以需要虚拟DOM

vue中存在`VNode类`，通过这个类实例化出不同类型的虚拟DOM节点，类中包含真实DOM的一系列属性（tag表示节点的标签名、text表示节点中包含的文本、注释节点）

创建、更新、删除
DOM-Diff算法：新前与旧前节点、新后与旧后节点、新后与旧前节点、新前与旧后节点

```js
    <div class="a" id="b">我是内容</div>

    {
    tag:'div',        // 元素标签
    attrs:{           // 属性
        class:'a',
        id:'b'
    },
    text:'我是内容',  // 文本内容
    children:[]       // 子元素
    }
```

### vue模板编译
`render`函数：把用户在`<template></template>`标签中写的类似于原生`HTML`的内容进行编译，把原生`HTML`的内容找出来，再把非原生`HTML`找出来，经过一系列的逻辑处理生成渲染函数；

`render`函数会将模板内容生成对应的`VNode`

最终目的是用模板生成`render`函数，用`render`函数生成与模板对应的`VNode`，再进行`patch`算法，完成视图渲染；

三大主线：模板解析阶段、优化阶段、代码生成阶段

### 模板解析
把用户在`<template></template`标签内写的模板使用正则等方式解析成抽象语法树`AST`，标签内有HTML解析、文本解析器、过滤器解析器；主线函数`parser`将HTML模板字符串转化成AST

把用户写的模板字符串经过解析阶段解析生成对应的抽象语法树

经过优化阶段将AST中的静态节点及静态根节点打上标记
最后生成render函数字符串



