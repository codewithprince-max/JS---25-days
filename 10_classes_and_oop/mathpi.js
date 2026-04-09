const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

const chai = {
  name: "ginger chai",
  price: 40,
  isAvailable: true,
  ordernow: function () {
    console.log("code fat gya ");
  },
};

 console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

Object.defineProperty(chai , 'name', {
    // writable : false  ,
    enumerable : true
})
console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
      console.log(`${key} : ${value}`);
  }

}
