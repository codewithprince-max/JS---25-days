console.log("Let's gooo.... ");

let userAge = 19;
let citizenship = true;
let registered = true;
if (userAge >= 18) {
    if (citizenship ) {
        if (registered ){
            console.log("they are eligible to vote")
    }else{
        console.log("you are not eligible due to registration status")
    }
}else{
    console.log("you are not eligible due to citizenship status")
}
}else{
    console.log("you are not eligible to vote")
}
