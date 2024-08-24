//? control flow statement in Js.
//todo -----> 1.Conditional Statements
    //* if
    let a = 18
    if(a >= 18){
        console.log("You can drive")
    }; // OutPut: You can drive

    //* if-else
    let b = 18
    if(b >= 18){
        console.log("You are teenage")
    }else{
        console.log("You are a child")
    }; // OutPut: You are a teenage.

    //* if-else-if
    let c = 22
    if(c >= 25){
        console.log("You can vote")
    }else if(c >= 16){
        console.log("You can not vote until 22")
    }else{
        console.log("You are a child")
    }; // OutPut: You can't drive or ride a bike

    //* switch
    let d = 18
    switch(d){
        case 18:
            console.log("You can drive")
            break
        case 16:
            console.log("You can not drive")
            break
        default:
            console.log("You are a child")
    }; // OutPut: You can drive

    let num = 42;
    switch(typeof num){
        case 'string':
            console.log('string');
            break;
        case 'number':
            console.log('number');
            break;
        default:
            console.log('unknown');
    }; // OutPut: number

    let day = 2;
    switch(day){
        case 'sat':
            console.log('Saturday');
            break;
        case 'Sun':
            console.log('Sunday');
            break;
        case 'Mon':
            console.log('Monday');
            break;
        case 'Tue':
            console.log('Tuesday');
            break;
        case 'Wed':
            console.log('Wednesday');
            break;
        case 'Thu':
            console.log('Thursday');
            break;
        case 'Fri':
            console.log('Friday');
            break;
        default:
            console.log('unknown');
    }; // OutPut: Sunday

    let month = 1;
    switch(month){
        case 1:
            mon = "Jan";
            break;
        case 2:
            mon = "Feb";
            break;
        case 3:
            mon = "Mar";
            break;
        case 4:
            mon = "Apr";
            break;
        case 5:
            mon = "May";
            break;
        case 6:
            mon = "Jun";
            break;
        case 7:
            mon = "Jul";
            break;
        case 8:
            mon = "Aug";
            break;
        case 9:
            mon = "Sep";
            break;
        case 10:
            mon = "Oct";
            break;
        case 11:
            mon = "Nov";
            break;
        case 12:
            mon = "Dec";
            break;
        default:
            mon = "Invalid Month"    
            break;
    }
    console.log("The month is " + mon); // OutPut: Dec
    
    
    //? Ternary operator
    let age = 22                     
    let isAdult = age >= 18 ? "You are an adult" : "You are a child" // OutPut: You are an adult

//todo -----> 2.Loops
    //* for loop
    for(let i = 0; i < 5; i++){
        console.log(i)
    }; // OutPut: 0 1 2 3 4

    //* for-each loop
    let arr1 = [1, 2, 3, 4, 5]
    for(let i = 0; i < arr1.length; i++){
        console.log(arr1[i])
    }; // OutPut: 1 2 3 4 5

    //* while loop
    let j = 0
    while(j < 5){
        console.log(j)
        j++
    }; // OutPut: 0 1 2 3 4

    //* do-while loop
    let k = 0
    do{
        console.log(k)
        k++
    }while(k < 5); // OutPut: 0 1 2 3 4

    //* for-in loop
    let obj = {name: "John", age: 30, city: "New York"}
    for(let key in obj){
        console.log(key + " : " + obj[key])
    }; // OutPut: name : John age : 30 city : New York

    //* for-of loop
    let arr = [1, 2, 3, 4, 5]
    for(let value of arr){
        console.log(value)
    }; // OutPut: 1 2 3 4 5

//todo -----> 3.Try/Catch Statements
    //* try-catch
    try{
        let x = 10
        let y = 0
        let z = x / y
        console.log(z)
    }catch(err){
        console.log(err)
    }

//? Break / Continue
    for(let i = 1; i <= 5; i++){
        if(i == 3){ 
            break
        }
        console.log(i)
    }; // OutPut: 1 2

    for(let i = 1; i <= 5; i++){
        if(i == 3){ 
            continue
        }
        console.log(i)
    }; // OutPut: 1 2 4 5 