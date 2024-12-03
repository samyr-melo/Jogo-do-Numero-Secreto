listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;
exibirMensagemInicial();

//Vamos criar uma função com nome exibirNaTela()
//Adicionamos tag, texto como parâmentros.
//Criamos uma variável let campo para receber o document.querySelector(tag)
// Por fim, escrevemos campo.innerHTML recebe o valor do parâmentro texto
//adicionamos o parâmetro tag e texto para que seja possivel invocar os dados do HTML;




function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela ('h1' , 'Jogo do número secreto');
exibirTextoNaTela ('p' , 'Escolha um número entre 0 e 10');

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1' , 'Jogo do número secreto');
    exibirTextoNaTela ('p' , 'Escolha um número entre 0 e 10');
}


//usamos o parametro para indicar de qual tag e texto vamos selecionar as informações, por isso : escrevemos exibirNaTela('h1', 'Jogo do nùmero secreto'); exibirNaTela('p','Escolha um número entre 0 e 10' ); 

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto); //a partir da com paração entre as variáveis

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }   
        tentativas++;
        limparCampo();
    }
    
}



function gerarNumAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
     }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

    
}
//Explicação da função acima: criei uma função de nome gerarNumAleatorio, depois escrevemos como gerar o numero aleatorio - parseInt(Math.random() *10 + 1); e adicionamos a palavra return para nos trazer a informação de qual numero aleatorio está sendo gerar pelo sistema através do console.log(numeroSecreto);

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}