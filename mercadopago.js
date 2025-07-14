import { Preference } from "mercadopago";
import { cliente } from "./preferences.js";
import dotenv from "dotenv"
dotenv.config()
const preferences = new Preference(cliente)
export const createPreferences = async (body) =>{
    try{
        let rndid = "unico_"+body.nivel+"_"+body.user
        let isdev =process.env.ISDEV == "si"
        let pagobody={
          title: body.title,
          quantity: 1,
          unit_price: body.unit_price
        }
        //console.log("pagobody")
        //console.log(JSON.stringify(pagobody,null,2))
        //console.log("body")
        //console.log(JSON.stringify(body,null,2))
        const response = await preferences.create({
            body: {
                items: [
                    {
                        ...pagobody,
                        
                    }
                    
                ],
                external_reference:rndid 
            },
            
        })
        if(isdev){
          console.log("TOdo bien")
          console.log(new Date(Date.now()).toLocaleTimeString())
        }
        

        //console.log(JSON.stringify(response,null,2))
        return response
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}
/*
          
const preference = new Preference(client);

preference.create({
  body: {
    items: [
      {
        title: 'Mi producto',
        quantity: 1,
        unit_price: 2000
      }
    ],
  }
})
.then(console.log)
.catch(console.log);
*/