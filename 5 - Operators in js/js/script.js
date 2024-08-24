//? Operators in Js. 
// Operators in js are symbols.
// That are used to perform operations on values.
// Operands are the values & variables.

//* Few types of operators:- 
//todo --> Arithmetic operators
    // Arithmetic operators are used to perform mathematical operations on operands. 
    // Examples: +, -, *, /, %, ++, --, **
    let a = 10;
    let b = 5;
    let c = a + b;
    console.log(c); // Output: 15
    let d = a - b;
    console.log(d); // Output: 5
    let e = a * b;
    console.log(e); // Output: 50
    let f = a / b;
    console.log(f); // Output: 2
    let g = a % b;
    console.log(g); // Output: 0
    let h = ++a;
    console.log(h); // Output: 11
    let i = --a;
    console.log(i); // Output: 9
    let j = a++;
    console.log(j); // Output: 10
    let k = a--;
    console.log(k); // Output: 10
    let l = 2 ** 3;
    console.log(l); // Output: 8

//todo:  --> Assignment operators
    // Assignment operators are used to assign values to variables. 
    // Examples: =, +=, -=, *=, /=, %=
    let m = 10;
    let n = 5;
    let o = m + n;
    console.log(o); // Output: 15
    let p = m - n;
    console.log(p); // Output: 5
    let q = m * n;
    console.log(q); // Output: 50
    let r = m / n;
    console.log(r); // Output: 2
    let s = m % n;
    console.log(s); // Output: 0
    m += 1;
    console.log(m); // Output: 11
    m -= 1;
    console.log(m); // Output: 9
    m *= n;
    console.log(m); // Output: 50
    m /= n;
    console.log(m); // Output: 10
    m %= n;
    console.log(m); // Output: 0

//todo --> Comparison operators
    // Comparison operators are used to compare two values. 
    // Examples: ==, ===, !=, !==, >, <, >=, <=
    let t = 10;
    let u = 5;
    let v = t == u;
    console.log(v); // Output: false
    let w = t === u;
    console.log(w); // Output: false
    let x = t != u;
    console.log(x); // Output: true
    let y = t !== u;
    console.log(y); // Output: true
    let z = t > u;
    console.log(z); // Output: true
    let aa = t < u;
    console.log(aa); // Output: false
    let bb = t >= u;
    console.log(bb); // Output: true
    let cc = t <= u;
    console.log(cc); // Output: false

//todo --> Logical operators
    // Logical operators are used to combine conditional statements. 
    // Examples: &&, ||, !
    let dd = 10;
    let ee = 5;
    let ff = dd > ee && dd < ee;
    console.log(ff); // Output: false
    let gg = dd > ee || dd < ee;
    console.log(gg); // Output: true
    let hh = !dd;
    console.log(hh); // Output: false

//todo --> String Operators
    // String operators are used to combine strings. 
    // Examples: +, +=, ===,!==, typeof, etc.
    let ii = "Hello";
    let jj = "World";
    let kk = ii + jj;
    console.log(kk); // Output: "HelloWorld"
    let ll = ii += jj;
    console.log(ll); // Output: "HelloWorld"
    let mm = ii === jj;
    console.log(mm); // Output: false
    let nn = ii !== jj;
    console.log(nn); // Output: true
    let pp = typeof ii;
    console.log(pp); // Output: "string"

//todo --> Increment & Decrement operators
    // Increment & Decrement operators are used to increment or decrement the value of a variable.
    // Examples: ++, -- 
    let rr = 10;
    let ss = ++rr;
    console.log(ss); // Output: 11
    let tt = 10;
    let uu = --tt;
    console.log(uu); // Output: 9   
    
//todo --> Ternary operator
    // Ternary operator is a shorthand for an if-else statement.
    // Examples: condition ? value1 : value2
    let vv = 10;
    let ww = vv > 5 ? "Greater than 5" : "Less than or equal to 5";
    console.log(ww); // Output: "Greater than 5"

            //------------- End of Operators in js. ---------------------//

// ? Operators Associativity.

// todo --> Right To Left associativity.

    let result = 2 ** 3 ** 2;
    console.log(result); // Output: 512

// todo --> Left To Right associativity.

    let ans = 4 - 2 - 1;
    console.log(ans); // Output: 1
    let ans2 = 4 - (2 - 1);
    console.log(ans2); // Output: 3
    let ans3 = 4 + 5 -7;
    console.log(ans3); // Output: 2