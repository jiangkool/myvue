import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import UsersModule from "./modules/UsersModule";

export default new Vuex.Store({
	modules:{
		users:UsersModule
	}
})

