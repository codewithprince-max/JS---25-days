const user = {

    name : "Prince",
    price : 999

    , welcomeMessage : function(){
        console.log(`${this.name} ,  welcome to my website `)
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai  ( ){
//     let username = "Prince"
//     console.log(this.username);
    

// }
// chai()
 const chai =   () => {
    let username = "Prince"
    console.log(this.username);
    

}
chai()

//   const addtwo = (num1 , num2) => {
    // return num1 + num2
// 
// }
//   const addtwo = (num1 , num2) => num1 + num2
  const addtwo = (num1 , num2) => ({username : "Prince"})


    console.log
    (addtwo(3,3))