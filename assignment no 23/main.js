"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//Tests for equality and inequality with strings
let fruit1 = "Apple";
let fruit2 = "Orange";
let fruit3 = "Apple";
console.log("Testing equality with strings:");
console.log(fruit1 == fruit2); //I predict false
console.log(fruit1 === fruit1); //I predict true
console.log(fruit1 === fruit3); //I predict true
console.log(fruit1 !== fruit3); //I predict false
//Tests using the lower case function
console.log("Testing with lower case:");
console.log(fruit1.toLowerCase() == "apple"); //I predict true
console.log(fruit1.toLowerCase() != "apple"); //I predict false
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 18;
let num2 = 19;
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:");
console.log(num1 < num2); //I predict true
console.log(num1 > num2); //I predict false
console.log(num1 <= num2); //I predict true
console.log(num1 >= num2); //I predict false
//Tests using "and" and "or" operators
console.log("Tests using \"and\" and \"or\" operators:");
console.log(num1 == 18 && num2 == 19); //I predict true
console.log(num1 == 19 || num2 == 18); //I predict false
//Test whether an item is in a array
console.log("Test whether an item is in a array:");
let fruits = ["Apple", "Orange", "Apple"];
console.log("Is 'Apple' in fruits?");
console.log(fruits.includes("Apple")); //I predict true
//Test whether an item is not in a array
console.log("Test whether an item is not in a array:");
console.log("Is 'Orange' in fruits?");
console.log(!fruits.includes("Orange")); //I predict false
