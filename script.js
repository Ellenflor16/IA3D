const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "a inteligencia artificial prjudica as pessoas",
        alternativas:["algumas vezes","nao"]
    },
    {
        enunciado: "voce gosta de usar intelicia artificil",
        alternativas:["sim","nao"]
    },
    {
        enunciado: "usa com frequencia",
        alternativas:["sim ","nao"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[poicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;

}
function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
      }
    }