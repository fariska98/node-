const express = require("express");
const app = express()

//routes
app.get('/',(req,res)=>{
    res.send('Helo node api')
})
app.listen(5000,()=>console.log("server running on port 5000"))
