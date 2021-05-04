
var bilangan1;
var bilangan2;

function ubahBilangan1(){
    bilangan1 = parseInt(prompt("Masukkan Bilangan 1"));
    document.getElementById("bilangan-1").innerHTML = "Bilangan 1: " + bilangan1;
}

function ubahBilangan2(){
    bilangan2 = parseInt(prompt("Masukkan Bilangan 2"));
    document.getElementById("bilangan-2").innerHTML = "Bilangan 2: " + bilangan2;
}

function cariHasil(){

    if (bilangan1==bilangan2){
        document.getElementById("hasil").innerHTML = "kedua bilangan sama besar."
    }else {
        if(bilangan1 > bilangan2){
            document.getElementById("hasil").innerHTML = "bilangan 1 lebih besar dari bilangan 2.<br/> Karena " + bilangan1 + " > " + bilangan2 + ".";
        }else {
            document.getElementById("hasil").innerHTML = "bilangan 2 lebih besar dari bilangan 1.<br/> Karena " + bilangan2 + " > " + bilangan1 + ".";
        }
    }

}