/// <reference path="typings/jquery/jquery.d.ts"/>
$(document).ready(function(){

	for(var i = 0; i< 16;++i){
		$(".container").append($("<div class='container2'></div>"));
		for(var j = 0; j < 16;++i){
			$(".container2").append($("div class='container3'></div>"));
		}
	}

});
