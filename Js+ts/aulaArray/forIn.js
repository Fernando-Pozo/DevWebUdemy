// for in
// const frutas = ['Pera', 'Maçã', 'Uva'];

// for(let indice in frutas){
//     console.log(frutas[indice]);
// }

//Objeto Pessoa

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// console.log(pessoa['nome']);

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}