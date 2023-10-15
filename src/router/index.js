import { createRouter, createWebHistory } from 'vue-router';
const PersonView = () => import('@/views/PersonView.vue');
const AdminView = () => import('@/views/AdminView.vue');
const PeopleList = () => import('@/views/PeopleView.vue');

const routes = [
  {
    path: '/',
    redirect: '/people', // Redirect to the default route
  },
  {
    path: '/person',
    name: 'AddPerson',
    component: PersonView,
    props: { mode: 'add' }, // Pass a prop to indicate "add" mode
  },
  {
    path: '/person/:id', // Use route parameters for editing
    name: 'EditPerson',
    component: PersonView,
    props: { mode: 'edit' }, // Pass a prop to indicate "edit" mode
  },
  {
    path: '/people', 
    name: 'ListPeople',
    component: PeopleList,
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
