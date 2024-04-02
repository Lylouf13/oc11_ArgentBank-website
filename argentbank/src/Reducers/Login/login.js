import { createSlice } from '@reduxjs/toolkit'

const initialState={
    token: "none",
    logged: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login: (state, action) =>{
            state.token = action.payload
            state.logged = true
        },
        logout: (state) => {
            state.token = null
            state.logged = false
        }
    }
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer