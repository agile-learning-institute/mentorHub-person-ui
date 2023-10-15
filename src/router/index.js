import { createRouter, createWebHistory } from 'vue-router';
const AddPersonView = () => import('@/views/AddPersonView.vue');
const EditPersonView = () => import('@/views/EditPersonView.vue');
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
    component: AddPersonView,
  },
  {
    path: '/person/:id', // Use route parameters for editing
    name: 'EditPerson',
    component: EditPersonView,
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
