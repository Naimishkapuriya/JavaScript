// =====================================Expressions and operators=============================

// const obj = {};

// obj.x = 3;
// console.log(obj.x); // Prints 3.
// console.log(obj); // Prints { x: 3 }.

// const key = "y";
// obj[key] = 5;
// console.log(obj[key]); // Prints 5.
// console.log(obj); // Prints { x: 3, y: 5 }.

// ==========Assignment Operators============

// var a=10;
// var b=3;
// a += b;         //==>13
// a -= b;         //==>7
// a *= b;         //==>30
// a /= b;         //==>3.33333333
// a %= b;         //==>1
// a **= b;        //==>1000
// console.log(a);

// ==========Comparison Operators=============
// (==)bane value sem hovi joae
// (===)value bsem hovi joiae and data type b sem hova joi to j value true aavse
// (!=)left ni value right jovi na hoi tyare value right true kevase
// (!==)left ni value right jevi na hoi and data type b sem na hovo joi ae

// ==============Logical operators==============
// =========(&&)and (||)======================
// && ni value ek pan false aave atle badhi false
// || ni value ek pan true aave atle badhi true

// const a1 = true && true; // t && t returns true
// const o1 = true || true; // t || t returns true

// const a2 = true && false; // t && f returns false
// const o2 = true || false; // t || f returns true

// const a3 = false && true; // f && t returns false
// const o3 = false || true; // f || t returns true

// const a4 = false && 3 === 4; // f && f returns false
// const o4 = false || 3 === 4; // f || f returns false

// const a5 = "Cat" && "Dog"; // t && t returns Dog
// const o5 = "Cat" || "Dog"; // t || t returns Cat

// const a6 = false && "Cat"; // f && t returns false
// const o6 = false || "Cat"; // f || t returns Cat

// const a7 = "Cat" && false; // t && f returns false
// const o7 = "Cat" || false; // t || f returns Cat

// =================string operators===============

// console.log("my " + "string"); // console logs the string "my string".

// let mystring = "alpha";
// mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
// console.log(mystring);

// ==============Conditional operators======================

// var  a= 100;
// var b;
// (a == 500) ? b ="true": b="false"
// console.log(b);

// var a = 100;
// var b;
// b = "value is" + (a == 500 ? "true" : "flase");
// console.log(b);


// function exmpal(a){
//     return a<=10 ? console.log("less then 10")
//     : a>=20 ? console.log("gthen 20")
//     :console.log("none")
// }
// exmpal(50)


// function exmpal(a){
//     if(a<=10){
//         console.log("less then 10");
//     }else if(a<=20){
//         console.log("greetar then 20");
//     }else{
//         console.log("none");
//     }
// }exmpal(21)
