const numbers = [10, 25, 32, 47, 50, 63, 78, 89, 90, 101];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

console.log("Includes 47:", numbers.includes(47));

const firstGreaterThan60 = numbers.find(num => num > 60);
console.log("First number greater than 60:", firstGreaterThan60);

const sortedDescending = [...numbers].sort((a, b) => b - a);
console.log("Sorted in descending order:", sortedDescending);

const student = {
    name: "Ram Kumar",
    age: 26,
    subjects: ["Math", "Physics", "Computer Science"],
    scores: {
      Math: 85,
      Physics: 78,
      ComputerScience: 92
    },
    isGraduated: false
  };
  
  student.name = "Ram";
  console.log("Updated student name:", student.name);
  
  student.subjects.push("Biology");
  console.log("Updated subjects:", student.subjects);
  
  const highestScore = Math.max(...Object.values(student.scores));
  console.log("Highest score:", highestScore);
  
  delete student.scores.Physics;
  console.log("Updated scores:", student.scores);
  
  console.log("Contains Biology:", student.subjects.includes("Biology"));

  const products = [
    { id: 1, name: "Laptop", price: 75000, category: "Electronics" },
    { id: 2, name: "Phone", price: 50000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
    { id: 4, name: "Watch", price: 15000, category: "Accessories" },
    { id: 5, name: "Tablet", price: 40000, category: "Electronics" }
  ];
  
  const electronics = products.filter(product => product.category === "Electronics");
  console.log("Electronics products:", electronics);
  
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  console.log("Total price of all products:", totalPrice);
  
  const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
  console.log("Products sorted by price:", sortedByPrice);
  
  const mostExpensive = products.reduce((max, product) => (product.price > max.price ? product : max), products[0]);
  console.log("Most expensive product:", mostExpensive);
  
  const updatedProducts = products.filter(product => product.id !== 3);
  console.log("Updated products list:", updatedProducts);