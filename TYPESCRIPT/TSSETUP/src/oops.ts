// class Chai {
//     flavour : string ;

//     // constructor(flavour:string,price:number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//     constructor(flavour:string){
//         this.flavour = flavour
//     }
// }

// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = "masala"


class Chai {
    public flavour : string = "Masala"

    private secretIngredients = "cardamom"

    reveal(){
        return this.secretIngredients // ok
    }
}

// const c = new Chai();
// c.reveal()


class shop{
    protected shopName = "chai corner"
}
class Branch extends shop {
    getName(){
        return this.shopName
    }
}
class wallet{
    #balance = 100;
    getBalance(){
        return this.#balance
    }
}

class cup{
    readonly capacity:number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2
    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        if (value > 5) throw new Error("Too sweet")
        this._sugar = value
    }
}


const c = new ModernChai()
c.sugar = 4


class EkChai{
    static shopName = "Chaicode Caffe"

    constructor(public flavour:string){

    }
}
console.log(EkChai.shopName)

abstract class Drink{
    abstract make():void
}

class myChai extends Drink{
    make(){
        console.log("Brewing Chai")
    }
}

class Heater{
    heat(){

    }
}

class chaiMaker{
    constructor(private heater:Heater){

    }
    make(){
        this.heater.heat
    }
}