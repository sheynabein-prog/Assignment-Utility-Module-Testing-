# js-core-utils

A lightweight collection of fundamental JavaScript utility functions covering math, object creation, array lookups, and robust JSON parsing.

## Features

- **Math Operations**: Exact addition and floating-point approximate division.
- **Data Factory**: Structured user object generation with automatic timestamps.
- **Array Helpers**: Fast value presence verification in arrays.
- **Safe Parsing**: Defensively handled JSON string parsing with explicit error throwing.

## Installation

Clone the repository locally:

```bash
git clone https://github.com
```

## API Reference & Usage

### 1. Math Functions

#### `sum(a, b)`
Returns the sum of two numbers.
```javascript
const { sum } = require('./utils');
console.log(sum(5, 10)); // 15
```

#### `approximateDivision(a, b)`
Returns the result of dividing `a` by `b`.
```javascript
const { approximateDivision } = require('./utils');
console.log(approximateDivision(10, 3)); // 3.3333333333333335
```

### 2. User & Data Management

#### `createuser(name, age)`
Generates a user profile object containing an automated `createdAt` date object.
```javascript
const { createuser } = require('./utils');
const user = createuser('Alice', 28);
console.log(user); 
// { name: 'Alice', age: 28, createdAt: 2026-07-05T14:39:00.000Z }
```

### 3. Array Utilities

#### `findInArray(arr, value)`
Returns `true` if the value exists in the array, otherwise returns `false`.
```javascript
const { findInArray } = require('./utils');
console.log(findInArray(['apple', 'banana'], 'apple'));  // true
console.log(findInArray(['apple', 'banana'], 'orange')); // false
```

### 4. Error Handling & Parsing

#### `parseJSON(jsonString)`
Parses a JSON string safely. Throws an explicit error if the input is empty or invalid.
```javascript
const { parseJSON } = require('./utils');

try {
    const data = parseJSON('{"status": "success"}');
    console.log(data.status); // "success"
    
    parseJSON(''); // Throws: Error: No JSON string provided
} catch (error) {
    console.error(error.message);
}
```

