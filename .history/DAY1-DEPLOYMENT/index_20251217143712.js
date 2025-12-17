const express = require("express");
const app = express()

app.get("/" , (req,res) =>{
    res.json("Hello world")
});

app.get("/twitter" , (req,res)=> {
    res.json("This is twitter")
})


app.listen(3000)
