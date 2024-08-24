//? Object in /js.
// Object is a collection of properties in js.
    const person = {
        name: "John",
        age: 30,
        city: "New York",
        //? This is a method in object.
    };
    console.log(person);
    console.log(person['age']);
    console.log(person.age);
    console.log(typeof person);

    //* Update in Object in js.
    person.name = "Jane";
    console.log(person);

    //* Add new property in Object in js.
    person.email = "jane@example.com";
    console.log(person);

    //* Delete property in Object in js.
    delete person.email;
    console.log(person);

    //* Check property exist in Object in js.
    console.log('email' in person); //? false
    console.log('name' in person); //? true

    //! Nested Object

    const person1 = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            country: "USA"
        }
    };
    console.log(person1);
    console.log(person1.address.city);

    //? another way to create a object.
    const person2 = new Object();
    person2.name = "John";
    person2.age = 30;
    person2.address = {
        city: "New York",
        country: "USA"
    };
    console.log(person2);
    console.log(typeof person2);
    console.log(person2.address.country);

    //? Js object method
     