//? Function
// Function is a block of code which only runs when it is called. It can take input parameters and return output.

function greet() {
    console.log("Hello, ", "John!");
} //Output: Hello, John!

greet(); // Calling the function with argument "John"

//* function with parameters 
    function greet(name) {
        console.log("Hello, ", name);
    }; //OutPut: Hello, John

    greet("John"); // Calling the function with argument "John"
    function bio(firstName, lastName){
        console.log("Hello, " + firstName + lastName)
    };
    bio('Elon', ' Musk');

//* Default Parameters
    function multiply(x , y){
        console.log(x * y);
    };
    multiply(5, 5); //OutPut: 25
    multiply(5, 25); //OutPut: 125
    multiply(25, 5); //OutPut: 125
    multiply(55, 5); //OutPut: 275
    multiply(52, 15); //OutPut: 780
    multiply(51, 25); //OutPut: 1275
    multiply(51); //OutPut: NaN

//* Function Return
    function multiply(x , y){
        return x * y;
    };
    let result = multiply(5, 5); //OutPut: 25
    console.log('the result is: ' + result);