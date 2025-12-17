const express = require("express");
const app = express()

app.get("/" , (req,res) =>{
    res.send("Hello world")
});

app.get("/twitter" , (req,res)=> {
    res.send("This is twitter")
})

app.get("/login" , (req,res) => {
    res.send("You can login")
})

app.get("/youtube" , (req,res)=> {
    res.send("<h1>This is youtube channel</h1>")
})

app.listen(3000)
