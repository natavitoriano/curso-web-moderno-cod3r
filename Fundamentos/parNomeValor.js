const saudacao = 'Opa'; //contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)