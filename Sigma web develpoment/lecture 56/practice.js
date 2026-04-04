//  Question 1 
let obj = 10;
if (obj>=10&& obj<= 20) {
console.log("You are eligible.")    
}
else{
console.log("You are not eligible.")
}
// Question 2
let x = "1";
switch(x){
    case"poco":
    console.log( "x is an poco" );
    break;
    case "apple":
        console.log("x is an apple" );
        break;
        case "Iqoo":
        console.log("x is an iqoo" );
        break;case "realme":
        console.log("x is an realme" );
        break;
        default:
            console.log("x is an something else.....")
}
//  Question 3 
let num = 6;
if (num %2=== 0 && num % 3=== 0) {
    console.log("yes, it divisible by 2 or 3")
    
}
else{
    console.log("not divisible by 2 or 3")
}
// Question 4 
let div = 9;
if (div %2=== 0 || div % 3=== 0) {
    console.log("yes, it divisible by 2 or 3")
    
}
else{
    console.log("not divisible by 2 or 3")
}
//  Quetion 5  
let d = 17;

let i =  d>=18  ? ("you can drive "): ("you can not drive ")
console.log(i);