//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
if( n <= 0) {
  throw Error('Only positive numbers are allowed')
}

for (var i = 0;; i++){
  if (n !== 1 && n % 2 == 0){
    n /= 2;
  } else if (n !== 1) {
    n = 3*n + 1;
  } else {
    break;
  }
} return i;

};
console.log(steps(1));
console.log(steps(16));
