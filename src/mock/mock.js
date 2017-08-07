import {MenuList} from './data';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
let menulist=MenuList;

export default{
	bootstrap(){
		let mock=new MockAdapter(axios);

		mock.onGet('getmenulist').reply(config=>{
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve([200,{menulist:menulist}])
				},400)
			})
		})
	}
}

