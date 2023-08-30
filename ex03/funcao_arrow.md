## Arrow functions
Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (**function expression**) e não tem seu próprio _this_, _arguments_, _super_ ou _new.target._ Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

## Sintaxe
### Sintaxe Básica
```
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements }
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements }
```
### Sintaxe Avançada
```
// Envolva o corpo da função em parênteses para retornar uma expressão literal de objeto:
params => ({foo: bar})

// Parâmetros rest (rest parameters) e parâmetros padrões (default parameters) são suportados
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Desestruturação (destructuring) dentro da lista de parâmetros também é suportado
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6
```
Note que não escrevemos “function”. Além disso, usamos o sinal “=>” para criá-la, o que lembra uma flecha, fazendo jus ao nome “Arrow Functions”.

Quando vemos essa estrutura, notamos que é uma forma mais elegante e “bonita” de criar funções. Mas as arrow functions são muito mais que apenas isso. Elas possuem muitos recursos poderosos, que iremos falar agora.

## Recursos das Arrow Fuctions
Um ponto interessante das arrow functions é a questão do **return** destas funções. Se nossa função possuir apenas um comando **return**, não precisamos informá-lo, mas apenas o valor que queremos retornar. Imagine que desejamos criar uma função que irá retornar uma mensagem de boas vindas para uma pessoa, levando em conta o nome que iremos informar como parâmetro. Essa função poderia ser criada com o seguinte código:

```javascript
const sayHello = function(name) {
    return `Seja bem-vindo ${name}!!!`;
}
```
Essa função executaria bem, mas usamos três linhas de código para retornar uma mensagem. Contudo, nós podemos obter o mesmo resultado com a seguinte arrow function:

```javascript
const sayHello = name => `Seja bem-vindo ${name}!!!`;
```
Se executarmos **sayHello('John')**, veremos o seguinte:
```
Seja bem-vindo John!!!
```
Note que o parâmetro **name** foi definido sem parênteses. Isso ocorre pois ele é um parâmetro único na função. Entretanto, se ela possuísse mais de um parâmetro, seríamos obrigados a colocar os parênteses. Podemos ver isso em um outro exemplo.

Imagine que desejamos criar uma função que irá realizar qualquer cálculo para nós. Ela irá esperar três parâmetros: os dois números para realizar o cálculo e a operação da conta. Poderíamos definir essa função com este código:

```javascript
const calc = (num1, num2, operator) => "Resultado: " + eval(`${num1} ${operator} ${num2}`);
```
Se executarmos **calc(4, 5, '*')**, veremos o seguinte resultado:
```
Resultado: 20
```
O código funcionou corretamente. Mas, note que foi necessário informar os parâmetros com parênteses para que isso fosse possível.

## Arrow fuctions e escopo de variáveis
A linguagem JavaScript possui o que chamamos de escopo de variáveis. Podemos dizer que esse conceito é, em poucas palavras, a maneira que as variáveis são identificadas ou “enxergadas” em nosso código. As variáveis que são criadas na “raiz” de nosso código estão no escopo global.

Contudo, quando criamos uma função, um novo escopo é criado. Assim, as variáveis criadas lá dentro são “enxergadas”, ou identificadas, apenas lá. Além disso, podemos nos referir a essa nova função com a palavra reservadas **this**.

E é nesse ponto que as arrow functions se destacam. Elas não criam um novo escopo. Isso significa que elas não possuem um **this**. Talvez de início pensemos: “Mas que coisa mais estranha.” Entretanto, é interessante encarar essa peculiaridade das arrow functions como um recurso, que pode nos ajudar em algumas situações.

Veja um exemplo: vamos criar uma classe que irá possuir um atributo chamado **list**, que irá conter um array vazio. Daí, iremos criar um método que possuirá o objetivo de adicionar novos valores a este array. A estrutura da classe será a seguinte:
```javascript
class Icode {
 
	constructor(){
 
        this.list = [];
 
        this.pushArray();
 
    }
 
    pushArray(){
 
        let newList = [1, 2, 3];
    
        newList.forEach(function(value) {
 
            this.list.push(value);
 
        });
 
        console.log(this.list);
 
    }
 
}
```
Perceba que estamos usando uma função convencional no **forEach()** que está dentro do método **pushArray()**. Ao instanciar a classe Icode, vemos o seguinte resultado:

```
TypeError: Cannot read property 'list' of undefined
```
O erro informa um problema com o atributo list. Isso ocorre pois essa função que está dentro do laço de repetição criou um novo escopo, que não conseguiu encontrar dentro de seu this uma propriedade chamada list. Ela realmente não existe neste escopo. Quando digitamos this.list, queremos nos referir ao atributo list de nossa classe, que está em outro escopo, ou contexto. Nessa situação as arrow functions podem nos ajudar. Vamos substituir esse forEach() por esse código:

```
newList.forEach(value => {
    this.list.push(value)
});
```
Ao instanciar a classe Icode, vemos o seguinte:

```javascript
[1, 2, 3]
```
Os itens foram adicionados ao array sem erros! Agora o código funcionou pois o **this** estava se referindo ao escopo global.