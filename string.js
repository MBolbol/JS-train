/*
string methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/
let theName = " Ahmed ";
let theList = [1, 2, 3, 4, 5];

console.log(theName[1]);
console.log(theName.charAt(0));
console.log(theName.length);

console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

// chain methods

console.log(theName.trim().charAt(2).toUpperCase());
/*
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let str = "Elzero Web School";

console.log(str.indexOf("Elzero"));
console.log(str.indexOf("web"));
console.log(str.indexOf("web", 8));

console.log(str.lastIndexOf("o"));
console.log(str.slice(2, 6));
console.log(str.slice(-6));

console.log(str.repeat(2));

console.log(str.split(" ", 2));
console.log(str.split("", 6));
/*  
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
 */

console.log(str.substring(2, 6));
console.log(str.substring(-10, 6));
console.log(str.substring(str.length - 6));

console.log(str.substr(0, 6));
console.log(str.substr(-5, 2));

console.log(str.includes("school"));
console.log(str.startsWith("school"));
console.log(str.startsWith("El"));
console.log(str.endsWith("ol"));
console.log(str.endsWith("z"));
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// Include This Method In Your Solution [slice, charAt]
console.log(str.charAt(2).toUpperCase() + str.slice(3, 6)); // Zero

// 8 H
console.log("h".toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(str.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(str.substr(0, 6) + str.substr(10)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(str.charAt(0).toLowerCase() + str.substring(1).toUpperCase()); // eLZERO WEB SCHOOl

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);
