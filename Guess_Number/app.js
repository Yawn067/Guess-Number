let listaDeNumerosSorteados = [];
let numMax = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();
function verificarChute(){
    let chute =  document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativas>1 ? " tentativas" : " tentativa";
        exibirTextoNaTela("p", "Você descobriu o número secreto com "+tentativas+palavraTentativa);
        document.getElementById('reiniciar').removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O numero secreto é menor");
        }else{
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1","Jogo do Número Secreto");
    exibirTextoNaTela("p","Escolha um número entre 1 e 10");
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numMax + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    quantidadeDeElementosNaLista == numMax ? listaDeNumerosSorteados = []:true;
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value ='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
