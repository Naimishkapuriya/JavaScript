// ==================string method=============

// var a= "Lorem Ipsum is simply dummy text.";
// var b= "of the printing";
// let text= "5";


// console.log(a);                               // <=== Lorem Ipsum is simply dummy text.

//(1) length
// length === > 0 thi start thay length 
// console.log(a.length);                         // <==== 33

//(2) slice
// (3, 10) === 3 thi text sharu thase and 10 text end thase
// console.log(a.slice(3,10));                    // < === em Ipsu
// (10 ) === 10 pachi na badha text 
// console.log(a.slice(10));                      // < === m is simply dummy text.
// (-10) === end thi 10 pachi na badha text  
// console.log(a.slice(-10));                     // < === ummy text.
// (-10,-3) === -10 ae end text aave or -3 end thi aave
// console.log(a.slice(-10,-3));                  // < === ummy te

// (3) substring
// (6,10) == 6 thi sharu thase and 10 ae texat end thase
// console.log(a.substring(6, 10));                // < === Ipsu

// (4) substr
// (6,7) == 6 text nai aave pachi 6 pachi 7 taext aavse
// console.log(a.substr(6,7));         // Ipsum i
// (6) == text 6 thi sahru thase
// console.log(a.substr(6));         //  Ipsum is simply dummy text.
// (-6) == text end -6 thase
// console.log(a.substr(-4));      //  ext.

// (5) replace
// name change karva mate
// console.log(a.replace("Lorem", "naimish"));

// (6) replaceAl

// console.log(a.replaceAll("Lorem", "lorem"));

// (7)toUpperCase
// console.log(a.toUpperCase());

// (8)toLowerCase
// console.log(a.toLowerCase());

// (9)concat
// console.log(a.concat(" ", b)); // Lorem Ipsum is simply dummy text. of the printing

// (10)trim
// start thi or and space remove kare
// console.log(a.trim());

// (11)trimStart
// start thi sapce remove kare
// console.log(a.trimStart());

// (12)trimEnd
// end thi sapce remove kare
// console.log(a.trimEnd());

// (13)padStart
// only Number
// console.log(text.padStart(6, "0")); //000005
// console.log(text.padStart(6,"N"));  //NNNNN5

// (14)padEnd
// console.log(text.padEnd(6, "0")); //500000
// console.log(text.padEnd(6,"N"));  //5NNNNN

// (15)charAt
// console.log(a.charAt(2));  // r

// (16)charCodeAt
// console.log(b.charCodeAt(3));

// (17)split
// 1.(",") 2.(" ") 3.("|")
// var numbar = "1,2,3,4,5"
// console.log(numbar.split(",")); // [ '1', '2', '3', ' 4', '5' ]
// console.log(numbar.split(" "));  // [ '1,2,3,4,5' ]
// console.log(numbar.split("|"));  // [ '1,2,3,4,5' ]