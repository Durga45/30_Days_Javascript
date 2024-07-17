//functions
//activity:1 function declaration
//task-1
function evenOrOdd(number){
  if(number>0){
    if(number%2==0){
      console.log(`${number} is even number.`)
    }else{
      console.log(`${number} is odd number`)
    }
  }else{
    console.log(`${number} is invalid..`)
  }
}
evenOrOdd(6)

//task-2
function squareOfNumber(number){
  return number*number;
}
let sqt=squareOfNumber(5);
console.log(sqt);

//activity 2: function expression
//task-3
function maximumOFtwo(a,b){
  return Math.max(a,b);
}
let maxOfTwo=maximumOFtwo(4,5);
console.log(maxOfTwo)

//task-4
function concatTwoString(a,b){
  return a+b;
}
let names=concatTwoString("Ajay ","singh")
console.log(names)

//activity-3: arrow function
//task-5
let sumOfTwo=(a,b)=>{
  return a+b;
}
console.log(sumOfTwo(4,5))

//task-6
let stringContainsOrNot=(name)=>{
  if(name.includes('a')){
    return true
  }else{
    return false
  }
}
console.log(stringContainsOrNot("pandey"))

//activity-4: function param and deafult val
//task-7
let productOfTwo=(a,b=5)=>{
  return a*b;
}
console.log(productOfTwo(5))

//task-8
let greeting=(name,age=18)=>{
  console.log(`Hello ${name} your age is ${age}`)
}
greeting("Dilip")


