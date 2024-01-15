const marvel_heroes=["thor", "ironman", "spiderman"]
const dc_heroes= ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes) //when we push one array into another => instead of merging the arrays, it becomes an array inside another array
// reason => since we can have mixed data types inside an array, when we pushed one array into another it took that array as a data type and it treats it as a single element
console.log(marvel_heroes)
console.log(marvel_heroes[3][1]) // we have to use nested indexing to access the elements of the array which is treated as a single object

// to merge both the arrays, use CONCAT method and hold it in a new array since it returns a new array
const all_heroes= marvel_heroes.concat(dc_heroes)
