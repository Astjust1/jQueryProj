/// <reference path="typings/jquery/jquery.d.ts"/>
$(document).ready(function(){

	for(var i = 0; i< 16;++i){
		$(".container").append($("<div class='container2'>bar</div>"));
	}

});
