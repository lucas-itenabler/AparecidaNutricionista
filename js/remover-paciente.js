var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){


    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove(); 
    },500);
    

    /*var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;   -- Essas 3 linhas fazem o mesmo que a linha 11
    paiDoAlvo.remove();
    */
    

})