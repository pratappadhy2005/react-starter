let hello:number = 100
let myString:string = "hello"
//let largeNumber:BigInt = BigInt(465)

const isActive: boolean = true

//const uniqueKey: symbol = Symbol("unique")
const obj = {}

const emptyValue: null = null;

let unInitilised: undefined;

const person: {
    name: string,
    age: number,
    isActive: boolean,
    //uniqueKey: symbol
} = {
    name: "pratappadhy",
    age: 30,
    isActive: true,
    //uniqueKey: Symbol("unique")
}

console.log(hello)

//Arrays
const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const names: Array<string> = ["pratappadhy", "prashant", "pranav"]

//Enums
enum Color{
    Red,
    Green,
    Blue
}

const theme:Color = Color.Red