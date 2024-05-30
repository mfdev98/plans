// E-TASK

// Shunday function tuzing, u bitta string argumentini qabul qilib,
// qabul qilingan stringni teskari ko'rinishda return qilsin

// MASALAN: getReverse("hello"); return qilsin "olleh"

function getReverse(str) {
    console.log(str.split('').reverse().join(''));
}

getReverse("hi");