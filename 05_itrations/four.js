const myObject =  { 
    js : "Javascript",
    cpp : "C++",
    py : " Python",
    rb : "Ruby"
}
for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}
const programming = [   "Javascript",
     "C++",
    " Python",
 "Ruby"]
 for (const key in programming) {
    console.log(programming[key]);
    
   
 }

 // If we want loop in Object then we use forin loop 

 const map = new Map()
map.set('IN', "India")
map.set('USA',"United state of America")
map.set('fr', "France")
map.set('IN', "India")
for (const key in map) {
   console.log(map[key]);
   
}
// for forin loop maps are not Iterable but for forof loop  they aree Iterable