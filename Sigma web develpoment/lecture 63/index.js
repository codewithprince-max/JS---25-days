// let color = ["blue" ,"pink ", "white", "purple"]
// console.log(color);
// for (let item in color) {
//     console.log(item);

// }
// color.forEach((curElement , array , index) => {
//     console.log(`${curElement} , ${array} `);


// });
//  const myFavArr =color.map((curElement , index ,array) =>{
//     return(`${curElement} ${index}`);
// })
// console.log(myFavArr);
// numbers.forEach((curNumber) => {
//     console.log (` The value is = ${curNumber * 2}`);


// });
//  const myFavNumber = numbers.map((curElement)=>{
//   console.log (` The value is = ${curElement  * 2}`);

// })
// numbers.push('8')
// console.log(numbers);
//   numbers.pop()  ;
//   console.log(numbers);
//   numbers.unshift("9");
//   console.log(numbers);

// numbers.shift();
// console.log(numbers);

// let color = ["blue", "pink ", "white", "purple"];
// If we want to element add to last 
// color.splice(-1,0,"kela");
// color.splice(color.length ,0,"kela")

// console.log(color);
// console.log(numbers.indexOf(3));
// console.log(numbers.lastIndexOf(3));

// let months = ["jan","feb","june","march","april"]
// months.splice(months.length,0,"dec");
// console.log(months);
// const indexToUpdate = months.indexOf("march");

// months.splice(indexToUpdate,1,"March")
// console.log(months);
// months.splice(2,1)
// console.log(months);
// let value = 2
// const numbers = [1, 2, 3, 4, 5, 6, 5,  7];
// let find = numbers.filter((curElement) => {
// return curElement !== value ;
// });

// console.log(find);
// const products = [
//     {name : "Laptop", Price :1200},
//     {name : "Phone", Price :800},
//     {name : "Tablet", Price :300},
//     {name : "Smartwatch", Price :150},

// ]
// const filterProducts = products.filter((curElement) =>{
// return curElement.Price < 500;
// })
// console.log(filterProducts);


// filter unique values (important question)
// const number = [1,2,3,4,6,5,6,7,8,9]
// let uniqueValue  = number.filter((curElement,index,array) =>{
//     // console.log(index);
//     // console.log(arr.indexOf(curElement));
//     return array.indexOf(curElement) === index ;
// })
// console.log(uniqueValue);
// const numbers = [1,2,4,3,6,5,6,7,4,8,9]
// numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1;


// } )
// console.log(numbers);
 
// const numbers = [1,2,3,4,5];
// const result = numbers.map((curElement)=>{
//     if(curElement % 2===0){
//         return curElement * curElement
//     }
// }).filter((curElement)=> curElement !== undefined);
// console.log(result);

const productsPrice = [100,200,300,400,500]
let result = productsPrice.reduce((acumm,curElem)=>{
return acumm + curElem
},0);
console.log(result);
