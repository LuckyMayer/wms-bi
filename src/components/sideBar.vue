<template>
	<aside class="menu">
		<el-menu default-active="1" class="el-menu-vertical-deml" @open="handleOpen" @close="handleClose" @select="handleselect" unique-opened router>
			<side-bar-item v-for="(item,index) in menu" :item="item" :index="index" @menu-select="menuSelect"></side-bar-item>
		</el-menu>
	</aside>
</template>
<script>
	import sideBarItem from '../components/sideBarItem'
	import Bus from '../common/js/bus.js'
	export default{
		data(){
			return {}
		},
		components:{
			sideBarItem
		},
		methods:{
			handleOpen(key,keypath) {
				//console.log('handleopen');
			},
			handleClose(key,keyPath) {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
				//console.log(a,b)
			},
			menuSelect(item){
				Bus.$emit('show',item.name)
			}
		},
		props:["menu"]

	}
</script>
<style lang="scss">
	.menu{
		height: 100%;
		width: 230px;
		flex: 0 0 230px;
		.el-menu{
			height:100%;
			background-color: #f4f4f4;
			border-right: 1px solid #dbdbdb;
			box-shadow: 1px 1px 2px #dbdbdb;
			span,i{
				color:#333;
			}
	
			.el-submenu{
				.el-menu{
					background: #fff;
				}
				.el-submenu__title{
					text-align: left;
					border-bottom: 1px solid #dbdbdb;
					span{
						margin-left: 10px;
					}
				}
				.el-menu-item{
					text-align: left;
					&.is-active{
						background-color:#0a8dce;
						span,i{color:#fff;}
					}
					&:hover{
						color:#0a8dce;
						background: #fff;
					}
				}
				
				&.is-opened .el-submenu__title{
					span,i{
						color:#0a8dce;
					}
				} 
				&:hover{

					.el-submenu__title{
						background-color: #fff;
						span,i{
							color:#0a8dce;
						}						
					}
				}						
			}


		}
	}
</style>