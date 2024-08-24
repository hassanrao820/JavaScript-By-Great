//? this keyword in Js.
    const person = {
        name: "John",
        age: 30,
        sayHello: function() {
            console.log("Hello, my name is " + this.name);
        }
    };
    person.sayHello();

    const person2 = {
        name: "Jane",
        age: 25,
        sayHello: function() {
            console.log("Hello, my name is " + this.name + ' and my age is ' + this.age);
        }
    };
    person2.sayHello();

    console.log(this)