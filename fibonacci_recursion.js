// Recursive Fibonacci Function
// fn = fn-1 + fn-2
// f0 = 1
// f1 = 1

// La sucesión Fibonacci es una secuencia infinita de números naturales. Los primeros son: 1 1 2 3 5 8 13 21 34 55 89 .... La secuencia comienza con 1 y 1

function fibonacci(n) {
  if (n == 0)
    return 1;
  else if (n == 1)
    return 1;
  else
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(4)); // --> 5
console.log(fibonacci(5)); // --> 8
console.log(fibonacci(10)); // --> 89
