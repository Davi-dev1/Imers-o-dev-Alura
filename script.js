// console.log("oi");
// alert("hello world");

// document.getElementById("saida").innerHTML="<h1>Hello world</h1>";  // lembre-se que o innerHTML  é uma propriedade então ele não lê dessse jeito "innerHTML()" ele lê desse jeito : "innerHTML = <h1>Hello World</h1>"

var valor_wons = parseFloat(prompt("Digite um valor para os wons"));//valor recebe de um prompt, o resultado  do prompt é atribuido ao valor, evite usar variaveis com nomes com ç ou ~

var cotação = 0.0040;
alert(`O valor em real é R$${cotação*valor_wons}`); 


var valor_dolar=parseFloat (prompt("Digite um valor para os dólares"));
if(isNaN(valor_dolar)){
    alert("digite um número válido");
}else{
var valoremreal = 5.68;
alert("o valor do dólar em real é : " +valor_dolar*valoremreal); 
}