// MEMBUAT OBJECT ANGKOT BY WEB UNPAS
// function Angkot(sopir, trayek, penumpang, kas){
// 	this.sopir = sopir;
// 	this.trayek = trayek;
// 	this.penumpang = penumpang;
// 	this.kas = kas;

// 	this.penumpangNaik = function(namaPenumpang){
// 		this.penumpang.push(namaPenumpang);
// 		return this.penumpang;
// 	}

// 	this.penumpangTurun = function(namaPenumpang, bayar){
// 		if (this.penumpang.length === 0) {
// 			alert('Angkot masih kosong');
// 			return false;
// 		}
// 		for (var i = 0; i < this.penumpang.length; i++) {
// 			if (this.penumpang[i] == namaPenumpang) {
// 				this.penumpang[i] = undefined;
// 				this.kas += bayar;	
// 				return this.penumpang;
// 			}
// 		}

// 	}

// }

// var angkot1 = new Angkot('irwan siregar', ['Cicaheum', 'Cibiru'], [], 0);
// var angkot2 = new Angkot('Raja Parhata', ['Antapani', 'Ciroyom'], [], 0);





// MEMBUAT OBJECT ANGKOT. Next Project> Modifikasi/Refair By. Irwan_Sigadong.
function Angkot(sopir, trayek, penumpang, kas){
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang){
		if (this.penumpang.length == 0) {
			this.penumpang.push(namaPenumpang);
			return this.penumpang;	
		} else if(this.penumpang == false){
			alert('Anda tidak jadi naik angkot !!');
			return this.penumpang;
		} else{
			for (var i = 0; i < this.penumpang.length; i++) {
				if(this.penumpang[i] == namaPenumpang){
					alert('Upss.. ' + namaPenumpang + ' sudah ada di dalam angkot !!');
					return this.penumpang;
				} 
			}
			for (var i = 0; i < this.penumpang.length; i++) {
				if (this.penumpang[i] == undefined){
					this.penumpang[i] = namaPenumpang;
					return this.penumpang;
				} else if( i == this.penumpang.length - 1){
					this.penumpang.push(namaPenumpang);
					return this.penumpang;
				}

			}
		}
}



	this.penumpangTurun = function(namaPenumpang, bayar){
		if (this.penumpang.length === 0) {
			console.log('Angkot masih kosong. Silahkan naik..');
			return false;
		}
		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined;
				this.kas += bayar;	
				return this.penumpang;
			} else if(i == this.penumpang.length - 1){
				alert('Upss.. ' + namaPenumpang + ' tidak ada di dalam angkot !!');
				return this.penumpang;	
			}

		}

	}

}

var angkot1 = new Angkot('irwan siregar', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Raja Parhata', ['Antapani', 'Ciroyom'], [], 0);