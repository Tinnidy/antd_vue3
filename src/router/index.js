/**
 * 路由文件  vue-router@4.0.9
 * 参考https://next.router.vuejs.org/zh/guide/migration/index.html
 * vueRouter不是一个类，而是一组函数,导入类不加大括号 导入函数需要
 *
 * export 和 export default
 */

import { createRouter, createWebHashHistory } from "vue-router";

//公共路由
export const constantRoutes = [{
        path: "/",
        redirect: "/login", //重定向
    },
    {
        path: "/login",
        component: () =>
            import ("../view/login.vue"),
    },
    {
        path: "/index",
        component: () =>
            import ("../layout/index.vue"),
    },
    {
        path: "/articleMake",
        children: [
            { path: "blogMake", name: "博客管理" },
            { path: "dialyMake", name: "日记管理" },
            { path: "quesMake", name: "问题管理" },
        ],
    },
    {
        path: "/dataMake",
        children: [
            { path: "commentData", name: "评论数据" }
        ],
    },
    {
        path: "/403",
        component: () =>
            import ("../view/403.vue"),
    },
    {
        path: "/404",
        component: () =>
            import ("../view/404.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(), //配置路由模式
    //路由地址
    routes: constantRoutes,
});

export default router;