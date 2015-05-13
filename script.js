/// <reference path="typings/jquery/jquery.d.ts"/>
// Array of colors to change the background of the cell
var colors = ["Aqua","DodgerBlue","BlueViolet","Chartreuse","Crimson","DeepPink","Yellow"];


$(document).ready(function(){
	
	$("button").click(function () {
		newGrid();
	}),

	grid(16,16);
		
});

function grid(num1,num2){

	var start = document.getElementById("grid");
	var size = 1000/num1;
		for(var r = 0; r < num1; ++r){
			var row = start.appendChild(document.createElement("tr"));

			for(var column = 0; column < num2; ++column){
				row.appendChild(document.createElement("td"));
			};		
		};
		//put this here to reset hover setting for each new grid
	$("td").css("width",size);
	$("td").css("height",size);
	$("td").hover(function(){
	$(this).css("background-color", colors[Math.floor(Math.random()*colors.length)]);
});
};


function newGrid(){
	var rows = prompt("How many rows do you want the grid to have?");
	var columns = prompt("How many columns do you want?");
	
	var grids = document.getElementById("grid");
	while(grids.hasChildNodes()){
		grids.removeChild(grids.firstChild);
	}
	
	grid(rows,columns);
	
	
}