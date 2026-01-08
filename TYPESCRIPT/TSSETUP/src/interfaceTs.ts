function makeChai(order: { type:string ; sugar:number ; strong:boolean}){
    console.log(order)
}

function serveChai(order: { type:string ; sugar:number ; strong:boolean}){
    console.log(order)
}

type TeaRecipe = {
    water : number ;
    milk : number ;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50
}

// type Cupsize = "small" | "medium" | "large"  
// class Chai implemets Cupsize {  // we can't use this is will give errors
// } // so we use iinterface ------->


//---> this is also called as littral types
interface CupSize {
    size : "small" | "medium" | "large"
}

class chai implements CupSize {
    size: "small" | "medium" | "large" = "large" ;
}

type teaType = "masala" | "ginger" | "elaichi"
function orderChai(t:teaType){
    console.log(t)
}

type baseChai = {tealeaves : number}
type Extra = { ginger : number}

type gingerChai = baseChai & Extra

const cup: gingerChai = {
    tealeaves : 2 ,
    ginger : 1
}

type user = {
    username : string;
    bio?:string // Optional type 
}
const user1:user = {
    username : "Tanay"
}
const user2:user = {
    username : "Sarthak",
    bio : "hey this is the frontend developer"
}

type config = {
    readonly appName : string
    version : number
}
const cfg:config = {
    appName : "MasterJi",
    version : 1
}

// cfg.appName = "hitesh"  // this will throw an error 