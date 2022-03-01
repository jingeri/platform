import Login from "./views/login.vue";
import admin from "./views/admin.vue";
import welcome from "./views/admin/welcome.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path:"/",
        name:"home",//首页
        component:Login
        //component:()=>import("./views/login.vue")
    },{
        path:"/login",
        name:"login",//登录
        component:Login
        //component:()=>import("./views/login.vue")
    },{
        path:"/admin",
        name:"admin",//登录
        component:admin,
        children:[{
            path: 'welcome',
            component: welcome,
        }]
        //component:()=>import("./views/login.vue")
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;

