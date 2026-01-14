const Chai = {
    name : "Masala Chai",
    price : 20,
    isHot : true
}

let tea : {
    name:string ;
    price : number ;
    isHot : boolean ;
}

tea = {
    name : "Ginger Tea",
    price : 20 ,
    isHot : true
}

type Tea = {
    name : string ;
    price : number ;
    ingredients : string[]
}

const adrakChai : Tea = {
    name : "adrak chai",
    price : 25 ,
    ingredients : ["Ginger"]
}

type cup = {size : string}

let smallCup : cup = {size : "200ml"}
let bigCup = {size : "400ml" , material :"steel"}

smallCup = bigCup ;

type Brew = {brewTime : number} ;
const coffee = { brewTime : 5 , beans : "Arebica"}
const chaiBrew : Brew = coffee ;

type user = {
    username : string;
    password : string
}
const u : user = {
    username : "mineforever",
    password : "Noooooo"
}

type Item = {name : string , quantity : number }
type Address = {street : string , pincode:number}

type Order = {
    id : string ;
    item : Item[];
    address : Address ;
}

type Chai = {
    name : string ;
    price : number ;
    isHot : boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with ",updates)
}

updateChai ({price : 25})
updateChai ( {isHot : true})
updateChai ({}) 

type chaiOrder = {
    name? : string;
    price?: number
}

const placeOrder = (order : Required<chaiOrder>) => {
    console.log(order)
}

placeOrder ({
    name : "Masala Chai" ,
    price : 35
})

type latte = {
    name : string ;
    price : number ;
    isHot : boolean ;
    ingredients : string[]
}

type basicChaiInfo = Pick<latte , "name" | "price">;
const chaiInfo : basicChaiInfo = {
    name : "Latte" ,
    price : 70 
}