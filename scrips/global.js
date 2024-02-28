
 function obterNumeroUsuario(mensagem) {
     var numero;
     do {
         numero = prompt(mensagem);
         if (numero === null) {
          
             return null;
         }
         numero = parseFloat(numero);
     } while (isNaN(numero)); 
     return numero;
 }

 function saoMultiplos(num1, num2) {
     return num1 % num2 === 0 || num2 % num1 === 0;
 }

 function exibirResultado(resultado) {
    alert(resultado);
 }

var numero1 = obterNumeroUsuario("Digite o primeiro número:");
if (numero1 === null) {
    alert("Operação cancelada pelo usuário.");
} else {
    
    var numero2 = obterNumeroUsuario("Digite o segundo número:");
    if (numero2 === null) {
        alert("Operação cancelada pelo usuário.");
    } else {
        
        var resultado = saoMultiplos(numero1, numero2) ? "Os números inseridos são múltiplos!" : "Os números inseridos não são múltiplos.";
   
        exibirResultado(resultado);
    }
}
