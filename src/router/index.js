import  Vue from 'vue'
import Router from 'vue-router'
import Innav from '@/components/innav'
import Index from '@/components/index'
import Incate from '@/components/incate'
import Incar from '@/components/incar'
import Inabout from '@/components/inabout'
import Inorder from '@/components/inorder'


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
              path:'/incate:id',
              component: Incate,
          },
          {
              path:'/incate:id',
              component: Incate,
          },
          {
              path:'/inabout',
              component: Inabout,
          },
          {
              path:'/inorder',
              component: Inorder,
          }
      ]
    },
    {
        path:'/'
    }
  ]
})
