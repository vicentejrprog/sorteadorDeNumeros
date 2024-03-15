function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!')
        return;
    }
    if (quantidade > (ate - de) + 1) {
        alert(`Campo "quantidade" deve ser inferior a ${(ate - de) + 1}. Verifique!`)
        return;
    }

    let sorteados = [];
    let numero 

    for(let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de,ate)
        }

        sorteados.push(` ${numero}`);
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="caixinha">Números sorteados: ${sorteados}</label>`

    alterarEstadoBotao();


}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 function alterarEstadoBotao() {
     let botaoSortear = document.getElementById('btn-sortear')
     if (botaoSortear.classList.contains('container__botao')) {
         botaoSortear.classList.remove('container__botao')
         botaoSortear.classList.add('container__botao-desabilitado')
     } else {
         botaoSortear.classList.remove('container__botao-desabilitado')
         botaoSortear.classList.add('container__botao')
     }

     let botaoReiniciar = document.getElementById('btn-reiniciar')
     if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
         botaoReiniciar.classList.remove('container__botao-desabilitado')
         botaoReiniciar.classList.add('container__botao')
     } else {
         botaoReiniciar.classList.remove('container__botao')
         botaoReiniciar.classList.add('container__botao-desabilitado')
     }
 
}

function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById('resultado').innerHTML = '<label class="caixinha">Números sorteados:  nenhum até agora</label>'
    alterarEstadoBotao();
}