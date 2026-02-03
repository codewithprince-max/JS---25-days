
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[3]);
const Heros = ["iron", "silver", "gold"]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[2]);

// Array method 
// myArr.push(6);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(8)
// myArr.shift()
// myArr.shift()

// console.log( myArr.includes(9));
// console.log( myArr.indexOf(4));

const newArr = myArr.join()
// .join convert Array into string 
//  console.log(newArr);


// console.log(myArr);

console.log("A ", myArr);
const myN1 = myArr.slice(1, 3)

console.log(myN1);


console.log("B ", myArr);
const myN2 = myArr.splice(1, 3)
console.log(myN2);
console.log("C ", myArr);
// INterview question
// spllice method manipulate original aaray , IN ohter hand slice not manipulate original array this method manipulate whole aaray after the slice mehtod is run 