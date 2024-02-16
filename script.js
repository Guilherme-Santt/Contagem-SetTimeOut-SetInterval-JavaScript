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

function padrao(){
    document.body.style.backgroundColor = "white";
    document.getElementById('tempo').innerHTML = "0";
}

function IniciarCronometro(){
    tempocr = setInterval(function() {

        var cronometro = document.getElementById('c').innerHTML;
        var soma = parseInt(cronometro) + 1;

        
        if(soma == 6){
            PararCronometro();
        }else{
            document.getElementById('c').innerHTML = soma;
        }
    },1000)

}

function PararCronometro(){
    clearInterval(tempocr);
}

function ZerarCronometro(){
    document.getElementById('c').innerHTML = "0";
}
