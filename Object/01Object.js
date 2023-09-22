// new method 

// const JsUser = {
//     name : "naimish",
//     age : 20,
//     location : "surat",
//     emali : "naimish@gmail.com",
//     array : ["Mondey", "saturdey"]
// }

// console.log(JsUser["emali"]);


// string ("") key ae log ma [] ma lakhvai pade 
// const JsUser = {
//     name : "naimish",
//     age : 20,
//     location : "surat",
//     emali : "naimish@gmail.com",
//     array : ["Mondey", "saturdey"],
//    "full name" : "newvalue" 
// }
// console.log(JsUser.sym bol);  // error
// console.log(JsUser["sym bol"]);  // newvalue

// Symbol value 
// Symbol ne [] object ma lakhay 
// const mySym = Symbol("key1")
// const JsUser = {
//     name : "naimish",
//     age : 20,    
//     emali : "naimish@gmail.com",
//    "full name" : "newvalue" ,
//     [mySym] : "mykey1"
// }

// console.log(JsUser[mySym]);  // mykwy1
// console.log(typeof JsUser[mySym]);


// object emali change value 
// const JsUser = {
//     name : "naimish",
//     age : 20,    
//     emali : "naimish@gmail.com",
//    "full name" : "newvalue" ,
// }

// JsUser.emali = "naimish@sdbh.com"
// Object.freeze(JsUser)
// console.log(JsUser);

// ============{
//     name: 'naimish',
//     age: 20,
//     emali: 'naimish@sdbh.com',
//     'full name': 'newvalue'
//   }


// object function===========
// JsUser.greeting = function () {
//     console.log("hello JS User");
// }

// console.log(JsUser.greeting); // [Function (anonymous)]
