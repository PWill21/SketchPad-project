$(document).ready(function() {
	// when document loads, call createGrid() function that takes a default parameter of size 16x16
	createGrid(16, 16);
	changeColor();
});

/************************************************************************************************
											Functions
************************************************************************************************/
function createGrid(gridWidth, gridHeight) {
	// create divs; total number of divs is gridWidth * gridHeight
	for(var i = 1; i <= (gridWidth * gridHeight); i++) {
		// select body element and add divs to it
		$("#container").append("<div class='box'></div>");
	}
}
function changeColor() {
	$(".box").mouseover(function() {
		$(this).css("background-color", "#999")
	});
}


