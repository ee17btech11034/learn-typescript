// ######### OOP

/*
class Chai {
    flavour: string;
    price: number // it is throwing warning as it is asking for constructor
}
*/

class Chai {
    flavour: string;
    price: number

    constructor(flavour: string, price: number){
        this.flavour = flavour;
        this.price = price
    }
}

const masalaChai = new Chai("Ginger", 20)
masalaChai.flavour = "Masala"




// Access Modifiers ==> public, protected, private
class CHai2 {
    public flavour: string = "Masala"

    private secret = 'abc' // can not access directly outside class
    #price = 500 // this is also private (it comes from JS)

    readonly capacity: number = 200 // can set during constructor/only once


    // can write getter setter as well
    private _val1 = 2
    get val1(){
        return this._val1
    }
    set val1(val: number){
        this._val1 = val
    }


    // static member
    static shopName = "MB"
    constructor(public flavour2: string[]){

    }
}

// static can only be accessed by        "CHai2.shopName"    not from instance of class. 



// abstract class:-> we restrict that no one can create object from these
abstract class Drink {
    abstract make(): void // mostly only syntax are defined in abstract classes
}

// we have to create a class to use this

// class MyChai extends Drink{} // error untill you define make method

class MyChai extends Drink{
    make(): void {
        console.log("hahaaha");
    }
}




// composition --> 
// sometimes people composition, somtimes inheritance
class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater: Heater){

    }
    make(){
        this.heater.heat
    }
}