//código fica executando
while (true) {
    const entrada = require("prompt-sync")();
    let x;
  
    x = entrada("Digite um número inteiro positivo ou 'sair' para finalizar:");
  
    // verifica se o usuário deseja sair
    if (x.toLowerCase() === "sair") {
      console.log("Saindo do programa.");
      break; // encerra o loop
    }
  
    // converte o valor digitado para inteiro
    var numeroInteiro = parseInt(x);
    var numeroAtual = 0;
    var soma = 0;
    // verifica se o valor inserido é um número inteiro
    if (!isNaN(numeroInteiro) && numeroInteiro > 0) {
      //enquanto o número digitado for maior que o número atual (inicio = 0)
      while (numeroAtual < numeroInteiro) {
        //verifica se o número atual é divisivel por 3 ou 5
        if (numeroAtual % 3 == 0 || numeroAtual % 5 == 0) {
          //incrementa o valor do número atual na soma
          soma += numeroAtual;
        }
        // soma 1 no número atual
        numeroAtual++;
      }
      console.log("Soma: ", soma);
    } else {
      // Exibe uma mensagem de erro se o valor for inválido
      console.log(
        "ERRO: Digite um valor válido (número inteiro positivo ou 'sair')."
      );
    }
  }
  