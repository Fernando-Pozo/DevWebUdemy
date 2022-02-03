const nome = ['Luiz', 'Otávio', 'Henrique'];


/* 
    for in - retorna o indice ou chave (String, array ou objetos)
    for of - retorna o valor em si (interaveis, arrays ou strings)
*/


//For in recisa do indice

// for(let i in nome){
//     console.log(nome[i]);
// }

//Acessando o valor direto

for(let valor of nome){
    console.log(valor);
}

console.log("#####")

//forEach 
// nome.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// });