//task-1
let heading=document.getElementById('heading');
heading.innerText="task-1 changing text content"

//task-2
let changeolor=document.querySelector('.colorChange')
changeolor.style.backgroundColor="yellow";

//task-3
let div=document.createElement('div');
div.innerText="task-3"
document.body.appendChild(div)

//task-4
let list=document.createElement("ul")
let listitem=document.createElement('li')
listitem.innerText="javascript task-4";
list.appendChild(listitem)
document.body.appendChild(list)

//task-5 and 6
let del=document.querySelector('.taskFive')
let childToBeRemoved=del.children[1];
del.removeChild(childToBeRemoved)

let attributeChange=document.querySelector('.colorChange')
attributeChange.setAttribute('class','colorChange newAttribute')

let paragraph=document.querySelector('.para')
let button=document.querySelector('.change')
button.addEventListener('click',()=>{
  paragraph.style.backgroundColor = "orange";

})

paragraph.addEventListener('mouseover',()=>{
  paragraph.style.border = "2px solid black";

})

paragraph.addEventListener('mouseout',()=>{
  paragraph.style.border="none";
})