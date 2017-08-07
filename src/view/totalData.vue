<template>
	<div class="grid-content bg-purple-light">
		<el-form ref="form" :model="form" label-width="80px" style="width: 60%;">
			<el-form-item label="订单时间:">
				<el-col :span="6">
					<el-date-picker v-model="form.datetime" type="datetimerange" format="yyyy-MM-dd"  range-separator="~" placeholder="选择时间范围" @change="dateChange"></el-date-picker>
				</el-col>
			</el-form-item>
			<el-col :span="6">
			  <el-form-item label="仓库" :span="6">
			    <el-select v-model="form.warehouse_id" >
			      <el-option  v-for="warehouse in warehouseList" :label="warehouse.warehouse_name" :value="warehouse.warehouse_id" :key="warehouse.warehouse_id"></el-option>
			    </el-select>
			  </el-form-item>				
			</el-col>
			<el-col :span="6">
			  <el-form-item label="业务组" :span="6">
			    <el-select v-model="form.customer_id">
			      <el-option v-for="customer in customerList" :key="customer.customer_id" :value="customer.customer_id" :label="customer.name"></el-option>
			    </el-select>
			  </el-form-item>
			</el-col>
			<el-col :span="1">
				<el-form-item>
					 <el-button type="primary" @click.prevent="query" >查询</el-button>
				</el-form-item>
			</el-col>	  
		</el-form>
	
		<el-table :data="tableData" border  highlight-current-row style="width:100%;" v-loading="loading">
			<el-table-column prop="name" label="业务组"></el-table-column>
			<el-table-column prop="warehouse_name" label="仓库"></el-table-column>
			<el-table-column prop="acceptd_num" label="已接收"></el-table-column>
			<el-table-column prop="cancel_num" label="已取消"></el-table-column>
			<el-table-column prop="validity_num" label="有效订单"></el-table-column>
			<el-table-column prop="over_percent" label="发货率"></el-table-column>
			<el-table-column prop="not_over_num" label="有效未发货"></el-table-column>
			<el-table-column prop="accept_num" label="未处理"></el-table-column>
			<el-table-column prop="batch_pick_num" label="已分配"></el-table-column>
			<el-table-column prop="picked_num" label="已拣货"></el-table-column>
			<el-table-column prop="rechecked_num" label="已复核"></el-table-column>
			<el-table-column prop="weighed_num" label="已称重"></el-table-column>
			<el-table-column prop="over_num" label="已发货"></el-table-column>
			<el-table-column prop="late_num" label="接单12小时未发货"></el-table-column>
			<el-table-column prop="over_no_route_num" label="已发货无物流"></el-table-column>
			<el-table-column prop="route_no_over_num" label="未发货有物流"></el-table-column>
		</el-table>
		
	</div>
</template>

<script>
	import {getWarehouseList,getCustomerList,queryTable} from '../api/api.js';
	import {GetCookie} from '../common/js/cookies.js'
	export default {
		data() {
			return {
				form: {
					startTime:'',
					endTime:'',
					warehouse_id:'0',
					customer_id:'0',
					datetime:[]
				},
				warehouseList:[],
				customerList:[],
				userInfo:{
					userName: 'hzhang1'
				},
				tableData:[],
				loading:false
			}
		},
		mounted(){

			if(!GetCookie("JSESSIONID")){
				this.$router.push({name:'login'})
				return ;
			}	
				this.GetWarehouseList()
				this.GetCustomerList()

		},
		methods: {
			GetWarehouseList(){
				getWarehouseList(this.userInfo).then(res=>{
					this.warehouseList=res;
					this.warehouseList.unshift({"warehouse_id":"0","warehouse_name":"全部"})
				})
				

			},
			GetCustomerList(){
				getCustomerList(this.userInfo).then(res=>{
					this.customerList=res;
					this.customerList.unshift({"customer_id":"0","name":"全部"})
				})
				
				
			},
			dateChange(val){
				this.form.startTime=val.split('~')[0];
				this.form.endTime=val.split('~')[1];
			},
			query(){
				let dt={
					startTime:this.form.startTime,
					endTime: this.form.endTime,
					warehouseId:this.form.warehouse_id,
					customerId:this.form.customer_id
				}
				this.loading=true;
				queryTable(dt).then(res=>{
					var arr=[];
					console.log(res)
					for(let i in res.data){
						Object.keys(res.data[i]).some(function(key){
							if(res.data[i][key])
							arr.push(res.data[i][key])
						})
					}
					this.loading=false;
					this.tableData=arr;
				},err=>{
					this.loading=false;
				})
			}
		}
	}

</script>
<style scoped lang="scss"></style>