"use strict" // treat all js code in newer version
// not required to write as codes these days are treated in strict mode only but it is a good programming practice

//alert (5+5) // this will give an error as it works inside the browser and not inside node
// to use it inside node we have a different way to do it 

// console.log(3+4); console.log(4+5) // not a good practice as code is not readable and not future proof 
console.log(3+
33) // extremely bad practice to write code like this
// this runs because js be default avoids spaces 

// tc39.es => original ecma script js documentation

//DATATYPES IN JAVASCRIPT

// 1. PRIMITIVE DATA TYPES
let firstName= "Hitesh" // string data type
let age= 18 // number data type => range is between 2 raised to 53
let isLoggedIn= true // Boolean data type
let state; // it is undefined data type, it is a type by itself
let long= 1234n // BigInt data type usually used in trading, stock markets, big markets like FB
let temperature= null // we can assign null as well // it is an object
let last="" // it is not null since its type has been declared by using "" VERY IMPORTANT
// null => it is a standalone value, it is a representation of empty value which does not mean undefined or zero (example of temeprature not passed by server but not zero since zero is a temperature) VERY IMPORTANT
// undefined => it means we have declared a variable but we have not assigned a value to it
// symbol => used to have uniqueness of components, mostly used in reactjs

// 2. NON PRIMITIVE DATA TYPES
// objects
// arrays

// typeof operator => we can use raw strings and variables 