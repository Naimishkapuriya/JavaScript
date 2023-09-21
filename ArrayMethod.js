// ===========Arrays are Objects=========

// (1)Array
// const person = ["John", "Doe", 46];
// console.log(person);    // John,Doe,46

// (2)Objects
// const person = {firstName:"John", lastName:"Doe", age:46};
// console.log(person.firstName)  // john

// ===========Array length ========
// const person = ["John", "Doe", 46];
// console.log(person.length)   // 3


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[0])  // Banana
// console.log(fruits[fruits.length-1]) // Mango


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const cars = ["BMW", "Mercedes", "Porsche "]
const color = ["red", "gerrn", "Yellow"]

// =========JavaScript Array toString()====
// Array ne string ma convert kare
// console.log(fruits.toString());     // Banana,Orange,Apple,Mango

// ===========join =============
// console.log(fruits.join("*"));          // Banana*Orange*Apple*Mango

// =========pop========
// last element remove kare

// console.log(fruits)          // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// console.log(fruits.pop())    // Mango
// console.log(fruits)          // [ 'Banana', 'Orange', 'Apple' ]

// =======JavaScript Array push() =====
// firts puch karva thi length batve
// and pachi log karva thi new value add thay
// console.log(fruits.push("kiwi"));      // 5
// console.log(fruits);                   // [ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]
 
// ===========JavaScript Array shift()======
// firts Array mathi firts name unsend thya
// console.log(fruits.shift());  // Banana
// console.log(fruits);          // [ 'Orange', 'Apple', 'Mango' ]

// JavaScript Array unshift()==========
// firts ma name add kare
// console.log(fruits.unshift("lemon"));  // 5
// console.log(fruits);        // [ 'lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

// =====JavaScript Array length===
// last ma name add karva mate
// console.log(fruits[fruits.length] ="kiwi");  // kiwi
// console.log(fruits);            // [ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]


// ====JavaScript Array delete()====
// Array Element delete karva mate
// console.log(delete fruits[0]); // true
// console.log(fruits);          // [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]

// ============concat()=====
// badha Array bhega karva mate
// last ma add thase 
// console.log(fruits.concat(cars));
// ======[
//     'Banana',   'Orange',
//     'Apple',    'Mango',
//     'BMW',      'Mercedes',
//     'Porsche '
//   ]

// console.log(fruits.concat(cars, color));
// ===== [
//     'Banana',   'Orange',
//     'Apple',    'Mango',
//     'BMW',      'Mercedes',
//     'Porsche ', 'red',
//     'gerrn',    'Yellow'
//   ]
  
// =========Array ma Element add karva mate use==
// last ma name add thya
// console.log(fruits.concat("name"));   // [ 'Banana', 'Orange', 'Apple', 'Mango', 'name' ]

// =============flat()====================

// const numbar = [[1,2], [3,4], [5,6]]
// console.log(numbar.flat());             // [ 1, 2, 3, 4, 5, 6 ]

// =============JavaScript Array splice()=======
// splice add and remove karva mate thay che
// (3) Element pachi bijo new Element add thase
// (1) no ming ae thay ke agl (3) Element pachi (1) Element delete kare che
// jo (1 ni jadiya 2 ) lakhvama aave to (2) Element delete karses

// console.log(fruits);       // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// console.log(fruits.splice(3,1, "dbf", "sdfs"));   // [ 'Mango' ]
// console.log(fruits);        // [ 'Banana', 'Orange', 'Apple', 'dbf', 'sdfs' ]

// =======Using splice() to Remove Elements=
// remove thay ae areray ma batve che
// console.log(fruits);
// console.log(fruits.splice(2,2, "name", "sdbh"));
// console.log(fruits);

// ===(3)lakhavthi 3 pachi na badha Element delete thay che
// console.log(fruits);      // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// console.log(fruits.splice(3));  // [ 'Mango' ]
// console.log(fruits);   // [ 'Banana', 'Orange', 'Apple' ]


// khali (1,2) lakhvani delete thay che
// (1) firts element delete thay and (2) 2 pachi no element delete thay
// console.log(fruits);                        // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// console.log(fruits.splice(1,2));            // [ 'Orange', 'Apple' ]
// console.log(fruits);                        // [ 'Banana', 'Mango' ]

// ========JavaScript Array slice()======
// firts no Element delete thay
// console.log(fruits);             // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// console.log(fruits.slice(1));   // [ 'Orange', 'Apple', 'Mango' ]

// (3)pachi na badha delete thy jay
// console.log(fruits);               // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// console.log(fruits.slice(3));      // [ 'Mango' ]

// (2)firts thi 2 Element delete kare 
// (3) pachi na badha element delete kare 
// console.log(fruits);              // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// console.log(fruits.slice(2,3));   // [ 'Apple' ]