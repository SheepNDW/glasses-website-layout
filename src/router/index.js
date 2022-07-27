import { createRouter, createWebHashHistory } from 'vue-router';

const Layout = () => import('@/views/Layout.vue');
const Home = () => import('@/views/home/Index.vue');
const Products = () => import('@/views/products/Index.vue');
const Shop = () => import('@/views/shop/Index.vue');
const ShopDetail = () => import('@/views/shop/shop-detail/ShopDetail.vue');
const Blog = () => import('@/views/blog/Index.vue');
const BlogDetail = () => import('@/views/blog/detail/BlogDetail.vue');
const FAQ = () => import('@/views/FAQ/Index.vue');

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/products',
        component: Products,
      },
      {
        path: '/stores',
        component: Shop,
      },
      {
        path: '/stores/:id',
        component: ShopDetail,
      },
      {
        path: '/blog',
        component: Blog,
      },
      {
        path: '/blog/article/:id',
        component: BlogDetail,
      },
      {
        path: '/FAQ',
        component: FAQ,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
