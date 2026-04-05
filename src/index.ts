
// ##########  Type Assertion 

let response: any = "41" // it still shows type is "any" check by hovering on "response"

// let numericLength: number = response.length // we do not get all properties if i use dot(.) on response as for TS it is still "any" type not string.
// To handle this we use   "type Assertion"

let numericLength: number = (response as string).length 


type Book = {
    name: string
}

let bookString = '{"name": "One thing"}'

// let bookObject = JSON.parse(bookString) // TS does not know if this refers the same types as book. 
let bookObject = JSON.parse(bookString) as Book// we forcefully tells that it is

console.log(bookObject.name)// we can check the dot properties


// HTML types
const inputElement = document.getElementById("username") as HTMLInputElement // similar nodes are available in React as well


// ####################    unknown Vs any

let val1: any;
val1 = "abc"
val1 = [1, 2, 3, 4]
val1 = 3.6

val1.toUpperCase() // here no warning, obviously error will occur when un.



let val2: unknown;
val2 = "abc"
val2 = [1, 2, 3, 4]
val2 = 3.6

// val2.toUpperCase()              // warning will show

if (typeof val2 === 'string'){
    val2.toUpperCase() // valid
}


// ######################     try catch block
// we can not give type to error in catch block as we do not know if it is custome made or from Error class.

try {
    
// } catch (error: any) { // we prefer type it to inside
} catch (error) {
    if (error instanceof Error){
        console.log(error.message); // if any is there then we can not make sure if error.message is there or not
    }
    console.log("Error", error);
}


// other example 
const data: unknown = "hello"
// const strData: string = data      // will throw warning/error
const strData: string = data as string // useful, when loading data from environment variables or files



//  ################    Type Never

type Role = "admin" | "user"
function redirectBasedOnRole(role: Role): void { // void means "not returning anything" or "do not care about what I am returning"
    if (role === "admin"){
        console.log("Redirecting to Admin portal");
        return
    }
    // role; // hover over here
    if (role === "user"){
        console.log("Redirecting to User portal");
        return
    }
    role; // hover over here -> Never means all cases are handled
}


// there are functions which does not return anything -> continiously running like server. 

function neverReturn(): never { // servers are best examples
    while(true){

    }
}