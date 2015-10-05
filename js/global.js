
function ajax_request(url,type,data,callback){
	$.ajax({
	 	url: url, 
	 	type:type,
	 	data:data,
	 	success: function(result){
	        callback(result)
	    }
	});
}
function check_valid_email(){
	if($("#email").val() !==""){

		ajax_request("/auth/validEmail","POST",{   
		  "email":$("#email").val()
		},function(data){
			console.log(data)
		});
	}
	else{
		console.log("Missing Fileds")
	}
}