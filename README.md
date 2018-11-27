# lab

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

学生端登入：
打开/src/components/login.Vue
```javascript
<el-button style="float:right" type="primary" @click="login('teacher')">Log in</el-button>
```
中的teacher改成student即可，反之亦然
