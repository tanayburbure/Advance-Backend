function makeChai(type:string, cup:number){
    console.log(`Making ${cup} cups of ${type} chai.`)
}
makeChai("Masala Chai" ,2)

function chaiPrice():number{
    return 25
}

function makeOrder(order:string){
    if(!order) return null
    return order
}

function logChai():void{
    console.log("Chai is Ready....")
}

// function orderChai(type?:string){
// }
// or
// function orderChai(type:string = "Masala"){
// }

function createChai(order:{
    type : string ;
    sugar : number;
    size : "small" | "medium" | "large"
}):number {
    return 4
}