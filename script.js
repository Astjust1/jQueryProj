/// <reference path="typings/jquery/jquery.d.ts"/>
$(document).ready(function(){

	grid(16,16);

});

function grid(num1,num2){

	var start = document.getElementById("grid");


		for(var r = 0; r < num1; ++r){
			var row = start.appendChild(document.createElement("tr"));

			for(var column = 0; column < num2; ++column){
				row.appendChild(document.createElement("td"));
			}			
		}
}


$("td").hover(function(){
	$(this).css("color", "red")
});
