<template>
	<div class="container">
		<div class="row">
				<div class="col-sm-12">
					<h3 v-text="name"></h3>
					<hr>
					<div class="panel panel-default">
					  <div class="panel-body" v-text="email">
					  </div>
					</div>
				</div>
			</div>	
	</div>	
</template>	

<script>
import {mapState,mapMutations} from 'vuex'
	export default {
		data(){
			return {
				name:null,
				email:null
			}
		},
		mounted(){
			this.getUserInfo()
		},
		methods:{
			getUserInfo(){
				this.axios.get('users/'+this.$route.params.id)
				.then(res=>{
					this.name=res.data.data.name;
					this.email=res.data.data.email
				})
			}
		}

	}

	
</script>

<style scoped>
	
</style>