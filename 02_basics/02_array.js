const marvelHeros = [ "Thor", " Hulk " ,"Ironman"]
const dcheros = [ "flash" ,"superman", "spiderman"]

const newArr = marvelHeros.concat(dcheros)
// console.log(newArr);
 const all_new_heros = [...marvelHeros, ...dcheros]
//  console.log(all_new_heros);
 
const another_array = [1,[2,3,4,[6,[7,8],[9]]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);
// console.log(Array.isArray(["Prince"]));
// console.log(Array.from("Prince"));
console.log(Array.from({name : "Prince"})); // firstly declared what will i do like : convert keys into array or string into array  

let score1 = 100
let score2 = 200 
let score3 = 300 
console.log(Array.of(score1,score2,score3));