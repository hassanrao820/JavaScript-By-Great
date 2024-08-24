//? Data Types
// There are two types of data type in js.

//* 1. Primitive Data Types:-
    // > string
    let firstName = 'string';
    console.log(firstName);

    // > number
    let age = 10;
    console.log(age);
    let num = 96.0
    console.log(num);

    // > bigint
    let bigInt = 1000000000000000000000000000000000000000000000000000000000000000n;
    console.log(bigInt);

    // > boolean
    let isStudent = true;
    console.log(isStudent);

    // > undefined
    let x;
    console.log(x);

    // > null
    let y = null;
    console.log(y);

    // > symbol
    let sym = Symbol('unique');
    console.log(sym);

//* 2. Reference Data Types:-
    // > object
    let person = {
        name: 'John',
        age: 25
    };
    console.log(person);

    // > array
    let fruits = ['apple', 'banana', 'orange'];
    console.log(fruits);

    // > set
    let uniqueFruits = new Set(['mango', 'strawberry', 'melon']);
    console.log(uniqueFruits);

    // > map
    let fruitMap = new Map([
        ['apple', 1],
        ['banana', 2],
        ['orange', 3]
    ]);
    console.log(fruitMap);

    // > function
    function greet() {
        console.log('Hello!');
    }
    greet();

    // > class
    class Animal {
        constructor(zeb) {
            this.zev = zeb;
        }
        speak() {
            console.log(`${this.zev} makes a sound.`);
        }
    }
    let cat = new Animal('cat');
    cat.speak();