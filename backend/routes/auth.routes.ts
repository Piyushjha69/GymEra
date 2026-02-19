import { Router, type Request, type Response } from "express"
import { authController } from "../controller/auth.controller.js"

export const authRouter = Router()

authRouter.post('/register', authController)
authRouter.post('/login', authController)
authRouter.post('/login/refresh', authController)
authRouter.post('/logout', authController)