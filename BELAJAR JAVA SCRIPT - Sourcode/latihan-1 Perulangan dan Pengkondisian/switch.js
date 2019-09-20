// //Pengkondisian If-Else yg akan mengarah ke SWITCH
// //fungsi prompt tetap akan membaca setiuap inputan adlh STRING/Kata
// var angka = prompt('Masukkan angka :');
// //fungsi parseInt  akan membaca setiap inputan adlh INTEGER/Angka
// var angka = parseInt(prompt('Masukkan angka :'));

// if (angka === '1') {
//     alert('anda memasukkan angka 1');
// } else if (angka === '2') {
//     alert('anda memasukkan angka 2');
// } else if (angka === '3') {
//     alert('anda memasukkan angka 3');
// } else {
//     alert('angka yang anda masukkan salah!');
// }


// //Pengkondisian SWITCH
// //meskipun yang di inputkan adlh angka(integer) fungsi 'prompt' tetap akan membacanya sebagai STRING/kata
// // var angka = prompt('Masukkan angka :');

// // switch (angka) {
// //     case '1':
// //         alert('anda memasukkan angka 1');
// //         break
// //     case '2':
// //         alert('anda memasukkan angka 2');
// //         break;
// //     case '3':
// //         alert('anda memasukkan angka 3');
// //         break;
// //     default:
// //         alert('angka yang anda masukkan salah');
// //         break; 2
// // }

// pengkondisian SWITCH dgncth: makanan/minuman sehat
var item = prompt('masukkan nama makanan / minuman : \n(cth : nasi, daging, susu, hamburger, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('anda memasukkan makanan/minuman yang salah!');
        break;
}