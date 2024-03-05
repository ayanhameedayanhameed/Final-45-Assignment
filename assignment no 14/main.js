/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
//people invite for dinner
var guestName = ["Azan", "Anus", "Saad"];
//invitation message to each person
guestName.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n you are cordinally invited to dinner. It would be an honour to have you join us.\n sincerely,\nAyan"));
});
//prnting the name of guest who is not coming
var guestWhoIsNotComing = guestName[2];
console.log("\nunfortunatley , ".concat(guestWhoIsNotComing, " can't able to come."));
//replace the guest who is not able to come with a new person
guestName[2] = "MUhammad Hanif";
// second set of invitation messages
console.log("second set of invitation messages:");
guestName.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n you are cordinally invited to dinner. It would be an honour to have you join us.\n sincerely,\nAyan"));
});
