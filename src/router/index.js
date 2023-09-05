import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/product', // Redirect to the default route
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/ProductForm.vue'),
    props: { mode: 'add' }, // Pass a prop to indicate "add" mode
  },
  {
    path: '/product/:id', // Use route parameters for editing
    name: 'EditProduct',
    component: () => import('../views/ProductForm.vue'),
    props: { mode: 'edit' }, // Pass a prop to indicate "edit" mode
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
