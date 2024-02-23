let a = 5;
let b = 10;
let c = a + b;
const pi=3.14

console.log(c)

if (a < b) {
    console.log('a is less than b');
} else if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is equal to b');
}

// Functions Declaration

function sum(a, b) {
    console.log(a + b);
}

// Function invocation 

sum(5, 8);

// String interpolution 

console.log(`The value of a is ${a} and the value of b is ${b}`);


// Fix the number output

console.log((0.1 * 0.2222).toFixed(2));
LOG