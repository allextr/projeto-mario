/*

OBJETIVO 1 - quando o usuarioclicar no botao de veja trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuario cliocar no X devemos fechar o modal


OBJETIVO 1 
    - passo 1 dar um jeito de pegar o elemento que represente o botao na tela usando o js

    - passo 2 dar um jeito de identificar quando o usuario clicar no botão

    - passo 3 dar um jeito de pegar o elemento da modal no js

    - passo 4 abrir a modal na tela

    OBJETIVO 2

    - passo 1 dar um jeito de pegar o elemento de fechar a modal usando o js

    - passo 2 dar um jeito de identificar quando o usuário clicar no X
    
    - passo 3 fechar a modal

*/


console.log('mostrar o document', document);

//passo 1 dar um jeito de pegar o elemento que represente o botao na tela usando o js

console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function altermarModal(){
    modal.classList.toggle("aberto");
}


//passo 2 dar um jeito de identificar quando o usuario clicar no botão

botaoTrailer.addEventListener("click", () => {
    altermarModal();
    
    //- passo 4 abrir a modal na tela


video.setAttribute("src", linkDoVideo);
    console.log("clicou no botão veja o trailer");
});
    

//passo 3 dar um jeito de pegar o elemento da modal no js



//OBJETIVO 2 - quando o usuario cliocar no X devemos fechar o modal
// passo 1 dar um jeito de pegar o elemento de fechar a modal usando o js



//passo 2 dar um jeito de identificar quando o usuário clicar no X

botaoFecharModal.addEventListener("click", () => {
    //passo 3 fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

