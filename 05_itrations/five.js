const coding = [ "javascript", "pyhton" , " ruby ", "C++"]
// coding.forEach(function  (item){
// console.log(item);

// })
// coding.forEach((item) => {
//     console.log(item );
    
// })
// function printME(item) {
//     console.log(item  );
    
    
// }
// coding.forEach(printME)

// coding.forEach((index,arr,item) =>{
// console.log(index,arr,item);

// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    }
]
myCoding.forEach( (item )=> {
    console.log(item.languageName);
    
})

