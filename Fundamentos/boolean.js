let isAtivo = false;
console.log( isAtivo )

isAtivo = true
console.log( isAtivo )

isAtivo = 1
console.log( !!isAtivo )

//Verdadeiros
/*
!!3
!!-1
!!' '
!![]
!!{}
!!Infinity
*/

//Falsos
/*
!!0
!!''
!!null
!!NaN
!!undefined
*/

console.log(!!('' || null || 0 || ' '))

let nome = ''

console.log(nome || 'Desconhecido')