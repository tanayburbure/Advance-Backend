function getChai(kind : string | number){
    if ( typeof kind === 'string'){
        return `making ${kind} chai..`
    }
    return `chai order ${kind}`
}

function serveChai(msg?:string){
    if (msg){
        return ` serving ${msg}`
    }
    return `serving default masala chai`
}

function orderChai(size : 'small' | 'medium' | 'large' | number){
    if (size === 'small'){
        return `Ordering Chai of ${size} size`
    }
    if (size === 'medium' || 'large'){
        return `Ordering extra chai`
    }
    return `Ordering #${size} `
}

class KulhadChai{
    serve(){
        return `Serving KulhadChai`
    }
}

class CuttingChai{
    serve(){
        return `Serving Cutting Chai`
    }
}

function serve(chai: KulhadChai | CuttingChai){
    if ( chai instanceof KulhadChai){
        return chai.serve();
    }
}

type Chaiorder = {
    type : string,
    sugar : number
}

function isChaiOrdered(obj :any):obj is Chaiorder{
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:Chaiorder | string){
    if(isChaiOrdered(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving Custom chai : ${item}`
}


type MasalaChai = {type : "masala" ; spicelevel: number};
type GingerChai = {type : "Ginger" ; amount : number};
type ElaichiChai = {type: "Elaichi" ; aroma : number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai (order : Chai){
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;
        case "Elaichi":
            return `Elaichi Chai`
            break;
        case "Ginger":
            return `Ginger Chai`
        default:
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if ("spicelevel" in order){
        return `Spicelevel is`
    }
}

// function isStringArray(arr:unknown) :arr is string[]{
    
// }

