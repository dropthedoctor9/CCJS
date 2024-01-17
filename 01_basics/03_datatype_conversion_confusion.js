let score= 34
// sometimes while working in backend we dont know what type of value (maybe string, maybe object, maybe number) the frontend guy has sent us, so it is advised to check the data type of the variable first
console.log(typeof score)
console.log(typeof(score)) // typeof() can be used as a method as well with the variable being  passed as a parameter

let score2= "34" // it is a string now since it is in double quotes
console.log(typeof score2)
let valueInNumber= Number(score2) // to convert into number syntax => IMPORTANT
console.log(typeof(valueInNumber)) 

let score3= "22abc" 
let valueInNumber3= Number(score3)
console.log(valueInNumber3)  //NaN // to check if the typeof() gave the right value or not
console.log(typeof valueInNumber3) // does convert into number

let score4= null
console.log(typeof score4) // object
let valueInNumber4= Number(score4)
console.log(valueInNumber4) // zero 
console.log(typeof valueInNumber4) // number 

// NOTES for conversion into number
// 1. strings get converted into NaN 
// 2. null gets converted into 0
// 3. undefined gets converted into NaN
// 4. boolean gets converted into 1 or 0 based on true and false 
// 5. type of NaN is Number => VERY IMPORTANT 

let isLoggedIn= null
console.log(typeof isLoggedIn)
let valueInBoolean= Boolean(isLoggedIn)
console.log(valueInBoolean)
console.log(typeof valueInBoolean)

// NOTES for conversion into Boolean
// 1. "" (empty string) is converted into false
// 2. strings are converted inton true
// 3. any number other than zero is converted into true
// 4. undefined is converted into false 
// 5. null is converted into false 

let someNumber = 55
let valueInString = String(someNumber)
console.log(valueInString)
console.log(typeof valueInString)
