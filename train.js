// F-TASK
// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

function findDoublers(str) {
    for (let a = 0; a < str.length; a++) {
        for (let b = 1; b < str.length - a; b++) {
            if (str[a] === str[b + a]) {
                return console.log(false);
            }
        }
    }
    return console.log(true);
}
findDoublers("hello");