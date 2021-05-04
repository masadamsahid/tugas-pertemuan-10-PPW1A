

hitungAngka = () => {
    var angka1 = Number(document.getElementById("angkaPertama").value)
    var angka2 = Number(document.getElementById("angkaKedua").value)

    var operation = document.getElementById("operasi").value

    //test sudah berhasil memanggil value dari angka1, angka2, dan operasi
    //Menampilkan dengan fungsi console.log() ✅
    console.log("angka pertama: "+angka1)
    console.log("angka kedua: "+angka2)
    console.log("jenis operasi :"+operation)


    var hasil

    if(operation==="+"){
        hasil = angka1+angka2
    }else if(operation==="-"){
        hasil = angka1-angka2
    }else if(operation==="*"){
        hasil = angka1*angka2
    }else if(operation==="/"){
        hasil = angka1/angka2
    }

    //Menampilkan dengan innerHTML ✅
    document.getElementById("hasilOperasi").innerHTML=hasil

}