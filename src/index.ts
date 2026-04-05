//  #############  Type

function makeOrder(order: {type: string; quantity: number; isItAll: Boolean}){
    console.log(order);
}

function makeOrder2(order: {type: string; quantity: number; isItAll: Boolean}){
    console.log(order);
}

// Here we can see type signature of order is same for both 

type orderType = { // we create type and provide it to all 
    type: string;
    quantity: number; 
    isItAll: Boolean
}

function makeOrder3(order: orderType){
    console.log(order);
}


// where type fails:==>

type TeaReceipe = {
    water: number;
    milk: number
}

class MasalaCHai implements TeaReceipe {
    water = 100;
    milk = 50
} // no issue in this --> it allows this as basic type



type CupSize = "small" | "large"

/*
class Chai implements CupSize { // hover over Cupsize
    // error ==> can only implement an object type
} // Not allowed this
*/
// But if we want to do this then we need interface.




// #################### Interface 

// interface of 
interface TeaReceipe2 { // done
    water: number;
    milk: number
};


interface CupSize2 {
    size: "small" | "large"
}

class Chai implements CupSize2{
    size: "small" | "large" = "large";
}


//similar issue occurs 
type Response = {ok: true} | {ok: false}
class myres implements Response{ // asking for interface
    ok: Boolean = true;
}






// ################ Union 
type TeaType = "masala" | "ginger" | "lemon"  // this is called         Literal types
function orderChai(t: TeaType){
    console.log(t);    
}


// ################ Intersection 
type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type newMasalaChai = BaseChai & Extra

const cup: newMasalaChai = {
    teaLeaves: 2,
    masala: 1 // here both are needed
}



// optional Values 

type User = {
    username: string;
    bio?: string; // optional
}

const u1: User = {username: "Raj"}
const u2: User = {username: "Raj", bio: "Hello"}


// read Only Values

type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "TS App",
    version: 1
}

// cfg.appName = "new app name" // error as it is read only