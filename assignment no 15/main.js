"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •print a new set of invitation messages, one for each person in your list.*/
//people invited for dinner
let guestName = ["Azan", "Anus", "Hanif"];
//exercise 15 solution
//informing people that we found a bigger dinner table.
guestName.forEach((guest) => {
    console.log(`Dear ${guest}, \nGreat news! We found a bigger dinner table.`);
});
//step 02:  Add one new guest to the beginning of your array.
let newGuestAtBegining = "Amber Hameeed";
guestName.unshift(newGuestAtBegining);
//onsole.log(guestName)
//step 03: Add one new guest to the middle of aray
let newGuestAtMiddle = "Abdullah";
let middleIndex = Math.floor(guestName.length / 2);
guestName.splice(middleIndex, 0, newGuestAtMiddle);
//console.log(guestName)
//step 04: Use append() to add one new guest to the end of your list.
let newGuestAtEnd = "Zakir";
guestName.push(newGuestAtEnd);
//console.log(guestName)
//print a new set of invitation messages, one for each person in your list
console.log("NEW SET OF INVITATIONS MESSAGES:");
for (let guest of guestName) {
    console.log(`Dear ${guest}, are u coming for dinner tonight.`);
}
