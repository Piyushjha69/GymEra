import type { ApiResponse } from "../types/api";
import type { AuthData } from "../types/auth";

export const login = async (
    email: string,
    password: string
): Promise<ApiResponse<AuthData>> => {
    try {
        const res = await api.post<ApiResponse<AuthData>>("/auth/login", { email, password })
        return res.data
    } catch (error: any) {
        if(error.response?.data){
            return error.response.data
        }
        return {
            success: false,
            statusCode: 500,
            message: "Network error, Please try again .",
            error: error.message
        }
    }
}