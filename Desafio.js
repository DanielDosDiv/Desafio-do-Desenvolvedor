// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
// Resposta: Ao final do processamento, o valor da variável SOMA será 91.



// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
function fibonacci(n, pesquisarNumero) {
  const sequencia = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    sequencia.push(a);
    [a, b] = [b, a + b];
  }


  if (sequencia.includes(pesquisarNumero)) {
    console.log("Número encontrado na sequência");
  } else {
    console.log("Número não encontrado");
  }

  return sequencia;
}


console.log(fibonacci(10, 21));


// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

function analisarFaturamento(dados) {

  const diasComFaturamento = dados.filter(item => item.valor > 0);
  

  const valores = diasComFaturamento.map(item => item.valor);
  

  const menorValor = Math.min(...valores);
  
  // Calcula o maior valor
  const maiorValor = Math.max(...valores); 
  
  // Calcula a média mensal
  const soma = valores.reduce((acc, valor) => acc + valor, 0);
  const media = soma / valores.length;
  
 
  const diasAcimaMedia = valores.filter(valor => valor > media).length;
  
  return {
      menorValor,
      maiorValor,
      diasAcimaMedia
  };
}

async function processarDados() {
  try {
      const fs = require('fs');
      const dados = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));
      
      const resultado = analisarFaturamento(dados);
      
      console.log('Resultado da análise de faturamento:');
      console.log(`- Menor valor diário: ${resultado.menorValor.toFixed(2)}`);
      console.log(`- Maior valor diário: ${resultado.maiorValor.toFixed(2)}`);
      console.log(`- Dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);
  } catch (error) {
      console.error('Erro ao processar os dados:', error);
  }
}

processarDados();

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 

const faturamentoPorEstado = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};


function calcularPercentuais(faturamento) {

  const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
  

  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / total) * 100;
  }
  
  return percentuais;
}


const percentuais = calcularPercentuais(faturamentoPorEstado);

// Exibe os resultados
console.log('Percentual de representação por estado:');
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;
function inverterString(str) {
  let stringInvertida = '';
  
  // Percorre a string de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  
  return stringInvertida;
}

// Exemplo de uso
const texto = 'Hello World!';
const textoInvertido = inverterString(texto);

console.log(`Texto original: ${texto}`);
console.log(`Texto invertido: ${textoInvertido}`);