const fs = require('fs')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
            resolve(conteudo)
        })
    })
}

lerArquivo(__dirname + '/dados.txt')
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
