


// falsy value
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

// =====if statement  ===================================

// const temprature = 40;
// if (temprature === 40) {
//   console.log("less than 50");
// }
// console.log("temprature is greater than 50");

// ==========if and else statement =======================

// const temprature = 41;
// if (temprature === 40) {
//   console.log("less than 50");
// }else{
//     console.log("temprature is greater than 50");
// }
// console.log("execute");

// const score = 200;

// if (score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }

// const balance = 1000
// if (balance < 500){
// console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if(balance < 900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

// (&&) badhi value true hovi joi ae
// (||) koi pan ek value true hovi joi ae

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInformEmail = true
// if (userLoggedIn && debitCard){
//     console.log("allow to buy course");
// }
// if (loggedInFromGoogle || loggedInformEmail){
//     console.log("user logged in");
// }

// const useEmail =[]

// if(useEmail){
//     console.log("got user email");
// }else{
//     console.log("don't have user email");
// }

// if (useEmail.length === 0){
//     console.log("array is empty");
// }

// const emptyObj ={}
// if (Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// nullish coalescing operator (??):null and undefined

// let val1
// val1 = 5 ?? 10             // 5
// val1 = null ?? 10          // 10
// val1 = undefined ?? 10     // 10
// val1 = null ?? 10 ?? 20    // 10

// console.log(val1);

// terniary operator
// condition ? true : false
// const iceTeaprice = 100
// iceTeaprice <= 80 ? console.log("lesss than 80") : console.log("more than 80")

// =========== error handling and try-catch============

// try {
//     console.log("strat of try");
//     blabla;
//     console.log("end of try");
// } catch (error) {
//     console.log(error);
// }

// try-catch with error type ========================

// console.log(error.name);
// console.log(error.message);
// console.log(error.stack);

// different type of errors in javscript==================

// (1)EvalError
// eval name nu function use kare tyare aave aa error

// (2)RangeError
// jyare html ni type reng no use karva ma aave tyare

// (3)ReferenceError
// koi veriyble ke function define na hoi tyare

// (4)SyntaxError  (most impotent)
// for loops, while loop, if candisan ma type ma bhul aave tyare aa error aave

// (5)TypeError
// user koi data type aeni rite banavi ne nakhi de tyare TypeError aave
// user js na type no j use kari sake

// (6)URIError
// url barr ma peramiter pass kari tyare perameter khotu hoi tyare

// (7)AggregateError

// ereor type ex===================
// (1)
// try {
//     blabla;
// } catch (error) {
//     if(error instanceof ReferenceError){
//         console.log('ReferenceError');
//     }else if(error instanceof TypeError){
//         console.log("TypeError");
//     }else{
//         console.log('unknow error');
//     }
// }
// ex=====ReferenceError
// (2)

// JSON.parse==> jeson ka deta ne javscript na object ma convet kare
// try {
//   let json = '{"name":"naimish","age":20}';
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new Error("incomplete data : no name");
//   }
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("finally");
// }
// ex === naimish, 20

// settimeout try-catch in under kam na kare
// and settimeout in under try-catch ka kare che

// try-catch under settimeout=======================❌
// try {
//     setTimeout (function(){
//         blabla;
//     }, 1000)
// } catch (error) {
//     console.log(error);
// }

// settimeout in under try-catch =====================✅
// setTimeout(function() {
//     try {
//         blabla;
//     } catch (error) {
// console.log(error);
// console.log("error has occurrred");
//     }
// }, 1000);

