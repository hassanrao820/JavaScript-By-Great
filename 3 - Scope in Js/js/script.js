//? In Js there are three type of scope:-

//* 1 - Global Scope 
var x = "Hey!"
function global() {
    console.log(x);
};
global();
console.log(x);

//* 2 - Function Scope 
function example() {
    var y = "Hey!" // if we write var inside a function we can't use console.log outside the function.
    console.log(y);
};
example();
console.log(y); // <------this is not true

//* 3 - Block Scope 
function block() {
    if(true) {
        let z = "Hello!"
        console.log(z);
    }
    console.log(z); // <------this is not true
};
block();
