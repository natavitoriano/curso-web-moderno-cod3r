const { reject } = require("lodash")

function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(quantidadeNumeros, tentativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(quantidadeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 100) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(quantidadeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(49)
    .then(console.log)
    .catch(console.log)

/*gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)*/