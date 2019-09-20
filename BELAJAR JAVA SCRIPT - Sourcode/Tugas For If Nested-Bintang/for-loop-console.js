// 1.A Segitiga Bintang Rata Kiri Bawah
// var s = '';
// for (var i = 5; i > 0; i--) {
// 	for (var j = 5; j >= i; j--) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// 		console.log(s)

// // 1.B * Kiri Rata Bawah
// var s = '';
// for (var i = 0; i < 5; i++) {
// 	for (var j = 0; j <= i; j++) {
//  		s += '*';
// 	}
//  		s += '\n';
// }
// 	console.log(s);

// // 2.A Segitiga Bintang Rata Kanan Bawah
// var s = '';
// for (var i = 5; i > 0; i--) {
// 	for (var j = 0; j < i; j++) {
//  		s += ' ';
// 	}
// 	for (var k = 5; k >= i; k--) {
//  		s += '*';
// 	}
//  		s += '\n';
// }
// 	console.log(s);

// // 2.B * Rata Kanan Bawah
// var s = '';
//     for (var i = 0; i < 5; i++){
//         for (var j = 5; j > i; j--){
// 	 		s += ' ';
//         }
//         for (var k = 0; k <= i; k++){
// 	 		s += '*';
//         }
// 	 		s += '\n';
//     }
//     console.log(s);
    
// // 2.C * Rata Kanan Bawah
// var s = '';
//     for (var i = 0; i < 5; i++){
// 	    for (var j = i; j < 5; j++){
// 	 		s += ' ';
// 	    }
// 	    for (var k = 0; k <= i; k++){
// 	 		s += '*';
// 	    }
// 	 		s += '\n';
// }
// 	console.log(s);

// // 3.A Segitiga Bintang Rata Kiri Atas
// var s = '';
//     for (var i = 0; i <= 5; i++){
//         for (var j = i; j <= 5; j++){
//  		s += '*';
//         }
//  		s += '\n';
//     }
// 	console.log(s);

// // 3.B * Kiri Atas
// 	var s = '';
//     for (var i = 0; i <= 5; i++){
//         for (var j = 5; j >= i; j--){
//  		s += '*';
//         }
//  		s += '\n';
//     }
// 	console.log(s);



// // 4.A Segitiga Bintang Rata Kanan Atas
var s = '';
    for (var i = 0; i <= 5; i++){
        for (var j = 0; j <= i; j++){
	 		s += '+';
        }        
        for (var k = i; k <= 5; k++){
	 		s += '*';
        }
 		s += '\n';
    }
	console.log(s);

// // 3.B * Kanan Atas
// var s = '';
//     for (var i = 5; i > 0; i--){
//         for (var j = 5; j <= i; j--){
// 	 		s += '+';
//         }        
//         for (var k = i; k > 0; k--){
// 	 		s += '*';
//         }
//  		s += '\n';
//     }
	// console.log(s);

// 5.A Segitiga Sama Kaki .
// var s = '';
//     for (var i = 0; i < 5; i++){
//         for (var j = i; j < 5; j++){
// 	 		s += '+';
//         }
//         for (var k = 0; k < i; k++){
// 	 		s += '*';
//         }
//         for (var l = 0; l<= i; l++){
// 	 		s += '*';
//         }
// 	 		s += '\n';
//     }
//     console.log(s);

// 5.B * Sama Kaki .
// var s = '';
// 	for( i = 5; i > 0; i--){
// 	    for(j = 0; j < i; j++){
// 	 		s += '+';
// 	    }
// 	    for(k = 5; k > i; k--){
// 	 		s += '*';
// 	    }
// 	    for(l = 5; l >= i; l--){
// 	 		s += '*';
// 	    }
// 	 		s += '\n';
// 	}
//     console.log(s);

// 5.C * Sama Kaki .
// var s = '';
//     for (var i = 0; i < 5; i++){
//         for (var j = 5; j > i; j--){
// 	 		s += ' ';
//         }
//         for (var k = 0; k <= i; k++){
// 	 		s += '*';
//         }
//         for (var l = 0; l<= i-1; l++){
// 	 		s += '*';
//         }
// 	 		s += '\n';
//     }
//     console.log(s);


// 6.A * Sama Kaki Terbalik.
// var s = '';
//     for (var i = 0; i < 5; i++){
//         for (var j = 0; j <= i; j++){
// 	 		s += ' ';
//         }
//         for (var k = i; k < 5; k++){
// 	 		s += '*';
//         }
//         for (var l = i+1; l < 5; l++){
// 	 		s += '*';
//         }
// 	 		s += '\n';
//     }
//     console.log(s);

//     // 6.B * S-Kaki Terbalik.
// var s = '';
//     for (var i = 0; i < 5; i++){
//         for (var j = 0; j <= i; j++){
// 	 		s += ' ';
//         }
//         for (var k = 5; k >i; k--){
// 	 		s += '*';
//         }
//         for (var l = 5; l > i+1; l--){
// 	 		s += '*';
//         }
// 	 		s += '\n';
//     }
//     console.log(s);

// 7. Segitiga Sepasang/ Diamon
// var s = '';
//  var nol = 0;
//  var lima = 5;
// 	for(var i = lima; i > nol; i--){
// 	    for(var j = nol; j < i; j++){
// 	 		s += '+';
// 	    }
// 	    for(var k = lima; k >= i; k--){
// 	 		s += '*';
// 	    }
// 	    for(var z = lima; z > i; z--){
// 	 		s += '*';
// 	    }
// 	 		s += '\n';
// 	}
// 	for(var x = nol; x <= lima; x++){
// 	    for(var m = nol; m < x ; m++){
// 	 		s += '+';
// 	    }
// 	    for(var n = lima; n >= x; n --){
// 	 		s += '*';
// 	    }
// 	    for(var l = lima; l > x; l--){
// 	 		s += '*';
// 	    }
// 	 		s += '\n';
// 	}
// console.log(s);

//2. Pola jajaran genjang
var s = '';
 var nol = 0;
 var lima = 5;
 
  for (var i = nol; i < lima; i++) {
  	for ( var j= nol; j <= i; j++) {
	 		s += '*'; 
	   }
	 		s += '\n';
  }
  for (var i = lima; i >= nol; i--) {
  	for (var j = lima; j > i; j--) {
	 		s += ' ';
   }
   for (var k = nol; k <= j; k++) {
	 		s += '*';
   }
	 		s += '\n';
}
  console.log(s);
 