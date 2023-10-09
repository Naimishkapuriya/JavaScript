// ===========function=========

// function hello(){
//   document.write("hello <br>");
  
// }
// function world(){
//   document.write("wrold <br>");
  
// }
// hello();
// world();
// hello();
// document.write("naimish <br>");
// hello();


// ===========function Parameters=======
// ek sathe bov call karva and value change hoi tyare parameters no use thay

// function sum (a,b){
//   document.write(a+b);
// }
// sum(10,20);


// function hello(fname, lname){
//   document.write(fname + lname)
// }
// hello("naimish", "kapuriya")

// function hello(a,b){
//   document.write(a+b);
// }
// hello("22.12", 22)


// =======function with return========

// function hello(fname,lname){
//   var a= fname + " " + lname;
//   return a;
// }
// var fn = hello("ram", "shyam");
// document.write(fn);


// function with object and Array============
// (...num1)===> restopareter
// function calculateCartPrice(...num1){
//   document.write(num1)
//     return num1;
// }
// calculateCartPrice(10,20,30,40,50,60);


// (var1, var2, ...num1)==>  var1+10, var2+20, ...num1+30,40

// function calculateCartPrice(var1, var2, ...num1){
//   document.write(num1);
//   return num1;
// }
// calculateCartPrice(10,20,30,40);


// ========= function with Object==
// const user = {
//   username: "naimish",
//   price: 200,
// }

// function handleObject (anyobject) {
// document.write(`user name is ${anyobject.username} and price is ${anyobject.price}`)
// }

// handleObject(user);    // =============== first rit

// handleObject({
//   username: "badshah",
//   price : 300
// })                        // ==========second rit 

// ===========================scope=================================
// if in baar no scope ae global scope 
// if in under ne scope in block scope 
// var ni baar ni value nai aave 
// let ni baar ni value aavse 
// const ni baar ni value aavse 

// var c =300;
// let a= 300
// const b =300

// if (true) {
  // let a = 10;
  // const b = 20;
//   var c = 30;
// console.log("inner:", a);
// }
// console.log(a);
// console.log(b);
// console.log(c);


// ========================call stack====================

// let val1 =10
// let val2 =5
// function addNum(num1, num2){
//     let total = num1 + num2
//     console.log(total);
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10,2)
// console.log(result1);
// console.log(result2);
