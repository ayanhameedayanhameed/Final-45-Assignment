//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let  names: string[] = ["Ayan", "Azan", "Anus", "Saad"];

 //loop through each name in the array

 for (let name of names)
 {
    //printing a personalize message for each
    console.log(`good Morning, ${name} I hope you are doing well.`)
 }