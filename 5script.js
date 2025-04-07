// PARTE 1: Lista de perguntas e respostas

//Abaixo um json com as respostas como se fosse um array mas no formato json

//Aqui estão as perguntas que o metódo perguntas.lenght vai acessar
const perguntas = [{pergunta:"Quem é o Darth vader ?",
                    respostas:[{opcao:"Anakin skywalker",coreto:true},{opcao:"Obiwan Kenobi",correto:false},{opcao:"Yoda", correto:false},{opcao:"Mandaloriano", correto:false}

                    ]
                },
              //outra pergunta gerada em json//
                {
                    "pergunta":"Quem foi o game of the year em 2018 ?",
                    "respostas":[
                        {"opcao":"Read dead redemption 2?","correto" :false},
                        {"opcao" : "God of war 4 ?", "correto":true},
                        {"opcao":"Spider-Man", "correto":false},
                        {"opcao":"Monster Hunter", "correto":false}
                    ]
                }
];


// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i !== perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;


    
  /*const botao=document.createElement("button");
Uma outra forma para vc entender melhor esse createElement, basicamente ele cria outros elementos html com o uso do javascript
botao.innerText="resposta";
document.body.appendChild(botao) // esse appendChild é usado quando vc quer mostrar um elemento que voce tenha criado no javascript com o metódo : createElement
   */
 
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 1;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
