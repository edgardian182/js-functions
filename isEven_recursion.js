// Create a Function that returns TRUE or FALSE if the number passed is even or not
// It takes into account that 0 is even and 1 is odd
// Negative numbers are turned into positive ones

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

console.log(isEven(10));
console.log(isEven(77));
console.log(isEven(-2));
console.log(isEven(-19));