//day-8 : es6 + features
//activity-1: template literals

let name="vijay"
let age=18;
let display=`hello ${name} and your age is ${age}`;
console.log(display)

let profession="software developer";
let city="hyderabad"
let details=`hello ${name} and your age is ${age} and profession is ${profession} and city is ${city}`;
console.log(details)

//activity-2: destructuring
let myNames=["ajay","vijay","suresh","veeresh"];
let [one,two,third]=myNames;
console.log(one)
console.log(two)
console.log(third)

let myDetails={
  naam:"vinay",
  agee:25,
  cityy:"Mumbai"
}
const {naam,agee,cityy}=myDetails;

console.log(name)
console.log(age)
console.log(city)

//activity-3 : spread and rest operators
let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
let arr3=[...arr1,...arr2] //spread
console.log(arr3)
//rest
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(1, 2, 3, 4, 5)); 

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); 
console.log(rest);  

function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3));

//activity-4: default parameters
let defParam=(num,num2=10)=>{
  return num+num2
}
 let summ=defParam(2)
 console.log(summ)

//activity-5: enhanced object literals
// Without enhanced object literals (ES5)
const personn = {
  name: 'Alice',
  greet: function() {
    console.log('Hello!');
  },
};

// With enhanced object literals (ES6)
const perso = {
  name: 'Alice',
  greet() {
    console.log('Hello!');
  },
};
