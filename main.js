// variables
// Variable declaration
// (keyword | var name| = |value)
// identidiers rules >> no spaces , not start with num,no special char,case sensitive
// best names >> camelcase  myName
var user = "Ali";
var age = 20;

console.log(user);
console.log(age);
console.log(hello);

hello.innerHTML = "Hi";

/* var
---- Readclare(Yes) 
---- Access Before Declare(undefind) 
---- variable scope drama [Added to eindow](Yes)
---- Block or Function scope 

** Let
---- Readclare(No) 
---- Access Before Declare(Error) 
---- variable scope drama (No)
---- Block or Function scope 

** Const
---- Readclare (No) 
---- Access Before Declare (Error) 
---- variable scope drama (No)
---- Block or Function scope
*/

// var a = 1;
// var a = 2;

// console.log(a);

// let b = 1;
// let b = 2;

// console.log(b);

// const a = 1;
// const a = 2;

// console.log(a);

// console.log(a);
// var a = 1;

// console.log(a);
// let a = 1;

// console.log(a);
// const a = 1;

// var c = 3;
// let d = 3;
// const x = 3;

/*
    String syntax + character Escape sequences
    \ Escape + Line countinue
    \n >> new line
*/

console.log(
  'Mohamed\
"Salah"'
);
console.log("Mohamed\\ 'Salah'");
console.log('Mohamed "Salah"');
console.log("Mohamed \n'Salah'");

// Cocatenation

// let a = "We love";
// let b = "Javascript";

// document.write(a + " " + b);

// template literals  (strings)

// let c = "and";
// let d = "programming";

// console.log(a + " " + b + "\n" + c + " " + d);

// console.log(`${a} ${b} ""
// ${c} ${d}`);

// let title = "elzero";
// let desc = "web school";

// let markup = `
//   <div class = 'card'>
//     <div class = 'child'>
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markup);

let theTitle = "Elzero",
  theDesc = "Elzero Web School",
  theDate = "25/10";

let markup = `
  <div class = 'card'>
      <h3>Hello ${theTitle}</h3>
      <p>${theDesc}</p>
      <span>${theDate}</span>
  </div>
`;

document.write(markup.repeat(4));
