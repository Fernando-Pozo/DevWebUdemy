const produto = { nome: 'Caneca', preco: 1.8};
//usando o spreed operator copia o produto
const outraCoisa = {...produto};

outraCoisa.nome = 'Luiz'
console.log(produto);
console.log(outraCoisa);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));