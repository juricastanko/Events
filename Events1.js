document.getElementById("mojgumb").addEventListener("click", poziv);
var sttring="pozvali ste me";
function poziv(){
    document.getElementById("mojgumb2").innerHTML=sttring;
}

function funkcija(){
    alert("pritisnuli ste tipku")
}
function funkcija1(){
    alert("otpustili ste")
}
function funkcija2(){
    alert("stiscete tipku")
}

document.getElementById("slika").addEventListener("load", funkci);
function funkci() {
    alert("slika je ucitana")
}




