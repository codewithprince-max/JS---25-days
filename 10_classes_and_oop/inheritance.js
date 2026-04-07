class user {
    constructor(username){
        this.username = username

    }
   logMe(){
console.log(`Username is ${this.username}`);

    }
}
 class Teacher extends user {
    constructor(username ,email , password ){
    super(username )
        this.email = email 
         this.password = password

    }
    addcousre(){
        console.log(`New cousre is added by ${this.username}`);
        
    }
 }
 const chai = new Teacher ("chai" , "chai@google,com" , "1309")
 chai.logMe()
 const msalachai= new user ("Prince")
 msalachai.logMe()