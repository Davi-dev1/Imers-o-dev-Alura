const user=prompt("digite seu nome");
const tolowercase=user.toLowerCase();

while(true){
var pedido =  prompt("por favor digite sua idade")
if(isNaN(pedido)){
    alert("por favor digite apenas números ")
}
else{
    pedido = parseInt(pedido);
    break;
}
}

if(pedido < 18){
    alert("Menor de idade")
    document.body.innerHTML="<h1>Acesso restrito</h1><p>voce precisa ser maior de idade para jogar</p>";
    document.body.style.textAlign="center";
} else {
let escolha= prompt("Digite qual você quer: 1-pedra,2-papel e 3-tesoura")
let escolhaComputador = Math.floor(Math.random() * 3) +1;
//o math é o que se usa quando vai usar alguma propriedade matematica, o floor é usado para arrendodar o valor final e como não queremos que gere um numero aleatorio(random) multiplicamos ele por 3 (que são os 3 valores que temos na variável escolhaComputador, o +1 la no final garante que o resultado fique no intervalo certo(se sair 0 + 1=1 se sair 2 2+1=3 e por ai vai.....))

//REGRAS:
//Jpgador pedra , computador pedra -->empate
//jogador Tesoura,computador tesoura-->empate
//Jogador Papel, computador papel --> empate

alert(`A escolha do computador foi ${escolhaComputador}`);
if(escolha == escolhaComputador){
alert('Houve empate' )
}

else if (
(escolha==1 && escolhaComputador==3)       // essa parte aqui é averificação apénas das vitórias do jogador 
(escolha==2 && escolhaComputador==1) 
(escolha==3 && escolhaComputador== 2)
){
    alert(`Você venceu`);
}else{                 
    alert(`O computador  venceu`)         // se o conteudo de cima for false significa que o computador venceu 
}
}