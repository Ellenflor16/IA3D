const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "a inteligencia artificial prjudica as pessoas?",
        alternativas: [
            {
                texto: "sim",
                afirmativa: "alternativa da afirmativa 1"
            },
            {
                texto: "não",
                afirmativa: "afirmativa da alternativa 2"
            },
            {
        enunciado: "voce gosta de usar intelicia artificil?",
        alternativas: [{
            texto:"sim", 
            afirmativa:"afirmativa da alterntiva 1"
       },
       {
            texto:"não",
            afirmativa:"afirmativa da alternativa 2"
        }
    [

    ]
        enunciado: "usa com frequencia",
        alternativas: ["sim", "nao"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[poicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;

}
function mostraAlternativa() {
    for (const alternativa of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativa.textContent = alternativa;
       
    }
}