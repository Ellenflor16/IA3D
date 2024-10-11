const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "A Inteligência Artificial prejudica as pessoas?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "será boa para as pessoas"
            },
            {
                texto: "Não",
                afirmativa: "Não será boa para as pessoas"
            }
        ]
    },
    {
        enunciado: "Você gosta de usar Inteligência Artificial?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "é bom para pesquisas"
            },
            {
                texto: "Não",
                afirmativa: "não é boa para pesquisas"
            }
        ]
    },
    {
        enunciado: "Usa com frêquencia?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "gosto muito de usar"
            },
            {
                texto: "Não",
                afirmativa: "não gosto de usar muito" }]
    },
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmativa;
    respostas += afirmacoes;
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();