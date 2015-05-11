/// <reference path="typings/jquery/jquery.d.ts"/>
$(document).ready(function(){

	for(var i = 0; i< 16;++i){
				
		var id = i+1;
		
		$("<div id='grid-"+id+"'>row1 "+id+"</div>").insertAfter( "#grid-"+i );
	}

});
