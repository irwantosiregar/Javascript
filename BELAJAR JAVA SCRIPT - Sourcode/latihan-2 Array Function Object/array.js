// ARRAY => tipe data yang digunakan untuk mendeskripsikan kumpulan elemen(nilai atau variabel), yang tiap-tiap elemennya memiliki index
// By Sandhika Galih : Array adalah variabel yang lebih sakti(karena bisa menampung lebih dari satu nilai).
// array multidimensi/multi brsarang
// var myFunc = function(){
// 	alert('Hello World');
// }
// // var myArr2 = ['teks',2,false,myFunc];
// var myArr3 = ['teks',2,false,myFunc,[4,[7,8,9],6]];
// console.log(myArr3[4][1][2]);


// MANIPULASI ARRAY
// 1.Menambah isi array
// var arr = [];
// arr[0] = "Irwanto Siregar";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// arr[6] = "Doddy";
// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Irwanto", "Siregar", "Nofa"];
// arr[1] = undefined;
// console.log(arr);

// Menampilkan isi array
// var arr = ["Irwanto", "Nofa", "Doddy"];

// for (var i = 0; i < arr.length; i++) {
// 	console.log('Mahasiswa ke-' + (i+1) +' : ' + arr[i]);
// }

// METHOD pada ARRAY
// var arr = ['Sandhika', 'Galih', 'Nofa'];
// 1.Join
// console.log(arr.join(' - '));

// 2.PUSH & POP = Push(Menambah) & Pop(Menghapus object terakhir)
// arr.push('Doddy','Fitri');
// arr.pop();
// console.log(arr.join(' - '));

// 3.UNSHIFT & SHIFT
// Unshift(Menambah elemen baru di awal array)
// Shift(Menghapus elemen yd ada di awal array)
// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join(' - '));

// 4.SPLICE & Slice
// var arr = ['Sandhika', 'Galih', 'Nofa','Sarah'];
//a. Splice(menyambung/menambah): utk Menyisipkan sebuah elemen tepat berada ditengah-tengah elemen pada array.
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...dst)
// arr.splice(2, 0, 'Doddy', 'Fitri');
// console.log(arr.join(' - '));


//b. Slice(Mengiris): Bila ingin mengambil beberapa elemen pada array utk menjadi array yg baru.
// slice(awal,akhir)= elemen awal itu terbawa dan akhir sebagai batas acuan. slice jg mnghasikan array baru.
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));


//5. FOREACH & MAP
// a. Foreach = Tidak Mengembalikan elemen array
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Sandhika', 'Galih', 'Nofa'];
// for (var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }
// angka.forEach(function(e){
// 	console.log(e);
// })
// nama.forEach(function(e, i){
// 	console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })

// b. Map = Mengembalikan elemen array
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e){
// 	return e * 2;
// })
// 	console.log(angka2.join(' - '));

// 6. SORT : Mengurutkan
	// var angka = [1,2,5,3,6,8,4];
	// angka.sort();
	// console.log(angka.join(' - '));

// var angka = [1,2,10,5,20,3,6,8];
// angka.sort(function(a, b){
// 	return a-b;
// });
// console.log(angka.join(' - '));

// 7.FILTER & FIND
// Filter : utk Mencari nilai pada array dan mengembalikannya dalam bentuk array.
var angka = [1,2,10,5,20,3,6,8];
// var angka2 = angka.filter(function(x){
// 	return x> 5;
// })
// console.log(angka2.join(' - '));

// Find : utk Menemukan satu nilai, tidak sprti Filter.
var angka2 = angka.find(function(x){
	return x > 5;
})
console.log(angka2);


















