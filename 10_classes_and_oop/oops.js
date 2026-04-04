const user =  { 
    username : " Prince" , 
    loginCount : 9 , 
    signedIn : true ,
    getUserDetails : function(){ 
        // console.log("get  user details ");
        // console.log(`username =  ${this.username}`);
        // console.log(this);
        
        
        
    }



}
// console.log(user.getUserDetails())
function User ( username , IsloggedIn  ,loginCount){
    this.username = username ;
    this.IsloggedIn = IsloggedIn;
    this.loginCount = loginCount;
    
}
const userONe = new User("Prince" , true , 12)
const userTwo = new User("Prince" , false , 2)
console.log(userONe);
console.log(userTwo);

