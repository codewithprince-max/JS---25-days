// let a = 300
// // var c  = 400

// if (true) {
//     let a = 10;
// const b= 20;
// // var c = 30
// console.log("inner : " , a);


// }
// console.log(a);
// // console.log(b);
// // console.log(c); 


function one() {
    const username = "Prince"
    function two() {
        const website = "Youtube"
        // console.log(username);

    }
    // console.log(website);
    // two()
}


one()

if (true) {
    const username = "Prince"
    if (username === "Prince") {
        const website = " Youtube"
        // console.log(username + website);

    }
    // console.log(website); // this is not run because this is out of the scope 

}
// console.log(username);
addOne(6)
function addOne(num) { // this is work when we put decalaration abover the function and in other hand when we create function with the help of variables then we not put the declaration above the function and this is called  HOISTING
    return num + 1
}

const addTwo =  (num) => { // this  is called Expression and normally tell this is  Function this hold anything this is  very powerfull hold like : Json 
    return  num + 2
}
console.log(addTwo(4))
