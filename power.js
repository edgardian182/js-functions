// Create a function power function

var power = function(base, exponent) {
  var ans = 1;
  for(var i = 0; i < exponent; i++)
    ans *= base;
  return ans;
}

console.log(power(2,10));