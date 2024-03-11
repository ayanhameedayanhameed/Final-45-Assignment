/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

//step 01: astoring 5 locations in array

let places: string[] = ["Saudia", "UK", "Singapore", "Malysia", "Dubai"]

//step 02 :Print your array in its original order.

console.log("orignal order:", places)

//step 03 : Print your array in alphabetical order without modifying the actual list.

console.log("\nalphabetical order:",[...places].sort())

//STEP 04 : Show that your array is still in its original order by printing it.

 console.log(`\nshowing array is still in its orignal order:`,places)

 //step 05: Reverse the order of your list. Print the array to show that its order has changed.

 console.log("\nreverse alphabetical order:",[...places].sort().reverse())

 //step 06: Reverse the order of your list again. Print the list to show it’s back to its original order.

 console.log(`\nshowing array is still in its orignal order:`,places)

 //step 07: Reverse the order of your list. Print the array to show that its order has changed.

 places.reverse()
 console.log("\nreversed order:",places)

 //step 08: Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("\nshowing array is still in its orignal order:",places) 

//step 09 : Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

places.sort()
 console.log("\nchange to alphabetical order:",places)

//step 10 : Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed

places.sort().reverse()
 console.log("\nchange to alphabetical reverse order:",places)
