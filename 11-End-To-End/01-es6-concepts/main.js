// Logical operators
let a = true
let b = false

function getName() {
    return 'Pratappadhy'
}

console.log(a && b)
console.log(a && getName())

// Template literals
let firstName = 'Pratappadhy'
let lastName = 'Padhy'

console.log(`My name is ${firstName} ${lastName} and I am  25 years old`)

// Ternary operator
let isLoggedIn = true

let message = isLoggedIn ? 'Welcome back!' : 'Please log in'

console.log(message)


// object destructuring
let person = {
    name: 'Pratappadhy',
    age: 25,
    city: 'Bangalore'
}

let { name, age, city } = person

console.log(name, age, city)

//array destructuring
let numbers = [1, 2, 3, 4, 5]

let [first, second, third, ...rest] = numbers

console.log(first, second, third, rest)


// default parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`)
}

greet('Pratappadhy')
greet()

// spread operator
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let combined = [...arr1, ...arr2]

console.log(combined)

// rest operator
function sum(...numbers) {
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total
}

console.log(sum(1, 2, 3))
console.log(sum(4, 5, 6, 7))