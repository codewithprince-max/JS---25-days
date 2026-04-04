let myname = "Prince   "
let myteam = " Titan   "
// console.log(myname.truelength);


 let myheros = ["thor" , "spiderman "]

 let heropower = {
    thor : "Hammer" , 
    spiderman : " sling",

    getSpiderPower : function (){
        console.log(`spidy power is ${this.spiderman}`);
        
    }

 }
 Object.prototype.Prince = function(){
    console.log(`Prince is present is all object` );
    
 }



Array.prototype.heyPrince = function (){
    console.log(`Prince is present in all Array `);
    
}
//  myheros.heyPrince()
// myheros.heyPrince() 
// heropower.heyPrince()


 // Inheritance 
 const teacher = { 
    makevideo :  true
 }
 const teachingsupport = {
    isAvaliable : false
 }
 const TAsupport =  {
    makeAssingmeknt : " js assignment", 
    fulltime : true ,
    __proto__ : teachingsupport // this is old syntax 

 }

//   modern syntaxx 
Object.setPrototypeOf (teachingsupport , teacher) 

let username = " javascript"
String.prototype.truelength = function (){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)

    
}
username.truelength()
"Prince".truelength()
"CSS ".truelength()
