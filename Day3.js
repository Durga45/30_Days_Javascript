//day-3: control structure
//activity-1: if-else statement
//task-1
let number=4;
if(number <0 ){
  console.log("negative")
}else{
  console.log("positive")
}

//task-2
let age=18;
if(age>=18){
  console.log("eligible")
}else{
  console.log("not eligible")
}

//activity-2: nested if else
//task-3
let one=10;
let two=20;
let three=30;
if(one>two && one>three){
  console.log("one is great")
}else if(two>three && two>one){
  console.log("two is great")
}else if(three > two && three >one){
  console.log("three is great")
}else{
  console.log("incorrect data")
}

//activity-3: switch case
//task-4
let weekNumber=1;
let day;
switch(weekNumber){
  case 1:
    day="monday";
    break;
  case 2:
    day="tuesday";
    break;
  case 3:
    day="wednesday";
    break;
  case 4:
    day="thrusday";
    break;
  case 5:
    day="friday";
    break;
  case 6:
    day="saturday";
    break;
  case 7:
    day="sunday";
    break;
  default:
    console.log("enter correct number")
}
console.log(day)

//task-5:
let score = 100;
let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 70 && score < 90:
    grade = "B";
    break;
  case score >= 60 && score < 70:
    grade = "C";
    break;
  case score >= 40 && score < 60:
    grade = "D";
    break;
  case score < 40:
    grade = "F";
    break;
  default:
    console.log("Enter correct score");
}

console.log(grade); // Output: "A"

//activity 4: conditional ternary
//task-6
let numberr=11;
let res=numberr%2==0 ? "even":"odd";
console.log(res)

//activity-5: combining conditions
//task-7
let year=2004;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap year");
} else {
  console.log("not a leap year")
}