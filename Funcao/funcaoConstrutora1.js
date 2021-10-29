function pessoa(nome, idade, telefone){
    let maior = "";
    this.maiorDeIdade = function(){
        if (idade <= 18){
            maior = "Menor"
        }
        else{
            maior = "Maior"
        }
    }
    this.getMaiorDeIdade = function(){
        return maior
    }
    this.getNome = function(){
        return nome
    }
    this.getTelefone = function(){
        return telefone
    }
}

const natan = new pessoa("Natã", 21, "3322-4567")
natan.maiorDeIdade()
console.log(`O ${natan.getNome()} é ${natan.getMaiorDeIdade().toLowerCase()} de idade!`)