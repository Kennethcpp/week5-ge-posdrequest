const express = require("express")
const dotenv = require("dotenv")





dotenv.config()

const index = express()

const PORT = 7000 || 5000

index.listen(PORT, ()=>{
    console.log(`server started running on ${PORT}`)
})


const handleGetProductByID = ((request,  response)=>{
    console.log(request.params)

    const {id} = request.params

    const product = randProduct.filter((each)=>{
        return each.id == id
    })


})

const handlePostProductByID = ((request,  response)=>{
    
    const {brand, engine} = request.body
    


})