import Inicio from '../views/Inicio.vue';
import Servicios from '../views/Servicios.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    { path: '/', component: Inicio, name: 'Inicio' },
    { path: '/servicios', component: Servicios, name: 'Servicios' },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router