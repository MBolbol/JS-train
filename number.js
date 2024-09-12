// Arthematic operators

console.log(10 + 30);
console.log(10 + "a");
console.log(10 - 30);
console.log(10 - "a"); //NaN

console.log(2 ** 4); // exp
console.log(10 / 2);
console.log(10 % 2); //modulus
console.log(11 % 2);

// Increment & Decremernt
// [post >> a++ (print then increment or decrement)
// [pre] >> ++a (increment or decrement then print)

// + unary plus [return num if not number]
// - unary negation [return num if not number + negates it]

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"mo");
console.log(+"15.3");
console.log(+0xff);
console.log(+null);
console.log(+true);
console.log(+false);

console.log(-"100");
console.log(-"-100");
console.log(-"mo");
console.log(-0xff);
console.log(-null);
console.log(-true);
console.log(-false);

console.log(Number("100"));

/*
    type coercion (type casting)
    +
    -
    "" - 2
    false - true
*/

let x = "10",
  y = 20,
  z = true;

console.log(x + y);
console.log(+x + y);
console.log(+x + y + z);

console.log(x - y);

console.log("" - 2);

// assignment opertor

y = y + 30;

y += 10;
y -= 20;
y /= 10;

console.log(y);

// num
/*
    Double precision
    syntactic sugar "_"
    e 
    bigint
*/
console.log(1_000_000);
console.log(1e6);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
/*
    number method
*/
console.log((100).toString()); //console.log(100..toString());
console.log((100.6666).toFixed(2));
console.log(parseInt("100 bolbol"));
console.log(parseInt("aaa 100 bolbol"));
console.log(parseFloat("100.33 bolbol"));

console.log(Number.isInteger("100 bolbol"));
console.log(Number.isInteger(100));

console.log(Number.isNaN("100 bolbol"));
console.log(Number.isNaN(100 / "bolbol"));

/*
math object
*/
console.log(Math.round(99.2));
console.log(Math.round(99.6));
console.log(Math.ceil(99.2)); //to above
console.log(Math.floor(99.9)); //to lower

console.log(Math.min(10, 20, 30, 40, 50));
console.log(Math.max(10, 20, 30, 40, 50));

console.log(Math.pow(10, 3));
console.log(Math.random());
console.log(Math.trunc(99.5)); //return integer part

console.log(-Number.MIN_SAFE_INTEGER); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //16

let f = 100;
let g = 2_00.5;
let h = 1e2;
let j = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(f, g, h, j)));
console.log(f ** Math.trunc(j)); // 10000

// Get Integer "2" From j Variable With 4 Methods
console.log(Math.trunc(j));
console.log(Math.floor(j));
console.log(Math.round(j));
console.log(j.toFixed());

// Use Variables g + j To Get This Valus
console.log((Math.floor(g) / Math.ceil(j)).toFixed(2).toString()); // 66.67 => String
// console.log(); // 67 => Number
console.log((Math.floor(g) / Math.ceil(j)).toFixed());
