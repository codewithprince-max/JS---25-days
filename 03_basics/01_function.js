

// function sayMyName() {
//     console.log("p");
//     console.log("r");
//     console.log("i");
//     console.log("n");
//     console.log("c");
//     console.log("e");

// }
// // sayMyName()

// function addTwoNumber(number1, number2) {
//     // let result  = number1+number2
//     // console.log( "hey my name is prince");
//     // return result;
//     return number1 + number2


// }


// const result = addTwoNumber(1, 1)
// //   console.log("result :", result);
// //   
// // function loginUserName(username= "shikha "){
// // if (!username) {
// console.log("please enter yourn name ")
// return
    
    
// }
// return `${username} just logged in  `
// }


//  console.log(loginUserName("Prince"))



function claculatecartprice(val1, val2, ...num1) {
    return num1
}
// console.log(claculatecartprice(100,200,300));

const user = {
    username: "prince",
    Price: 999

}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);

}
handleobject({
    username : "sam",
    Price : 399
})

const myNewArray  = [ 100, 200, 400 , 900]
function mySecondArray (getarray){
    return getarray[1]
}
console.log (mySecondArray(myNewArray));
