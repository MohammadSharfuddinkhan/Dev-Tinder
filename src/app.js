const express = require("express")

const app = express()

app.get("/user" , (req , res)=>{
    res.send("hello from the user")
})

app.post("/user" , (req, res)=>{
    res.send("user created")
})

app.delete("/user" , (req , res) =>{
    res.send("user deleted")
})

app.use("/test" , (req , res)=>{
    res.send("hello from test")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})