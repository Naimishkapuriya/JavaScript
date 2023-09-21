// naimish = {
//     name: "naimish",
//     favNum:73,
//     developer: true
// }
// // console.log(exports, require, module, __filename, __dirname);
// module.exports = naimish;


// var name = "naimish";
// console.log();


// =================Object==================
// first method ================
// (1) object under array b banavi sakay
// (2) maltipal function banavi saaky aene code bhasa ma method kevy
// (firstName)===properties and key kevay
// ("ram") ==== value kevay
// var a={
//     firstName : "ram",
//     lastName : "kumar",
// }


// object ne console.log();===========
// var a = {
//     fname: "ram",
//     lname : "kumar",
//     age : 20,
//     email : "ram@gmail.com",
// }
// full object mate 
// console.log(a);   // { fname: 'ram', lname: 'kumar', age: 20, email: 'ram@gmail.com' }
// single name mate 
// console.log(a.fname);  // ram


// object with Array =====
// var a = {
//     fname: "ram",
//     lname : "kumar",
//     age : 20,
//     email : "ram@gmail.com",
//     array : ["ram", "kumar", 20, "rma@gmail.com"]
// }
// array ni badha Element mate 
// console.log(a.array); // [ 'ram', 'kumar', 20, 'rma@gmail.com' ]
// array ma single Element matre 
// console.log(a.array[0]);  // ram


// object with function =====
// (this) == mening upr no var 
// single var hoi tyare (this) no use kari to b chale 
// var a = {
//     fname: "ram",
//     lname : "kumar",
//     age : 20,
//     email : "ram@gmail.com",
//     array : ["ram", "kumar", 20, "rma@gmail.com"],
//     fun : function () {
//         return 2000;
//     },

//     fullname : function () {
//         return this.fname + " " + this.lname;
//     }
// }

// console.log(a.fun()); // 2000
// console.log(a.fullname());  // ram kumar


// ======object ni under object============

// var a = {
//     fname : "ram",
//     lname : "kumar",
//     age : 20,
//     underobject : {
//         "city" : "surat",
//         "country" : "india"
//     }
// }
// console.log(a.underobject.city);  // surat


// =================(object)======second method ================

// var person = new Object();
// person.fname = "ram";
// person.lname = "kumar";
// person.age = 20;

// console.log(person);  // { fname: 'ram', lname: 'kumar', age: 20 }
// console.log(person.fname);


