// // TAMBAH PENUMPANG
// var penumpang = ['Irwan', undefined, 'Regar','Galih'];
var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if (penumpang.length === 0) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function.
		return penumpang;
	} else{
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if (penumpang[i] == undefined) {
				// tambah penumpang dikursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array & keluar dari function.
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if (penumpang[i] == namaPenumpang) {
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' sudah ada di dalam angkot');
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika seluruh kursi terisi
			else if (i == penumpang.length - 1 ){
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang){
		if (penumpang.length === 0) {
			console.log('Angkot masih kosong!');
			return penumpang;
		} else{
			for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined;
			return penumpang;
			} else if(i == penumpang.length - 1){
			console.log(namaPenumpang + ' Tidak ada di dalam angkot');
			return penumpang;
		}
	}
}
}



 






// DARI KOMENTAR YT WPU : TOKO FARSA
// var penumpang = ['Sandika', undefined, 'Doddy' ];

// var tambahPenumpang = function(namaPenumpang, penumpang) {
// 	if( penumpang.length == 0 ) {
// 	 penumpang.push(namaPenumpang);
// 	 return penumpang;
// 	} else { 
// 		 for( var i = 0; i < penumpang.length; i++ ) {
// 		  if( penumpang[i] == namaPenumpang ) {
// 		  console.log(namaPenumpang + ' sudah ada di dalam angkot.');
// 		  return penumpang;
// 		}
// 	}
// 		for( var i = 0; i < penumpang.length; i++ ) { 
// 		  	if( penumpang[i] == undefined ) {
// 		  		penumpang[i] = namaPenumpang;
// 		  		 return penumpang;
// 		  	}else if ( i == penumpang.length - 1 ) {
// 	 		 	 penumpang.push(namaPenumpang);
// 	  			 return penumpang;
// 	 			} 
// 			}

// 	}
// }


// DARI KOMENTAR YT WPU : EKO SAPUTRO
// var penumpang = ['Maria', undefined, 'dimas'];
// function tambahPenumpang(nama, array) { 
//  if(array.indexOf(nama) > -1){
//   console.log(nama + " sudah ada di dalam angkot")
//  } else{
//  	var kursiKosong = array.findIndex(Object.is.bind(null, undefined));
// 	if(kursiKosong >= 0){
// 		array[kursiKosong] = nama;
// 	} else{
// 		array.push(nama);
//   	}
//  }
//  return array;
// }


// // DARI KOMENTAR YT WPU : REFAN FERNANDO
// var penumpang=['refan','fernando'];
// var ulangi=true;
//  var tambahPenumpang= function (nama,penumpang){
//   if(penumpang==""){
//    penumpang.unshift(nama);
//    console.log('Penumpang pertama dengan nama '+nama+' berhasil ditambahkan')
//   }else{
//    var temukan=penumpang.find(function(x){
//      return x==nama;
//     });
//    //console.log(temukan);
//    if  (nama==temukan){
//      console.log('Penumpang dengan nama '+nama+' tersedia'); 
//    }else {
//     var hasil="";
//     for(var i=0;i<penumpang.length;i++){
//      if(hasil=="berhasil"){
//       penumpang[i]=penumpang[i];
//      }else if(penumpang[i]=='udenfined'){
//       var hasil="berhasil";
//       penumpang[i]=nama;
//      }
//     }
//     if(hasil!="berhasil"){
//      penumpang.push(nama); 
//     }
//     console.log('Penumpang dengan nama '+nama+' berhasil ditambahkan');
//    }

//   }
//   console.log('jumlah penumpang ada '+penumpang.length+' yaitu :'+penumpang.join(','));
//  }

//  var hapusPenumpang = function (nama,penumpang){
//   var hasil="";
//   var index=0;
//   for(var i=0;i<penumpang.length;i++){
//    if(penumpang[i]==nama){
//     hasil="berhasil";
//     penumpang[i]='udenfined';
//    }
//   }
//   if (hasil=="berhasil"){
//    console.log('Penumpang dengan nama '+nama+' telah keluar dari angkot');
//   }else{
//    console.log('tidak menenumkan penumpang dengan nama '+nama);
//   }
   
//   console.log('Penumpang yang tersedia saat ini : '+penumpang.join(','));
//  }

// while(ulangi){
//  var pil=prompt('Ketik 1 memasukan penumpang, ketik 2 turunin penumpang : ');
//  switch (pil){
//   case '1':
//    var nama=prompt('Nama Penumpang Masuk:');
//    tambahPenumpang(nama,penumpang);
//   break; 
//   case '2':
//    var nama=prompt('Nama Penumpang Turun:');
//    hapusPenumpang(nama,penumpang);
//   break; 
//  }
//  ulangi=confirm('ulangi aplikasi ?: ');
// }