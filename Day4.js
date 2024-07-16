//day-4 :loops
//activity-1: for loops
//task-1
for(let i=1;i<=10;i++){
  console.log(i)
}

//task-2
for(let i=1;i<=10;i++){
  console.log(`${5}*${i}=${5*i}`)
}

//activity-2: while loop
//task-3
let sum = 0;
let number = 1;

while (number <= 10) {
    sum += number;  // Add current number to sum
    number++;       // Increment number to move to the next integer
}

console.log("The sum of numbers from 1 to 10 is:", sum);

//task-4
let numbers = 10;

while (numbers >= 1) {
    console.log(numbers);
    numbers--;
}

//activity-3: do while
let numberss = 1;

do {
    console.log(numberss);
    numberss++;
} while (numberss <= 5);


//task-5:
let n = 5;
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while (i <= n);

console.log(`The factorial of ${n} is: ${factorial}`);

//task-6
// Define the height of the triangle
const height = 5; // Number of rows

// Outer loop for rows
for (let i = 1; i <= height; i++) {
    let row = ''; // Initialize an empty string for each row
    
    // Inner loop for columns
    for (let j = 1; j <= i; j++) {
        row += '* '; // Append '*' to the row string
    }
    
    // Print the current row
    console.log(row);
}


//activity-5: loop control
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
      continue; // Skip the rest of the loop body for i = 5
  }
  console.log(i); // Print i for all other values
}

//
for(let i=1;i<=10;i++){
  if(i===7){
    break;
  }
  console.log(i)
}