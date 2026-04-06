// ########## Interface

// interface's goal is to shap the data

interface Chai {
    flavour: string;
    price: number 
}

// 70-80% types and interfaces are interchangable

const masalaChai: Chai = {
    flavour: "masala",
    price: 20,
    
}

// interface define the structure but does not generate any code in JS

interface newMethods {
    readonly id: number; // readonly
    name?: string; // optional

}


// methods in interface 
// we directly can not write method or functionality in interface.
interface DiscountCalculator {
    (price: number): number; // we just declare this functionality
}
const apply50: DiscountCalculator = (p) => p*0.5 // write functions here
const apply30: DiscountCalculator = (p) => p*0.3



// multiple methods 
interface TeaMachine{
    start(price: number):void;
    stop(): void;
}

const machine: TeaMachine = {
    // start(20){ // error
    start(price: number){
        console.log("start");   
    },
    stop(){
        console.log("Stop");
    }
}


// index signatures
interface ChaiRating {
    [flavour: string]: number;
}

const rating: ChaiRating = {
    masala: 4.5,
    ginger: 3.9
}


// combine interfaces 
interface User { // suppose this User interface is coming rom some library
    name: string
}
interface User { // we defined this
    age: number
}

const u: User = { // here interface automatically gets merged
    name: "Raj",
    age: 25 // we will have to define all
}


// extends interface 
interface A {a: string}
interface B {b: string}

interface C extends A, B {}





// ##################   Generics

function wrapinArray<T>(item: T): T[]{ // T is generics here
    return [item]
}

wrapinArray("masala") // now T is of string
wrapinArray(45) // T is of number
wrapinArray({flavour: "ginger"})


// Generics are mostly used in designing Library or frameworks.

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masala", "test")
pair("masala", 5)


// we can create Generic types and Generic interfaces

interface Box<T> {
    content: T 
}

const numberBox: Box<number> = {content: 10} // 
const stringBox: Box<string> = {content: "10"} // 

// Generics support Partial, and others as well

// Generics are used in API responses, Form state in react