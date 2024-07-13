//Day-1 : Variables and Data types

//Activity-1 : variable declaration
//task-1
var num=46;
console.log(num);
//task-2
let name="david";
console.log(name);


//activity-2 : constant declaration
//task-3
let isLoggedIn=true;
console.log(isLoggedIn);

//activity-3 : data types
//task-4
let score=45;
let naam="dhoni";
let logout=false;
let marks=[1,2,3,4,5];
let details={
  name:"msd",
  city:"ranchi",
  jerseyNum:7
}
console.log(typeof(score))
console.log(typeof(naam))
console.log(typeof(logout))
console.log(typeof(marks))
console.log(typeof(details))


//activity-4 : reassigning variable
//task-5
 let userName="mitchel";
 console.log(userName)
 userName="ajay";
 console.log(userName)

//activity-5: understanding const
//task-6
const meters=60;
console.log(meters)
// meters=50;
// console.log(meters)

//feature request

//feature 1

function typeOfValue(value){
  console.log(typeof(value),value)
}
typeOfValue(45)


