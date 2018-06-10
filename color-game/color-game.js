var numSquares = 6;
var colors = generateColorArray(numSquares);
var pickedColor = pickColor(); //color to select
var displayColor = document.querySelector("#correct"); //showing selected color
var squares = document.querySelectorAll(".squares");  //selecting all squares
var messageDisplay = document.querySelector("#message"); //selecting message
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
displayColor.textContent = pickedColor;
var gameWon = false;
var gameHard = true;

easy.addEventListener("click",function(){
	if(gameHard === true){
		numSquares = 3;
		resetGame(numSquares);
		for (var i = 3; i < squares.length; i++) {
		squares[i].style.backgroundColor = "#232323";
		}
		gameHard = false;
		easy.classList.add("selected");
		hard.classList.remove("selected");
	}
});

hard.addEventListener("click",function(){
	if(gameHard === false){
		numSquares = 6;
		resetGame(numSquares);
		gameHard = true;
		hard.classList.add("selected");
		easy.classList.remove("selected");
	}
});

reset.addEventListener("click", function(){
	if(gameHard === true){
		resetGame(6)
	}
	else{
		resetGame(3)
	}
// colors = generateColorArray(numSquares);
// h1.style.backgroundColor = "rgb(0,180,250)";
// messageDisplay.textContent = "";
// if (gameWon === true){
// 	reset.textContent = "New Colors";
// 	gameWon = false;
// }
// for (var i = 0; i < numSquares; i++) {
// 	squares[i].style.backgroundColor = colors[i];
// 	}
// 	pickedColor = pickColor();
// 	displayColor.textContent = pickedColor;
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function (){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?";
			gameWon = true;
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else if (clickedColor === "rgb(35, 35, 35)"){
			// messageDisplay.textContent = messageDisplay.textContent;
		}
		else {
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColors(color){
	if (gameHard === true){
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
		}
	}
	else {
		for (var i = 0; i<3; i++) {
			squares[i].style.backgroundColor = color;
	}
}
}
//function to select winning color from color array
function pickColor(){
	var indexNum = Math.floor(Math.random() * colors.length);
	var randomColor = colors[indexNum];
	return randomColor;
}

function generateColorArray(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor(){
		rgb = [];
		for (var i = 0; i < 3; i++) {

			var randNum = Math.floor(Math.random() * 256);
			// while (randNum > 255 || randNum < 0){
			// randNum =Math.floor(Math.random()*256);
			// }
		rgb[i] = randNum;
	}
	return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] +")"
}

function resetGame(num){
	colors = generateColorArray(num);
	h1.style.backgroundColor = "rgb(100,93,227)";
	messageDisplay.textContent = "";
	if (gameWon === true){
		reset.textContent = "New Colors";
		gameWon = false;
	}
	for (var i = 0; i < num; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
}