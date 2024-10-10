// 1. Massivdagi birinchi va oxirgi elementni chiqarish
// let number = [1, 2, 3, 4, 5];
// let first = number[0];
// let last = number[number.length - 1];

// console.log("Birinchi element ", first);
// console.log("Oxirgi element ", last);
// 2-misol
// let cars = ["Mercedes", 'BMW', "test", "onix", 5, true]
// cars[4] = "salom"
// console.log(cars);

// 3-misol
// let mevalar = [];
// mevalar.push("Banan");
// mevalar.push("Olam");
// mevalar.push("shaftoli")
// console.log(mevalar);

// 4-misol
// let  clothes = ["ko'ylak", "shim", "palto", "kostyum", ""];
// console.log(clothes.length);

// // 5-misol
// let uyNomlari = ["Sariq uy", "Qizil uy", "Yashil uy", "Moviy uy"];
// uyNomlari.push("Oq uy")

// console.log(uyNomlari);

// 6-misol
// let fruits = ["apple", "banana", "orange", "grape", "mango", "pear"];
// fruits.pop();
// console.log(fruits);

// 7-misol 
// let joyNomlari = ["Park", "Bog'", "Kafе", "Muzey"];
// joyNomlari.unshift("Teatr");
// console.log(joyNomlari);


// 8-misol
// let sabzavotlar = ["kartoshka", "sabzi", "piyoz", "bodring", "pomidor", "qalampir"];
// sabzavotlar.shift();
// console.log(sabzavotlar);

// 9-misol
// let num = [5, 15, 25, 35, 45];

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }


// 10-misol
// let raqamlar = [5, 10, 15, 20, 25];

// let qiymat = +prompt("son kiriting");

// if (raqamlar.includes(qiymat)) {
//     console.log("Mavjud");
// } else {
//     console.log("Mavjud emas");
// }



// For loop ga oid masalalar
// 1-misol
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }


// 2-misol
// let meva = ["shaftoli", "anor", "uzum", "Apelsin", "kivi"]

// for(let i=0 ; i<meva.length; i++){
//     console.log(meva[i]);
// }

// 3-misol
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log("Juft sonlar");
// for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] % 2 == 0) {
//         console.log(sonlar[i]);
//     }
// }

// 4-misol
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// console.log("Toq sonlar: ");
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 1) {

//         console.log(number[i]);
//     }
// }

// 5-misol
// let musbatNum = [1, 2, 3, -9, -10, 1, -2,]

// console.log("Musbat sonlar");
// for (let i = 0; i < musbatNum.length; i++) {

//     if (musbatNum[i] > 0) {

//         console.log(musbatNum[i]);
//     }

// }


// 6-misol
let numberTeskari = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Teskari sonlar:");

for (let i = numberTeskari.length - 1; i >= 0; i--) {
    console.log(numberTeskari[i]);
}

// 7-misol
// let numberSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let sum = 0;

// for (let i = 0; i < numberSum.length; i++) {
//     sum += numberSum[i]
// }
// console.log("Elementlar yig'indisi", sum);

// 8-misol
// let number = [11, 12, 13, 14, 15]

// let two = [];

// for (let i = 0; i < number.length; i++) {
//     two[i] = number[i] * 2;
// }
// console.log("Yangilangan massiv", two);

// 9-misol
// let num = [15, 25, 22, 35, 45, 55]

// let max = 0;

// for (let i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i]
//     }

// }
// console.log("Eng katta element ", max);

// 10-misol
// let sonlar = [25, 100, 200, 120, 5, 6, 9, 34];
// let min = sonlar[0];

// for (let i = 1; i < sonlar.length; i++) {
//     if (sonlar[i] < min) {
//         min = sonlar[i];
//     }
// }

// console.log("Eng kichik element:", min);

// 11-misol
// let number = [11, -11, 22, -23, -24, -100, -10, -20]
// console.log(`Manfiy sonlar`);
// for (let i = 0; i < number.length; i++) {
//     if (number[i] < 0) {
//         console.log(number[i]);
//     }
// }


// 12-misol
// let sonlar = [5, -3, 12, -7, 0, 9, -2, 4, -1];

// let sum = 0;

// for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] > 0) {
//         sum += sonlar[i];
//     }
// }

// console.log("Musbat sonlarning yig'indisi:", sum);


