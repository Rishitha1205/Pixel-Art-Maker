const pickSize = document.getElementById('sizePicker');
const submitType = pickSize[2];

function makeGrid() {
	// Dimensions of the grid
	let gridWidth = pickSize.elements['width'].value;
	let gridHeight = pickSize.elements['height'].value;
	let pixelTable = document.getElementById('pixelCanvas');
	// clearing of grid if its already present
	while (pixelTable.firstChild) {
		pixelTable.removeChild(pixelTable.firstChild);
	}
	// Creates rows and cells
	for (let row = 1; row <= gridHeight; row++) {
		let newRow = document.createElement("tr");
		newRow.id = "row" + row;
		pixelTable.appendChild(newRow);
		let getRow = document.getElementById("row" + row);
		for (let cell = 1; cell <= gridWidth; cell++) {
			let newCell = document.createElement("td");
			getRow.appendChild(newCell);
			// Adds color to the cell if you click on it 
			newCell.addEventListener("click", function(event) {
				let pickColor = document.getElementById('colorPicker').value;
				event.target.style.backgroundColor = pickColor;
			})
		}
	}
}
//Prevents default action and calls makeGrid function when ever submit is clicked
submitType.addEventListener("click", function(event) {
	event.preventDefault();
	makeGrid();
})

