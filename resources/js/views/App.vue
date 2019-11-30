<template>
	<div id="app">
		<mt-header fixed title="顶部"></mt-header>
		<div class="container" style="padding-top:100px">
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
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="home">
		    
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="users">
		    
		    用户
		  </mt-tab-item>
		  <mt-tab-item id="addUser">
		    
		    添加用户
		  </mt-tab-item>
		  <mt-tab-item id="me">
		    
		    我的
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>	
<script>
import { mapState,mapGetters,mapActions } from 'vuex'
	export default {
		data(){
			return {
				selected:'home',
				active:0
			}
		},
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
		},
		watch:{
			selected:function(newVal,oldVal) {
				// console.log(newVal+'//'+oldVal)
				switch(newVal){
					case 'home':
					this.$router.push({'name':'home'})
					break;
					case 'users':
					this.$router.push({'name':'users.index'})
					break;
					case 'addUser':
					this.$router.push({'name':'users.create'})
					break;
					case 'me':
					this.$router.push({'name':'me'})
					break;
				}
			}
		}
	}
</script>

<style scoped>
	nav{padding-top:50px}
</style>