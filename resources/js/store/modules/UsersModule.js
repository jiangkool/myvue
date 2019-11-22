import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://myvue.test/api';

export default {
	namespaced: true,
	state:{
		status:'',
		token:localStorage.getItem('token')||'',
		user:{}
	},
	mutations:{ //同步事件 改变 state 的数据 state 作为第一个参数传递
		auth_request(state){
			state.status ='loading'
		},
		auth_success(state,{token,user}){
			state.status ='success'    
		    state.token = token    
		    state.user = user
		},
		auth_error(state){
			state.status='error'
		},
		logout(state){
			state.token = ''    
		    state.user = ''
		}
	},
	actions:{ // 异步事件触发 mutations 事件 { commit }
		login( { commit } , user ){
			return new Promise((resolve,reject) => {
				// 触发请求状态
				commit('auth_request')
				// 请求数据
				axios.post('login',user)
				.then(response=>{
					console.log(response)
					let token=response.data.token
					let user=response.data.user
					localStorage.setItem('token',token)
					axios.defaults.headers.common['Authorization']= token
					commit('auth_success', {token, user})
					resolve(response)
					
				}).catch(err=>{
					commit('auth_error')
					localStorage.removeItem('token')
					reject(err)
				});
			})
		},
		register({commit},user){
			return new Promise((resolve, reject)=>{
				// 请求数据
				axios.post('register',user)
				.then(response=>{

					let token=response.data.token;
					let user=response.data.user;
					localStorage.setItem('token',token)
					axios.defaults.headers.common['Authorization']= token
					commit('auth_success', token, user)

					resolve(response)
				}).catch(err=>{
					commit('auth_error')
					localStorage.removeItem('token')
					reject(err)
				});
			})
		},
		logout({commit}){
			return new Promise((resolve, reject)=>{
		        commit('logout')    
		        localStorage.removeItem('token')
		        delete axios.defaults.headers.common['Authorization']
		        resolve()
		    })
		}
	},
	getters:{ //store计算属性
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	}

}