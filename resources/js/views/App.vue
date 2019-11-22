<template>
	<div id="app">
		<nav class="navbar navbar-inverse">
			<div class="container">
			<router-link :to="{name:'home'}">首页</router-link>
			<router-link :to="{name:'users.index'}">用户</router-link>
			<router-link :to="{name:'users.create'}">添加用户</router-link>
			<span class="text-r" v-if="isLoggedIn">hello! {{user.name}} , you login {{authStatus}} |<a @click="logout">Logout</a></span>
			</div>
		</nav>
		<div class="container">
			<div class="row">
			<div class="col-sm-12">
				<div class="panel panel-default">
  				<div class="panel-body">
				<router-view></router-view>
				</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</template>	
<script>
import { mapState,mapGetters,mapActions } from 'vuex'
	export default {
		name:'app',
		computed:{
			...mapState('users',['user','token']),
			...mapGetters('users',[
				'isLoggedIn',
				'authStatus'
				])
		},
		methods:{
			...mapActions('users',[
				'logout'
			])
		}
	}
</script>

<style scoped>
	
</style>