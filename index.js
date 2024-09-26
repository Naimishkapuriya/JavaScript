// console.log('hello');

// (1)=============var================================
// var myName = 'naimish';
// var myAge =20;

// =======================task=======================

// var _myName = "naimish"; > yes
// var _1my__name = "kapuriya"; > yes
// var 1myName = "smit"; > no
// var $myName = "thapa"; > yes
// var myName% ="thpa"; > no

// console.log($myName);

//(2) ==================data types in js ======================

// six data types that are primitives

// 1 nudefined
// 2 Boolean
// 3 Number
// 4 String
// 5 BigInt
// 6 Symbol

// console.log(myName);

// jayre var ma " " ni under lakhvama ave tyare aene string type kevay 6e
// var myName = "naimish";
// console.log(typeof (myName));  //>>>>> String

// jayre var ma koi pan number aavr tyare ane number type kevay 6e
// var myAge = 20;
// console.log(typeof(myAge)); //>>>>> number

// jayre var je value lidhi hoi ane console ma ae vale hoi nai tyare undefined ave 6e
// var iAmThapa = true;
// console.log(iAmThapa);
// console.log(typeof(myAge));  //>>>>>>>>>>>>nudefined

// jayre var ma true and false mukva ma aave tyare aene boolean type kevay 6e
// var iAmThapa = true;
// console.log(iAmThapa);
// console.log(typeof(iAmThapa)); //>>>>>>>>>>>>Boolean

// var iAmThapa = false;
// console.log(iAmThapa);
// console.log(typeof(iAmThapa)); //>>>>>>>>>>>Boolean

// =========================task-----------------------

// console.log(false - true);

// 10 + "20"              //>>>>>> 1020
// 9 -"5"                 //>>>>>> 4
// "java" + "script"      //>>>>>> javascript
// " " + " "              //>>>>>>
// " " + 0                //>>>>>>  0
// "naimish" - "thapa"    //>>>>>> NaN
// true + true            //>>>>>> 2
// true + false           //>>>>>> 1
// false + true           //>>>>>> 1
// false - true           //>>>>>> -1

// ========================interview que=====================

// difference between null vs nudefined

// console.log(iAmThapa);
// var iAmThapa = null;   //>>>>>> null
// null ka data type Object he
// var iAmThapa;          //>>>>>> nudefined

// ==============what is NaN?========================
// NaN //>>>>>>> Not a number

//  var myPhoneNumber = 9876543210;
//  var myName = "naimish";

// console.log(isNaN(myPhoneNumber));     //>>>>> false
// console.log(isNaN(myName));            //>>>>> true

// ====================task===============================

// console.log(Number.isNaN(NaN));
// NaN === NaN;             //>>>> false
// Number.NaN === NaN;      //>>>> false
// isNaN(NaN);              //>>>> true
// isNaN(Number.NaN);       //>>>> true
// Number.isNaN(NaN);       //>>>> true

// (3)=====================Expressions and Operators=============

// 6 type Operators

// 1 assignment Operators
// 2 arithmetic Operators
// 3 comparison Operators
// 4 logical Operators
// 5 String Operators
// 6 conditional (ternary) Operators

// ===============1 assignment Operators=======
// var x = 5;
// var y = 5;
// console.log("is both the x and y are equal or not" + x == y);   //>>>> false
// console.log(`is both the x and y are equal : ${x == y}`);      //>>>> true

// =================2 arithmetic Operators=================

// console.log(3+3);       //>>>> 6
// console.log(10-5);      //>>>> 5
// console.log(20/5);      //>>>> 4
// console.log(5*6);       //>>>> 30
// console.log("Remainder Operator " + 81%8);  //>>>> 1

// ==================3 comparison Operators==========

// ============postfix data==============
// var num = 15;           //>>> 16                      var num = 15;           //>>> 14
// var nuNum = num++;      //>>> 15                      var nuNum = num--;      //>>> 15
// var nuNum = num++ + 5   //>>> 20                      var nuNum = num-- + 5   //>>> 20
// console.log(num);       //>>> 16                      console.log(num);       //>>> 14
// console.log(nuNum);     //>>> 15                      console.log(nuNum);     //>>> 15

// =============prefix data==============

// var num = 15;           //>>> 16                      var num = 15;           //>>> 14
// var nuNum = ++num;      //>>> 16                      var nuNum = --num;      //>>> 14
// var nuNum = ++num + 5;  //>>> 21                      var nuNum = --num + 5;  //>>> 19
// console.log(num);       //>>> 16                      console.log(num);       //>>> 14
// console.log(nuNum);     //>>> 16                      console.log(nuNum);     //>>> 14

// =================3 comparison Operators=========

// ******equal(==)*********
// var a = 30
// var b = 30
// console.log(a == b);   //>>> true

// var a = 15;
// var b = 12;
// console.log(a == b);  //>>>> false

// ******notequal(=!=)*********
// var a = 15;
// var b = 12;
// console.log(a != b);  //>>>>true

// var a = 30;
// var b = 30;
// console.log(a != b);  //>>>>false

// var a = 15;
// var b = 12;

// ============Greater than(>)==
// console.log(a > b);  //>>> true

// ======Greater than or equal==
// console.log(a >= b);  //>>> true

// =========less than===================
// console.log(a < b);  //>>> false

// ======less than or equal==/
// console.log(a <= b);  //>>> false

// ==============4 logical Operators============

// var a = 12;
// var b = -30;

// ===logical and (&&)=============

// and ni value ek karta vadhe hoi to j thay 6e
// and ma ek b false aave to badha false
// and ma badha true aave to true

// console.log(a > b && b > 0);    //>>> false
// console.log(a > b && b < 0);    //>>> true

// ===logical or (||)=============

// or ni value ek karta vadhe hoi to j thay 6e
// or ma ek pan value true aave to value true j aave
// or ma badhi value false thay to j value false aave

// console.log(a > b || b > 0);       //>>>true
// console.log(a < b || b > 0);       //>>>false

// ============LOGICAL NOT(!)============
// console.log(!false);   // >>> true
// console.log(!true);    // >>> false

// ===============5 String Operators==============

// ======== String (+)====
// console.log("hello world");

// var myName = "hello";
// console.log(myName + " world");

// console.log("hello " + "world");

// ========================control statement & loops====================
// 1 if and else
// 2 switch statement
// 3 while loop
// 4 Do-while loop
// 5 for loop
// 6 for in loop
// 7 for of loop
// 8 conditional (ternary) Operators

//(1) ======if and else ===============

// var year = 2020;

//  if(year % 4 === 0){
//    if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("the year " + year + " is a leap year");
//         }
//         else{
//             console.log("the year " + year + " is not a leap year");
//         }
//    }else{
//     console.log("the year " + year + " is a leap year");
//    }
//  }else{
//     console.log("the year " + year + " is not a leap year");
//  }

// var age = 17;
// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("you can't vote");
// }

// var age = 17;
// console.log((age >= 18) ? "you can vote" : "you can't vote");

// javascript ma 5 value false che
// 1 0
// 2 ""
// 3 undefined
// 4 null
// 5 NaN

//(2) ===============switch statement=============

// 1 st without break statement
// find the Area of circle, triangle and rectangle?

// var area = "rectangle" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//     console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("the area of the rectangle is : " + (l*b));
// }else{
//     console.log("please enter valid data");
// }

// switch(area){
//     case 'circle':
//         console.log("the area of the circle is : " + PI*r**2);
//         break;
//     case 'triangle':
//         console.log("the area of the triangle is : " + (l*b)/2);
//         break;
//     case 'rectangle':
//         console.log("the area of the rectangle is : " + (l*b));
//         break;
//     default:
//         console.log("please enter valid data");
//         break;
// }

// =================my task===============
// var area = "black"
// var a=20, b=30;

// switch(area){
//     case 'white':
//     console.log("the withe color :" + a+b);
//     break;
//     case 'black':
//     console.log("the withe color :" + a*b);
//     break;
//     case 'bule':
//     console.log("the withe color :" + a+b);
//     break;
//     default:
//         console.log("not a color number");
//         break;

// }

// (3)===========while loop=====================

// var ma value aapi hoi ae darsve ti nathi

// var num=1;
// while (num <= 10){
//     console.log(num);
//     num++;
// }

// (4)===========do-while loop=====================

// var ma je value aapi hoi ae darsave j che

// var num=0;
// do{
//     console.log(num);
//     num++;
// }while (num <= 10);

//(5) ============for loop====================

// for(var num=0; num <= 10; num++){
//     console.log(num);
// }

// ================task====================

// 1 8
// 2 9
// 3 12
// 4 15

// for(var num = 1; num <= 10; num++){
//     var tableOf = 15;
// // console.log(tableOf + " * " + num + " = " + tableOf * num);
// console.log( ` ${tableOf} * ${num} = ${tableOf * num}`);
// }

// for (var bum = 3; bum <= 20; bum++){
//     var tableOf = 8;
// console.log(tableOf + " * " + bum + " = " + tableOf * bum);
// console.log(` ${tableOf} * ${bum} = ${tableOf * bum}`);
// }

// for (var num =1; num <= 50; num++){
//     var tableOf = 12;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

// =======================TypeScript Type Aliases==========================

// const { data: blogDetail } = await
// data: bloddetail name change ne (Aliases) name kevay

// =======================function=============================

// var a = 20;
// var b = 30;
// var sum = a+b;
// console.log(sum);

// upar mathi function ma aavi rite lakhvama aave che

// function sum(){
//     var a = 10, b = 20;
//     var total = a+b;
// }

// =========calling a function========

// function sum(){
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
// }
// sum();

// function parameter vs function argumenet=============

// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }
// sum();
// sum(20,30);
// sum(12,15);

// =========function Expressions=============

// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }
// var funExp = sum(5,10);

// ==============return Keyword===================

// function sum(a,b){
//     return total = a+b;
// }
// var funExp = sum(5,10);
// console.log("the sum of two no is " + funExp);     // >>>>>>the sum of two no is 15
// ===============anonymous-functions======================

// var funExp = function(a,b){
//     return total = a+b;
// }
// var sum = funExp(12,15);
// console.log('the sum of two no is ' + sum );           // >>>>>the sum of two no is 27

// =============let, ver, const===================

// var ==> function scope
// let and const ==> block scope

// var myName = "naimish";
// console.log(myName);   //>>>yes

// let myName = "naimish";
// console.log(myName);    //>>>yes

// const myName = "naimish";
// console.log(myName);      //>>>no

// function biodata(){
// let myFirstName = "naimish";
//     console.log(myFirstName);

//     if(true){
//     let myLastName = "kapuriya";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerouter ' + myLastName);
// }
// biodata();

// =========template literals=================

// for(let num = 1; num <= 10; num++){
//     let tableOf = 12;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);  //>>>>>>>>> old
// }

// for(let num = 1; num <= 10; num++){
//         let tableOf = 12;
//         console.log( ` ${tableOf} * ${num} = ${tableOf * num}`); //>>>>>>>>>> new
//     }

// ============default parameters===================

// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(5));

// =====fat arror function========

// console.log(sum());

// function sum(){
//     let a = 5; b = 6;
//     let sum = a+b;
// return `the sum of the two number is ${sum}`;
// }

// const sum = () => `he sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum());

// =================array=====================

// var myFriends = ['naimish','smit','trushal'];
// console.log(myFriends[1]);

// length of Element of an Array
// (1)==========================
// khali value na number darsave 6e

// var myFriends = ['naimish','smit','trushal'];
// console.log(myFriends.length);                  //>>>>>>>>>>>> 3

// (2)===============================
// khali value nu name darsave 6e
// length -1 meis last name darsave

// var myFriends = ['naimish','smit','trushal'];
// console.log(myFriends[myFriends.length - 1]);       //>>>trushal

//(6)===========for in loop================
// for loop to navigat
// badha value name darsave 6e

// var myFriends = ['naimish','smit','trushal','vairag','ronak','jenish','1'];
//  for(var i=0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// =======================after for ..in and for ..of=============

// (1)>>>>>>for in====================
// for in loop ma array na index Number aape
// index mins Number

// var myFriends = ['naimish','smit','trushal','vairag','ronak','jenish','1'];
// for(let element in myFriends){
//     console.log(element);              //>>>>>>>>>>>>>>>>>>>> 0,1,2,3,4,5
// }

// (2)>>>>>>for of====================
// for of loop ma value na name darsave 6e
// Array mins name

// var myFriends = ['naimish','smit','trushal','vairag','ronak','jenish','1'];
// for(let element of myFriends){
//     console.log(element);              //>>>>>>>>>naimish,smit,trushal,vairag,ronak,jenish
// }

// =====================Array.protoype.forEach==============
// forEach value ae badhi value ek sathe darsave 6e
// ex :>>>> number and name

// var myFriends = ['naimish','smit','trushal','vairag','ronak','jenish','1'];
// myFriends.forEach(function(element, index, array){
//     console.log(element + ' number : ' + index + " " + array);
// });

// ex:>>>>>> Element   Number  index         Array
//  naimish   Number    0     naimish,smit,trushal
//  smit      Number    1     naimish,smit,trushal

// ===============Array subsection ====================
// last ma name add kare

// const animals = ['pigs', 'goats', 'sheep'];
// animals.push('chicken', 'naimish');
// console.log(animals);

// ex:>>>>>>>>>> pigs, goots, sheep, chicken, naimish

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('chiken');
// console.log(animals);
// console.log(count);

// ex:>>>>>>>>>>>>> pige, goats, sheep
//                  4

// =============Array.prototype.unshift============
// fast ma name add kare

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.unshift('chiken');
// console.log(animals);
// console.log(count);

// const animals = ['pigs', 'goats', 'sheep'];
// animals.unshift('chicken', 'cats', 'cow');
// console.log(animals);

// const myNumbers = [4,3,2,1];
// myNumbers.unshift(5);
// console.log(myNumbers);

// const myName = ['naimish','smit','trushal'];
// myName.unshift('ronak','jenish');
// console.log(myName);

// =============Array.prototype.pop============
// last name ne unsend kare

//  const plants = ['naimish', 'smit', 'trushal', 'ronak', 'badsahah'];
//  console.log(plants);
//  console.log(plants.pop());
//  console.log(plants);

// =============Array.prototype.shift============
// fast name ne unsend kare

//  const plants = ['naimish', 'smit', 'trushal', 'ronak', 'badsahah'];
//  console.log(plants);
//  console.log(plants.shift());
//  console.log(plants);

// =========================task========================

// const months = ['jun', 'march', 'april', 'june', 'july'];
//  const newMonth = months.splice(5,0,"dec");
//  console.log(months);

// const months = ['jun', 'march', 'april', 'june', 'july'];
// const newMonth = months.splice(1,1,"feb");
// console.log(months);

// const months = ['jun', 'march', 'april', 'june', 'july'];

// const indexOfMonth = months.indexOf('june');
//  if(indexOfMonth != 1){
//     const updateMonth = months.splice(indexOfMonth,1,'June');
//     console.log(months);
//  }
//  else{
//     console.log('no such data found');
//  }

// ===========fatten an Array=============
// const arr =[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8'],
// ];
// let flatArr = arr.reduce((accum, currVal) => {
//         return accum.concat(currVal);
// })
// console.log(flatArr);

// let myName = "naimish kapuriya";
// let myLastName = 'kapuriya';
// let ytName = new String("naimish");

// console.log(myName);
// console.log(myLastName);
// console.log((ytName));

// ===========escape character ==================
// jyare "" no upyog kari ne tyare under koi pan text hoi aene '' code ma levanu
// jyare '' no upyog kari ne tyare under koi pan text hoi aene "" code ma levanu
// and hoi to \"vikings\" (\ \) no upayog karvo

//  let anySentence = "we are the so-called 'vikings' from the north.";
//  console.log(anySentence);

// ==================indexOf String==================
// letter na number darsave

//  const myBioData = 'i am the naimish kapuriya';
//  console.log(myBioData.indexOf("kapuriya"))
//  ex: //>>> 17

// =================lastindexOf===================
//  last tetter darsve 6e

//  const myBioData = 'i am the naimish kapuriya';
//  console.log(myBioData.lastIndexOf("a"));
// //  ex: //>>> 24

// ==================searching foe a string in a string================
// indexOf type ni jem j darsave 6e

// const myBioData = "i am a naimish kapuriya";
// let sData = myBioData.search('s');        //>>>>>>>>>>> 7
// console.log(sData);

// ===============================extracting string parts===================================

// 1 slice(start, end)
// 2 substring(start, end)
// 3 substr(start, length)

// (1)=================slice==================
// var str = "apple, bananaa, kiwi";
// let res = str.slice(7);        // >>>>>>>>>.. bananna, kiwi
// console.log(res);

// var str = "apple, bananaa, kiwi";
// let res = str.slice(0,4); // >>>>>>>> appl
// console.log(res);

// var str = "apple, bananaa, kiwi";
// let res = str.slice(4,-3);  // >>>>>> else, bananaa, k
// console.log(res);

// ====================task===========================
// o thi 280 teat lava mate

// let myTweets = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ipsum est. Praesent ullamcorper sem a diam accumsan, quis eleifend felis sagittis. Donec sed pharetra libero. Sed tempor tortor quis pulvinar rhoncus. Phasellus sit amet porta leo. Nulla a consectetur ligula, quis sollicitudin risus. Pellentesque condimentum laoreet augue at tempus. Integer tristique nisl hendrerit euismod molestie. Curabitur ut dictum erat. Cras dolor dolor, fringilla quis ex at, pharetra blandit dolor. Ut at tellus auctor, finibus metus sed, convallis mi. Praesent ut ullamcorper mi. Vestibulum fermentum semper feugiat. Vivamus bibendum elit at congue ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nunc at arcu iaculis auctor."

// let myAcutualtweet = myTweets.slice(0,280);
// console.log(myAcutualtweet);
// console.log(myAcutualtweet.length);

// (2)==============substring====================

// var str = "apple, bananaa, kiwi";
// let res = str.substring(10,-1); // >>>>>>>>>. apple, ban
// console.log(res);

// (3)=================substr=======================

// var str = "apple, bananaa, kiwi";
// let res = str.substr(-4);   // >>>>>>>>>>> kiwi
// console.log(res);

// ==============================replacing String content===============
// ==========searchFor, replacewith=================

// ==================replace========
// fast name ne j change kare

// let myBioData = `i am naimish kapuriya naimish`;
// let replaceData = myBioData.replace('naimish', 'Naimish');
// console.log(replaceData);

// ex:>>> i am Naimish kapuriya naimish
// ==================replaceAll========
// badha name ne change kare

// let myBioData = `i am naimish kapuriya naimish`;
// let replaceData = myBioData.replaceAll('naimish', 'Naimish');
// console.log(replaceData);

// ex:>>> i am Naimish kapuriya Naimish

// ===================extracting String characters===============
// 1 charAt (position)
// 2 charCodeAt (position)
// 3 property access [ ]

// (1)=================charAt================
// hello world no careter batve kya number par che aem

// let str = "HELLO WORLD";
// console.log(str.charAt(6));

// ex:>>>>>>>>> w

// (2)===========charCodeAt==================
// number darsave che

// let str = "HELLO WORLD";
// console.log(str.charCodeAt(2));

// =============split method====================
// spcing mate upyo thay 6e

// var txt =  ' a, b, c  d, e';
// console.log(txt.split("  "));
// console.log(txt.split(" , "));
// console.log(txt.split(" | "));

// live time and date====================

// let currDate = new Date();
// console.log(currDate);

// ex: >>>>>>> 2023-04-27T09:42:35.616Z

// console.log(new Date());
// console.log(new Date().toDateString());

// ex: >>>>>>>>> Thu Apr 27 2023

// console.log(new Date());
// console.log(new Date().toString());

// ex: >>> Thu Apr 27 2023 15:31:57 GMT+0530 (India Standard Time)

// console.log(Date.now());
// ex: >>>> 1682590211150

// ======new date (year, month)=================
//  var d = new Date(2021);
//  console.log(d.toLocaleString());

//  ex: >>>>>> 5/1/2021, 10:33:30 am

//========== new date ( datestring)

//  var d = new Date("decober 12, 2014 11:13:00")
//  console.log(d.toLocaleString());

//  ex:>>>> 12/12/2014, 11:13:00 am

// ========new date (millisecond)

// var d = new Date(0); >>>>>>>>>1/1/1970, 5:30:00 am
// var d = new Date(8640000*2);  >>>>>>>>>> 1/1/1970, 10:18:00 am
// console.log(d.toLocaleString());

// ================Date method================
// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// ex: >>>>>>>>>>> 27/4/2023, 5:09:06 pm
// 2023
// 3
// 27
// 4
// ===========time method==================

// const curTime = new Date();
// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// ex: >>> 1688911574299
// 19
// 36
// 14
// 299

// ==================math Object=============================
// maths ma pi ni value

// console.log(Math.PI);
// ex: >> 3.141592653589793

// ===========math.round()=======================
// jyare value 10 aapi hoi tyare (.) pachi no number 5 ke 5 upar hoi to 11 thay jay
// and (.) pachi 4 ke 4 thi neeche hoi to value hoi tem j rahe 6e

// let num = 10.5556;  // >>> 11
// let num = 10.4556;  // >>> 10
// console.log(Math.round(num));

// ===========Math.pow()====================

// console.log(Math.pow(2,3));
// ex: >>> 8

// ================Math.sqrt()==============

// console.log(Math.sqrt(25));   // >> 5
// console.log(Math.sqrt(81));   // >> 9
// console.log(Math.sqrt(12));  // >> 3.4641016151

// ===============Math.abs()============
// (-)value lakhva thi (+) value j aave

// console.log(Math.abs(-55));         // 55
// console.log(Math.abs(-55.5));       // 55.5
// console.log(Math.abs(-955));        // 955
// console.log(Math.abs(2-6));         // 4

// ============Math.ceil()================
// value 99 hoi tyare value ma 99 j aave
// ex >>> 99 ==> 99
// jyare value ma 99 ma (.) pachi kai pan value add kare to 100 thy jay
// ex>>>>> 99.51 ==> 100

// console.log(Math.ceil(99.51));

// ===========Math.floor()=============
// (.)pachi ni value add nathi thati
// console.log(Math.floor(4.7));
// ex: >>> 4

// ==============Math.min()==================
// savthi nani value darsave
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// ex:>>> -200

// ==============Math.max()==================
// savthi moti value darsve
// console.log(Math.max(0, 150, 30, 20, -8, -200));
// ex:>> 150

// =============Math.random()=============
// 1 thi 9 ma koi b number aave
// console.log(Math.floor(Math.random()*10));

// ========Math.truce()======================
// (.)pela ni value j add thay ane ae (+,-) bane value add kare che
// console.log(Math.trunc(4.6));       // >>>> 4
// console.log(Math.trunc(-55.6));     // >>>> -55

// ====================================what we will do===========================

// 1 window vs document
// 2 DOM VC BOM
// 3 DOM navigation
// 4 searching and getting Element reference

// ex=====1
// console.log(this.alert('Awesome'));

// ex==========2
// function myName() {
//     console.log(this);
// }
// myName();

// ex======3
// var myNames = 'naimish';
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// ex=======4

// const obj = {
//     myAge : 26,
//     myName : ()  =>  {
//         console.log(this);
//     }
// }
// obj.myName();

// ====================task=============================

// let bioData = {
//     myName : {
//         realName : "naimish",
//         channelname : 'kapuriya'
//     },
//      myAge : 26,
//      getData () {
//         console.log(`my name is ${this.myName.channelname} and my age is ${this.myAge}`);
//      }
// }
// bioData.getData();

// Array destructuring==============

// const myBioData = ['naimish', 'smit', 26, 'trushal'];

// let [myFName,myLName, myAge, myTName] = myBioData;
// console.log(myTName);

// object destructuring==============

// const myBioData = {
//     myFname : 'naimish',
//     myLname : 'kapuriya',
//     myAge : 26
// }

// let {myFname,myLname, myAge } = myBioData;
// console.log(myBioData);

// // ===========Object properties===========

// let myName = 'naimish';
// const myBio = {
//     [myName] : "hello how are you ?",
//     [20] : "is my age"
// }

// console.log(myBio);

// let myName = 'naimish';
// let myAge = 20;

// const myBio = {         // >>>> old
//     myName : myName,
//     myAge : myAge
// }

// const myBio = {myName, myAge}   // >>>> new
// console.log(myBio);

// ======================Spread operator=======================

// const colors = ['red', 'green', 'blue', 'white'];
// ex: >>>>> [ 'red', 'green', 'blue', 'white' ]

// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];
// ex: >>>>  [ 'red', 'green', 'blue', 'white', 'yellow', 'black' ]

// const MyfavColor = [ 'yellow', 'black', ...myColors];
// ex: >>>> [ 'yellow', 'black', 'red', 'green', 'blue', 'white' ]
// console.log(MyfavColor);

// ===========================================(2016)=========ES7=============================================

// (1)Array includes============

// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const ispresent = colors.includes('red');
// console.log(ispresent);

// (2) ** =======================

// console.log(2**2);

// ===========================================(2017)=========ES8=============================================

// (1) String padding======
// (2)Object.values()===
// (3)Object.entries()======

// (1) String padding======
// const message = "my name is naimish";

// (2)Object.values()===

// const person = {name: 'Fred', age: 87};
// console.log(Object.values(person));
// ex:>>>>>> [ 'Fred', 87 ]

// (3)Object.entries()======
//
// const person = {name: 'Fred', age: 87};
// console.log(Object.entries(person));
// ex: >>> [ [ 'name', 'Fred' ], [ 'age', 87 ] ]

// ===========================================(2018)=========ES8=============================================

// const person = {name: 'Fred', age: 87};
// const sPerson = {...person};
// console.log(person);
// console.log(sPerson);
// ex:>>>> { name: 'Fred', age: 87 }

// const arr =[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7',  ['zone_7',['zone_7','zone_8'],'zone_8'],'zone_8'],
// ];
// console.log(arr.flat(4));
// ex: >>>> [
//     'zone_1', 'zone_2',
//     'zone_3', 'zone_4',
//     'zone_5', 'zone_6',
//     'zone_7', 'zone_7',
//     'zone_7', 'zone_8',
//     'zone_8', 'zone_8'
//   ]

// ===========================================(2020)=========ES=============================================

// (1)BigInt==============
// jyare moto numbar hot tyarer number pachal (n) lakhva ma aave 6e

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);

// const newNum = 9007199254740991n + 17n;
// console.log(newNum);
// ex:>>>>9007199254741008n

// console.log(typeof newNum);
// typeof>>>>> BigInt

// =====                   =====                   =====                   =====                   =====                   =====
//     =====           =====   =====           =====   =====           =====   =====           =====   =====           =====   =====
//         =====   =====           =====   =====           =====   =====           =====   =====           =====   =====           =====
//             =====                   =====                   =====                   =====                   =====                   =====

// function looseJsonParse(obj) {
//     return eval(`(${obj})`);
//   }
//   console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Date() }"));

// function looseJsonParse(obj) {
//   function Date() {}
//   return eval(`(${obj})`);
// }
// console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Date() }`));

// function Date(n) {
//   return [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ][n % 7 || 0];
// }
// function runCodeWithDateFunction(obj) {
//   return Function("Date", `"use strict";return (${obj});`)(Date);
// }
// console.log(runCodeWithDateFunction("Date(0)")); // Saturday

// const str = "if (a) { 1 + 1 } else { 1 + 2 }";
// let a = true;
// let b = eval(str);

// console.log(`b is: ${b}`); // b is: 2

// a = false;
// b = eval(str);

// console.log(`b is: ${b}`); // b is: 3

// console.log(9007199254740991 + 2); // 9007199254740992
// console.log(9007199254740991 + 3); // 9007199254740992

// function showMessage(from, text) { // parameters: from, text
//   console.log(from + ': ' + text);
// }

// showMessage('Ann', 'Hello!');
// showMessage('Ann', "What's up?");

// function showMessage(num, text){
//   console.log(num + ': ' + text);
// }

// showMessage(10, "naimish");

// function fastName (num, name){
//   console.log( ` ${num} + ${ name} = ${num / name} `);
// }

// fastName("kapuriya","naimish");
// fastName(10,20);

// function showMessage(from, text) {

//   from = '*' + from + '*'; // make "from" look nicer

//   console.log(`${from} : ${text}`);
// }

// let from = "Ann";

// showMessage(from, "Hello"); // *Ann*: Hello

// console.log(from);

// function miniMaxSum(arr) {
//   arr.sort((a, b) => a - b)
//   let first = arr.slice(0, -1);
//   let last = arr.slice(4)

//   let minSum = first.reduce((a, b) => a + b, 0);
//   let maxSum = last.reduce((a, b) => a + b, 0);

//   console.log(minSum + " " + maxSum)
//   }
//   miniMaxSum([1,2,3,4,5]);

// let n = 10
// let right = ""

// for (let i = 1; i <= n; i++){
//   for (let j = 1; j <= i; j++){
//      right += "*"
//   }
//    right += "\n"
// }

// console.log(right)

// =====================left side triangle==================
// let n = 5;
// let s ="";
// for (i = 0; i <= n; i++) {
//   for (j = 0; j <= i; j++) {
//     s = s + ("*");
//   }
//   s = s + ("\n");
// }

// console.log(s);

// =====================right side triangle==================

// let n = 10;

// for (i = 0; i <= n - 1; i++) {
//   for (j = 1; j <= n - i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// let n = 5;
// let y = "";
//  for(i = 0; i <= n; i++){
//   for(j = 0; j <= n - i; j++){
//       y = y + ("*");
//   }
//  y = y + ("\n")
// }
// console.log(y);

// const naimish = require("./second");
// const naimish = require("./osmodule")

// console.log("hello world", naimish);

// let a = 10;
// let b = 4;
// console.log("a + b =", a+b);    // 14
// console.log("a - b =", a-b);    // 6
// console.log("a / b =", a/b);    // 2.5
// console.log("a ** b =", a**b);  // 10000
// console.log("a % b =", a%b);    // 2
// console.log("++a =", ++a);      // 11
// console.log("a++ =", a++);      // 11
// console.log("a-- =", a--);      // 12
// console.log("--a =", --a);      // 10
// console.log("a = ", a);         // 10
// console.log("a-- =", a--);      // 10

// let assignment = 1;
// assignment += 5;
// console.log("a is now = ", assignment);     // 6
// assignment -= 5;
// console.log("a is now = ", assignment);     // 1
// assignment *= 5;
// console.log("a is now = ", assignment);     // 5
// assignment /= 5;
// console.log("a is now = ", assignment);     // 1

// console.log('Hello Treehouse');

// console.log('This is a string', { foo: 'bar' }, { bar: 'foo' });

// var number = 11 * 9;
// var color = 'red';

// console.log('%d %s balloons', number, color);

// console.log('%cThis text is styled!',
// 'color: #86CC00; background-color: blue; font-size: 20px; padding: 3px;')

// var count = 5;
// console.assert(count > 10, 'count is not larger than 10');

// console.dir(document.body);
// console.info('Hello Treehouse');

// 1.Action
// javascript = object

// action type = increment, decrement
