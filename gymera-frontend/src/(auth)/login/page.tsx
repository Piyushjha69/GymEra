"use client"

import { useState } from "react"
import type { ApiResponse } from "../../types/api"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleLogin = async (
        email: string,
        password: string
    ): Promise<ApiResponse<AuthData>> => {
        
    }
}