//KUBUS
// function jumlahVolumeKubus(a, b) {
// 	var volumeA;
// 	var volumeB;

// 	volumeA = a * a * a;
// 	volumeB = b * b * b;

// 	total = volumeA + volumeB;

// 	return total;
// }

// alert(jumlahVolumeKubus(8, 3));
// alert(jumlahVolumeKubus(10, 15));


//1# PARAMETER DAN ARGUMENT 1
// function tambah(a,b){
// 	return a + b;
// }

// var a = parseInt(prompt('Masukkan nilai 1 :'));
// var b = parseInt(prompt('Masukkan nilai 2 :'));
// // var hasil = tambah(a,b);
// var hasil = tambah(a*2,b*2);
// console.log(hasil);

// //2# PARAMETER DAN ARGUMENT
// function tambah(a,b){
// 	return a + b;
// }
// function kali(a,b){
// 	return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);


//1# ARGUMENTS => array yang berisi nilai yang dikirimkan saat fungsi dipanggil.
// function tambah(){
// 	return arguments;
// }
// var coba = tambah(5,10,20,"hi",false);
// console.log(coba);

//2# ARGUMENTS
// function tambah(){
// 	return arguments;
// }
// var coba = tambah(5,10,20,"hi",false);
// console.log(coba);

//3# ARGUMENTS
// function tambah(){
// 	var hasil = 0;
// 	for (var i = 0; i < arguments.length; i++) {
// 		hasil += arguments[i];
// 	} 
// 	return hasil;
// }

// var coba = tambah(1,2,3,4,5);
// console.log(coba);


// REFACTORING ==> a.Readability b.DRY(Don't Repeat Yourself) c.Testability d.Performance e.Maintainability.
// function jumlahVolumeKubus(a, b) {
// 	return a * a * a + b * b * b;
// }

// alert(jumlahVolumeKubus(8, 3));


// VARIABLE SCOPE
// global scope / window scope
// var a = 1;
// function tes(){
// 	// name conflict
// 	var a = 2;
// 	// console.log(window.a);
// }

// tes();
// console.log(a);


// REKURSIF ==> Sebuah fungsi  yang memangggil dirinya sendiri. 
// function tampilAngka(n){
// 	console.log(n);
// 	return tampilAngka(n-1);
// }
// tampilAngka(10);

// Bace Case =>Kondisi Akhir dari rekursif yagn menghasilkan nilai.
// function tampilAngka(n){
// 	// Base Case
// 	if (n === 0) return;

// 	console.log(n);
// 	return tampilAngka(n-1);
// }
// tampilAngka(10);

// REKURSIF= semua looping bisa dibuat rekursif, tapi tidak sebaliknya.
// function faktorial(n){
// 	var hasil = 1
// 	for (var i = n; i > 0; i--) {
// 		hasil *= i;
// 	}
// 	return hasil;
// }
// console.log(faktorial(5));

// function faktorial(n){
	// rekursif
// 	if (n === 0) return 1;
// 	return n * faktorial(n-1);
// }
// console.log(faktorial(5));


// FUNCTION DECLARATION VS FUNCTION EXPRESSION
// Function Declaration.
// function identifier(ParemeterList:Optional) {FunctionBody}.
// Implementasi sprti dibawah:
// function tampilPesan(nama){
// 	alert('halo' + nama);
// }
// tampilPesan('Sandhika Galih');

// // Function EXPRESSION = Namun disimpan kedalam sebuah Variabel.
//  function identifier:Optional(ParemeterList:Optional) {FunctionBody}.
// Implementasi sprti dibawah:
// var tampilPesan = function(nama){
// 	alert('halo' + nama);
// }
// tampilPesan('Sandhika Galih');






















