
let title = document.querySelector('title')
title.textContent = "Lab7"

let h1= document.querySelector('h1')
h1.innerText = "Lab7 Assignment"
h1.style.color = "blue"
document.body.appendChild(h1)

let hr = document.createElement("hr") 
document.body.appendChild(hr)

let h2 = document.createElement("h2")
h2.innerText = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

let p1 = document.createElement('p')
p1.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'
document.body.appendChild(p1)

let ul = document.createElement('ul')
document.body.appendChild(ul)

let li1 = document.createElement('li')
li1.className = 'odd'
li1.innerHTML = 'find elements in the DOM (<b>5 points</b>);'
li1.style.color = "green"
ul.appendChild(li1)

let li2 = document.createElement('li')
li2.className = 'even'
li2.innerHTML = 'create/add/remove elements (<b>5 points</b>);'
li2.style.color = "purple"
ul.appendChild(li2)

let li3 = document.createElement('li')
li3.className = 'odd'
li3.innerHTML = 'change content of the elements (<b>5 points</b>);'
li3.style.color = "green"
ul.appendChild(li3)

let li4 = document.createElement('li')
li4.className = 'even'
li4.innerHTML = 'change styles of the elements (<b>5 points</b>);'
li4.style.color = "purple"
ul.appendChild(li4)

let li5 = document.createElement('li')
li5.className = 'odd'
li5.innerHTML = 'change attributes of the elements (<b>5 points</b>);'
li5.style.color = "green"
ul.appendChild(li5)

let li6 = document.createElement('li')
li6.className = 'even'
li6.innerHTML = 'change classes of the elements (<b>5 points</b>);'
li6.style.color = "purple"
ul.appendChild(li6)

let hr1 = document.createElement("hr") 
document.body.appendChild(hr1)

let h2_1 = document.createElement("h2")
h2_1.innerText = "Submission"
h2_1.style.color = "red"
document.body.appendChild(h2_1)

let p2 = document.createElement('p')
p2.innerText = 'To submit your work, follow these instructions:'
document.body.appendChild(p2)

let ul1 = document.createElement('ul')
document.body.appendChild(ul1)

let li7 = document.createElement('li')
li7.className = 'odd'
li7.innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).'
li7.style.color = "green"
ul1.appendChild(li7)

let li8 = document.createElement('li')
li8.className = 'even'
li8.innerText = 'Clone this repository to your local machine and work inside it.'
li8.style.color = "purple"
ul1.appendChild(li8)

let li9 = document.createElement('li')
li9.className = 'odd'
li9.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).'
li9.style.color = "green"
ul1.appendChild(li9)

let li10 = document.createElement('li')
li10.className = 'even'
li10.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).'
li10.style.color = "purple"
ul1.appendChild(li10)

let li11 = document.createElement('li')
li11.className = 'odd'
li11.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).'
li11.style.color = "green"
ul1.appendChild(li11)

let li12 = document.createElement('li')
li12.className = 'even'
li12.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).'
li12.style.color = "purple"
ul1.appendChild(li12)

let li13 = document.createElement('li')
li13.className = 'odd'
li13.innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).'
li13.style.color = "green"
ul1.appendChild(li13)

let hr2 = document.createElement("hr") 
document.body.appendChild(hr2)




