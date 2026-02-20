import { type Request, type Response } from 'express'
import { RegisterSchema } from '../schemas/register.schema.js'
import { LoginSchema } from '../schemas/login.schema.js'

export class authController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            if (!req.db) {
                res.status(500).json({ message: "Database not initialized", status: 500 })
                return
            }

            const validatedData = RegisterSchema.parse(req.body)
            const authService = new AuthService(req.db)
            const user = await authService.register(validatedData)

            res.status(201).json({
                message: 'User Registered Successfully',
                status: 201,
                user
            })
        } catch (error: any) {
            if (error.name === 'ZodError') {
                res.status(400).json({
                    message: 'Validation Error',
                    status: 400,
                    errors: error.errors
                })
                return
            }
            if (error.message.includes('already exists')) {
                res.status(400).json({ message: error.message, status: 400 })
                return
            }
            res.status(500).json({ message: 'Internal Server Error', status: 500 })
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
             if (!req.db) {
                res.status(500).json({
                message: 'Database not initialized',
                status: 500
                })
                return
            }

            const validatedData = LoginSchema.parse(req.body)
            const authService = new AuthService(req.db)
            const user = await authService.register(validatedData)

            res.status(201).json({
            message: 'User Registered Successfully',
            staus: 201,
            user
            })
        } catch(error: any) {
            if (error.name === 'ZodError'){
                res.status(400).json({
                    message: 'Validation Error',
                    staus: 400,
                    errors: error.errors 
                })
                return
            }
            if(error.message.includes('Invalid')){
                res.status(401).json({
                    message: error.message,
                    status: 401
                })
            }
            res.status(500).json({
                message: 'Internal server error',
                status: 500
            })
        }
    }

    async refreshAccessToken(req: Request, res: Response): Promise<void> {
        try{
            if(!req.db) {
                res.status(500).json({
                    message: 'Database not initialized',
                    status: 500
                })
                return
            }

            const {refreshToken} = req.body

            if(!refreshToken) {
                res.status(400).json({
                    message: 'Refresh token is required',
                    status: 400
                })
                return
            }

            const authService = new AuthService(req.db)
            const tokens = await authService.refreshAccessToken(refreshToken)

            res.json({
                message: 'Token refreshed successfully',
                tokens
            })
        } catch(error: any) {
            res.status(401).json({
                message: error.message,
                status: 401
            })
        }
    }
}