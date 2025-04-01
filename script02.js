    const pedido = prompt("Por favor, Digite sua idade")
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
if(escolha == escolhaComputador){
    alert('Houve empate' )
}




if(escolha == 1){
    if(escolhaComputador == 
        2){
        //jogador pedra computador papel--> computador vence
        alert(`o computador venceu escolheu papel`)
    }
   else if(escolhaComputador == 3){
        //jogador pedra computador tesoura --> jogador vence
        alert(`o jogador venceu, computador escolheu tesoura`)
    }
}if(escolha == 2){
    if(escolhaComputador==1){
        alert(`O jogador venceu, o computador escolheu pedra`)
        //jogador papel, computador pedra -->jogador vence
    }
    else if(escolhaComputador == 3){
        alert(`O jogador infelizmente perdeu, a tesoura cortou o papel`)
        //jogador papel computador tesoura-->computador vence
    }
}
if(escolha==3){
if(escolhaComputador==2)
alert(`O computador perdeu, o jogador escolheu tesoura`)
//jogador tesoura computador papel-->jogador vence
}else if(escolhaComputador==1)
alert(`O computador venceu , jogador escolheu tesoura que foi devidamente esmagada pela pedra`);
//jogador tesoura, computador pedra-->computador vence








alert(`A escolha do computador foi ${escolhaComputador}`);
    }
   //ai na variavel escolha usa um switch case
   
    //alert("Vamos começar")
    // o computador não mostrara o 1 alert se ele não estiver com a mesma `` ou "" dos outros alerts
