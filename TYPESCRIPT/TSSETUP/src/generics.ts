function wrapInArray<T>(item:T) : T[]{
    return [item]
}

wrapInArray("Masala")
wrapInArray(42)
wrapInArray({flavour: "Ginger"})

function pair<A,B>(a:A ,b:B) : [A,B] {
    return [a , b]
}

pair("masala" , 20)
pair("ginger" , "black")
pair(20, {flavour : "Lemon"})

interface Box<T>{
    content : T
}

const numberBox : Box<number> = {content : 20}
const numberBoxCup : Box<string> = {content : "Small"}

interface  ApiPromise<T>{
    status : number ,
    data : T
}

const res:ApiPromise<{flavour:string}> = {
    status : 200 ,
    data : {flavour : "Masala"}
} 