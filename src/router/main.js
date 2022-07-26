import { createRouter, createWebHistory } from 'vue-router';
import MapComponent from '../components/map_component.vue';
import ProfileComponent from '../components/profile_component.vue';
import LoginComponent from '../components/signin_component.vue';
import SingUpComponent from '../components/signup_component.vue';
import ResetPassComponent from '../components/reset_password_component.vue';

const routes = [
    {
        path: '/',
        name: 'Map',
        component: MapComponent,
    },
    {
        path: '/sign-in',
        name: 'Sing in',
        component: LoginComponent
    },
    {
        path: '/sign-up',
        name: 'Sign up',
        component: SingUpComponent
    },
    {
        path: '/reset-password',
        name: 'Reset Password',
        component: ResetPassComponent
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileComponent
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