import express from "express"
import cors from "cors"

import bodyParser from "body-parser"
import { createPreferences } from "./mercadopago.js"
let port = 3133
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.get("/test",(req,res)=>{
    res.json({test:123})
})
app.post("/api/mpago/create_pref",async(req,res)=>{

    try{

        const response = await createPreferences(req.body)
        
        res.status( 200).json(response)

    }catch(err){
        res.status(500).json({error:err.messsage})
    }
    

})
app.listen(port,()=>{
    console.log("Escuchando en el puerto: "+port)
})