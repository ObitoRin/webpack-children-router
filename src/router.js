
// 1.导入路由
import VueRouter from 'vue-router';

// 导入两个组件
import account from './components/Account.vue';
import goodsList from './components/GoodsList.vue';

// 导入Account的两个子组件

import login from './subCom/login.vue';
import register from './subCom/register.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register },
            ]
        },
        {
            path: '/goodsList',
            component: goodsList
        }
    ]
});

// 把路由对象暴露出去
export default router;
