import dotenv from "dotenv"
import express, {type Express} from "express"
import { routesRouter } from "./routes/routes.js"
// import cors from "cors"
// import { PrismaClient } from "@prisma/client/extension"


//loading env variables
dotenv.config()

const app: Express = express()
const PORT = parseInt(process.env.PORT || '5000' , 10)
// const prisma = new PrismaClient()

app.use('/',routesRouter)

//starting the server
const start = async () => {
    try{
        app.listen(PORT)
    }catch(error){
        console.log("Server failed to start")
    }
}

start()