function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){ //localname pela o nome do local do elemento, função do js
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor invalido');
    }
}
//erroweb8


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//teste3
//teste4

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idaudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idaudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code == 'Space' || evento.code == 'Enter') // code pega o codigo daquela tecla, função do js
            tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

    contador++;

}
