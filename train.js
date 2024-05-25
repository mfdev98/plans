// C-TASK

// Shunday class tuzing nomi Shop va
// uni constructoriga 3 hil mahsulot pass bolsin,
// hamda classning 3ta methodi bolsin, biri qoldiq,
// biri sotish va biri qabul. Har bir method ishga
// tushganda vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2);
// shop.qoldiq() return hozir 20:40da 4ta non,
// 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq()
// return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// const moment = require('moment');
// class Shop {

//    constructor(a, b, c) {
//       this.a = a;
//       this.b = b;
//       this.c = c;
//    }

//    sotish(productName, count) {

//       switch (productName) {
//          case 'non':
//             this.a -= count;
//             break;
//          case 'lagmon':
//             this.b -= count;
//             break;
//          case 'cola':
//             this.c -= count;
//             break;
//       }
//    }

//    qoldiq() {
//       const time = moment().format("HH:mm");
//       console.log(`QOLDIQ: hozir ${time}da ${this.a}ta non, ${this.b}ta lagmon, va ${this.c}ta cola mavjud `);
//    }

//    qabul(productName, count) {

//       switch (productName) {
//          case 'non':
//             this.a += count;
//             break;
//          case 'lagmon':
//             this.b += count;
//             break;
//          case 'cola':
//             this.c += count;
//             break;
//       }
//    }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish('non', 3);
// shop.qabul('cola', 4);
// shop.qoldiq();

console.log('===C-TASK===');

// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin,
// hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function countDigits(s) {
//         let a = /[^0-9]/g;
//         let n=0;
//         n=s.replace(a, "");
//         console.log(n.length);
//     }

// countDigits('ad2a54y79wet0sfgb9');

console.log('===B-TASK===');

// A-TASK
// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

// function countLetter(a, b) {
//     let count = 0;
//     for(let i = 0; i < b.length; i++){
//         if(a == b.charAt(i)){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countLetter('e', 'engineer');

console.log('===A-TASK===');

//[21-22] NodeJS event loop, Callback, Asynchronous functionlar
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling",    // 0-20
//     "togri boshliq tanlang va koproq hato qiling",   // 20-30
//     "uzingizni ishlaringizni boshlang",    // 30-40
//     "yishlarga investitsiya qiling",    // 40-50
//     "siz kuchli bolgan narsalarni qiling",  // 50-60
//     "endi dam oling, foydasi yoq",  // 60~
// ];

// define callBack function by setTimeOut
// function maslahatBering(a, callBack) {
//     if(typeof a !== 'number') callBack("insert a number", null);
//     else if(a <= 20) callBack(null, list[0]);
//     else if(a > 20 && a <= 30) callBack(null, list[1]);
//     else if(a > 30 && a <= 40) callBack(null, list[2]);
//     else if(a > 40 && a <= 50) callBack(null, list[3]);
//     else if(a > 50 && a <= 60) callBack(null, list[4]);
//     else {
//         setTimeout(function() {
//             callBack(null, list[5]);
//         }, 5000);
//     }
// }

// define callBack function by setInterval
// function maslahatBering(a, callBack) {
//     if(typeof a !== 'number') callBack("insert a number", null);
//     else if(a <= 20) callBack(null, list[0]);
//     else if(a > 20 && a <= 30) callBack(null, list[1]);
//     else if(a > 30 && a <= 40) callBack(null, list[2]);
//     else if(a > 40 && a <= 50) callBack(null, list[3]);
//     else if(a > 50 && a <= 60) callBack(null, list[4]);
//     else {
//         setInterval(function() {
//             callBack(null, list[5]);
//         }, 1000);
//     }
// }

// call callBack function
// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     else {
//       console.log('javob:', data);
//     }
// });
// console.log('passed here 1');




// define async function
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number", null);
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(list[5]);
//     }, 5000);
// });
//     setInterval(() => {
//         resolve(list[5]);
//     }, 1000);
// });
// return list[5];
// setTimeout(function() {
//     return list[5];
// }, 5000);
//     }
// }

// then/catch
// console.log('passed here 0');
// maslahatBering(10)
// .then((data) => {
//     console.log('javob:', data);
// })
// .catch((err) => {
//     console.log('ERROR:', err);
// });
// console.log('passed here 1');

// async/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }

// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
// }
// run();