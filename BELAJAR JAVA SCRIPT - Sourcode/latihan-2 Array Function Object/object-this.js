// MEMBUAT OBJECT

//cara 1 - Function Declaration
	// function halo() {
	// 	console.log('Halo !');
	// }
 // 	halo();


//cara 2 - Function Object literAL.
  // var obj = {};
  // obj.halo = function(){
  // 	console.log('Halo !');
  // }
  // obj.halo();


// //cara 3 - ConstructOR Function.
// 	function Halo(){
// 		console.log('Halo !');
// 	}
// 	new Halo();

// NB : Ketiga cara diatas hasilnya SAMA, tetapi konteks nya berBEDA! dari segi cara Membuat dan Memanggil.


	// #	*	#	*	#	#	*	#	*	#	
	// #	*	#	*	#	#	*	#	*	#	
	// #	*	#	*	#	#	*	#	*	#	


//  T - H - I - S.
// This adalah Sebuah keyword special yg secara otomatis didefenisikan pada setiap Function.
// // Contoh :
// console.log(this);
// console.log(window);
// console.log(window === this);
// var a = 10;
// console.log(this.a);
// console.log(window.a);
// NB : This adalah window adalah scope Global/Variabel global.

// Selanjutnya Membuat OBJECT dengan Konsep THIS. 
//cara 1 - Function Declaration dengan THIS.
	// function halo() {
	// 	console.log(this);
	// 	console.log('Halo !');
	// }
 // 	this.halo();
 	// NB : this dapat mengembalikan object Global


//cara 2 - Function Object literAL dengan THIS.
  // var obj = {a: 10, nama : 'irwan', jurusan : 'informatika'};
  // obj.halo = function(){
  // 	console.log(this);
  // 	console.log('Halo !');
  // }
  // obj.halo();
// NB : this mengembalikan object yang bersangkutan.


// //cara 3 - ConstructOR Function dengan THIS.
	// function Halo(){
	// 	console.log(this);
	// 	console.log('Halo !');
	// }
	// var obj1 = new Halo();
	// var obj2 = new Halo();
	// var obj3 = new Halo();
	// This mengembalikan object yang baru dibuat.

// NB : Ketiga cara diatas hasilnya SAMA, tetapi konteks nya berBEDA! dari segi cara Membuat dan Memanggil.
























