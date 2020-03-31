export const login = (email, password) => {
    return{
        type: 'LOGIN',
        payload: {
            email,
            password
        }
    }
}

export const register = (email, pass) => {
    return{
        type: "REGISTER",
        payload:{
            email,
            pass
        }
    }
}