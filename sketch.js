$(document).ready(function() {
	// when document loads, call createGrid() function that takes a default parameter of size 16x16
	createGrid(16, 16);
	changeColor();
	clearGrid();
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

function clearGrid() {
	$("#clear_button").click(function() {
		newGridWidth = prompt("What size for new grid?"); // asks for width of new grid. will also be height
		$(".box").css("background-color", "#FFF"); // clears grid of all color, simulates reset
		var newCSSWidth = Math.floor(850/newGridWidth); // determines new width size for .box <div>s
		$(".box").css("width", "newCSSWidth");
		createGrid(newGridWidth, newGridWidth);
	});
}
