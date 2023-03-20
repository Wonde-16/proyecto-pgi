const nav = document.querySelectorAll("header div div");
console.log(nav);


// ________________section 1_________________________

const  ceuta  =document.querySelector("#ceuta");
console.log(ceuta);




// __________________section 2______________________

const  cadiz  =document.querySelector("#cadiz");
console.log(cadiz);


// ________________section 3_________________________

const  malaga  =document.querySelector("#malaga");
console.log(malaga);


window.addEventListener("scroll",function(){


    const alturaPantalla = window.innerHeight;

    //_____________rec section 1______________
    let c1 = ceuta.getBoundingClientRect();


    const alturaceuta1 = c1.top;

    if (alturaceuta1 == "0" ){
        nav[0].style.borderBottom = "2px solid black";
        nav[1].style.borderBottom = "0px";
        nav[2].style.borderBottom = "0px";

    }

    //_____________rec section 2______________

    let c2 = cadiz.getBoundingClientRect();


    const alturacadiz2 = c2.top;
    
  

    if (alturacadiz2 < alturaPantalla && alturacadiz2 >= 0){
        nav[0].style.borderBottom = "0px";
        nav[1].style.borderBottom = "2px solid black";
        nav[2].style.borderBottom = "0px";
    }

    //_____________rec section 3______________

    let c3 = malaga.getBoundingClientRect();


    const alturamalaga3 = c3.top;
    
  

    if (alturamalaga3 < alturaPantalla && alturamalaga3 >= 0){
        nav[0].style.borderBottom = "0px";
        nav[1].style.borderBottom = "0px";
        nav[2].style.borderBottom = "2px solid black";
    }
})