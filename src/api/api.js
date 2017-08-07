import axios from 'axios';

axios.defaults.withCredentials=true;

let host='http://wmsbi.local.com:3012/server';

export {host}
//export const getMenuList=()=>{return axios.get(`/getmenulist`).then(res=>res.data)}
//export const login=params=>{ return axios.post(`${host}/login`,params,{headers:{ 'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{console.log(res)})}
function PostDataByForm(url,method,data){
 return axios({
      url: url,
      method: method,
      data:data,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
}
export const login=params=>{ return PostDataByForm(`${host}/login`,'POST',params)}

export const logout=params=>{ return axios.get(`${host}/logout`).then(res=>{console.log(res)})}

export const getMenuList=()=>{return axios.get('../../static/data.json').then(res=>res.data);}

export const getWarehouseList=params=>{ return axios.get(`${host}/common/getWarehouseListByUser`,{params:params}).then(res=>res.data);}

export const getCustomerList=params=>{ return axios.get(`${host}/common/getWarehouseCustomerListByUser`,{params:params}).then(res=>res.data)}

//全仓数据监控表格
//export const queryTable=params=>{ return axios.post(`${host}/order/getOrderInfoList`,{params:params}).then(res=>res.data)}

export const queryTable=params=>{return PostDataByForm(`${host}/order/getOrderInfoList`,'POST',params)}
