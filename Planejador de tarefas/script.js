let tarefas = [];

let totalTarefas = 0;
let totalConcluidas = 0;

function adicionarTarefas() {}
    let nome = document.getElementById("tarefas").ariaValueMax.trim();

    let materia = document.getElementById("materia").ariaValueMax.trim();
    
    let prioridade = document.getElementById ("prioridade").valeu;

    let mensagem = document.getElementById("mensagem");

    if (nome === "" || materia === "" || prioridade === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";

        return;
    }
    
    let duplicada = tarefas.some(function(tarefa) {
        return tarefa.nome.toLowerCase() === nome.toLowerCase();


    });

    let duplicado = tarefa.some(function(tarefa) {
        return tarefa.nome.toLowerCase() === nome.toLowerCase();
    })

    if (duplicada) {
        mensagem.textContent = "Essa tarefa já foi cadastrada";
        mensagem.style.color = "red"; 
    }
let novaTarefa = {
    nome: nome,
    materia: materia,
};

{tarefa.push(novaTarefa);
totalTarefas++;
mensagem.textContentb= "Tarefa cadastrada com sucesso";
mensagem.style.color = 'green';

atualizarContadores();
exibirTarefas();
limparCampos();
}

function exibirTarefas() {
    let lista = document.getElementById('listaTarefas');
    lista.textContent = "";

    tarefas.forEach(function(tarefa, indice) {
        let card = document.createElement("div");
        card.className = "tarefa";

        let titilo = document.createElement("h3");

    titulo.textContent = tarefa.nome;
    let materia = document.createElement("p");

    materia.textContent = "Materia: " + tarefa.materia;

    let prioridade = document.createElement("p");
    prioridade.textContent = "prioridade" + tarefa.prioridade;

    let status = document.createElement("p");

    status.textContent = tarefa.totalConcluidas
    ? "Status concluida"
    : "Status Pendente";
    
    card.appendChild(titulo);
    card.appendChild(material);
    card.appendChild(prioridade);
    card.appendChild(status);

    destacarPrioridade(card, tarefa.prioridade);

    })}

    if (tarefa.concluida) {
        card.classicList.add ('concluida');
    } else {
        let botao = document.createElement("button");
        botao.textContent = "Concluir tarefas";
        botao.onclick = function() {
            concluirTarefa(indice);
        };
        card.appendChild(botao);
    
    }
function destacarPrioridade(card, prioridade) {
    if (prioridade === "Alta") {
        card.style.borderleft = "Spx solid red";
    } else if (prioridade === "Media") {
        
    }
    card,style.borderleft = "Spx solid orange"; {
       
    }  else if (prioridade === "Baixa") {
        card.style.borderleft = "Spx solid blue";
    }
}

function concluirTarefa(indice) {
    let tarefa = tarefa(indice);
    if (tarefa.concluida) {
        return;
    }
    tarefa.concluida = true;
    totalConcluidas.Concluida++;

    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Tarefa concluida com sucesso";
    mensagem.style.color = "green"

    atualizarContadores();
    exibirTarefas();
    }

    function atualizarContadores () {
        document.getElementById ("contador").textContent =
        "Tarefas cadastradas: " + totalConcluidas;
    }

    function limparCampos() {
        document.getElementById("tarefa").value = "";
        document.getElementById('materia').valeu = "";
        document.getElementById("Prioridade").value = ""
    }

    function alternarModo() {
        document.body.classic.toggle("modo concentracao");
    }