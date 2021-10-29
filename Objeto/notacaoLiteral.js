const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = { a, b, c }

const atributo = 'Nota'
const nota = 10

const obj3 = {}
obj3[atributo] = nota
console.log(obj3)

const obj4 = {[atributo]: nota}

const obj5 = {
    funcao1: function() {
        //
    },
    funcao2() {

    }
}

console.log(obj5)

