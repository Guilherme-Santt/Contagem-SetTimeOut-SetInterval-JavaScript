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

        document.getElementById('c').innerHTML = soma;
        if(soma == 10){
            PararCronometro();
        }
    },1000)

}

function PararCronometro(){
    clearInterval(tempocr);
}
