function triangulo (lado1 = 1, lado2 = 2, lado3 = 3){
    let nomeTriangulo = ''
    if(lado1 === lado2 && lado1 === lado3){
        nomeTriangulo = 'equilátero'
    }
    else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        nomeTriangulo = 'escaleno'
    }
    else{
        nomeTriangulo = 'isósceles'
    }

    return console.log(`Com base em seus lados, o triângulo é o: ${nomeTriangulo}`)
}

triangulo(1,1,1)
triangulo(1,2,3)
triangulo(1,2,1)