import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 不需要权限加载得路由
export const constantRoutes = [{
    path: '/',
    component: () => import('@/views/home/index'),
    meta: {
      keepAlive: true
    },
    hidden: true
  },
  //搞笑
  {
    path: '/humor',
    component: () => import('@/views/humor/index'),
    meta: {
      keepAlive: true
    },
    hidden: true
  },
  //字典
  {
    path: '/dictionaries',
    component: () => import('@/views/dictionaries/index'),
    meta: {
      keepAlive: false
    },
    hidden: true
  },
  //垃圾分类
  {
    path: '/garbageSorting',
    component: () => import('@/views/garbageSorting/index'),
    meta: {
      keepAlive: false
    },
    hidden: true
  },
  //新闻
  {
    path: '/news',
    component: () => import('@/views/news/index'),
    meta: {
      keepAlive: true
    },
    hidden: true
  },
  //新闻详情
  {
    path: '/newsDetails',
    name: 'newsDetails',
    component: () => import('@/views/news/newsDetails'),
    meta: {
      keepAlive: false
    },
    hidden: true
  },

  //banner内容
  {
    path: '/bannerContent',
    name: 'bannerContent',
    component: () => import('@/views/home/components/bannerContent'),
    meta: {
      keepAlive: false
    },
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history' 默认hash模式 history需要服务器支持
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
