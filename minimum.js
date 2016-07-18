// Function that returns the minimum of two numbers

function min(a, b) {
  if ((a < b) && !(isNaN(a + b)))
    return a
  else if (!isNaN(a + b))
    return b
  else
    return "You don't give me two numbers"
}

console.log(min(3,5));
console.log(min(10, 7));
console.log(min("a", 4));
console.log(min("z", "c"));
console.log(min(5, "a"));