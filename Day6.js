//day-6 : arrays
//activity-1:
//task-1
let numbers=[1,2,3,4,5]
console.log(numbers)
//task-2
console.log(numbers[0])
console.log(numbers[4])

//activity-2: array methods
//task-3
numbers.push(46);
console.log(numbers)
//task-4
numbers.pop()
console.log(numbers)
//task-5
numbers.shift()
console.log(numbers)
//task-6
numbers.unshift(25)
console.log(numbers)

//activity-3: array methods
let doubled=numbers.map((numbers)=>{
  return numbers+2;
})
console.log(doubled)

//task-8
let filtered=numbers.filter((num)=>{
  return num%2===0;
})
console.log(filtered)

//task-9
let reducing=numbers.reduce((acc,curr)=>{
  return acc+curr
},0)
console.log(reducing)

//activity-4 : array iteration
for(let i=0;i<numbers.length;i++){
  console.log(i)
}

//task-11
let num=[1,2,3,4,5]
num.forEach((num)=>{
 console.log(num)
})

//activity-5:multi dimesion array
//task-12
let multidimesionArray=[[1,2,3],[4,5,6]]
console.log(multidimesionArray)

//task-13
console.log(multidimesionArray[1][2])