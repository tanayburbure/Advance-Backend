interface Chai{
    flavour : string;
    price : number ;
    milk?:boolean
}

const masala: Chai = {
    flavour : "masala",
    price: 25
}

interface  Shop {
    readonly id:number,
    name:string
}

const s : Shop = {
    id:1 , name: "caffe coffe day"
}

interface DiscountCalculator{
    (price:number) : number
}

const apply50: DiscountCalculator = (p) => p * 0.5 ;

interface teaMachine{
    start():void 
    stop():void
}

const machine : teaMachine = {
 start(){
    console.log("start")
 },
 stop(){
    console.log("stop")
 }
}

interface chaiRatings {
    [flavour:string] : number
}

const ratings : chaiRatings ={
    masala : 4.5,
    ginger : 5.0
}

interface User {
    name :string
}
interface User {
    age : number
}

const u:User = {
    name : "Hitesh",
    age : 29
}

interface A {a:string}
interface B {b:string}

interface C extends A,B {}