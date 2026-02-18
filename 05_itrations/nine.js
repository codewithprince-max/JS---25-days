const myNums = [1 ,2 , 3]
//  const myTotal = myNums.reduce( function (acc,currval) {
//     console.log(`acc ${acc} and currval ${currval}`);
    
//     return acc + currval
    
// },0)
// console.log(myTotal);
// const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)
// console.log(myTotal);

const shoppingCard = [
    {
        course : "js course",
        price : 2999
    },
    {
        course : "py course",
        price : 999
    },
    {
        course : "web dev course",
        price : 1999
    },
    {
        course : "mobile course",
        price : 1999
    }
]
 const myTotal= shoppingCard.reduce((acc,item) => acc+item.price,0)
console.log(myTotal)