const useremail = []
if (useremail) {
    console.log("Got user email");
    
}else{
    console.log("don't have user email  ");
    
}
// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//  truthy values 
//   "0" , 'false' , " " , [] , {} , function(){ }
if (useremail.length ===0 ) {
    console.log("Array is empty");
    
    
}
const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
    
    
}
// Nullish Coalscing Operator (??) : null undefined
let nul1;
// nul1 = 5 ?? 10
// nul1 = null ?? 10
// nul1 = undefined ?? 11
// nul1 = nul1 ?? 10 ?? 20

console.log(nul1);
// terniary operator 
// condition ? true : false
const iceteaPrice = 100
iceteaPrice >= 80 ? console.log(" less than 80 ") : console.log("greater than 80");


