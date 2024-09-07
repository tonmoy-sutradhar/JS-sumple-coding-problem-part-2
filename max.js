let reslt1 = 90;
let reslt2 = 88;

if (reslt1 > reslt2) {
  console.log("Result 1 is big number.");
} else {
  console.log("Result 2 is a big number");
}

// --------------------------->>>>

function number(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const numbers = number(50, 80);
console.log(numbers);
