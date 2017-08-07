import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('../view/Login')
    },
    {
    	path: '/home',
    	name: 'home',
    	component: require('../view/home'),
      children:[
        {
          path: '/totalWarehouseData',
          name: 'totalWarehouseData',
          component: require('../view/totalData')
        }
      ] 
    }
  ]
})
