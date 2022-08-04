# 简介
## 版本
+ vut-lucky 目前还处于快速开发迭代中。

## 使用包管理器
```shell
# NPM
$ npm install vut-lucky --save

# Yarn
$ yarn add vut-lucky

# pnpm
$ pnpm install vut-lucky
```

## 浏览器直接引入
```html
<head>
  <!-- 导入样式 -->
  <link
      rel="stylesheet"
      href="https://unpkg.com/vut-lucky/style.css"
  />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="https://unpkg.com/vut-lucky"></script>
</head>

<script>
  const App = {
    data() {
      return {
        message: "Hello vut-lucky",
      };
    },
  };
  const app = Vue.createApp(App);
  app.use(VTLucky.default);
  app.mount("#app");
</script>
```

## 快速开始
### 完整引入
```ts
import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import vtlucky from 'vut-lucky'
import 'vut-lucky/style.css'

createApp(App).use(vtlucky).mount('#app')
```