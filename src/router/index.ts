import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Countries from '../views/Countries.vue';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import SingleCountry from '../views/SingleCountry.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/countries',
        name: 'Countries',
        component: Countries
    },
    {
        path: '/countries/:countryName',
        name: 'SingleCountry',
        component: SingleCountry,
        props: true
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
