const { reject } = require("lodash")

let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

p.then(valor => console.log(valor))

new Promise((resolve, reject) =>{
    try {
        resolve(1+2)
    }
    catch(e) {
        reject("erro")
    }
    
}).then(valor => valor + 10)
    .then(resultado => console.log(resultado))
    .catch(e => console.log(e))

