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


// map, filter, find, some, every, includes, indexof, findIndex

// map method
const personArray = [
    { name: 'Pratappadhy', age: 25, country: 'INDIA' },
    { name: 'Padhy', age: 30, country: 'RUSSIA' },
    { name: 'Prata', age: 40, country: 'USA' },
    { name: 'Prata', age: 40, country: 'USA' },
]

const countryArray = personArray.map(person => person.country)
console.log(countryArray)

//Find
const personWithAge30 = personArray.find(person => person.age === 30)
console.log(personWithAge30)

//Filter
const peopleFromIndia = personArray.filter(person => person.country === 'USA')
console.log(peopleFromIndia)

//Some
const hasPersonOver30 = personArray.some(person => person.age > 30)
console.log(hasPersonOver30)

//Every
const allPeopleAreOver30 = personArray.every(person => person.age > 30)
console.log(allPeopleAreOver30)

//Includes
const hasPrata = countryArray.includes('USA')
console.log(hasPrata)

//IndexOf
const indexOfPrata = countryArray.indexOf('USA')
console.log(indexOfPrata)

//FindIndex
const indexOfPratappadhy = personArray.findIndex(person => person.name === 'Pratappadhy')
console.log(indexOfPratappadhy)

let listOfProducts = document.querySelector('.list-of-products')

function renderProducts(products) {
    listOfProducts.innerHTML = ''
    products.forEach(product => {
        listOfProducts.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <span>$${product.price}</span>
            </div>
        `
    })
}

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: 'GET'
        })

        if (!response.ok) {
            console.log('HTTP error:', response.status)
            return
        }

        const data = await response.json()
        console.log(data)
        if (data.length > 0) {
            renderProducts(data)
        }

    } catch (error) {
        console.log(error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    listOfProducts = document.querySelector('.list-of-products')
    fetchProducts()
})
