function localizacaoAtual() {
document.getElementById('cidade').value;

document.getElementById('Destino').textContent =
'Você escolheu' + cidade + '!'
}

let contador = 0;

function aumentar() {
    contador++;

    document.getElementById("numero").textContent = contador
}

function diminuir() {
    contador--;

    document.getElementById("numero").textContent = contador
}