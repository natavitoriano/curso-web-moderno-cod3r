const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bem = true} = pessoa
console.log(sobrenome, bem)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)