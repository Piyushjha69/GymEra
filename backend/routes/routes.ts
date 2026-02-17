import { Router } from "express";
import { healthRouter } from "./health.js";

export const routesRouter = Router()

routesRouter.use("/",healthRouter)
routesRouter.use("/auth",healthRouter)