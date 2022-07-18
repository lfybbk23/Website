// function factorial(n) {
//     let factorial = 1;

//     for(let i = 1; i <= n; i++) {
//       factorial *= i;
//     }

//     return factorial;
// }

// function factorial(n) {
//   let factorial = 1;

//   while (n > 0) {
//     factorial *= n;
//     n -= 1;
//   }

//   return factorial;

// }

function factorial(n) {
  if (n === 0) {
      return 1;
  }
  else {
    return n * (factorial(n - 1));
  }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));