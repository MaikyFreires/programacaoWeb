## Promise
O objeto **Promise** representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

A **Promise** é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ela permite que você associe manipuladores ao eventual valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que os métodos assíncronos retornem valores como os métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promessa de fornecer o valor em algum momento no futuro.

## Sintaxe
```javascript
new Promisse((resolve: Function, reject: Function) => void)
```
* **resolve**: função para retornar o resultado da promise.
* **reject**: função para retornar o erro da promise.

**Propriedades**

A lista a seguir descreve as propriedades do objeto.

* **constructor**: função construtora que recebe um callback criando uma função assíncrona.

**Métodos**

A lista a seguir descreve os métodos do objeto.

* **then**: permite definir o bloco executado mediante o cumprimento de uma promise.
* **cath**: permite definir o bloco executado mediante a rejeição de uma promise.

**Funções**

A lista a seguir descreve os métodos estáticos do objeto.

* **resolve**: cria uma promise resolvida.
* **reject**: cria uma promise rejeitada com o resultado igual ao argumento recebido.
* **all**: une varias promises em um Array e retorna o valor quando todas tiverem sido resolvidas.

## Na Prática
**Exemplo 1**

Neste exemplo vamos construir uma Promise a partir de um **setTimeout** e em seguida resolve-la com o **then**.

```javascript
const timeout = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

timeout(3000)
  .then(function() { // executa o bloco após 3 segundos
    console.log('passou 3 segundos')
  })
  ```
  Na linha 2 retornamos uma instância de Promise que recebe os argumentos **resolve** e **reject** ambas funções que representam "resolvido" ou "rejeitado", respectivamente. Elas são utilizadas como retorno para o resultado ou um erro do tipo **Error** da Promise.

  Na linha 7 executamos a função **timeout** que retorna a promise que construímos anteriormente. É importante lembrar que toda promise retorna dois métodos recursivamente, o **then** e **catch**: o primeiro é executado quando a promise tem sucesso e o segundo quando ocorre uma falha na execução.

  **Exemplo 2**

  No exemplo abaixo executamos uma promise que resultou em uma falha, ou seja, nossa execução foi direcionada ao bloco **catch**. Veremos no bloco abaixo como esse tratamento é feito:

  ```javascript
  function getTodosOsUsuarios () {
  return new Promise((resolve, reject) => {
    reject(new Error('Não foi possível recuperar a lista de usuários'))
  })
}

getTodosOsUsuarios()
  .catch(err => console.log(err.message)) // Não foi possível recuperar a lista de usuários
  ```

  **Exemplo 3**
  
  É possível resolver uma promise dentro de outra, por exemplo, considere a função **getTodosOsUsuarios()** onde recuperamos o código de todos os usuários cadastrados no sistema e em seguida pegamos o primeiro resultado para recuperar seus detalhes a partir da função **getUsuarioById()**.

  ```javascript
  function getTodosOsUsuarios () {
  return Promise((resolve, reject) => {
    resolve([ 1, 2, 3 ])
  })
}

function getUsuarioById (id) {
  return Promise((resolve, reject) => {
    resolve({ id, nome: 'Bruno da Silva' })
  })
}

getTodosOsUsuarios()
  .then(ids => getUsuarioById(ids[0]))
  .then(usuario => console.log(usuario)) // { id: 1, nome: 'Bruno da Silva' }
  ```

  **Exemplo 4**

  Em algumas situações como _mock_ de dados, pode surgir a necessidade de criar uma promise de forma rápida. Para isso podemos construir uma que não retorne valor algum, como no exemplo abaixo:

  ```javascript
  Promise.resolve()
  .then(() => [])
  .then(console.log) // []
  ```

  **Exemplo 5**

  Assim como no exemplo anterior pode ser necessário retornar um erro, e para isso contamos com o **Promise.reject(err: Error)** que podemos ver abaixo:

  ```javascript
  Promise.reject(new Error('falha na execução'))
  .catch(err => console.log(err.message)) // falha na execução
  ```