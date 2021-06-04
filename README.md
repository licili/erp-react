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
