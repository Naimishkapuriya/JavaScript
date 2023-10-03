// OBJECT MA FOR IN LOOP NO USE THASE
// ARRAY MA FOR OF LOOP NO USE THASE

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

// =====================For loop with break and continue================
   
// ====for loops in if and else=======
// for (let i=0; i<=10; i++){
//     const element  = i;
//     if(element == 7){
//         console.log("7 is best number");
//     }
//     console.log(element);
// }


// =========for loops in under loops==========

// for (let i=1; i<=10; i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j=1; j<=10; j++){
//         // console.log(`inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j);
//     }
// }

// ==============loops with Array ============

// let myArray = ["naimish", "smit", "trushal"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }
// ex=== naimish,smit,trushal

// =============loops with break and continue ===

// (1)break============
// jyare value 5 aave tyare pachi loops agl vadhti nathi tya thi break thy jay che 

// for (let index =1; index <=20; index++){
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`valuue of i is ${index}`);
// }

// (2)continue=========
// jyare value 5 aave tyare value b print kare che ane agl vadhe che 
// for (let index =1; index <=20; index++){
//     if(index == 5){
//         console.log(`Detected 5`);
//         continue;
//     }
//     if(index == 10){
//         console.log(`Detected 10`);
//         continue;
//     }
//     if(index == 15){
//         console.log(`Detected 15`);
//         continue;
//     }
//     if(index == 20){
//         console.log(`Detected 20`);
//         continue;
//     }
//     console.log(`valuue of i is ${index}`);
// }

// ====================== while loops ================

// let index =0;
// while (index <= 10){
//     console.log(`value of index is ${index}`);
//     index = index + 2;
// }

// while loops with Array ========

// let myArray = ["Naimish", "smit", "trushal"];
// let arr =0;
// while (arr < myArray.length){
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1;
// }


// ======================do-while loops ================

// let score =1;
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);

// ====================for of loops===========4
// for (const iterator of object) {
    
// }

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }
// ex ===
// 1
// 2
// 3
// 4
// 5

// const greetings = "Hello!"
// for (const greet of greetings){
//     console.log(`Each cahr is ${greet}`);
// }

// ex ==
//  Each cahr is H
// Each cahr is e
// Each cahr is l
// Each cahr is l
// Each cahr is o
// Each cahr is !

// Maps 

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")

// console.log(map);
// ex 
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

// for (const key of map){
// console.log(key);
// }
// ex ===
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


// for (const [key, value] of map){
// console.log(key, ":-", value);
// }
// ex====
// IN :- India
// USA :- United States of America
// Fr :- France

// for in loops============

// const myObject = {
//     js : "javascript",
//     cpp : "c++",
//     rb : "ruby",
//     swift : "swift by app"
// } 
// object in key darshve che 
// for (const key in myObject){
//    console.log(key); 
// }
// ex===
// js
// cpp
// rb
// swift

// object in value darshave che 
// for(const key in myObject){
//     console.log(myObject[key]);
// }
// ex=====
// javascript
// c++
// ruby
// swift by app


// for in with Array  ==============
 
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming){
//     console.log(key);
// } 
// ex==== 0,1,2,3,4

// ===================forEach===============

// forEach with function ============
// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach(function(item){
//     console.log(item);
// })
// ex=====
// js
// ruby
// java
// python
// cpp

// forEach with function Arrow   =====

// coding.forEach ((val) => {
//     console.log(val);
// })

// function printMe (val){
//     console.log(val);
// }

// coding.forEach(printMe)

//==================== item, index, arr ====================

// item=== js , ruby, java, python,cpp
// index === 0,1,2,3,4
// arr === [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })
// ex===
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


// const myCoading = [
//     {
//         fname : "naimish",
//         lname : "kapuriya"
//     },
//     {
//         fname : "smit",
//         lname : "ladani"
//     },
//     {
//         fname : "smit",
//         lname : "thummer"
//     },
// ]