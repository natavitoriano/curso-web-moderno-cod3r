const real = numero => `R$${numero.toFixed(2).replace('.',',')}` 

console.log(real(100.30000000000))