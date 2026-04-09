import "reflect-metadata"
import express,{ Application} from "express"
import { AppDataSource } from "./config/data-config"

import routes from "./routes"

const app:Application = express()
const PORT:Number = 3000

app.use(express.json())

AppDataSource.initialize().then(()=>{
    console.log("banco conectado")
    
   app.use(routes)

    app.listen(PORT, ()=>{
        console.log(`server rodando na porta ${PORT}`)
    })
}).catch((err) => console.error('erro ao conectar', err))