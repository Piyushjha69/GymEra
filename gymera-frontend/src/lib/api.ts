import axios from "axios";


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

//Attaching access token
api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config
})

//Handle 401 (redirect to Login if Invalid Token )
api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const original = error.config

        // if 401 and we haven't retried
        if (error.response?.status == 401 && !original._retry) {
            original._retry = true

            //trying to refresh token
            const refreshToken = typeof window !== "undefined"
                ? localStorage.getItem("refreshToken")
                : null;

            if (refreshToken) {
                try {
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
                        { refreshToken }
                    )

                    if (res.data?.success && res.data?.data?.accessToken) {
                        localStorage.setItem("accessToken", res.data.data.accessToken)
                        original.headers.Authorization = `Bearer ${res.data.data.accessToken}`
                        return api(original)
                    }
                } catch (refreshError) {
                    //since refresh failed clearing tokens and redirecting to login
                    if (typeof window !== "undefined") {
                        localStorage.removeItem("accessToken")
                        localStorage.removeItem("refreshToken")
                        window.location.href = "/login"
                    }
                    return Promise.reject(refreshError)
                }
            } else {
                //no refersh token found , redirecting to login
                if (typeof window !== "undefined" && !window.location.pathname.includes("/login")) {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    window.location.href = "/login";
                }
            }
        }
        return Promise.reject(error)
    }
)