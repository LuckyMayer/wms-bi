<template>
	<el-submenu :index='index+" "' v-if='item.children && item.children.length>0' >
		<template slot="title"><i :class="item.iconCls"></i><span>{{item.name}}</span></template>
		<side-bar-item :item="child" v-for="(child,i) in item.children" :keys="item.view" :index='index+"-"+i' @menu-select="menuSelect"></side-bar-item>
	</el-submenu>
	<el-menu-item :index="item.view" @click="menuClick" v-else>
		<i :class="item.iconCls"></i>
		<span>{{item.name}}</span>
	</el-menu-item>
</template>
<script>
	import sideBarItem from '../components/sideBarItem'
	export default {
		name: 'side-bar-item',
		data(){
			return{}
		},
		props:["item","index"],
		components:{
			sideBarItem
		},
		mounted(){
		//	console.log(this.item)
		},
		methods:{
			menuClick(){
				this.menuSelect(this.item)
			},
			menuSelect(item){
				this.$emit("menu-select",item)
			}
		}
	}
</script>
<style lang="scss">

</style>