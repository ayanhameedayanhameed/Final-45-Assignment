//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

import { title } from "process";

const book : {title: string; author: string; yearPublished: number} = {
    title: "Tulip in the desert",
    author: "Allama Iqbal",
    yearPublished: 1962
}

console.log(`Book info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);