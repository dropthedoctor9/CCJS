const firstName= "Hitesh" // behind the scenes this also invokes an object
const repoCount= 50

// console.log(firstName+ repoCount+ " Value"); // this is an old way of writing strings since to concatinate we use plus and comma and also write raw strings using ""
// in  modern times, to write strings we use backticks, and by using backticks we have string interpolation which gives us placeholders and we can inject variables(strings, numbers, etc) where-ever we can. important => we can also use methods in placeholders which is an advantage

console.log(`Hello my name is ${firstName[0]} and my repo count is ${repoCount}`)// we can access key value pair here also 

const gameName= new String("poulentspacegiggle") // this is another way of declaring strings, in this case we use a new keyword and hence we use objects in JavaScript and inside the construtor we write its name/ initialise the string
//when we write like this on console in a browser, we get key value pairs of the string, but string is an object here and not an array and we also get the prototype and the length property
console.log(gameName)
console.log(gameName[0]) // we are accessing its keys

console.log(gameName.__proto__) // this is just a syntax to access prototype, here in Node the result will come empty object/method but in console we will get all methods
// inside prototype we have methods/functions

console.log(firstName.length) // length property
console.log(gameName.toLowerCase()) // remember the original value has not been changed for refernce see the heap and stack video
console.log(gameName.charAt(2))
console.log(gameName.indexOf("p")) // we can give in single as well as double quotes

const anotherString= "      Hitesh      "
console.log(anotherString.trim()) // used to remove whitespaces and new line
console.log(anotherString)

const url="https://hitesh.com/hitesh%20chaudhury"
console.log(url.replace("%20", "-"))
