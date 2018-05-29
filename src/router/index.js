import  Vue from 'vue'
import Router from 'vue-router'
import Innav from '@/components/innav'
import Index from '@/components/index'
import Incate from '@/components/incate'
import Incar from '@/components/incar'
<<<<<<< HEAD
import Inabout from '@/components/inabout'
import Inorder from '@/components/inorder'


=======
import Indexcar from '@/components/indexcar'
>>>>>>> 6e37dc72120dafa4b848437e530a223ef25a5198
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
<<<<<<< HEAD
          {
              path:'/inabout',
              component: Inabout,
          },
          {
              path:'/inorder',
              component: Inorder,
          }
=======
>>>>>>> 6e37dc72120dafa4b848437e530a223ef25a5198
      ]
    },
    {
        path:'/'
    }
  ]
})
