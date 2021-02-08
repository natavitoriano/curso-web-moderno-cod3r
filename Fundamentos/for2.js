const notas = [6.7, 7.4, 8.1, 9.1]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome:'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 60
}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)

}