import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../views/Auth.vue';
import Welcome from '../views/Welcome.vue'; // Import Welcome component

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/welcome', // Route to Welcome page
    name: 'Welcome',
    component: Welcome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
