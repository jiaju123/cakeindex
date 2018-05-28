import  Vue from 'vue'
import Router from 'vue-router'
import Innav from '@/components/innav'
import Index from '@/components/index'
import Incate from '@/components/incate'
import Incar from '@/components/incar'
import Indexcar from '@/components/indexcar'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Innav,
      redirect:'/index',
      children:[
          {
            path:'/index',
            component: Index,
          },
          {
              path:'/incate',
              component: Incate,
          },
          {
              path:'/incar',
              component: Incar,
          },
          {
              path:'/incate/:id',
              component: Incate,
          },
          {
            path:'/indexcar',
            component: Indexcar,
          },
      ]
    },
    {
        path:'/'
    }
  ]
})
