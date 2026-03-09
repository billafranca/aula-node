const frutas = ['maçã', 'banana', 'laranja'];

frutas.push('uva'); // aqui adiciono uma fruta nova dentro da lista, ou seja, no terminal saira 'maçã', 'banana', 'laranja' e 'uva' //

// console.log(frutas[0]); // aqui eu acesso o primeiro elemento da lista, ou seja, 'maçã' // // porque arrays começam a partir do zero, caso eu acesse o item [1] eu acesso o segundo. //


for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]); // dentro desse for, estou acessando cada elemento que existe dentro da lista de frutas, p .length eu pego o tamanho da lista, ou seja, quantos elementos tem dentro da lista, e com isso eu consigo acessar cada elemento usando o i, 
    // que é a variável de controle do for, ou seja, ela começa em zero e vai aumentando até chegar no tamanho da lista - 1, porque o último elemento da lista tem o índice igual ao tamanho da lista - 1. //
}

// comandos básicos de manipulação de listas //

const numeros = [1, 2, 3, 4, 5];
numeros.push(6); // aqui eu adiciono o número 6 no final da lista, ou seja, a lista agora é [1, 2, 3, 4, 5, 6] //

numeros.pop(); // aqui eu removo o último elemento da lista, ou seja, o número 6, e a lista volta a ser [1, 2, 3, 4, 5] //
numeros.shift(); // aqui eu removo o primeiro elemento da lista, ou seja, o número 1, e a lista fica [2, 3, 4, 5] //
numeros.unshift(0); // aqui eu adiciono o número 0 no início da lista, ou seja, a lista fica [0, 2, 3, 4, 5] // 
numeros.splice(2, 1); // aqui eu removo o elemento que está no índice 2, ou seja, o número 3, e a lista fica [0, 2, 4, 5] //
numeros.splice(2, 1, 3); // aqui eu adiciono o número 3 no índice 2, ou seja, a lista fica [0, 2, 3, 4, 5] //
numeros.splice(2, 1, 10); // aqui eu substituo o elemento que está no índice 2, ou seja, o número 3, pelo número 10, e a lista fica [0, 2, 10, 4, 5] //
numeros.splice(2, 0, 3); // aqui eu adiciono o número 3 no índice 2, ou seja, a lista fica [0, 2, 3, 10, 5] //
// para entender melhor o método splice, ele tem três parâmetros, o primeiro é o índice onde eu quero fazer a alteração, o segundo é quantos elementos eu quero remover a partir desse índice,
//  e o terceiro é o elemento que eu quero adicionar no lugar dos elementos removidos, caso eu queira apenas remover elementos, eu passo apenas os dois primeiros parâmetros, caso eu queira apenas adicionar elementos,
//  eu passo apenas o primeiro e o terceiro parâmetro,e caso eu queira substituir elementos, eu passo os três parâmetros. //
// indice seria a posição do elemento dentro da lista, ou seja, o número que representa a posição do elemento, começando do zero. ex: numeros[0] acessa o primeiro elemento//

numeros.sort(); // aqui eu ordeno a lista de números em ordem crescente, ou seja, a lista fica [0, 2, 3, 4, 5] //
numeros.sort((a, b) => b - a); // aqui eu ordeno a lista de números em ordem decrescente, ou seja, a lista fica [5, 4, 3, 2, 0] // // para entender a ordem decrescente, o método sort
//  recebe uma função de comparação, onde a e b são os elementos que estão sendo comparados, e a função deve retornar um número negativo
//  se a deve ser ordenado antes de b, um número positivo se a deve ser ordenado depois de b, e zero se a e b são iguais. //
numeros.reverse(); // aqui eu inverto a ordem da lista, ou seja, a lista fica [0, 2, 3, 4, 5] //

numeros.join(', '); // aqui eu transformo a lista de números em uma string, onde cada elemento da lista é separado por uma vírgula e um espaço, ou seja, a string fica "0, 2, 3, 4, 5" //
numeros.toString(); // aqui eu transformo a lista de números em uma string, onde cada elemento da lista é separado por uma vírgula, ou seja, a string fica "0,2,3,4,5" //
// a diferença entre os métodos join e toString é que o método join permite que eu escolha o separador entre os elementos da lista, enquanto o método toString sempre usa a vírgula como separador. //
numeros.includes(3); // aqui eu verifico se o número 3 está presente na lista, e o resultado é true, porque o número 3 está presente na lista //
numeros.indexOf(3); // aqui eu verifico o índice do número 3 na lista, e o resultado é 2, porque o número 3 está presente na lista no índice 2 //
numeros.length; // aqui eu verifico o tamanho da lista, ou seja, quantos elementos tem dentro da lista, e o resultado é 5, porque a lista tem 5 elementos //


