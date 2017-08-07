<template>
	<el-col :span="24" class="header">
		<el-col :span="10" class="logo title">
			<label class="system-title">WMS全仓数据系统</label>
		</el-col>
		<el-col :span="4">
			<p class="current_menu"></p>
		</el-col>
		<el-col :span="4" class="right">		
			<div class="help">
				<i class="fa fa-question-circle-o"></i>
				<span class="pointer">帮助</span>
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner pointer">
						<img :src="icon"/>
						{{userName}}
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</el-col>
	</el-col>
</template>
<script>
	import Bus from '../common/js/bus.js';
	import {logout} from '../api/api'
	import {deleteCookie} from '../common/js/cookies.js'
	export default{
		data(){
			return {
				sysUserAvatar:'',
				userName: 'Alice',
				current: 'WMS全仓数据监控',
				icon:''
			}
		},
		created(){
			Bus.$on('show',(data)=>{this.current=data;})
		},
		mounted(){
		},
		methods:{
			logout(){
				var _this=this;
				this.$confirm('确认退出登录吗？','提示',{}).then(()=>{
					deleteCookie(()=>{
						this.$router.push({name:"login"})
					})
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.header{
		background: url('../../static/images/header-bkg-blue.png') top left no-repeat #0a8dce;
		color:#fff;
		font-size: 14px;
		height: 58px;
		line-height: 58px;
		position: fixed;
		top:0;
		left:0;
		z-index: 999;
		.pointer{
			cursor: pointer;
			border: none;
			color:#333;
		}
		.current_menu{
			font-size: 18px;
			text-align: left;
			padding-left: 12px;
			word-break: keep-all;
		}
		.title{
			width: 230px;
			.system-title{
				padding: 8px 32px;
				text-align: center;
				color:#fff;
				border-radius: 3px;
				font-size: 18px;
				font-family: 'Arial'
			}
			border: none;
		}
		.right{
			float: right;
			.help{
				width: 100%;
				font-size: 14px;
				span{
					margin-left: 3px;
					color:#fff;
				}
				img{
					background-color: transparent;
					height:32px;
					width: 32px;
					position: relative;
					top: 9px;
					margin-left: 10px;
					border-width: 0;
					border-color: transparent;
					border-radius: 50%;
				}
				img[src=""]{
					opacity: 0;
				}		
			}
		}
	}
</style>