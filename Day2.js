// day-2 : operators

//activity-1 : aritmetic operators
//task-1
let a=10;
let b=20;
console.log(a+b);

//task-2
let c=40;
let d=10;
console.log(c-d);

//task-3
let e=5;
let f=6;
console.log(e*f);

//task-4
let g=300;
let h=10;
console.log(g/h);

//task-5
let i=30;
let j=5;
console.log(i%j);

//activity-2: assignment operators
//task-6
console.log(i+=j)
//task-7
console.log(g-=h);

//activity-3: comparison operators
//task-8
console.log(i>j);
console.log(i<j)
//task-9
console.log(a>=b);
console.log(b>=a);

//activity-4 : logical operators
console.log(a<b && b<a ); //if both true then true else false
console.log(a<b || b>a); //if one is true then true 
console.log(a !=b)

//activity-5 : ternary operator
// condition ? expIfTrue : expIfFalse
let first=20;
let second=40;
let result= second/first ? "yes" : "No";
console.log(result)