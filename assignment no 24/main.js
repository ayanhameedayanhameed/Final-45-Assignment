"use strict";
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.*/
//version that passes
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//version that fails (no output)
let alienColor = "yellow";
if (alienColor == "green") {
    console.log("Congratulations! You just earned 5 points.");
}
