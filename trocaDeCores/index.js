"use strict";

window.addEventListener('load',() => {
    clicandoButton();
});

function clicandoButton(){
    const buttonTrocaCor = document.getElementById('btn-troca-cor');
    buttonTrocaCor.addEventListener('click', event => {
        console.log(event);
    });
}