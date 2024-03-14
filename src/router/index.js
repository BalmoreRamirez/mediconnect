import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Inicio",
        component: () => import("../views/Home/index.vue"),
    }
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router