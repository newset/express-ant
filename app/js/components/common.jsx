// import '../less/style.less';
import {ReduceStore} from 'flux/utils';

class UserStore extends ReduceStore<number> {
	getInitialState(): Object {
		// 获取当前用户状态

		return {

		};
	}

	reduce(state: number, action: Object): Object {
		switch (action.type) {
			case 'login':
				return state + 1;

			case 'logout':
				return state * state;
			default:
				return state;
		}
	}
}

var app = {
	url : 'http://n.bloo.com/',
	init : function(){
        $.ajaxPrefilter(function(options, originalOptions, xhr) { // this will run before each request
	        var token = $('meta[name="csrf-token"]').attr('content'); // or _token, whichever you are using

	        if (token) {
	            return xhr.setRequestHeader('X-CSRF-TOKEN', token); // adds directly to the XmlHttpRequest Object
	        }
	    });
	},
	login : function(data){
		Backbone.ajax({
		    dataType: "json",
		    url: this.url + 'auth/login',
		    data: data,
		    method: 'post',
		    success: function(res){ 
		    	if (res) {
		    		location.reload();
		    	};
		    }
		});
	}
}

export default app;