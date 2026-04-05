function greet(name: string): string {
    return `Hello, ${name}`
}

const username: string = "Raja"; // Annotation
let username2 = "Raja"; // inference as username2 is string now
// username2 = 5;  // warning here

let cups = Math.random() > 0.5 ? 10 : '5'; // also inderence (hover over cups)


// union
let subs: number | string = '1M' // num as 10, 1000 if small val but in string if large val

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending' // we can assign values from these custom only. 
// apiRequestStatus = 'raj' // warning
apiRequestStatus = "error"; // perfectly fine


//any 
let val1; // here its type is "any" which is dangerous
val1 = 5;
val1 = '10'; // both are fine for it as its type is any.

// to avoid
let val2: string; // it will block 
let val3: string | undefined; // if we will assign the val in loop. TS throw warning if "undefined is not given as it is not sure if loop will run or not."


// ##########     Type Narrowing (unknow type)

function getNewFunc(value: string | number){
    if (typeof value === 'string'){
        return 'It is a string' // check (value.) (it is a dot) means property here
    }
    else{
        return 5 // check value. (dot) properties
    }
}

// truthyfy
function server(msg?: string){ // truthify
    if (msg){
        return `${msg}` // Making sure message get returned
    }
    return "no value"
}


// exostive checks -> maybe speling mistake 
function order(size: 'small' | 'medium' | 'large' | number){
    // write if for all
}


// class instances 
class A {
    func1(){
        return 'a'
    }
} 
class B {
    func1(){
        return 'b'
    }
} 

function func1(val: A | B){
    if (val instanceof A){
        return "A"
    }
    return "B"
}




// #############    Type Guards 
// type order = {} // empty -> no use
type order = {
    type: string
    sugar: number
}

function isOrder(obj: any): obj is order{
    return (
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )  
}

function serveOrder(item: order | string){
    if (isOrder(item)){
        return `${item.type}`
    }
    return item // as string
}


type MasalaChai = {type: "masala"; spicelevel: number}
type GingerChai = {type: "ginger"; amount: number}
type ElaichiChai = {type: "elaichi"; aroma: string}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai (val: Chai){
    switch (val.type) {
        case "masala": // we get these options if we just enter double quotes
            
            break;
    
        default:
            break;
    }
}

function brew(val: MasalaChai | GingerChai){
    if ('spicelevel' in order){ // this can also be done but not recommended as we are just checking a property

    }
}



function isStringArray(arr: unknown): arr is string[]{ // input type is unknow but ensuring output is arr of string.

}// always make sure we return a propert type for output
console.log(greet(username));