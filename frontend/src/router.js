import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';

const SiteLayout = () => import(/* WebpackChunkName: "SiteLayout" */ './site/layout/SiteLayout.vue');
const Main = () => import(/* WebpackChunkName: "SiteLayout" */ './site/pages/Main.vue');
const Catalog = () => import(/* WebpackChunkName: "SiteLayout" */ './site/pages/Catalog.vue');
const Car = () => import(/* WebpackChunkName: "SiteLayout" */ './site/pages/Car.vue');
const AdminLayout = () => import(/* WebpackChunkName: "AdminLayout" */ './admin/layout/AdminLayout.vue');
const CreateCar = () => import(/* WebpackChunkName: "AdminLayout" */ './admin/pages/CreateCar.vue');
const EditCar = () => import(/* WebpackChunkName: "AdminLayout" */ './admin/pages/EditCar.vue');
const Cars = () => import(/* WebpackChunkName: "AdminLayout" */ './admin/pages/Cars.vue');
const CarAdmin = () => import(/* WebpackChunkName: "AdminLayout" */ './admin/pages/Car.vue');

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: SiteLayout,
      children: [
        {
          path: '',
          component: Main
        },
        {
          path: 'catalog',
          component: Catalog
        },
        {
          path: 'catalog/:carId',
          component: Car
        },
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'cars',
          component: Cars
        },
        {
          path: 'cars/create',
          component: CreateCar
        },
        {
          path: 'cars/:carId',
          component: CarAdmin
        },
        {
          path: 'cars/:carId/edit',
          component: EditCar
        },
      ]
    },
    {
      path: '/hello',
      components: HelloWorld
    }
  ]
});

export default router;