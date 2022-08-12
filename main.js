// var name = 'abduhamid'
// let age = 17;
// const string = "12";
// console.log(age)
// console.log(string);
// console.log(name.slice(0 , 4));


// let a = +prompt("son kiriting");
// let b = +prompt("2 son kiriting");
// // c = a + b;
// // console.log(
// //     c
// // );
// // document.write(c);
// // alert(c);
// if ( c = a + b) {
//     alert(c)
// }else {
//     alert(b);
// }
// + - %  **
// let a = +prompt("a sonni kiriting");
// alert(a / 100+ "m");

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// let see = prompt("Ko'zing ko'radimi buni ha bo'lsa 1 yo'q bo'lsa 0");
// let prava = prompt("pravang bormi buni ha bo'lsa 1 yo'q bo'lsa 0");

// if (see > 0 &&  prava > 0) {
//     alert("hayday olasan");
// } else {
//     alert("hayday olmisan");
// }

// let second = 36600018413270490;
// let hour = 3600;
// let min = 60;
// let hourValue = Math.floor(second / hour);
// let minutValue = second %= hour;
// let secondValue = minutValue %= min;

// console.log(`${hourValue}soat ${minutValue}minut ${secondValue}`);
// let soat = Math.floor(second / hour);
// let mins = soat / min;





// Uyga vazifalar

// misol-1


// let a = +prompt("sonni kiriting uni metri chiqib keladi");
// alert(a / 100+"m");



// misol-2

// let a = +prompt("kg kiriting");
// let tonna = 1000;
// alert (a/ tonna+"tonna")

// misol-3

// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");
// let d = Math.floor(a/b)
// alert(d);

// misol-4

// let a = +prompt("a son kiriting");
// let b = (Math.floor(a / 10) * 10)
// let c = a %= 10
// alert(`${b}o'nliklar son ${c}birliklar`)


// misol-5

// let a =+prompt("a son kiriting");

// let first = Math.floor(a / 10);

// let second = a % 10;
// alert(first + second)

// misol-6
// let a = +prompt("a son kiriting");

// let first = Math.floor(a / 10);

// let second = a % 10;
// alert(first * second)


// misol-7

// let a = +prompt("aaa son kiriting");
// let b = (Math.floor(a / 100) * 100)

// let c = a %= 100;
// console.log(b)
// console.log(c)


// misol-8

// let second = 9676877;
// let hour = 3600;
// let min = 60;
// let hourValue = Math.floor(second / hour);
// let minutValue = second %= min;
// console.log(`${hourValue}soat ${minutValue}minut`);

// misol-9


// let a = +prompt("a son kiriting");

// if (a >0) {
//     alert("bu son butun sondir");
// } else {
//     alert("bu son manfi");
// }


// misol-10

// let a = +prompt("a son kiriting");

// if (a % 2 == 1 && 3 && 5 &&  7 && 9) {
//     alert("bu son toq");
// } else {
//     alert("bu son juft");
// }


// misol-11

// let a = +prompt("a son kiriting");

// if (a <0) {
//     alert("bu son manfi");
// } else {
//     alert("bu son musbat");
// }


// misol-12

// let a = +prompt("a butun son kiriting");
// let b = +prompt("b butun son kiriting");
// if (a % 2 ==0 && b %2 ==0) {
//     alert(true);
// } else (
//     alert(false)
// )

// misol-13

// let name = ("sonlarning eng kattasi a kiyin b kiyin c bo'lsa true bo'lsin")
// alert(name);
// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let c = +prompt("c sonni kiriting");
// if (a > b && b > c) {

//     alert(true);
// } else {
//     alert("ketma ketlikda adashtingiz")
// }


// misol-14

// let a =+prompt ("a son kiriting");
// let b = +prompt("b son kiriting");
// let c = +prompt("c son kiriting");

// if (a<b && b<c) {
//     alert(true);
// } else {
//     alert(false);
// }

// misol-15

// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");
// let c = +prompt("c son kiriting");
// let d = +prompt("d son kiriting");

// if (a > 0 && b > 0 && c > 0 && d > 0) {
//     alert(true);
// }
// else {
//     alert(false);
// }

// misol-16

// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");
// let c = +prompt("c son kiriting");
// let d = +prompt("d son kiriting");

// if (a > 0 && b > 0 && c > 0 && d > 0 || a < 0 && b < 0 && c > 0 && d > 0 || a > 0 && b > 0 && c < 0 && d < 0 || a < 0 && b > 0 && c < 0 && d > 0 || a > 0 && b < 0 && c > 0 && d < 0 || a < 0 && b > 0 && c > 0 && d > 0 || a > 0 && b < 0 && c > 0 && d > 0 || a > 0 && b > 0 && c < 0 && d > 0 || a > 0 && b > 0 && c > 0 && d < 0) {
//     alert(true);
// } else {
//     alert(false);
// }

// misol-17

// let a = +prompt("Hafta kunlarin kiriting");
// if (a == 1) {
//     alert("Dushanba");
// } else if (a == 2) {
//     alert("Seshanba")
// } else if (a == 3) {
//     alert("chorshanba")
// } else if (a == 4) {
//     alert("payshanba")
// } else if (a == 5) {
//     alert("juma")
// } else if (a == 6) {
//     alert("shanba")
// } else if (a == 7) {
//     alert("odix")
// } else {
//     let b = +prompt("Bunday Hafta kuni yo'q Yana qayta urinig");

//     if (b == 1) {
//         alert("Dushanba");
//     } else if (b == 2) {
//         alert("Seshanba")
//     } else if (b == 3) {
//         alert("chorshanba")
//     } else if (b == 4) {
//         alert("payshanba")
//     } else if (b == 5) {
//         alert("juma")
//     } else if (b == 6) {
//         alert("shanba")
//     } else if (b == 7) {
//         alert("odix")
//     } else {
//         alert("bunday xafta kuni yo'q");

//     }
// }


// misol-18

// let a = +prompt("Telni Qaysi kompanyadaligini aniqlab beraman!");
// if (a == 99 || a == 95) {
//     alert("Uzmobile")
// } else if (a == 94 || a == 93) {
//     alert("Ucell");

// } else if (a == 90) {
//     alert("Beline")
// } else if (a == 97 || a == 78) {
//     alert("UMS")
// } else {
// let a = +prompt("Bu nomerni yaqinda abduhamid akam chiqaradi Tri againg");

// if (a == 99 || a == 95) {
//     alert("Uzmobile")
// } else if (a == 94 || a == 93) {
//     alert("Ucell");

// } else if (a == 90) {
//     alert("Beline")
// } else if (a == 97 || a == 78) {
//     alert("UMS")
// } else {
//     alert(" Uzir siz odam emasiz");

// };
// };

// misol-19

// let a = +prompt("a son kiriting");
// if (a > 0) {
//     alert
//         (++a)
// } else if (a < 0) {
//     alert(--a)
// } else {
//     alert("I'm understand")
// }

// misol-20

// let a = +prompt("a son kiriting");
// if (a > 0) {
//     alert
//         (a+3)
// } else if (a < 0) {
//     alert(a-2)
// } else {
//     alert("Um...oh.. I'm understand")
// }

// misol-22

// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");

// if (a > b) {
//     alert("a son kartta  " + a)

// } else if (a < b) {
//     alert("b soni katta " + b)
// } else if (a == b) {
//     alert("a va b soni teng " + a + " " + b)
// } else {
//     alert("I didn't understand");
// }

// misol-23

// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");
// let c = +prompt("c son kiriting");

// if (a > b && a>c) {
//     alert("a son kartta  " + a)

// } else if (b>a && b>c) {
//     alert("b soni katta " + b)
// } else if (c > a && c > b) {
//     alert("c soni eng kattasi " + c)
//  } else if (a == b && a==c || b==a && b==c || c==a && c==b)  {
//     alert("a va b , c soni teng " + a + ",  " + b +"  "+c)
// } else {
//     alert("I didn't understand");
// }

// misol-24

// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");
// let c = +prompt("c son kiriting");

// if (a < b && a<c) {
//     alert("a son kichigi  " + a)

// } else if (b<a && b<c) {
//     alert("b soni kichigi " + b)
// } else if (c < a && c < b) {
//     alert("c soni eng kichigi " + c)
//  } else if (a == b && a==c || b==a && b==c || c==a && c==b)  {
//     alert("a va b , c soni teng " + a + ",  " + b +"  "+c)
// } else {
//     alert("I didn't understand");
// }