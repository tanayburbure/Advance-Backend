const chaiFlavours: string[] = ["Masala" , "Ginger"];
const chaiPrice: number[] = [10,12];
const chaiRating: Array<number> = [4.7,4.9]

type Chai = {
    name:string ;
    price:number;
}

const menu: Chai[] = [
    {name:"Masala", price:10},
    {name:"Ginger", price:12}
]

const cities:readonly string[] = [
    "delhi","jaipur","mumbai"
]
// cities.push("pune");  this cannot happen in readonly

const table:number[][] = [
    [1,2,3],
    [4,5,6]
]

let chaiTupple: [string , number]
chaiTupple = ["masala" , 20]
// chaiTupple = [10 , "ginger"]  you cannot do interchanging of values tupples are strict

let userInfo: [string , number , boolean?]
userInfo = ["tanay" , 9270797918 ]
userInfo = ["tanay" , 9270797918 ,true]

const location: readonly [number , number] = [22.11 , 26.44]

const chaiItems: [name :string , price:number] = ["masala" , 25]

enum cupSize {
    SMALL ,
    MEDIUM ,
    LARGE
}

const size = cupSize.LARGE

enum Status {
    PENDING = 100 ,
    SERVED , // 101
    CANCELLED // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
    LEMON = "lemon"
}

function makeChai(type :ChaiType) {
    console.log(`Making: ${type}`)
}

makeChai(ChaiType.GINGER)