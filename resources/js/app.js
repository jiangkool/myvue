import Vue from 'vue'
import App from './views/App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'
import Cookies from 'js-cookie'
import router from './routes/router'
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://myvue.test/api';

Vue.use(MintUi)

const token = Cookies.get('token')
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