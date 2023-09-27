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