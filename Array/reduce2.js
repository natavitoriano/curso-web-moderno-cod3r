const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const todos = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador
})
console.log(todos)

const algum = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(atual){
        return true
    }
},false)
console.log(algum)

//Resolução professor
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const AlgumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(AlgumBolsista))
