let joy = document.getElementById("kitoblar");
let bosh = document.getElementById("bosh");

let kitoblar = localStorage.getItem("kitoblar");

if(kitoblar == null){

    kitoblar = [];

}

function chiqar(){

    joy.innerHTML = "";

    if(kitoblar.length == 0){

        bosh.style.display = "block";

    }else{

        bosh.style.display = "none";

    }

    for(let i = 0; i < kitoblar.length; i++){

        let karta = document.createElement("div");

        karta.className = "kitob";

        karta.innerHTML = `
            <div class="muqova">
                ${kitoblar[i].rasm}
            </div>

            <h3>${kitoblar[i].nom}</h3>

            <p>${kitoblar[i].muallif}</p>

            <button class="delete">Delete</button>
        `;


    }

}

chiqar();