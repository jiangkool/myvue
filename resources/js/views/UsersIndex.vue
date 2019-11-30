<template>
	<div>
			<div v-if="items.length>0">
			<mt-cell v-for="(item,index) in items" :key="item.id" :title="item.name" is-link :to="{name:'users.show',params:{id:item.id}}">
			  <span style="color: green">{{item.email}}</span>
			  <mt-button type="danger" size="small" @click.stop.prevent="del(index)">删除</mt-button>
			</mt-cell>
			</div>
		<span v-else v-text="'暂无记录！'">
			
		</span>
	</div>
</template>

<script>
// import { mapGetters } from 'vuex'
	export default {
		data(){
			return {
				items:[]
			}
		},
		computed:{
			//...mapGetters(['isLoggedIn'])
			isLoggedIn(){
			 return this.$store.getters['users/isLoggedIn']
			}
		},
		mounted(){
			this.getUsers()
		},
		methods:{
			getUsers() {
				this.axios.get('users')
				.then(response=>{
				//	console.log(response.data.data)
					this.items=response.data.data
				});
			},
			del(index){
				var id=this.items[index].id
				this.axios.delete(`users/${id}`)
				.then(response=>{
					if (response.data.status=='success') {
						alert('删除成功')
						this.items.splice(index,1)
						//this.$router.replace({name:"users.index"})
					}else{
						alert(response.data.message)
					}
				}).catch(err=>alert('删除失败'));
			}
		}
	}
</script>

<style scoped>
	ul li{margin-bottom:15px}
</style>