import { Router } from "express";
import { healthRouter } from "./health.js";
import { authRouter } from "./auth.routes.js";

export const routesRouter = Router()

routesRouter.use("/",healthRouter)
routesRouter.use("/auth",authRouter)