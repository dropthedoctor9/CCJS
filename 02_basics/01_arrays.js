// () => paranthesis
// [] => brackets
// {} => braces

// array is always an object
// it is a single variable which stores multiple values which may or may not be of the same data type

// arrays in javascript is resizable => important (check this concept again)
// an array inside another array is also possible 
// arrays have zero indexing that means first element always is at 0th position and so on 
// arrays are accessed by myArray[0] and cannot be accessed using arbitary elements like myArray["one"] => that is they are not associative in nature (see the meaning of associative array here to get things more clear)

// in javascript while performing array copy operations it creates something known as SHALLOW COPIES and not DEEP COPIES

// SHALLOW COPIES => shallow copy of an object is a copy whose properties share the same reference point as the source object as well => when you make changes to one copy the other copy will alsonbe affected as well ( refer the stack memory and heap memory video for better refernce)

const myArray= [0,1,2,3,4,5] // here 0,1,2,3,4,5 => called elements
// can be of any data type be it strings, numbers or even mixed data type including boolean values
//console.log(myArray)

// another way of declaring arrays in shown below
const myArray2= new Array (1,2,3,4,5) // no square brackets simply pass the values in paranthesis 
//console.log(myArray2) // does not show results like string in thid case tho 

// ARRAY METHODS

myArray.push(6,7,8) // to add elements to the array end of the array unlike unshift which adds to the beginning of the array
//console.log(myArray)

myArray.pop() // no arguements passed, pop only removes the last element of an array
//console.log(myArray) 

myArray.unshift(100)// prefixes an element to the beginning of the array which is not ideal because it will shift the indexes of all other elements as well which will put a lot of load on the system
// console.log(myArray) 

myArray.shift() // no atguement is passed => removes the first element of the array contray to the poop() which removed the last element of the array

myArray.indexOf(55) // both in strings and array whenever the value doesn't exist the output is -1

const hahaArray= myArray // copying one array to another 
// console.log(hahaArray) // the array will be the same as the source array

const hahaArray2 = myArray.join() // here it copies the array but it changes it data type into string
//console.log(typeof(hahaArray2)) // the output is string

myTodoArray = [10,11,12,13,14,15,16,17,18,19,20]
console.log(myTodoArray.slice(0,4)) // returns the part of the array whose index have been given  in array format and DOES NOT CHANGE THE ORIGINAL ARRAY
console.log(myTodoArray)

console.log(myTodoArray.splice(0,4)) // returns the part of an array whose index have been given in array fromat and CHANGES THE ORIGINAL ARRAY
console.log(myTodoArray)