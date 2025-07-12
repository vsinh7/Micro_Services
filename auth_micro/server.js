import express from "express"
const app = express()
const PORT = process.env.PORT || 5001

app.get('/',(req, res)=>{
    return res.json({message:"It's working..."})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on Port : ${PORT}`)
})