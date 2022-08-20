import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/pages/HomeView/HomeView.vue';
import HealthState from '../views/pages/healthState/healthState.vue';
import PerformanceView from '../views/pages/performanceView/performanceView.vue';
import JsView from '../views/test/js.vue';
import NetworkView from '../views/test/network.vue';
import DangerView from '../views/pages/dangerView/dangerView.vue';

import JkhsfxView from '../views/pages/jkhsfxView/jkhsfxView.vue';
import YmxnfxView from '../views/pages/ymxnfxView/ymxnfxView.vue';


const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // 如果是根目录的话重定向到overview
      redirect:"/overview",
      children:[
        {
          path:"/overview",
          name:"overview",
          component:() => import("../views/pages/overView/overView.vue")
        },
        {
          path:"/healthstate",
          name:"healthstate",
          component: HealthState
        },     
        {
            path:"/performance",
            name:"performance",
            component: PerformanceView
        },      
        {
            path:"/danger",
            name:"danger",
            component: DangerView
        }
      ]
    },
    {
        path: '/test/js',
        name: 'JsView',
        component: JsView
    }, 
    {
        path: '/test/network',
        name: 'NetworkView',
        component: NetworkView
    }, 

    {
      path: '/jkhsfx',
      name: 'jkhsfx',
      component: JkhsfxView
    },  
    {
      path: '/ymxnfx',
      name: 'ymxnfx',
      component: YmxnfxView
    },  

    {
      path: '/errorStat',
      name: 'errorStat',
      isHide: true, 
      component: () => import("../views/pages/errorStat/errorStat.vue"),
      redirect: "/errorStat_total",
      children: [
        {
          path: "/errorStat_total",
          name: "errorStat_total",
          component: () => import("../views/pages/errorStat/errorStat_total.vue"),
          // redirect: "/error_table",
        },
        {
          path: "/errorStat_list",
          name: "errorStat_list",
          component: () => import("../views/pages/errorStat/errorStat_list.vue"),
        },
        {
          path: "/errorStat_rele",
          name: "errorStat_rele",
          component: () => import("../views/pages/errorStat/errorStat_rele.vue"),
        },
        {
          path: "/errorStat_proc",
          name: "errorStat_proc",
          component: () => import("../views/pages/errorStat/errorStat_proc.vue"),
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