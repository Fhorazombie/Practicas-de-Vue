import { createRouter, createWebHistory} from 'vue-router';

import InicioView from '../views/Inicio.vue';
import Chatview from '../views/Chat.vue';
import BlogView from '../views/Blog.vue';

const routes = [
    { path: '/', component: InicioView },
    { path: '/chat', component: Chatview },
    { path: '/blog', component: BlogView }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;