const escola = "Cod3r"

console.log( escola.charAt(4) );
console.log( escola.charCodeAt(3) );
console.log( escola.indexOf(3) );
console.log( escola.substring(1) );
console.log( escola.substring(0, 3) );
console.log( 'Escola '.concat( escola ).concat( "!" ) )
console.log( 'Escola ' + escola  + "!" )
console.log( escola.replace(3, 'e') ) // da para usar Regex no replace

console.log( 'Ana,Maria,Pedro'.split(',') ) //no split pode usar também o regex