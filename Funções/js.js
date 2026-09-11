console.log ("Olá, Larissa! Seja bem-vinda");
console.log ("Olá. Levi! Seja bem vindo!");
console.log ("Olá, Julia! Seja bem vinda!")

function darBoasVindas(nome) {
    console.log (`Olá, ${nome}! Seja bem vindo!`);
}

darBoasVindas ("Levi");
darBoasVindas ("Júlia");
darBoasVindas ("Larissa");

function apresentar (nome, idade) {
    console.log (`Meu nome é ${nome} e tenho ${idade} anos.`);
}


//Atividade

function estaEstudando (nome) {
    console (`${nome} está estudando agora`)
}

estaEstudando ("Willian");
estaEstudando ("Alexandre");
estaEstudando ("Henrique");

function mensagem (nome, turma) {
   console.log (`${nome} do ${turma} está estudando`);
}



function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
let media = calcularMedia(8, 6);
console.log(media);

if (media >= 6) {
    console.log ("Aprovado!");
} else {
    console.log ("Reprovado...")
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

let nome = prompt("Digite o nome do aluno");
let nota1 = Number(prompt("Digite a primeira nota"));
let nota2 =Number(prompt("Digite a segunda nota"));

let media =calcularMedia(nota1, nota2);

console.log (`${nome} ficou com media ${media}`);

if (media >= 6) {
    console.log (`${nome} está aprovado`);
} else {

}


//Atividade 

function calcular (quilometros, marca, continente) {
    return (quilometros + marca * continente); 
}

let continente = ("Insira o continente para onde deseja ir");
let valorfinal = calcular (quilometros, marca, continente);


if (valorfinal >= 2.000) {
    console.log (`Sua viagem podera ser feito`)
}

