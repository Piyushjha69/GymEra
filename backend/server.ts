import dotenv from "dotenv"
import express, { type Express, type Request, type Response, type NextFunction } from "express"
import { routesRouter } from "./routes/routes.js"
// import cors from "cors"
import { PrismaClient } from "@prisma/client/extension"


//loading env variables
dotenv.config()

const app: Express = express()
const PORT = parseInt(process.env.PORT || '5000', 10)
const prisma = new PrismaClient()

//attaching db to request
app.use((req: Request, res: Response, next: NextFunction) => {
    req.db = prisma
    next()
})

app.use('/', routesRouter)

//starting the server
const start = async () => {
    try {
        app.listen(PORT)
    } catch (error) {
        console.log("Server failed to start")
    }
}

start()