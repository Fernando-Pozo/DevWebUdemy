const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoas50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoas50);