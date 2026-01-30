// Primitve 
// 7 types : String , Number , Boolean , Symbol , Null , Undefined , BigInt
const score = 200 ;
console.log(typeof score);

const scoreValue = 200.5 ; 
console.log(typeof scoreValue );

const isLoggedIn = false; 
console.log(typeof  isLoggedIn);

const outsideTemp = null;
//  Always the typeof of a null is a object 
let userEmail; 
 console.log(typeof userEmail );
 
const Id = Symbol('122');
console.log(typeof Id );

const anotherId = Symbol('122');
console.log(typeof anotherId );

// console.log(Id ===anotherId);

const bigNumber = 12345653222n
console.log(typeof bigNumber);


//  Refrence ( Non-Primitve )
//  Array , Object , Function

const heros = ("Ironman" , "Thanos" , "loki");
let  myobj ={
    name : "Prince ",
    age  :100
}
console.log(typeof heros);

const myFunction = function(){
    // console.log("Hello world");
    
}

console.log(typeof myFunction);




//**************************************************** 

// stack (Primitive) , Heap (Non-Primitve) 
//when we use stack (Primtive) then only copy of variable is recive 
//when we use heap (Non-Primitve) then original reference in reiceve 

let youtubeName = "Princeaggarwal"
let antoherYoutubeName = youtubeName;

antoherYoutubeName = "SHikhaaggarwal"
console.log(antoherYoutubeName);
console.log(youtubeName)

//when we use stack (Primtive) then only copy of variable is recive 



let userOne =  {
    email : "user@google.com",
    upi : "user@ybl",

}
 
let userTwo = userOne


userTwo.email = "Prince@google.com"
console.log(userTwo);
console.log(userOne);
//when we use heap (Non-Primitve) then original reference in reiceve 
