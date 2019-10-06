import Vue from 'vue';

// 1.导入路由
import VueRouter from 'vue-router';
// 2.使用路由
Vue.use(VueRouter);

// 导入app组件
import app from './App.vue';

// 导入自定义路由模块
import router from './router.js';

const vm = new Vue({
    el: '#app',
    render: c => c(app),    //vm实例的render函数渲染的元素 把el控制元素的替换了
    router
});
