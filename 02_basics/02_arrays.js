const marvel_heroes=["thor", "ironman", "spiderman"]
const dc_heroes= ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes) //when we push one array into another => instead of merging the arrays, it becomes an array inside another array
// reason => since we can have mixed data types inside an array, when we pushed one array into another it took that array as a data type and it treats it as a single element
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1]) // we have to use nested indexing to access the elements of the array which is treated as a single object

// to merge both the arrays, use CONCAT method and hold it in a new array since it returns a new array => important
const all_heroes= marvel_heroes.concat(dc_heroes)
//console.log(all_heroes)

//SPREAD OPEATOR
// => people don't use concat in modern technique rather use, SPREAD OPERATOR
// it is like a glass, which when dropped spreads into pieces => it is not an array anymore, it's elements are now individual in nature

const newAllHeroes= [...marvel_heroes, ...dc_heroes]
console.log(newAllHeroes)

const anotherArray= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const newAnotherArray= anotherArray.flat(Infinity) // here flat() returns a new array without the nested part; in flat() we have to give the depth ie, how many nested arrays we have to open up and to avoid this confusion use infinity as depth.
console.log(newAnotherArray)

// sometimes while data scrapping, data comes in nodelist, strings, objects but we want in array format so that we can LOOP THROUGH IT
//to do this we use
//1 =>
console.log(Array.isArray("Hitesh")) // to ask if data is in array or not
console.log(Array.from("Hitesh")) // from() => to convert data of any kind into array 
// if we had used of() in this case it would have returned an array with a single element named Htesh instead of keeping each letter as an individual element

console.log(Array.from({firstName: "Hitesh"})) // result is an empty array because it cannot convert as we have to say explicitly as to what we have to convert, ie, array of KEYS or array of VALUES

let score1= 100
let score2= 200
let score3= 300
// we have to convert multiple variables into array
console.log(Array.of(score1, score2, score3)) // of() converts elements which can be variables, arrays, etc but not separating the digits as individual elements
//  IMPORTANT => in case of variables from() won't work it works for strings only AFAIK