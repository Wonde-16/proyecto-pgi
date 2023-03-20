const part = document.querySelectorAll("nav div");
console.log(part)


// ________________section 1_________________________

const  section1  =document.querySelector(".section1");



// __________________section 2______________________

const  section2  =document.querySelector(".section2");


// ________________section 3_________________________

const  section3  =document.querySelector(".section3");


// ________________section 4_________________________

const  section4  =document.querySelector(".section4");


// ________________section footer_________________________

const  footer  =document.querySelector("footer");



window.addEventListener("scroll",function(){


    const alturaPantalla = window.innerHeight;
    console.log ("altura pantalla: " +window.innerHeight)

    //_____________rec section 1______________
    let rect1 = section1.getBoundingClientRect();

    console.log("TOP s1: "+rect1.top);

    const alturaSection1 = rect1.top;

    if (alturaSection1 < alturaPantalla && alturaSection1 >= 0){
        part[0].style.borderBottom = "2px solid black";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
    }

    //_____________rec section 2______________

    let rect2 = section2.getBoundingClientRect();

    console.log("TOP s2: "+rect2.top);

    const alturaSection2 = rect2.top;
    
  

    if (alturaSection2 < alturaPantalla && alturaSection2 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "2px solid black";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
    }

    //_____________rec section 3______________

    let rect3 = section3.getBoundingClientRect();

    console.log("TOP s3: "+rect3.top);

    const alturaSection3 = rect3.top;
    
  

    if (alturaSection3 < alturaPantalla && alturaSection3 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "2px solid black";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
    }


    //_____________rec section 4______________

    let rect4 = section4.getBoundingClientRect();

    console.log("TOP s4: "+rect4.top);

    const alturaSection4 = rect4.top;



    if (alturaSection4 < alturaPantalla && alturaSection4 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "2px solid black";
        part[4].style.borderBottom = "0px";
    }




    //_____________rec section footer______________

    let rectF = footer.getBoundingClientRect();

    console.log("TOP footer: "+rectF.top);

    const alturaFooter = rectF.top;



    if (alturaFooter < alturaPantalla && alturaFooter >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "2px solid black";
    }




 


})