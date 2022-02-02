//usar o metodo map
//dobre os numeros


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//reduce
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
});
// console.log(total);

// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47}
];


const pessoaVelha = pessoas.reduce(function(acumulador,valor){
    if (acumulador.idade > valor.idade) return acumulador; 
    return valor;
});
console.log(pessoaVelha);

// const nomes = pessoas.map(obj => obj.nome);
// const idade = pessoas.map(obj => obj.idade);
// const id = pessoas.map((obj, indice) => ({id: indice, obj}));
// // console.log(idade);
// // console.log(nomes);s
// console.log(id);


