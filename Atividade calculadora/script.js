let nome = 'Willian'
let valor = '450,00'
let valorFinal  = (nome) + (desconto)
const desconto = 20%

console.log(valor % desconto)
console.log('O valor de seu produto é de' + (valorFinal))


if (desconto > valor ) {
    alert('Impossível de se calcular o valor final')
} else if (valorFinal > 1000) {
    alert("Parabéns! Você ganhou frete grátis")
} else { 
    alert("Calculando")
}



