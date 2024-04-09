/*
Objetivo 1 - quando o usuario clicar no botrao de mostrar mais deve abrir od projetos que estao escondidos no html

    passo 1 - pegar o botao mostrar mais no JS para poder verificar quando o usuario clicar em cima dele

    passo 2 - indentificar o clique no botao

    passo 3 - adicionar a classe nos projetos escondidos

Objetivo 2 - esconder o botao de mostrar mais

    passo 1 - pegar o botao e esconder ele
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
