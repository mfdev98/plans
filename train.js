// MIT 14 TASK A
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

console.log('===========');

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