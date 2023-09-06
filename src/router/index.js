import { createRouter, createWebHistory } from 'vue-router';
const ProductView = () => import('@/views/ProductView.vue');
const AdminView = () => import('@/views/AdminView.vue');

const routes = [
  {
    path: '/',
    redirect: '/product', // Redirect to the default route
  },
  {
    path: '/product',
    name: 'AddProduct',
    component: ProductView,
    props: { mode: 'add' }, // Pass a prop to indicate "add" mode
  },
  {
    path: '/product/:id', // Use route parameters for editing
    name: 'EditProduct',
    component: ProductView,
    props: { mode: 'edit' }, // Pass a prop to indicate "edit" mode
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
