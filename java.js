// =================inpoten point===================
// ====api 
// rendomuser me api 

// =========================variables====================
// ================3 type========
// (1)==== var
// (2)==== let
// (3)==== const

// (1)=====var
// updated and re-declared bane thy

// (2)=====let
// updated thya pan re-declared no thy

// (3)=====const
// updated and re-declared no thy

// =====================Type Conversions==============
// java.html page

// Conversions type ======
// "33" => 33
// "33abc" => NaN
// true => 1 , false=> 0

// ====Number=====
// let score = 20;
// console.log(typeof score); // number
// console.log(typeof (score)); // number

// =====String=====
// let score = "20";
// console.log(typeof score);  // string

// string mathi number conversion 
// let score = "20"
// let value = Number(score);
// console.log(typeof value);  // number

// string to number conversion  is confusing =========================

// let value = 3;
// let negValue = -value;
// console.log(negValue); // -3


// ====================loops=========
// for loops========

// for (let index=0; index<20; index++){
//     const element = index;
//     console.log(element);
// }

// for (let i=1; i<10; i++){
//     console.log(i);
// }

// while================
// first time pan condition chek kare pache alg vadhe

// let i =0;
// while (i <3){
//     console.log(i);
//     i++;
// }

// let i=3;
// while(i){
//     console.log(i);
//     i--;
// }

// do while=======
// first time codition chek na kare
// codition true hoi to second time codition chek kare

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i <= 10);


// the switch statement================

// switch(expression or valuse) {
//   case condition 1: statement(s);
//   break;
//   case condition 2: statement(s);
//   break;
//   case condition 3: statement(s);
//   break;
//   case condition 4: statement(s);
//   break;
//   default:statement(s)
// }


// var day =0;
// switch (day){
//     case 0: 
//     console.log("today is monday");
//     break;
//     default:
//         console.log("nothing days");
// }

// ===========hosting==============
// hello("naimish");
// function hello (name) {
//     console.log(name);
// }
// normal function ma hosting use thi
// ===function expression ma hosting use no thy

// ==============variable naming rules===============

// var nu name nu srting (_,abc, $)thi
// var _lastName;
// var lastName;
// var $lastName;

// var na name ni agl (1,@)thi sarvat na thai

// var 1lastName;             //error
// var #lastName;             //error

// var na name vache jagiya and (-) no upyog na thay

// var 1 lastName             //error
// var 1-lastName             //error

// ===================function========
// function syntax in javascrpit======
// =======java.html page=======


// javascrpit global & local variable===================

// ex=======>
// var a=10; <========= global variable
// function functionName () {
    // var b =20;  <========== local variable
// }


// local variable function baar use na thay
// globle variable function uder & baar bane use thay
// ex ==========java.html page==


// function with object and Array============
// function with Object==
// =======java.html page=======

// =============data type======================

// var x= "hello world";                           // <==== string
// var x = 25;                                     // <==== number
// var x=true;                                     // <==== boolean
// var x= ["html", "css", "javascript"];           // <==== array
// var x= {first: "naimish", last: "kapuriya"};    // <==== object
// var x = null;                                   // <==== null
// var x;                                          // <==== undefind


// =============================Coercion and Type Conversion  ==========================
// ============implicit==========================
// var a= true + false;  //====  1
// var a= 12/"6";  //=== 2
// var a='number' + 15 + 3;  // === number153
// var a= [1] > null;     // === true
// var a= "foo" + + "bar";    // fooNaN
// var a= 'true' == true; // === false
// var a= false == 'false';  // === false
// var a= null == '';    // === false
// var a= !!"false" == !!"true";  //=== true
// var a= ['x'] == 'x';  // === true
// var a= [] + null + 1;  // === null1
// var a= [1,2,3] == [1,2,3] // == false
// var a= {}+[]+{}+[1];  // === [object Object][object Object]1
// var a= !+[]+[]+![];  // === truefalse
// var a= new Date(0) -0;  // ===  0
// var a= new Date(0) + 0; // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)0
// console.log(a);

// ===============EXPLICIT======================

// var a= String(123);  // 123
// var a= String(-12.3) // -12.3
// var a= String(null)  // null
// var b= String(undefined)  // undefined
// var c= String(true) // true
// var d= String(false) // false
// console.log(a, b,c,d);
