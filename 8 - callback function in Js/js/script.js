//? Callbacks in Js.
// Callback is a function that is passed as an argument to another function
    function display(result) {
        console.log(result);
    }
        function add(a,b, myCallBack){
            let sum = a + b;
            myCallBack(sum);
        };
        add(5,5, display); // Output: 10

//? Anonymous function
        let myCallBack = function(result) {
            console.log(result);
        };
        add(5,5, myCallBack); // Output: 10

        let sum = function(a,b) {
            return a + b;
        };
        console.log(sum(5,5)); // Output: 10

//? setTimeout
        setTimeout(function() {
            console.log("Hello World!");
        }, 3000); // Output: "Hello World!" after 3 seconds

//? Recursive function
        function countDown(num) {
            console.log(num);
            num--;
            if(num >= 0){
                countDown(num);
            }
        };
        countDown(10);