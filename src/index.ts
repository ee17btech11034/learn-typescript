// ####################   Objects

const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

// how do we declare

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = { // initialized
    name: "Masala chai",
    price: 20,
    isHot: true
}



type Tea = {
    name: string;
    price: number; 
    ingrediants: string[] // arr of str
}

const adrakChai: Tea = {
    name: "Masala chai",
    price: 20,
    ingrediants: ['ginger', 'tea leaves'] // arr of str only
}


// ############ Duck typing  Vs Structural Typing
// Structural typing runs on looks-alike.

type Cup = {size: string};

let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup // here no issue and no warning bcz
// bare minimum properties are satisfied for smallCup. 


// Seperation in TS  ==> Split out Data types
type User = {
    username: string;
    password: string
}

const u: User = {
    username: "Raj",
    password: "123"
}

type Item = {name: string; quantity: number}
type Address = {state: string; pincode: number}

type Order = {
    id: string;
    items: Item[]; // there will be multiple items, so arr or items
    address: Address
}




// Sometimes we define in one way but use in multiple ways 

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>)=>{ // parial obj means we can pass partial values
    console.log("update: ", updates);
}

updateChai({price: 25}) // this is valid
updateChai({isHot: true}) // this is valid

// but issue is we can pass empty obj as well and it does not thro the error.
updateChai({})


// another example on the above
type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>)=>{ // it needs both
    console.log(order);
}

// placeOrder({}) // here it will throw error as it is required
// it does not matter that they were optional at declaration time but it says it need both.
// placeOrder({name: "ginger"}) // error
placeOrder({name: "ginger", quantity: 2}) // 



// pic 

type BestChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<BestChai, "name" | "price"> // it says we only need these 2, other I do not care

const chaiinfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}


// omit


type BestChai2 = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}

type PublicChaiInfo = Omit<BestChai2, "secretIngredients"> // it says we do not need to write this, can be skipped 

const chaiinfo2: PublicChaiInfo = {
    name: "Lemon Tea",
    price: 30,
    isHot: true
}