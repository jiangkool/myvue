<template>
	<div> <h1>home page </h1>
		<hr>
		<mt-button v-show="isLoggedIn" type="danger" @click="logout">退出登录</mt-button>
</div>
</template>	

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
	data(){
		return {

		}
	},
	computed:{
		...mapGetters('users',['isLoggedIn'])
	},
	methods:{
		...mapActions('users',['logout'])
	}
}	
</script>

<style scoped>
	
</style>