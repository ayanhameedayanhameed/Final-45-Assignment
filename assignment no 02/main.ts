//storing a person name in a variable

let personName:string = "Ayan"

//printing a person name in lowercase

console.log("Lowercase:",personName.toLowerCase())

//printing a person name in uppercase

console.log("Uppercase:",personName.toUpperCase())

//printing a person name in  Tittlecase

console.log("Titlecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()))
