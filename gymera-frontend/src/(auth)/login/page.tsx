"use client"

import React, { useState } from "react"
import { login } from "../../services/auth"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try{
            const res = await login(email, password)

            if(res.success && res.data) {
                localStorage.setItem("accessToken", res.data.accessToken)
                localStorage.setItem("refershToken", res.data.refreshToken)
                // //Small delay to ensure tokens are stored before navigation
                // await new Promise(resolve => setTimeout(resolve, 100))
                window.location.href= "/dashboard"
            }else {
                setError(res.message || "Login failed.Please try again")
            }
        } catch (err) {
            setError("An unexpected error occured")
        } finally {
            setIsLoading(false)
        }
    }

    return (


    )
      
}