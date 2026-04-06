// #################      Array

const chaiFlavours: string[] = ["str1", "str2"] // all elements must be of string
const chaiFlavours2: number[] = [1, 2] // all elements must be of number

const rating: Array<number> = [4,5,6] // we can use custom datat types instead of number as well 



// arr of objects

type Chai = {
    name: string;
    price: number 
}

const menu: Chai[] = [
    {
        name: "Masala",
        price: 20
    },
    {
        name: "Ginger",
        price: 25
    }
]



// readonly arr 

const cities: readonly string[] = ["Delhi", "Jaipur"]

// cities.push("Pune") // error as we can not edit this arr


// sometimes we do unions and all


// multidimentional arr
const table: number[][] = [
    [1,2,3],
    [4,5,6]
]





// ########## tuples

let chaiTuple: [string, number];

// chaiTuple = [20, "Masala"] // error as exact format is needed 
chaiTuple = ["Masala", 20] 

let userInfo: [string, number, boolean?] // here boolean is optional
userInfo = ["masala", 20] // no error here
userInfo = ["masala", 20, true] // no error here


// readonly tuple
// we define readonly property first in all scenarios

const location: readonly [number, number] = [26.7, 34.7]


// named tuples
const chaiIteams: [name: string, price: number] = ["abc", 20]


// push working in tuple
let t: [string] = ["Hello"]
t.push("extra") // this will work. It can cause anomalies some times




// #######################   Enums 
// restrict the choices

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE



// incremental values 
/*
enum status {
    PENDING = 100,
    SERVED, // 101  // if we do not give the value to it thn they get incremental val from above one
    CANCELLED // 102
}
    */
enum status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}



// 
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type: ChaiType){
    console.log(type);
}
makeChai(ChaiType.GINGER) // valid 
// makeChai("masala") // error as we can only select from those values


// Haterogenous values
// multiple types in a single enum
// Not a good practice but 

enum RandomEnum {
    ID = 1,
    NAME= "Raj"
}

// const keyword in enum
const enum CupSizes {
    SMALL = 100,
    MEDIUM = 300,
    LARGE = 500
}

const s = CupSizes.LARGE