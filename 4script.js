// eu preciso cirar uma lista com os meus jogadores(3)
alert("Hello\nWorld");
console.log("hello \nWorld")
var forcaHeroi=0;
var forcaVilao=0;


//var a=4;
//var b=2;
//var soma=a+=b;
//alert(soma)


let Heroi=["", "", ""];
let vilao=["", "" , ""];


for(let i=0; i != 3; i++){
 let escolhaeroi=prompt("Digite o nome de seu personagem " +(i+1))
Heroi[i] = escolhaeroi;  //o que eu colocar dentro da variavel escolhaeroi vai ser jogado dentro do array heroi




//Calcular a força de cada jogador e depois somar para saber a força do time
var forcaHeroi = Math.floor(Math.random() * 10) +1 ;
forcaHeroi +=Math.floor(Math.random() * 10) +1

   

}
alert("A ESCOLHA DE SEUS PERSONAGENS FORAM RESPECTIVAMENTE: " +Heroi)

//o i é constantemente usado nos for porque significa interação que é volta então é comumente bom usar ela

for(let i=0; i<3; i++){
    var escolhavilao=Math.floor(Math.random() * 10)
    possiveisViloes = ["Thanos","Venon" , "Coringa","Lex-Luthor","Muzan Kibtusji","Freeza","Galactus","Malenia", "Verdugo" , "Lula" ]
    vilao[i]=possiveisViloes[escolhavilao];

    // Calcular a força de cada jogador do time do computador 
var forcaVilao=Math.floor(Math.random() *10) +1;
forcaVilao+=Math.floor(Math.random() * 10) +1



 }
 alert("os vilões escolhidos do computador  foram: " +vilao )


// Comparar os dois times para saber quem venceu.
if(forcaHeroi == forcaVilao){
    alert("os cara não ganharam ambos tiveram que escapar")
} else if (forcaHeroi>forcaVilao){
  alert(`"Parabéns voces venceram os vilões a força do seu grupo foi de :  ${forcaHeroi} , enquanto a força dos vilões foi de: ${forcaVilao} `)
}else{
    document.body.innerHTML=`OH NÃO OS VILOES VENCERAM A FORÇA DELES FOI DE : ${forcaVilao} enquanto a de voces foi de : ${forcaHeroi}`;
    document.body.style.color="red";
    document.body.style.background="black";
}

