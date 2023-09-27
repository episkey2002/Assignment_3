let num1 = 10;
let num2 = 20;
let num3 = 15;

let bigRelational = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

let bigLogical;
if (num1 >= num2 && num1 >= num3) {
  bigLogical = num1;
} else if (num2 >= num1 && num2 >= num3) {
  bigLogical = num2;
} else {
  bigLogical = num3;
}

console.log(`Using Relational Operators: The greatest number is ${bigRelational}`);
console.log(`Using Logical Operators: The greatest number is ${bigLogical}`);