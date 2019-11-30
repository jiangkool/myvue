import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import UsersIndex from '../views/UsersIndex'
import UsersDetails from '../views/UsersDetails'
import UsersEdit from '../views/UsersEdit'
import UsersDestory from '../views/UsersDestory'
import UsersCreate from '../views/UsersCreate'
import NotFound from '../views/NotFound'
import Login from '../views/Login'
import Me from '../views/Me'

Vue.use(VueRouter)

const router=new VueRouter({
		mode:'history',
		routes:[
			{ path:'/', name:'home' , component:Home },
			{ path:'/users', name:'users.index' , component:UsersIndex },
			{ path:'/users/:id', name:'users.show' , component:UsersDetails ,meta:{requiresAuth:true} },
			{ path:'/users/:id/edit', name:'users.edit' , component:UsersEdit },
			{ path:'/users/:id/destory', name:'users.destory' , component:UsersDestory ,meta:{requiresAuth:true} },
			{ path:'/users/create', name:'users.create' , component:UsersCreate ,meta:{requiresAuth:true} },
			{ path:'/login', name:'user.login' , component:Login },
			{ path:'/me', name:'me' , component:Me },
			{ path:'*',component:NotFound }
	]
});

export default router