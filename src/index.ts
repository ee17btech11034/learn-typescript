// # Functions 
// input paras, type and output return type

function makeChai(type: string, cups: number){
    console.log(`${cups} cups of ${type} tea.`);    
}

makeChai("Masala", 2)


function getChaiPrice(): number {
    return 25;
}



// sometimes we do not know the exact type
// function makeOrder(order: string): { // here we do not know the type of return
function makeOrder(order: string): string | null{ // here we know
    if (!order) return null;
    return order 
}



function logChai(): void {
    // not returning any specific type or we do not care
    return;
}



// optional and Default params 
// working is almost same for both, both are written in the end

function orderChai(type?: string){} // optional
function orderChai2(type: string = "Ginger"){} // optional


// complex 
function abc(order: { // this is also perfect
    name: string;
    price: number
}){}