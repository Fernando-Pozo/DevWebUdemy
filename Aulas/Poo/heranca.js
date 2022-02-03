//o prototype serve como herança no Js

// const objA = {
//     chaveA: 'A'
// };

// const objB = {
//     chaveB: 'B'
// };

// Object.setPrototypeOf (objB, objA);
// console.log(objB.chaveA);


//Herança

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material =  material;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
console.log(camiseta);

const caneca = new Caneca('Porcelana', 25, 'Branca');
console.log(caneca);
