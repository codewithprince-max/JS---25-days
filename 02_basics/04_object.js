// const tinderUser = new Object()
const tinderUser = {}
tinderUser.email = "prince@gmail.com"
tinderUser.name = "Prince"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {

    email: "some@gmail.com",
    location :
{
     userFullname : {
        firstName: "Prince",
        lastName : " Aggarwal"
    }
}
    }


// console.log(regularUser.email.userFullname.firstName);
const obj1 = {1 : "a" , 2: "b"}
const obj2 = {1 : "a" , 2: "b"}
// const obj3 = {obj1 ,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        Id : 1 , 
        email : "gmail.com"
    },
    {
        Id : 1 , 
        email : "gmail.com"
    },
    {
        Id : 1 , 
        email : "gmail.com"
    },
    {
        Id : 1 , 
        email : "gmail.com"
    },
    {
        Id : 1 , 
        email : "gmail.com"
    },
    
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('sLoggedIn'));

// &&&&&&&&&&&&&&&&&&&&& De-structure and APi &&&&&&&&&&&&&&&

const course = {
courseName : "js in hindi ",
Price : "999",
courseInstructor : "Harry"
}
// course.courseInstructor
const {courseInstructor : Instructor } = course
console.log(Instructor );
 {
    // this is JSON format all api run this format
 }
 [
    {},
    {}
 ]