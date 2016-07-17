//Function power that that works with optional arguments
//Aditional arguments in a function are ignored and the left ones are pass as undefined => Allows us to pass an Optional Argument with a determined default value

function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var i = 0; i < exponent; i++)
    result *= base;
  return result;
}

console.log(power(2));
console.log(power(2,4));