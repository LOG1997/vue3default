# Vue 3 + TypeScript + Vite前端

1. 在``vite``、``vue3``、``ts``默认项目下配置``vue-router``、``windicss``、``element-plus``、``axios``等插件。

2. ``vite``配置中已将默认运行端口改为``8080``端口，后端接口配置跨域也设置为``8080``端口，所以若无必要不要更改。

3. 封装```axios```模块在```src/apis```目录下，并将```api```都写到```request.js```文件中集中管理

4. ``vite``配置中将``src``目录别名设置为``@``符号，可在项目中直接使用```@```
5. 默认引入```element-plus```框架，按需使用，在需要使用到```element-plus```框架的组件中使用```import```引入即可，如：
    ```
    import {ElDialog} from 'element-plus'
    ```

6. ```windicss```使用方法见[此处](https://cn.windicss.org/)。
# node express后端
在```server```文件夹中存放后端文件。入口文件为``app.js``，默认运行在本地``4000``端口上。


# 如何开始
```
//进入项目目录
cd vue3default

//安装依赖
npm install

//进入后端目录
cd server

//安装后端依赖
npm install

```

# 命令
在项目根目录下执行
```
//运行前端
npm run vite

//运行后端
npm run api

//前端后端一起运行
npm run dev

//打包
npm run build
```
## 参考链接
[vue3](https://v3.cn.vuejs.org/)、[vite](https://vitejs.cn/)、[element-plus](https://element-plus.gitee.io/zh-CN/)、[windicss](https://cn.windicss.org/)



