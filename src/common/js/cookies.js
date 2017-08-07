function SetCookie(cookie){
	var now=new Date();
	var time=now.getTime();
	var expireTime=time+3600*1000*24;
	now.setTime(expireTime);
	for(let key in cookie){
		document.cookie=key+'='+cookie[key]+';expires='+now.toGMTString()+';path=/';
	}

}

function GetCookie(cookiename){
	var cookieArr=document.cookie.split(";");
	var cookies={},currentcookie='';
	for(let i=0;i<cookieArr.length;i++){
		currentcookie=cookieArr[i];
		if(currentcookie.indexOf('=')>-1){
			cookies[currentcookie.split('=')[0]]=currentcookie.split('=')[1];
		}
	}
	if(typeof cookies[cookiename.trim()] != undefined){
		return cookies[cookiename.trim()];
	}
	else{
		return false;
	}	
}

function deleteCookie(callback) {
	var cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}

	callback && callback();
}

export {SetCookie,GetCookie,deleteCookie}
