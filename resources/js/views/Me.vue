<template>
	<div>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="user.name"></mt-field>
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="user.email"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="user.password"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="user.phone"></mt-field>
	</div>	
</template>

<script>
import {mapState} from 'vuex'
	export default {
		metaInfo () {
			return {
				title:this.user.name
			}
		},
		computed:{
			...mapState('users',['user'])
		}

	}
</script>

<style scoped>
	
</style>