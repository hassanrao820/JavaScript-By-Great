//* Variables in Js.
// !1st way ( Var )

// var - Global (Kahi bhi access kr sakty hain.)
// Var ko Re-assign bhi kr sakty hain.
//* e.g 
var x = 5;
if(x > 4){
    x = 10;
    console.log("x is equal to " + x);
}
console.log("x is equal to " + x);

// !2nd way ( Let )

// let - Local (Sirf khud ka block ma access kr skty hain.)	
// let ko Re-assign bhi kr sakty hain.
//* e.g 
let y = 5;
if(y > 4){
    y = 10;
    console.log("y is equal to " + y);
}
console.log("y is equal to " + y);


// !3rd way ( const )

// const - local (Sirf khud ka block ma access kr skty hain.)
// But const ko ham Re-assign ni kr skty.
//* e.g 
const z = 5;
if(z > 4){
    z = 10;
    console.log("z is equal to " + z);
}
console.log("z is equal to " + z);