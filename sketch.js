$(document).ready(function() {
	// when document loads, call createGrid() function that takes a default parameter of size 16x16
	createGrid(16, 16);
	changeColor();
	removeGrid();
	makeNewGrid();
});

/************************************************************************************************
											Functions
************************************************************************************************/
function createGrid(grid_width, grid_height) {
	// create divs; total number of divs is grid_width * grid_height
	for(var i = 1; i <= (grid_width * grid_height); i++) {
		// select body element and add divs to it
		$("#container").append("<div class='box'></div>");
	}
}
function changeColor() {
	$(".box").mouseover(function() {
		$(this).css("background-color", "#999")
	});
}

function removeGrid() {
	$("#clear_button").click(function () {
		$(".box").remove();
	});
}

function makeNewGrid() {
 	$("#make_new").click(function() {
 		var new_size = prompt("What is the new size?");
 		for(var i =1; i <= (new_size * new_size); i++) {
 			$("#container").append("<div class='box'></div>");
 		}
 		var new_box_width = Math.floor((850/new_size) - 2); /*calculates the size of each box based on width of <body> (850px). -2 accounts for size of border around each .box (1px). */
 		var new_box_height = new_box_width;
 		$(".box").css("width", new_box_width);
 		$(".box").css("height", new_box_height); /* assures that each new .box is in fact a perfect square */
 		changeColor();
 	});
}

