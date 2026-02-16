export interface User {
    id: string,
    name: string,
    email: string,
}

export interface Authresponse {
    accessToken: string,
    refreshToken: string,
    user: User
}