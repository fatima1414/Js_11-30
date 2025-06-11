//  4  WAY of function (UDF)

// 1) SIMPLE FUNCTION
show();
function show() {
  console.log("simple function");
}

//   4) Immediate Invoke Function Expression(IIFE || efi)
(() => {
  console.log("IIFE Function");

})()

// 2) Annonymous Function
var show2 = function () {
  console.log("annonymous function");
};
show2();

// 3) ARROW Function
const show3 = () => {
  console.log("arrow function");
};
show3();


// FUNCTION CONCEPT
function add(a, b) {
  console.log(`addition of ${a} & ${b} = ${a + b}`);
}
add(5, 6)
add(7, 1)


// Without parameter
function addi() {
  var a = 40;
  var b = 55;
  console.log("addition =", (a + b));
}
addi(5, 6)
addi(7, 1)

// with parameter
function sum(c, d) {
  console.log("addition =", (c + d));
}
sum(4, 5)
sum(4, 5)

// with return argument
function calc(e, f) {
  return e + f
}
console.log("addition =", calc(45, 4));
const output = calc(2, 3)
console.log("sum =", output);
