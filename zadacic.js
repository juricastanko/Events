var ja= {
    ime: "Jurica",
    prezime:"Stanko",
    mjestostanovanja:"Lučko",
    razred:"3.",
    godina:"2016/2017"

};


function funkcija(){
    ja.ime=document.getElementById("ime").value;
    ja.prezime=document.getElementById("prezime").value;
    for(var a in ja) {
        if (a == "ime" || a == "prezime") {
            console.log(ja[a]);
        }
        var on = new Object();
        on.ime="bobe";
        on.prezime="bobo";
        on.godine=30;
        var ona = new Object();
        console.log(on || ona);
    }

}