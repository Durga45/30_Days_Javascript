//day-7: objects
//activity-1:object creation and access
//task-1
let books={
  title:"fast & furious ",
  author:"vin disel",
  year:2018,
  displayDetails:function(){
    console.log(`title:${this.title}, author:${this.author}`)
  }
}
console.log(books)
//task-2
console.log(books.title);
console.log(books['title'])
console.log(books.author)
console.log(books['author'])

//activity-2 :object methods
//task-3
books.displayDetails()

//task-4
console.log(books.year)
books.year=2022;
console.log(books.year)

//activity-3 : nested objects
//task-5
let library={
  name:"snhs",
  books:[
    {
      name:"f&f",
      year:2022
    },
    {
      name:"avengers",
      year:2019
    },
    {
      name:"g of galaxy",
      year:2020
    }
  ],
  simpleDetail:function(){
    for (let i = 0; i < this.books.length; i++) {
      console.log(`name: ${this.books[i].name}, year: ${this.books[i].year}`);
    }
  }
}
console.log(library)
//task-6
console.log(library.name)
for (let i = 0; i < library.books.length; i++) {
  console.log(library.books[i].name);
}
//activity-4 : this keyword
//task-7
library.simpleDetail()

//actitvity-5 : object iteration
//task-8
for(let i in library.books){
  console.log(library.books[i])
}
let keys = Object.keys(books);
console.log(keys);

let values = Object.values(books);
console.log(values);