# projeto-classificador-de-nivel-de-heroi

========    Tipos de variáveis  ========

**string** - são variaveis que armazenam texto
**number** - são variaveis que armazenam números**
**boolean** - são variaveis lógicas, que armazenam o valor de ligado ou desligado (true/false)

Outros tipos de variáveis ========
Tipo de variavel e descrições:
Variáveis numéricas:    São usadas para armazenar valores numéricos.
Inteiro:    Armazena números inteiros, como 1, 10, -5.
Ponto flutuante ou decimal: Armazena números com casas decimais, como 3.14, -0.5.
Números complexos:  Armazena números complexos, como 2+3j.
Variáveis de texto: Usadas para armazenar sequências de caracteres.
String: Armazena uma sequência de caracteres, como "Olá, mundo!"
Caractere:  Armazena um único caractere, como 'a', 'X', '@'.
Variáveis lógicas:  Usadas para armazenar valores de verdadeiro ou falso.
Booleano:   Armazena os valores True ou False.
Variáveis de data e hora:   Utilizadas para representar datas e horários.
Data:   Armazena datas, no formato AAAA-MM-DD.
Hora:   Armazena horários no formato HH:MM:SS.


# Operadores e expressões   
Operadores Aritméticos:
+   =   Adição  
-   =   Subtração   
*   =   Multiplicação   
/   =   Divisão 
%   =   Módulo  

Operadores Relacionais:
'=='  '=  Igual a 
'!='   ='Diferente de    
'>'    =   Maior que 
'<'    =   Menor que 
'>='   =   Maior ou igual a
'<='   =   Menor ou igual a

Operadores Lógicos: 
&&  =   AND lógico  
||  =   OR lógico
!   =   NOT lógico

Operadores de Atribuição:   
'='     =   Atribuição  
'+='    =   Adição e atribuição 
'-='    =   Subtração e atribuição  
'*='    =   Multiplicação e atribuição  
'/='    =   Divisão e atribuição    
'%='    =   Módulo e atribuição 

Operadores de Incremento e Decremento:  
++  =   Incremento  
--  =   Decremento


## Estruturas de controle   
Instruções condicionais são usadas para executar ações diferentes com base em condições diferentes.
-   IF/Else: especificando um bloco de código para ser executado caso a condição seja verdadeira
-   Else if: especificar uma nova condição de teste caso a primeira seja falsa
-   Switch: especificar diversos blocos alternativos para serem executados.

A condição if   =   
if (condição) {
    // Bloco de código para ser executado.
}

A condição else =   
if (condicao) {
    // Bloco se marcado como true, logo, será executado.
} else {
    // Bloco se marcado como false, logo, será executado.
}
A condição else if  =   
if (condicao-1) {
    // Será executado este bloco caso a condição 1 seja verdadeira
} else if (condicao-1) {
    // Será executado este bloco caso a condição 1 seja falsa, e a 2 seja verdadeira
} else {
    // Será executado este bloco caso as condições 1 e 2 sejam falsas
}

Condição switch =   
switch(expressao) {
    case n:
        // bloco de código
        break;
    case n:
        // bloco de código
        break;
    default:
        // bloco de block
}

O laço for  =   
const numeros = [1, 2, 3, 4, 5];
for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

O laço while    =   
let jogadas = 0;
let cara = false;
while(!cara) {
  jogadas++;
  cara = Math.random() < 0.5;
}   console.log(`A moeda caiu cara após ${jogadas} jogadas!`);

O laço do-while =   
let numero;
do {
  numero = prompt('Digite um número entre 1 e 10:');
} while(numero < 1 || numero > 10);
console.log(`Você digitou o número ${numero}.`);


//  Nomes de função não começa com número, começa sempre com letra
//  funções são ações, coloque as funções como verbos e de maneira 
//  clara oque ele faz. 
//  


## Funções com parâmetros   


nomeCompleto("Arielton", "Ribeiro")

function nomeCompleto(name, surname)   {
    console.log("Meu nome é " + name)
    console.log("Meu sobrenome é " + surname)
}

Caso eu chame a função e não dê um nome para a variávél:


nomeCompleto("Arielton",/* sem valor aqui... */)

function nomeCompleto(name, surname = "linda(o)")   {
    console.log("Meu nome é " + name)
    console.log("Meu sobrenome é " + surname)
}


##  Evite gambiarras

## Funções com retorno

// A função é chamada, o valor de retorno terminará em x 
let x = minhaFunção(4, 3);

function minhaFunção(a, b) { 
//  Função retorna o produto de a e b 
return a*b; 
}

//  Uma função só pode retornar um valor ou um objeto

