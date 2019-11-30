<template>
	<div>
<mt-field label="用户名" placeholder="请输入用户名" v-model="user.name"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="user.email"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="user.password"></mt-field>
<mt-button type="danger" @click.native="add" size="large">提交</mt-button>
	</div>	
</template>	

<script>
	export default {
		data(){
			return {
				user:{
					name:'',
					email:'',
					password:''
				}
			}
		},
		methods:{
			add(){
				this.axios.post('users',this.user).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
		}
}

</script>

<style scoped>
	
</style>