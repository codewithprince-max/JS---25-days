// for of 
// [""."",""]
//[{},{},{}]

const arr = [ 1,2,3,4,5,6]
for (const num of arr) {
    // console.log(`the value of array is ${num}`);
    
    
}
// If we want to use loop for  Array then we use for of loop 
const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet === " ") {
        continue
        
    }
    // console.log(`the  value is ${greet}`);
    
}
// Maps 
const map = new Map()
map.set('IN', "India")
map.set('USA',"United state of America")
map.set('fr', "France")
map.set('IN', "India")

// console.log(map);
for (const [key , value] of map) {
    console.log(key , ': - ', value);
    
}
const myObject = { 
    game1 : " BGMI"
    , game2 : "LUDO"
}
for (const [key,value] of myObject) {
    console.log(key ,":", value);
    
    
}
