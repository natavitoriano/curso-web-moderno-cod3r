function criarProduto(nome, preco, desconto = 50){
    return {
        nome: nome,
        preco: preco,
        desconto: desconto
    }
}

console.log(criarProduto('Bola', 10.5 ))