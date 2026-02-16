"use client"

import { useState } from "react"
import { register } from "../../services/auth"

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            const res = await register(name, email, password)
            if (res.success && res.data) {
                localStorage.setItem("accessToken", res.data.accessToken)
                localStorage.setItem("refreshToken", res.data.refreshToken)
                //small delay to ensure tokens are stored before navigation
                await new Promise(resolve => setTimeout(resolve, 100))
                window.location.href = "/dashboard"
            } else {
                setError(res.message || "Registration failed, Please try again.")
            }
        } catch (err) {
            setError("An unexpected error occured !")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <div className='logo-container'>
                    <img src="/gymeraLogo.png" alt="GymEra Logo" className='logo' />
                    <h2 className='brand-name'>GymEra</h2>
                </div>
            </div>
        </nav>
    )
}
