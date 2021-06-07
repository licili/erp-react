```markdown
# ERP系统:企业资源计划管理系统
- 简单说就是一款后台管理系统，可以用在企业级后台应用:比如人力资源系统、订单管理系统、企业管理系统、运营后台管理系统、外卖管理系统、物流管理系统，仓储管理系统等等

# React: 是一个用于构建用户界面的JAVASCRIPT库
- React拥有较高的性能，代码逻辑简单，是现在非常流行的一个js库， 来源于facebook

# Ant Design: 一款UI设计语言
- Ant Design是一款高质量React组件，用于开发和服务于企业级中后台产品，简单快速的构建开发后台管理系统，来源蚂蚁金服
```

## 1. ERP 后台管理系统

- 项目介绍:企业EPR管理系统
- 技术栈: Reactjs+react-router+Redux+Ant.Design+WebPack+Less
- 功能点:采用create-react-app脚手架搭建，采用mock语法模拟数据



### 1.1 create-react-app

> 为什么使用脚手架来搭建项目呢？

- 零配置
- 集成了开发服务器
- 配置好了浏览器热加载的功能
- 集成了对React, JSX, ES6和Flow的支持
- 在JavaScript中可以直接import CSS和图片
- 自动处理CSS的兼容问题，无需添加-webkit前缀
- 集成好了编译命令

```markdown
- antd 默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 import { Button } from 'antd' 就会有按需加载的效果。
- 配置less，首先我们要将项目的配置文件暴露出来,yarn eject 。如果报错，肯定是你本地生成了.git文件。造成git冲突了。把它del就完事了。然后我们就去webpack.config.js中，它原本有对sass语法的处理的。我们依葫芦画瓢就完事了。你配置完。如果还出错。而且报一个很扯的错误信息：this.getOptions is not a function。对不起，是因为我们安装的less-loader版本太高了。那是版本9，我们安装7版本就好了。至少我没出错。（试了半天。原来是这个毒瘤，气死我了）。但是呢还有一个问题就是：在css文件中，通过@import方式引入less文件也会出错。后来又有一个问题：就是文件打包后的类名是变为hash字符串。页面读取不到这样子的类名。有两种解决方式：1. 在less文件中加入:glboal{}包裹住less样式 2. 使用import style from './xxx' 来引入。然后通过style.xxx的方式
- 什么是单页面应用：简单来说就是页面始终在#root页面下改变样式和结构
- 在登录的表单组件里面。它里面内置了很多方法和属性。要看API文档进行开发。
```

```markdown
# 项目制作流程
- 0. 分好目录结构。
- 1. 先设置好路由。然后在各个目录结构中添加组件。
- 2. 安装好调试工具。我们一般不用localhost这样的，用switchhosts。因为我们有时候会换其他的域名
- 3. 这时候我们遇到了less编译和编译后应用不上的问题。
- 4. 在登录页，把表单控件单独提取出来，作为子组件使用。然后把子组件里的数据提取到父组件进行统一处理。
- 5. 找到跳转和不跳转部分。
- 6. 数据好模板分开
- 7. componentWillMounted不能用。comonentDidMounted 又获取不到组件穿过来的数据，只能够将数据获取放到constructor上。
- 8. overflow 滚动条隐藏问题
- 9 Form表单提交数据的时候，要在Form.item上添加name属性才可以
```

**报错信息**

```
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder
```

**报错信息2**

```markdown
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of DomWrapper which is inside StrictMode.
# 原因
- 是因为 react 中的严格模式: StrictMode
- 找到index.js 果然默认是严格模式，删除<React.StrictMode>标签，关闭严格模式，警告自然消除了
- StrictMode 是一个用以标记出应用中潜在问题的工具。就像 Fragment ，StrictMode 不会渲染任何真实的UI。

# StrictMode目前有助于
- 识别具有不安全生命周期的组件
- 有关旧式字符串ref用法的警告
- 检测意外的副作用
- 检测遗留 context API
```





```markdown
## 安装

create-react-app arp

## 打开配置文件

yarn eject

## 模块安装

yarn add less less-loader@7

## 文件配置

webpack.config.js

# 目录结构

- src 所有的组件以及公共的方法都放在这个目录下。将它的 router 组件全部放到一个文件里面。页面归页面公共组件归公共组件
  - component 公共组件
    - header
      - index.js
    - navleft
      - index.js
  - pages 页面。包括首页主页 login 等等
    - admin 首页 首页的菜单可以选择 order
      - index.js
    - order 订单组件
      - index.js
    - login 登录组件
      - index.js
      - index.less
    - home 主页组件 进去后有一个首页
      - index.js
      - index.less
  - contones 放置一些公共方法。包括请求接口，url 地址，数据文件
  - style
  - router.js
  - history.js

```







### 1.2 Ant-Design

1. 和React结合最紧密的一个Ul框架↓
2. 集成了UI、动画、交互为一体的，基本可以直接和需求方
3. 快速创建、搭建项目,主题可设置
4. 服务器方面，表单集成，数据类型定义
5. 与第三方插件兼容较好
6. 来源阿里巴巴-蚂蚁金服



```markdown


```

