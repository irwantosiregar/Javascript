// var s = '';
// for (i = 0; i < 5; i++) {
//     s += '*';
//     s += '\n';
// }
// console.log(s);

//loop for bersarang-1
// var s = '';
// for (i = 0; i < 10; i++) {
//     for (var j = 0; j < 5; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);


// //loop for bersarang-2 [Bintang 1 s/d 5 dimulai dari kiri]
// var s = '';
// for (i = 0; i < 5; i++) {
//     for (var j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//loop for bersarang-2 [Bintang 10 s/d 1 dimulai dr kiri]
// var s = '';
// for (i = 10; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//loop for bersarang-2 [Bintang 10 s/d 1 dimulai dr kanan]
var s = '';
for (i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);
