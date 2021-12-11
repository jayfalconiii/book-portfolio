
const Error404 = () => import(/* webpackChunkName: "Error404", webpackPreload: true */ '@/components/pages/Error404.vue');
const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/components/pages/HomePage.vue');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/:catchAll(.*)*',
    component: Error404
  }
]

export default routes
