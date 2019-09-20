// Array = Kumpulan nilai, yang memiliki index.
// By Sandhika Galih : Array adalah variabel yang lebih sakti(karena bisa menampung lebih dari satu nilai).
// Object = kumpulan nilai, yang memiliki nama.
// By Sandhika Galih : Object adalah array yang lebih sakti(karena bisa menampung array).

// Ini adalah object LiterAL #1.
// var mhs = {
// 	nama : 'Irwanto Siregar',
// 	umur : 23,
// 	ips : [3.22, 2.95, 3.6, 2.95],
// 	alamat : {
// 		jalan : 'Jl. Industri  No.60',
// 		Kota : 'Tanjung Morawa',
// 		provinsi : 'Sumatera Utara'
// 	}
// };

// Ini adalah object LiterAL #2.
var mhs1 = {
	nama : 'Bang gadong',
	npm : 16110234,
	email : 'sigadong@gmail.com',
	jurusan : 'Teknik Informatika'
}

var mhs2 = {
	nama : 'Mustika Dewi',
	npm : 16110223,
	email : 'm-dewidua@gmail.com',
	jurusan : 'Teknik Informatika'
}

// Membuat Object dgn Function Declaration.
function buatObjectMahasiswa(nama, npm, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.npm = npm;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('Nadia Kumala Sari', 16110209, 'nadia-ksari@gmail.com', 'Teknik Informatika');

// Membuat Object dengan  ConsTructor Function.
function Mahasiswa(nama, npm, email, jurusan){
	// var this = {} => ini otomatis dibuatkan oleh j-script.
	this.nama = nama;
	this.npm = npm;
	this.email = email;
	this.jurusan = jurusan;
	// return this => otomatis dibuatkan JS.
}
// bedanya pemanggilan harus mnggunakan  keyword 'new'.
var mhs4 = new Mahasiswa('Adam', '16110223', 'adamrens@ymail.com', 'Teknik Informatika');













// Ini adalah object ConsTructor.





























































