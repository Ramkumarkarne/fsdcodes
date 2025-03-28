// Array Destructuring
const arr = [1, 2, 34, 8];

const [first, second, third] = arr;
console.log(first); // Output: 1

// Object Destructuring
const obj = {
    employee: "Ram",
    employeeId: 1,
    employeeSalary: 5000,
    address: "Kodad"
};

const { employee, employeeId, employeeSalary, address } = obj;
console.log(employeeId); // Output: 1

// Spread Operator with Arrays
const arr2 = ["Hello", 2, 3, 4, 5];
const [firstString, ...remaining] = arr2;

console.log(firstString); // Output: "Hello"
console.log(remaining);   // Output: [2, 3, 4, 5]

// Rest Parameter in Function
function displayNames(...names) {
    console.log('The names are:', names);
}
displayNames("Ram", "Charan", "Prathas", "Tr.NTR", "Maheshbabu");

// Array Assignment and Reference
const arr3 = ["a", "b", "c"];
const arrCopy = [...arr3]; // Create a copy instead of reference

arr3.push("d");

console.log(arrCopy); // Output: ["a", "b", "c"]
console.log(arr3);    // Output: ["a", "b", "c", "d"]

// Merging Objects using Spread Operator
const car1 = { name: "BMW", price: "1 Cr" };
const car2 = { color: "White", engineCC: 5000 };

const car = { ...car1, ...car2 };
console.log(car); // Output: { name: "BMW", price: "1 Cr", color: "White", engineCC: 5000 }

// Sum of Squares Function
function sumOfSquares(val1, val2) {
    function square(val) {
        return val * val;
    }

    let firstValue = square(val1);
    let secondValue = square(val2);

    return firstValue + secondValue;
}

const answer = sumOfSquares(2, 3);
console.log(answer); // Output: 13

// Sum of Cubes Function
function sumOfCubes(val1, val2) {
    function cube(val) {
        return val * val * val;
    }

    let firstValue = cube(val1);
    let secondValue = cube(val2);

    return firstValue + secondValue;
}

const ans = sumOfCubes(2, 3);
console.log(ans); // Output: 35

// Higher-Order Function Example
function sumOfSomething(val1, val2, callbackFn) {
    let firstValue = callbackFn(val1);
    let secondValue = callbackFn(val2);

    return firstValue + secondValue;
}

const ans2 = sumOfSomething(2, 3, cube);
console.log(ans2); // Output: 35

// setTimeout Example
setTimeout(() => console.log("Hello Everyone!"), 2000);