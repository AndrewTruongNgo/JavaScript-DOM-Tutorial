let titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

console.log(Array.from(titles));
console.log([titles]);


// titles.forEach((title) => console.log(title));


// const titles = document.getElementsByClassName('title');
//
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
//
// Array.from(titles).forEach(function(title){
//   console.log(title);
// });

let title = document.querySelector('#button');

title.addEventListener('click', (event) => {
  event.preventDefault();
  let newDiv = document.createElement('div');
  newDiv.textContent = 'Hi im a div!';
  document.body.appendChild(newDiv);
})



title.addEventListener('mouseover', () => {
  title.style.backgroundColor = 'yellow';
})

title.addEventListener('mouseout', () => {
  title.style.backgroundColor = '';
})

document.body.addEventListener('mouseover', (event) => {
  // console.log(event.target)
  event.target.style.backgroundColor = 'blue';
})

document.body.addEventListener('mouseout', (event) => {
  // console.log(event.target)
  event.target.style.backgroundColor = 'yellow';
})



function f(x) {
  x*=2;
  return function )()
}
