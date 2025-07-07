/*
Exercício de Destructuring em JavaScript

1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];

a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variavel d.

2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.

*/


// (1)
const numbers = [1, 2, 3, 4, 5];
var a,b,c,d
//a
[a,b,c] = [...numbers]
console.log(a,b,c)
//b
var a,b,c,d

[a,b,c, ...d] = numbers
console.log(a,b,c, d)
// (2)
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

//a
let {name,age,city} = person
console.log(name, age, city)

//b
const PersonResume = {
  name: person.name,
  age: person.age
};

console.log(PersonResume)