// Create a function that define a multiplier factor and then can access it and aply it to a different number --> Closure function

function multiplier(factor) {
  // factor could be stored as a local variable of the closure function
  // The Enclosed Function name would be the variable name where the multiplier (Closure function) is called
  return function(number) {
    return number * factor;
  }
}

var duplicate = multiplier(2);
console.log(duplicate(10));  // --> 20