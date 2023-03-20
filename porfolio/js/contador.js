import { CountUp } from '../countUp.js/dist/countUp.js';

const activaContador = document.querySelector(".activaContador")
console.log(activaContador)

var cont = 0

window.addEventListener("scroll",function(){
  const  sectionLin  =document.querySelector(".parte-2");
    let al1 = sectionLin.getBoundingClientRect();

  if(al1.top <= "800" && cont == 0){
    var countUp = new CountUp('contador1', 2000);
    countUp.start();
    var countUp = new CountUp('contador2', 5670);
    countUp.start();
    var countUp = new CountUp('contador3', 427);
    countUp.start();
    var countUp = new CountUp('contador4', 3500);
    countUp.start();
    cont = cont+1
  }
  
})



