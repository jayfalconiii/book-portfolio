
const error404Page = () => import('@/components/pages/Error404.vue');
const homePage = () => import('@/components/pages/HomePage.vue');
const demoPage = () => import('@/components/pages/DemoFold.vue');

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: "/demo-fold",
    component: demoPage
  },
  {
    path: '/:catchAll(.*)*',
    component: error404Page
  }
]

export default routes
