// import map_route_default from './map_route';
// import map_route_redirect from './map_route';
// import profile_route_default from '.profile_route';
import { createRouter, createWebHistory } from 'vue-router';
import MapComponent from '../components/map_component.vue';
import ProfileComponent from '../components/profile_component.vue';
import LoginComponent from '../components/login_component.vue';

const routes = [
    {
        path: '/',
        name: 'Map',
        component: MapComponent,
    },
    {
        path: '/map',
        redirect: '/',
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileComponent
    },
    {
        path: '/auth/google',
        name: 'Google Auth',
        component: LoginComponent
    },
];

const router = createRouter({ 
    history: createWebHistory(),
    mode: 'history',
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
 });

export default router;