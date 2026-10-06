let royxat = document.getElementById("royxat");
let sayt = document.getElementById("sayt");

let ism = document.getElementById("ism");
let email1 = document.getElementById("email1");
let parol = document.getElementById("parol");
let kirish = document.getElementById("kirish");
let xato = document.getElementById("xato");

kirish.addEventListener("click", function(){

    if(ism.value == "" || email1.value == "" || parol.value == ""){

        xato.textContent = "Hamma joyni to'ldiring!";

    }else{

        royxat.style.display = "none";
        sayt.style.display = "block";

    }

});


let like = document.querySelectorAll(".like");
let i = 0;

while(i < like.length){

    like[i].addEventListener("click", function(){

        if(this.textContent == "♡"){

            this.textContent = "♥";
            this.classList.add("liked");
            console.log("Siz like bosdingiz!!!");

        }else{

            this.textContent = "♡";
            this.classList.remove("liked");

        }

    });

    i++;

}


let rejim = document.getElementById("rejim");

rejim.addEventListener("click", function(){

    if(document.body.classList.contains("light")){

        document.body.classList.remove("light");
        rejim.textContent = "☾";

    }else{

        document.body.classList.add("light");
        rejim.textContent = "☀";

    }

});


let subscribe = document.getElementById("subscribe");
let email = document.getElementById("email");
let xabar = document.getElementById("xabar");

subscribe.addEventListener("click", function(){

    if(email.value == ""){

        xabar.textContent = "Email kiriting!";

    }else{

        xabar.textContent = "Siz obuna bo'ldingiz!";
        email.value = "";

    }

});


let qidiruv = document.getElementById("qidiruv");
let kitoblar = document.querySelectorAll(".kitob-karta");

qidiruv.addEventListener("click", function(){

    let nom = prompt("Kitob nomini yozing:");

    if(nom != null && nom != ""){

        let topildi = false;

        for(let i = 0; i < kitoblar.length; i++){

            let matn = kitoblar[i].querySelector("h3").textContent;



        }

        if(topildi == false){

            alert("Kitob topilmadi!");

        }

    }

});


let bolimlar = document.querySelectorAll(".bolim");

function animatsiya(){

    for(let i = 0; i < bolimlar.length; i++){

        let joy = bolimlar[i].getBoundingClientRect().top;

        if(joy < window.innerHeight - 100){

            bolimlar[i].classList.add("show");

        }

    }

}

window.addEventListener("scroll", animatsiya);

animatsiya();


let addlar = document.querySelectorAll(".add-kitob");
let a = 0;

while(a < addlar.length){

    addlar[a].addEventListener("click", function(){

        let karta = this.parentElement;

        let nom = karta.querySelector("h3").textContent;
        let muallif = karta.querySelector("p").textContent;
        let rasm = karta.querySelector(".muqova").textContent;

        let saqlangan = localStorage.getItem("kitoblar");

        if(saqlangan == null){

            saqlangan = [];

        }else{

            saqlangan = JSON.parse(saqlangan);

        }

        let bor = false;

        for(let j = 0; j < saqlangan.length; j++){

            if(saqlangan[j].nom == nom){

                bor = true;

            }

        }

        if(bor == false){

            let yangiKitob = {
                nom: nom,
                muallif: muallif,
                rasm: rasm
            };

            saqlangan.push(yangiKitob);

            localStorage.setItem(
                "kitoblar"
            );

            this.textContent = "Added ✓";
            this.classList.add("qoshildi");

        }else{

            this.textContent = "Already Added";
            this.style.backgroundColor = green;

        }

    });

    a++;

}