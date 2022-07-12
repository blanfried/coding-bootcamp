var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e);
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
// Strict Equality is false due to type, Equality returns true
console.log(a == b);

// be and e are the same number and so are Strictly equal
console.log(b === e);

// c is actually greater than b
console.log(c > b);

// True if less than one because value is 0
console.log(d < 1);

// Use logical operators so all expressions below log to the console as true
// ! because exp2 is false
console.log(expression1 && !expression2);

// Remove ! because only exp1 is true
console.log(expression1 || expression2);
  
