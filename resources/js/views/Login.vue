<template>
	<div>
		<form class="form-horizontal" @submit.prevent="login">
		  <div class="form-group">
		    <label for="inputEmail3" class="col-sm-2 control-label">User Name</label>
		    <div class="col-sm-10">
		      <input type="userName" class="form-control" id="inputEmail3" placeholder="User Name" v-model="user.userName">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
		    <div class="col-sm-10">
		      <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="user.password">
		    </div>
		  </div>
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		      <div class="checkbox">
		        <label>
		          <input type="checkbox" v-model="user.rememberMe"> Remember me
		        </label>
		      </div>
		    </div>
		  </div>
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		      <button type="submit" class="btn btn-danger">Sign in</button>
		    </div>
		  </div>
		</form>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				user:{
					userName:'',
					password:''
				}
			}
		},
		methods:{
			login(){
				let user=this.user
				this.$store.dispatch('users/login',user)
				.then(()=>this.$router.push('/'))
				.catch(err=>console.log(err))
			}
		}
	}
</script>

<style scoped>
	
</style>