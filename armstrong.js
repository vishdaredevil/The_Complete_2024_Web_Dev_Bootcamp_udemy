let num = Number(prompt("Enter a number:"));
function isArmstrong(n) {
let digits = n.toString().split('');
let power = digits.length;
let sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
return sum === n;
}
if (isArmstrong(num)) {
console.log(num + " is an Armstrong number.");
} else {
console.log(num + " is not an Armstrong number.");
}
