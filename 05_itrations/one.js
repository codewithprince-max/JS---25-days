// for 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element ==6) {
        // console.log("6 in detected");
    }

    // console.log(element);
  
}
for (let i = 0; i <10; i++) {
    // console.log(`outer loop values : ${i}`);
    
    for (let j = 1; j < 10; j++) {
// console.log(`inner loop value : ${j} and inner loop value : ${i}`);
// console.log(i + `*`+ j + `= ` + i*j);


        
        
    }
    
    
}
const myArray = [ "blue" , "red", "white"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}
// for (let index = 0; index <= 20; index++) {
//     if (index == 6) {
//         console.log("value is detected");
//          break
        
        
//     }
//   console.log(`the value of i is : ${index}`);
  
    
// }
for (let index = 0; index <= 20; index++) {
    if (index == 6) {
        console.log("value is detected");
         continue
        
        
    }
  console.log(`the value of i is : ${index}`);
  
    
}