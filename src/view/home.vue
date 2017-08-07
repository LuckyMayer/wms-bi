<template>
	<el-row class="container">
		<top-bar></top-bar>
		<el-col :span="24" class="main">
			<side-bar :menu="menulist"></side-bar>
			<el-col class="content-container" :span="24">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" >
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</el-col>			
		</el-col>
	</el-row>
</template>
<script>
	import TopBar from '../components/topBar'
	import {getMenuList} from '../api/api'
	import SideBar from '../components/sideBar'
	import {GetCookie} from '../common/js/cookies.js'
	export default{
		data(){
			return {
				menulist:[]
			}
		},
		components:{
			TopBar,
			SideBar
		},
		mounted(){
			if(!GetCookie("JSESSIONID")){
				this.$router.push({name:'login'})
				return ;
			}				
			getMenuList().then(res=>{
				this.menulist=res.MenuList;
			})

		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped>
	.container{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		.main{
			display: flex;
			position: absolute;
			top:58px;
			bottom: 0px;
			overflow: hidden;
			.content-container{
				flex:1;
				overflow-y: scroll;
				padding: 20px;
				.content-wrapper{
					background-color: transparent;
					box-sizing: border-box;
				}
			}
		}
	}
</style>