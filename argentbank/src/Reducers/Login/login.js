import { createSlice } from '@reduxjs/toolkit'

const initialState={
    logged: false,
    name: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login: (state) =>{
            state.name = "stark"
            state.logged = true
        },
        logout: (state) => {
            state.name = null
            state.logged = false
        }
    }
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer