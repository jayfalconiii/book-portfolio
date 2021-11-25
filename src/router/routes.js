
const error404Page = () => import('@/components/pages/Error404.vue');
const homePage = () => import('@/components/pages/HomePage.vue');

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/:catchAll(.*)*',
    component: error404Page
  }
]

export default routes
