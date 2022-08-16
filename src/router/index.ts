import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import userList from '../views/pages/userList.vue';
import PerformanceView from '../views/pages/performanceView.vue';
import JsView from '../views/test/js.vue';
import NetworkView from '../views/test/network.vue';
import DangerView from '../views/pages/dangerView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // 如果是根目录的话重定向到overview
    redirect:"/overview",
    children: [
      {
        path: "/overview",
        name: "overview",
        component: () => import("../views/pages/overView.vue")
      },
      {
        path: "/userlist",
        name: "userlist",
        component: userList
      },
      {
        path: "/performance",
        name: "performance",
        component: PerformanceView
      },
      {
        path: "/danger",
        name: "danger",
        component: DangerView
      }
    ]
  },
  // {
  //   path: '/test/js',
  //   name: 'JsView',
  //   component: JsView
  // },
  // {
  //   path: '/test/network',
  //   name: 'NetworkView',
  //   component: NetworkView
  // },
  {
    path: '/errorStat',
    name: 'errorStat',
    isHide: true, 
    component: () => import("../views/pages/errorStat.vue"),
    redirect: "/errorStat_total",
    children: [
      {
        path: "/errorStat_total",
        name: "errorStat_total",
        component: () => import("../views/pages/errorStat_total.vue"),
        // redirect: "/error_table",
        children: [
          {
            path: "/error_table",
            name: "error_table",
            component: () => import("../views/pages/error_table.vue")
          }
        ]
      },
      {
        path: "/errorStat_list",
        name: "errorStat_list",
        component: () => import("../views/pages/errorStat_list.vue"),
        children: [
          {
            path: "/error_table",
            name: "error_table",
            component: () => import("../views/pages/error_table.vue")
          }
        ]
      },
      {
        path: "/errorStat_rele",
        name: "errorStat_rele",
        component: () => import("../views/pages/errorStat_rele.vue"),
        children: [
          {
            path: "/error_table",
            name: "error_table",
            component: () => import("../views/pages/error_table.vue")
          }
        ]
      },
      {
        path: "/errorStat_proc",
        name: "errorStat_proc",
        component: () => import("../views/pages/errorStat_proc.vue"),
        children: [
          {
            path: "/error_table",
            name: "error_table",
            component: () => import("../views/pages/error_table.vue")
          }
        ]
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

// const router = createRouter({
//     history: createWebHistory(
//         import.meta.env.BASE_URL),
//     routes: [  {
//             path: '/',
//             name: home,
//             component:HomeView
//             //redirect 是重新定向
//             // redirect: '/test/network'
//         },
//         {
//             path: '/test/js',
//             name: 'JsView',
//             component: JsView
//         }, {
//             path: '/test/network',
//             name: 'NetworkView',
//             component: NetworkView
//         }, 

//     ]
// })

// export default router