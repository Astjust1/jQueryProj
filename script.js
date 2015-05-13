/// <reference path="typings/jquery/jquery.d.ts"/>
$(document).ready(function(){

	for(var i = 0; i< 16;++i){	
		var id = i+1;
		$("<div id='row-"+id+"'>row "+id+"</div>").insertAfter( "#row-"+i );
		$("<div id=column-0>column0</div>").insertAfter("#row-"+i);
		
	}
	
	for(var j = 0; j < 16;++j){
		var id2 = j+1;
		$("<div id='column-"+id2+"'>column"+id2+"</div>").insertAfter("column-"+j);
	}

});
