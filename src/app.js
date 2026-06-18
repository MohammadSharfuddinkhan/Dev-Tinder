const express = require("express")

const app = express()
const {authAdmin, authuser} = require("./middlewares/auth")

app.use("/admin", authAdmin)

app.get("/user", authuser , (req, res)=>{
    res.send("user data sent")
})

app.get("/admin/getData" , (req , res) => {
    res.send("all data")
})

app.delete("/admin/deleteData", (req, res) =>{
    res.send("Data deleted")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})