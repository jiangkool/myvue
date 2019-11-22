<template>
	<div>
<form class="form-horizontal" @submit.prevent="add">
	 <div class="form-group">
    <label for="name" class="col-sm-2 control-label">name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" placeholder="name" v-model="user.name">
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="user.email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="password" v-model="user.password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-danger" >添加</button>
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