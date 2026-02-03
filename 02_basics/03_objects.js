// Interview questio
//Singleton - If we  declared as a literals then singleton not form 
// when we declared as a constructor then singleton is formed


// object literals 
const mysym = Symbol('Key1')
const JSuser = {
    name: "Prince",
    email: "prince@google.com",
    age: 30,
    location: "Banglore",
    isLoggedIn: true,
    lastLoggedIn: ["Monday ", " Wednesday "],
    "full name" : "Prince AGGarwal ",
    [mysym]: "Key1"
    //Interview Question =>
    // IN the case of Symbol and string when we print take dot(.) the output is not come In  this  two case square bracket[] , is use when we print the output

}
// console.log(JSuser.email);
// console.log(JSuser["full name"]);
// console.log(JSuser[mysym]);


JSuser.email = "prince@microsoft.com"
// Object.freeze(JSuser)
// console.log(JSuser);

JSuser.Greeting = function(){
    console.log("Hello JS user");
    
}
JSuser.GreetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
    
}
console.log(JSuser.GreetingTwo());
console.log(JSuser.Greeting());


