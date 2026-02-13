// Immediatetly Invoked function Expression (IIFE)

(function bottle(name) {
    //  This is called Name IIFE
    console.log(`Glass bottle ${name}`);


})
    (`Prince`);
(
    () => {
        //  This is called without Name IIFE Or use arrow function in IIFE
        console.log(`global Library`);

    }
)();
(function  Announcement (exam ){
console.log(`IN April ${exam} are held`);

})(`Mid-sem exam `)