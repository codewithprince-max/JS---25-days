const myNumbers = [ 1,2,3,4,5,6,7,8,9,10 ]
// const nums = myNumbers.map((arr)=>  {return arr + 10}  )
// console.log(nums);
//  const nums = []
//  myNumbers.forEach((num) => { // 👉 forEach() kuch return nahi karta
//     nums.push(num + 20)

// })
// console.log(nums);
// this is called chaining in maps() 
const nums = myNumbers
.map((num )=> num *10)
.map((num)=> num +2)
.filter((num )=> num>=50)
console.log(nums);










