"use strict";

window.addEventListener('load',() => {
    clicandoButton();
});

function clicandoButton(){
    const buttonTrocaCor = document.getElementById('btn-troca-cor');
    buttonTrocaCor.addEventListener('click', event => {
        selecionandoCores();
    });
}

function selecionandoCores (){
    const elementoBody = document.getElementById('body');
    const gerandoCor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    elementoBody.style.backgroundColor = gerandoCor;
    campoRetornoDeHexadecimal(gerandoCor);
}

function campoRetornoDeHexadecimal(hexadecimal){
    const elementoCampo = document.getElementById('campo-cores');
    elementoCampo.value = hexadecimal;
}