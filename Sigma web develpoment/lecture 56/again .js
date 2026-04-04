console.log("This is a faulty Calculator")
let random = Math.random();
let a = prompt("enter first number");
let b = prompt("enter operation");
let c = prompt("enter second number");
let obj ={
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"**"
}
if (random > 0.1) {
    console.log(`THis is result ${a}${b}${c}`)
    alert(`This is result ${eval(`${a}${b}${c}`)}`)
}
else {
    b = obj[b]
    alert(`This is result ${eval(`${a}${b}${c}`)}`)
}