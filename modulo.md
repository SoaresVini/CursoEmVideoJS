JS - cliente x servidor

Cliente solicita pelo navegador
navegado pesqusa na nuvem que busca 
o IP do servidor e retorna  arquivo que estuver na porta solicitad

Cliente - Servidor

html - Conteudo, Css - Estilo, JS - interações e integrações

JS é muito importante para o desenvolvimento da criação de muitos sites importantes

Onde o Js é usado

1993 - HTTP - HTML - WWW - moseique

Netscape 1995 - Moca - outro Nome - se torna Java Script  por conta do Java - Popularizaçao como a linguagem do futuro

Microsoft - Internet Explore - JScript

netscape Contrata a Ecma e padronizou o JS que se tornou o EcmaJS - versão padronizada do JS

mozilla - Firefox

Google - V8 Js no Chome 

node - roda o JS fora do navegador

EcmaScrpt

Node JS

Angular - criado em 2009

AngularJS - Java Script 

Angular - Type Script

Vue 

Electron 

React - 
JQuery

Dumentação oficial do JS - W3school


Comentario

    //
    /* 
    */


Variaveis:

    prompt - Input pela telinha
    Alert - Mostrar pela telinha
    confirm - Ok , Cancela pela telinha

    São espaços da memoria do computador, que possuem nomes diferentes 

    var identificador = valor(atribuição)

    "recebe"

        = var
        = null

    Num
        var = numero

    String 
        var = "Vini"
        var = 'Vini'
        var = `Vini`

    Identificador de uma variavel:

    Começar com - letra,$ ou _

    usar letras ou numeros

    Podem possuir acentos e simbolos

    Não podem ser palavras reservadas

    Nomes Coerentes

    Variaveis guardam dados

    Tipo primitivos

    principais:
        Number
        String 
        boolean

    null
    undefined
    object
        Array
    Function

     typeof ver o tipo de uma variavel

    Fracamente Tipada

--------------Conversão Casting------------------------
   
    ==================Number=========================

    parseInt(window.prompt('Digiue o 1° Num')) - String para um num Inteiro

    parseFloat(window.prompt('Digiue o 2° Num')) - String para num Float

    number() - String para um numero

    var n = 1545.5

    n1.toFixed(2) - casas depois da virgula 

    n1.toFixed(2).replece()

    n1.toLocaleString('pr-BR',{style: 'currency',currency:'BRL'}) - transforma um valor em uma string que caracteristicas monetarias


    ==================String=========================

    String(n)

    n.toString

    Template String : `O Aluno ${nome} com ${idade} anos tirou ${nota}`

    Concatenação : 'O Jovem ' + nome + ' com ' + idade + ' anos tirou '+ nota 

    var s = 'js'

    s.length - n° de caracteres da string

    s.toUpperCase() - Todas MAIÚSCULAS

    s.toLowerCase() - Todas minusculas

    ---------------------------Operadores-----------------------------


    Aritimetico/relacionais/logicos

    =========================Aritméticos/ Atribuição=========================

    + - Mais
    - - menos
    * - Multiplicação
    / - Divisão
    % - resto da divisão
    ** - Potencia

    = - recebe

        =====Ordem de precedencia=====

        ()

        * / % - da esquerda para a direrita

        + - 

        =====Simplificação=====
        
        n Operador= 5 

        =====Incremento=====

        n += 1 - n++
        n -= 1 - n--


    =========================relacionais=========================

    Da esquerda para a direita

    < > menor que , maior que 
    >= maior ou igual
    <= menor ou igual
    == igual - pode ser de tipos diferentes 
    != diferente

        =============Identidade - tipo + valor===============

        5 === '5' - false
        5 !== '5' - true


    =========================logicos=========================

    ! - nao
    && - e
    || - ou
     
    !/&&/||


    =========================ternario=========================

    teste ? true : false - Tipo um if mas é um operador 

    


    ---------------------------Document Object model(Dom)-----------------------------

    =========================Árvore DOM=========================

            location


    Window  Document  html - TODOS elementos que estão na pagina/


            history

    
    =========================Selecionando Elementos=========================

    [] - seleciono qual tag eu quero se tiver varias iguais

    Posso mudar qualquer tag pelo Js usando o CSS 

    var.style.OQUEEUQUISER
    
        ==========Por Marca==========

            document.getElementsByTagName()

        ==========Por ID==========
            
            document.getElementById

        ==========Por name==========

            document.getElementsByName

        ==========Por Classe==========

            document.getElementsByClassName

        ==========Seletor==========

            document.querySelector()
            document.querySelectorAll()

            Posso selecionar da mesma forma que eu faço no css


=========================Eventos Domm=========================

Posso setar o evento pelo html 

Ex. <input type="button" value="somar" id="btn" onclick="clicar()" >


ou  eu posso fazer pelo JS

    var a = document.querySelector('#area')

    a.addEventListener('click',clicar)

Possuem inumeros eventos : https://developer.mozilla.org/pt-BR/docs/Web/Events


Funções são colocadas em blocos:

function ação(parametros){ 

}

---------------------------Estrutura Condiconal-----------------------------

=========================Condicional Padrão=========================

    if (Condição){
        true
    }else{
        false
    }
=========================Condicional Aninhadas=========================

 if (Condição){
        true
    }else{
        if(condição) {
            true
        }else{
            false
        }
    }


new Date() = pega data e hora completa do dia 

Da para pegar qualquer parte dessas

=========================Condição Multipla=========================

switch(expressão){
    case valor 1:

        break
    case valor 2: 

        break     
    case valor 3:

        break
    case valor 4:

    default
    
        break
}


innerHTML - atualiza a tag do HTMl
innerText - atualiza só o texto do HTML 

value - pega p valor que está em uma variavel

.checked - usado para radio buttons

teste de qual radio foi selecionado 

document.createElement cria uma tag HTML

appendChild - adicona uma tag ao HTML

setAttribute - passo o atributo que a tag vai receber 


---------------------------Laços de repetição-----------------------------

=========================Teste Logico no inicio=========================

var i = 1

while ( i <= 10) {
    console.log(`Quero Café ${i} vez`)
    i++
}

=========================Teste Logico no final=========================

var i = 1

do{
    console.log(`Quero Café ${i} vez`)
    i++
}while( i  <= 10)


=========================Teste Logico com limite já estabelecido=========================

for(var i = 1; i <= 5;i++ ){
    console.log(i)
}

=========================Tipo de Variaveis=========================

var - escopo global(fora do bloco)
let - escopo local(só no bloco)
const - não permite reatribuição ou redeclaração
constante - não respeitando bloco e permitindo a redeclaração e reatribuição.