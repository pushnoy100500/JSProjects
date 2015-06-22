/*
	Mars Rover
	---------------------------------------
	So it's your first day as a programmer at NASA... and naturally, they 
	have you working on the Mars rover.

	The Mars rover has limited movement and so it can only take
	a single command at a time, that is one of three commands; 
	drive straight, rotate 90 degrees left, and rotate 90 degrees right.


	THIS ONE MUST BE DONE USING JSFIDDLE SINCE PROMPT IS USED.


	Design a simple program that allows you to drive the Mars rover around
	a 5x5 grid.

	When drawing the map:
	Use X to represent the rover
	Use 0 to represent open area


	Here's a sample of what we want the interface to look like

	-- SAMPLE PROMPT --
	Mars Rover Controls
	 1. Drive
	 2. Turn 90 deg Left
	 3. Turn 90 deg Right
	 4. Quit Game

	00000
	00000
	00X00
	00000
	00000

	Rover is facing North
	-- SAMPLE PROMPT --

	If the user entered 1, the rover would drive up 1 space North and you would see this

	-- SAMPLE PROMPT --
	Mars Rover Controls
	 1. Drive
	 2. Turn 90 deg Left
	 3. Turn 90 deg Right
	 4. Quit Game

	00000
	00X00
	00000
	00000
	00000

	Rover is facing North
	-- SAMPLE PROMPT --


	== TIPS
	Make sure to implement the Quit functionality right away as it makes it easier to test.
	You'll need to loop through the grid positions and check to see if the rover is there or not!

	== BONUS
	As a bonus, make it so the rover can't go out of bounds of our 5x5 grid

	== DOUBLE BONUS
	As a double bonus, make it so the grid can be configurable to any size 20x20 or even 100x100!
*/

var controlsText = "Mars Rover Controls\n 1. Drive\n 2. Turn 90 deg Left\n 3. Turn 90 deg Right\n 4. Quit Game\n";

function drawGrid(roverMap) {
	var grid = "";
	for (var i = 0; i < roverMap.width; i++) {
		for (var j = 0; j < roverMap.height; j++) {
			if(i == roverMap.x && j == roverMap.y) {
				grid += "X"; 
			} else {
				grid += "0";
			}
		}
		grid += "\n";
	}
	return grid;
}

function Grid(height, width, x, y) {
		this.height = height;
		this.width = width;
		if(x == undefined && y == undefined) {
			this.x = Math.floor(width/2);
			this.y = Math.floor(height/2);
		} else {
			this.x = x;
			this.y = y;
		}
		this.direction = 1;
}
function driving(rowerMap, command) {
	switch(command){
		case "2": 
			if(rowerMap.direction == 1) {
				rowerMap.direction = 4;
			} else {
				rowerMap.direction -= 1;
			}			
			break;
		case "3":
			if(rowerMap.direction == 4) {
				rowerMap.direction = 1;
			} else {
				rowerMap.direction = parseInt(rowerMap.direction) + 1;
			}
			break;
		case "1":
			if(canMove(rowerMap)) {
				console.log("moving in direction" + rowerMap.direction);

				switch(rowerMap.direction){
					case 1:
						rowerMap.x = parseInt(rowerMap.x) - 1;
						break;
					case 2:
						rowerMap.y = parseInt(rowerMap.y) + 1;
						break;
					case 3:
						rowerMap.x = parseInt(rowerMap.x) + 1;
						break;
					case 4:
						rowerMap.y = parseInt(rowerMap.y) - 1;
						break;
					default:						
						break;
				}
			} else {
				alert("Rover can't move in this direction");
			}
		default:		
			break;
	}
}

function canMove(rowerMap) {
	if(rowerMap.direction == 1 && rowerMap.x == 0) {
		return false;
	} else if(rowerMap.direction == 2 && rowerMap.y == 4){
		return false;
	} else if(rowerMap.direction == 3 && rowerMap.x == 4) {
		return false;
	} else if(rowerMap.direction == 4 && rowerMap.y == 0) {
		return false;
	} else {
		return true;
	}
}
 function game() {
	var height = prompt('Please enter the height of the grid');
	var width = prompt('Please enter the width of the grid');
	var route = new Grid(height, width);	
	alert("Thank you, your grid is " + width + "x" + height + " cells");
	console.log(drawGrid(route));
		while (true) {	
			var dir;
			switch(route.direction){
				case 1:
					dir = "North";
					break;
				case 2:
					dir = "East";
				case 3:
					dir = "South";
				case 4:
					dir = "West";
				default:
					break;
			}
			var cmd = prompt(controlsText + "your Rover is heading " + dir + "\n" + drawGrid(route));
			if(cmd == 4) {
				break;
			}
		driving(route, cmd);
		console.log(route);
	}
}
game();






