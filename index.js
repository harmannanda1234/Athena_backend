const express = require("express")
const app = express()
require('dotenv').config();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/test',(req,res)=>{
    res.json({
        message:"successfully working"
    })
})

PORT=process.env.PORT | 1010
app.listen(PORT ,()=>{console.log(`Server up and running on ${PORT}`)})