const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento no começo
console.log(pilotos)

//splice pode adicionar ou remover elementos

pilotos.splice(2,0, 'Bottas', 'Massa') //Adicionando dois elementos a partir do indice 2 e não removendo nenhum
console.log(pilotos)

pilotos.splice(3, 1) //removendo 1 elemento a partir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)