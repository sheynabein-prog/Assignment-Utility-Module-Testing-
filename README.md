# js-fizzbuzz-validator

A robust, production-ready JavaScript implementation of the classic FizzBuzz algorithm featuring strict input validation and defensive error handling.

## Features

- **Strict Type Checking**: Rejects non-number inputs automatically.
- **Boundary Validation**: Ensures the input integer is 1 or greater.
- **Standard Rules**:
  - Returns `FizzBuzz` for multiples of both 3 and 5.
  - Returns `Fizz` for multiples of 3.
  - Returns `Buzz` for multiples of 5.
  - Returns the input number if none of the above rules match.

## Usage

```javascript
const fizzBuzz = require('./fizzBuzz');

console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(3));  // "Fizz"
console.log(fizzBuzz(5));  // "Buzz"
console.log(fizzBuzz(7));  // 7
console.log(fizzBuzz(-1)); // "Invalid input"
```
