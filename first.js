// document.querySelector('h1').style.color= 'Blue';

window.onload = function () {
  document.querySelector("h2").style.color = "red";
};

// output to screen
// window.alert()
// document.write()
// console.log()

// window.alert('Hello from js file');

document.write("<h1>Hello <span>Page</span></h1>");

// console methods
// log
// error
// table
// web API (appliction programming interface)
// styling console
// Directive %c

console.log(
  "%cHello from %cjs file",
  "color: red; font-size:40px",
  "color: green; font-size:40px"
);
console.error("error");
console.table(["Ahmed", "Abdo", "Mostafa"]);

// ECMAScript (ES6)

var myName = "Mostafa";
console.log("Hello " + myName);
console.log(`Hello ${myName}`);

// Data types
// string
// number
// array => (object)
// object
// Boolean
// undefined
console.log(typeof "Bolbol");
console.log(typeof 5000);
console.log(typeof 100.2); //number
console.log(typeof [50, 30, 15, 10]);
console.log(typeof { name: "Mostafa", age: 25, country: "Egypt" });
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
