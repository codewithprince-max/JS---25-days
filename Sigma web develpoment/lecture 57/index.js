//  Question 1
// let i = 1;
// for (let i = 0; i < 100; i++) {

//     console.log(i + 1);

// }
// // Question 2
// let obj = {
//     "name": "Prince",
//     age: 13,
//     location: "hodal "
// }
// for (const key in obj) {



//     console.log(key);
// }

// // for (const key in object) {
// //     if (Object.prototype.hasOwnProperty.call(object, key)) {
// //         const element = object[key];
        
// //     }
// // }
// // Question 3 
// for (const c of "Prince") {
//     console.log(c);
    
// }
// // Question 4
// y=7;

// while (y<10) {
//     console.log(y);
//     y++;
    
// }
// Questiion5 
let i=0;
do {
console.log(i)
    i++;
} while (i<6);
// Question 6 
let obj ={
    "harry":98 ,
  "  rohan":70 , 
   " aakash":73

}
let keys = Object.keys(obj)
for (let i = 0; i < keys.length; i++) {
    let student = keys[i]
   
     console.log(student + " got " + obj[student] + " marks.");
}
// Questiion 7 
for (let student in obj) {
    
        console.log(student + " got " + obj[student] + " marks.");
    
    
}
// Question 8 
// this question is advanced for node.js but in web page is simple 
