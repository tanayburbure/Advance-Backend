let response:any = "40" ;

let numericLength : number = (response as string).length

type Book = {
    name : string
}

let bookString = '{"name":"Who is the boss"}'

let bookObject = JSON.parse(bookString) as Book
console.log(bookObject.name)

const inputElement = document.getElementById("username") as HTMLInputElement;


let value : any 
value = "Chai" ;
value = [1,2,2,32,3,]
value = 12
value.toUpperCase();

let newValue:unknown
newValue = "Chai" ;
newValue = [1,2,2,32,3,]
newValue = 12
// newValue.toUpperCase()  // this will throw an error because unknown needs to specify the type
if( typeof newValue === "string"){
    newValue.toUpperCase()
}

try{

}
catch(error){
    if (error instanceof Error){
        console.log(error.message)
    }
    console.log("Error",error)
}

const data:unknown = "chai aur code"
const strData:string = data as string


type Role = "user" | "admin" | "superadmin"

function redirectBasedOnRole(role:Role):void{
    if (role === "admin"){
        console.log("Redirecting to Admin Dashboard")
        return
    }
    if (role === "user"){
        console.log("Redirecting to User Dashboard")
        return
    }
    role;
}

function neverReturn() :never {
    while(true){
        console.log("hello")
    }
}