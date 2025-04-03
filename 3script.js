

   for(var rodada=1; rodada<=3;  rodada++){

    alert("rodada está em  " +rodada );
    
     // rodada=rodada + 1
    
    
    
    var pisoQuebrado=Math.floor(Math.random() * 3) +1;
    
    while(true){
        var escolhajogador=prompt("Nivel " +rodada +" escolha um vidro 1- 2- 3 :")
  
    if(escolhajogador>3){
      alert("Por favor escolha até 3 ")
      
    }else{
      break;
    }
}


 if (escolhajogador == pisoQuebrado){
        alert("O vidro quebrou")
        document.body.innerHTML="<h1>perdeu irmão vidro quebrou </h1>";
        document.body.style.textAlign="center";
        break;
    }else{
        alert("Parabéns você passou para o próximo nível")
    }
   //variavel de controle de laço :  rodada++  //dependendo onde vc colocar essa rodada++ ela vai começar contabilizando em outro número blz  
   
   if (rodada===3){
    document.body.innerHTML="Oloco man, tu venceu o pc";
    document.body.style.color="cornflowerblue";
    document.body.style.textAlign="center";
    document.body.style.margin="40px";
    document.body.style.fontFamily="sans-serif";
    document.body.style.fontSize="30px"
  
  
  }
}

