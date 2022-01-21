const isOdd = function (num) {
  return num % 2 != 0;
}

const Three = isOdd(3);
const Eight = isOdd(8);

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
