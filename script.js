const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "A Inteligência Artificial prejudica as pessoas?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    },
    {
        enunciado: "Você gosta de usar Inteligência Artificial?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    },
    {
        enunciado: "Usa com frêquencia?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    }
]

let posicao = 0;
let perguntaAtual;
let respostas = ""

function mostraPergunta() {
    if(posicao >= perguntas.length){
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
        botaoAlternativas.addEventListener("click",()=> respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmativa;
    respostas = afirmacoes;
    posicao++;
    mostraPergunta();
}
function mostraResultado();
mostraPergunta();