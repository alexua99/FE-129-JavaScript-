// Примітивні типи данних
let num = 99
let str = "Sasha"
let bool = true

let nu = null // Коли взагалі нічого немає
let und = undefined // Коли змінна є але там нічого немає
let a;

// = :Присвоення
// == :Порівнювання
// === :Порівнювання по типу данних

// a > b :Більше
// a < b :Меньше

//
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(18 < 22));

console.log(43 + " " + typeof 43.2)
console.log(43 + " " + typeof "43")

console.log(2 + 2);
console.log(2 + "2");
console.log(2 + 2 - "ctyjty2");


// Декілька методів строк
console.log(str.toLocaleLowerCase());
https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    console.log(str.includes("Sa")) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


// Не примітивний тип данних    

let obj = {
    img: '/phone.png',
    name: "iphone",
    price: 1300,
    model: '15 pro max'
}

let arr = [1, 23, 4, 5]

console.log(typeof arr);


// try {
//     console.log("Sasha test try")
// } catch (err) {
//     console.log(err);
// }