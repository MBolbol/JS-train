/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100,
	discount = false,
	discountAmount = 30,
	country = "Egypt",
	student = true;

if (discount === true) {
	price -= discountAmount;
} else if (country === "Egypt") {
	if (student === true) {
		price -= discountAmount + 20;
	} else {
		price -= discountAmount + 10;
	}
} else {
	price -= 10;
}

console.log(price);

/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
	console.log("Mr");
} else {
	console.log("Mrs");
}
// condition ? if true : if false

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);

console.log(`Hello ${result} ${theName}`);

theAge < 20
	? console.log(20)
	: theAge > 20 && theAge < 60
	? console.log("20 to 60")
	: theAge > 60
	? console.log("larger than 60")
	: console.log("unknown");
/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let thePrice = 0;

console.log(`The Price Is ${thePrice || 200}`);
console.log(`The Price Is ${thePrice ?? 200}`);
/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
	console.log(10);
} else if (a >= 10 && a <= 40) {
	console.log("10 To 40");
} else if (a > 40) {
	console.log("> 40");
} else {
	console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10
	? console.log(10)
	: a >= 10 && a <= 40
	? console.log("10 To 40")
	: a > 40
	? console.log("> 40")
	: console.log("Unknown");

let st = "Elzero Web School";

let l = 2 * st.length;
if (`${l}` === "34") {
	console.log("Good");
}

// W Position May Change
let x = st.toLowerCase().indexOf("w");
// console.log(`${x}`);
y = st.toLowerCase().charAt(x);
if (`${y}` === "w") {
	console.log("Good");
}
let z = !typeof st;
// console.log(`${z}`);
if (`${z}` !== "string") {
	console.log("Good");
}

if (`${typeof st.length}` === "number") {
	console.log("Good");
}
let n = st.slice(0, 6);
if (`${n.repeat(2)}` === "ElzeroElzero") {
	console.log("Good");
}
