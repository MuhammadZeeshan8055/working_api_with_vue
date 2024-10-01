import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import LoginComponent from "./components/LoginComponent.vue";
import AddComponent from "./components/AddComponent.vue";
import UpdateComponent from "./components/UpdateComponent.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes=[
    {
        name:'Home',
        path:'/',
        component:HomeComponent
    },
    {
        name:'SignUp',
        path:'/signup',
        component:SignUp
    },
    {
        name:'LoginComponent',
        path:'/login',
        component:LoginComponent
    },
    {
        name:'AddComponent',
        path:'/add',
        component:AddComponent
    },
    {
        name:'UpdateComponent',
        path:'/update/:id',
        component:UpdateComponent
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router