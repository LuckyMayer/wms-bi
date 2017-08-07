import {host} from './api'

export default(param)=>{
	$.ajax({
		url: host+param.url,
		type:param.type,
		data:param.data,
		contentType: (param.contentType==undefined)?'application/json':param.contentType,
		xhrFields: {
      	  withCredentials: true
    	},
		success: function(res,data,xhr){
			param.success(res,xhr);
		},
		error: function(err){

		}
	})
}