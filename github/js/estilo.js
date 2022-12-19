const tagCora = document.getElementById("corazon");
console.log(tagCora);

const cora = document.querySelector(".cora");
console.log(cora);

tagCora.addEventListener("click", 
       function(){
            console.log("hola");

            if (cora.classList.contains("cora1") == true){
                cora.classList.remove("cora1")
                cora.classList.add("cora2")
             }
                else if (cora.classList.contains("cora2") == true){
                cora.classList.remove("cora2")
                cora.classList.add("cora1")
                }
      });

