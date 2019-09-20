// http://hangsbreaker.blogspot.com/2014/12/javascript-perulangan-dan-segitiga.html
  document.write("- Segitiga 1 Rata kiri bawah<br><br>");
    for (var i=1;i<=5;i++){
        for (var j=1;j<=i;j++){
            document.write("*");
        }
        document.write("<br>");
    }
    document.write("- Segitiga 2 Rata kiri atas<br><br>");
    for (var i=1;i<=5;i++){
        for (var j=i;j<=5;j++){
            document.write("*");
        }
        document.write("<br>");
    }
    document.write("- Segitiga 3 Rata kanan bawah<br><br>");
    for (var i=1;i<=5;i++){
        for (var j=i;j<=5;j++){
            document.write("_");
        }
        for (var k=1;k<=i;k++){
            document.write("*");
        }
        document.write("<br>");
    }
    document.write("- Segitiga 4 Rata kanan atas<br><br>");
    for (var i=1;i<=5;i++){
        for (var j=1;j<=i;j++){
            document.write("_");
        }
        for (var k=i;k<=5;k++){
            document.write("*");
        }
        document.write("<br>");
    }
 
   
document.write("- Piramida 1 | Segitiga sama kaki<br><br>");
    for (var i=1;i<=5;i++){
        for (var j=i;j<=5;j++){
            document.write("_");
        }
        for (var k=1;k<=i;k++){
            document.write("*");
        }
        for (var l=1;l<=i-1;l++){
            document.write("*");
        }
        document.write("<br>");
    }
    document.write("- Piramida 2 Segitiga sama kaki terbalik<br><br>");
    for (var i=1;i<=5;i++){
        for (var j=1;j<=i;j++){
            document.write("_");
        }
        for (var k=i;k<=5;k++){
            document.write("*");
        }
        for (var l=i+1;l<=5;l++){
            document.write("*");
        }
        document.write("<br>");
    }


// SUMBER
        // var baris, i = 0;
        // var nilai_prompt = prompt("Tinggi: ", ""); 
        // var tinggi=parseInt(nilai_prompt);
 
        // for (baris = 0; baris <= tinggi ; baris++) {
 
        // // memBuat sejumlah spasi
        // for (i = 1; i <= tinggi - baris; i++) {
        // document.write(" "); // Karakter spasi
        //  }
 
        // // menampilkan bintang
        // for (i = 1; i < 2 * baris; i++) {
        // document.write("*"); }
 
        // // Pindah baris
        // document.write("\n"); }