// animacion de aoparecer de abajo a arriba

const fade = document.querySelector(".anima_fade")
console.log(fade)

var activado = 0

function Animacion(){
    var alturaElemento= fade.getBoundingClientRect().top;
    var alturaScrollY = window.scrollY;
    var diferencia = alturaElemento - alturaScrollY;


    console.log("alturaElemento: " + alturaElemento);
    console.log("alturaScrollY: " + alturaScrollY) ;
    console.log("diferencia: " + diferencia)

    if(diferencia > alturaScrollY && activado == 0){
        fade.classList.add("animate__animated", "animate__fadeInUp")
        activado= 1
    }

    if(diferencia < alturaScrollY && activado == 1){
        fade.classList.remove("animate__animated", "animate__fadeInUp")
        activado= 0
    }

}

window.addEventListener("scroll", Animacion);



// no son os if
    // if (diferencia <alturaScrollY && activado ==0 ){
    //     activacontador1()
    //     activado=1
    // }
    // if(activado == 1 && diferencia > alturaScrollY){
    //     activado = 0
    // }