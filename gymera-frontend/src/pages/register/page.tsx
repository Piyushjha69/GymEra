"use client"

import { useState } from "react"
import { register } from "../../services/auth"
import Navbar from "../../components/Navbar"

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
        <>
            <Navbar isLoggedIn={true} />
            {/* Login form section */}
            <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4">

                <div className="w-full max-w-md bg-[#111111] border border-white/5 rounded-2xl p-8 shadow-xl">

                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">
                            Welcome
                        </h1>
                        <p className="text-white/50 text-sm">
                            Sign in to continue to GymEra
                        </p>
                    </div>

                    {/* form fields go here */}
                    <div className="space-y-4">
                        <input
                            type="name"
                            placeholder="Full Name"
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                        />

                        <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition">
                            Sign up
                        </button>
                    </div>
                    <div>
                        <p className="py-4 px-12">Already have an account? <a href="/login">Sign in</a> First</p>
                    </div>
                </div>
            </div>
        </>
    )
}
