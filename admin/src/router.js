
import { createRouter, createWebHashHistory } from "vue-router";
//import Login from "./views/login.vue"

const routes = [
    {
        path:"/",
        name:"login",
        component:()=>import("./views/login.vue")
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;

