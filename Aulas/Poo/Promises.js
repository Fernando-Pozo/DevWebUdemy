// function rand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(msg);
//         }, tempo);
//     });
// }

//-------------------------------------------------------
const getData = () =>{
    return new Promise((resolve, reject) => {
        resolve('Dados aqui')
        reject('Erro aqui')
    })
}

getData()
    .then(value => console.log(value))
    .catch(error => console.log(error))
//-------------------------------------------------------
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if ( a == 2){
        resolve('Sucess')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
})
