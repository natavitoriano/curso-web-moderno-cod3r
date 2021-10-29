const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (apro, ind) => console.log(`${ind}) ${apro}`)
aprovados.forEach(exibirAprovados)