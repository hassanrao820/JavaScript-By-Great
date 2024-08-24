let div = document.createElement('div'); // We can create element using js.
div.innerHTML = "<h2>Add elements through js.</h2>" // we can add text in created element.
document.body.appendChild(div);  // <----- we can show these js created elements in web page using this.
console.log(div);


let get = document.getElementById('menu');
let ul = document.createElement('li');
ul.innerHTML = " Contact";
get.appendChild(ul);
console.log(ul);
console.log(get.innerText);
console.log(get.textContent);

