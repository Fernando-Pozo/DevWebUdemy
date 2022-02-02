//criar uma classe em javaScript
// class Pessoa {
//     constructor(nome, sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     falar() {
//         console.log(`${this.nome} está falando.`);
//     }

// }

// const p1 = new Pessoa('Luiz', 'Miranda');


const _velocidade = Symbol('velocidade');
class carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--; 
    }
}

const c1 = new carro('Fusca');

console.log(c1);