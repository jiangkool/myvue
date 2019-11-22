import Vue from 'vue'
import App from './views/App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'
import router from './routes/router'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://myvue.test/api';

const token = localStorage.getItem('token')
if(token){
	axios.defaults.headers.common['Authorization']= `Bearer ${ token }`
}

router.beforeEach((to,from, next)=>{
	if(to.matched.some(record => record.meta.requiresAuth)){
	    if(store.getters['users/isLoggedIn']){
	        next()
	        return
	    }
	    next('/login')
	}else{
	    next()
	}
})

Vue.config.productionTip=false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')