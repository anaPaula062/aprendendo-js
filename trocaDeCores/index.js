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
    const cores = ['#b8af03', '#ee7f27', '#42302e', '#45936c', '#acba9d'];
    const numeroDeSelecaoDeCor = Math.floor(Math.random() * 4);
    const cor = cores[numeroDeSelecaoDeCor];
    elementoBody.style.backgroundColor = cor;
}