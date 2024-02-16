function IniciarContagem(){
    document.getElementById('tempo').innerHTML = "Iniciou contagem";
    tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou";
        document.body.style.backgroundColor = "red";
    }, 5000);
}
function PararContagem(){
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou de executar";

}


function IniciarCronometro(){
    tempocr = setInterval(function() {

        var cronometro = document.getElementById('c').innerHTML;

        var soma = parseInt(cronometro) + 1;

        visu = document.getElementById('c').innerHTML = soma;
        if(visu == '185' || visu == 185){
            clearInterval(tempocr);
        }
    },1000)

}

function PararCronometro(){
    clearInterval(tempocr);
}
