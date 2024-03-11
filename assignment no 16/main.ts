/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guestName: string[] = ['Amber Hameeed', 'Azan', 'Abdullah', 'Anus', 'Hanif', 'Zakir']

//Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("Unfortunately, I can invite only two people for dinner.")

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guestName.length> 2)
{
    let removeGuest = guestName.pop()
    console.log(`Sorry Dear ${removeGuest}, i cant invite you for dinner.`)
}

// Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let guest of guestName)
{
console.log(`hello ${guest} , you are still invited for dinner.`)
}

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guestName.pop()
guestName.pop()

//print empty list at the end of your program

console.log(`guest list after dinner :`, guestName)

