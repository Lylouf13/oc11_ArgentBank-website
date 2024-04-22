import { createSlice } from '@reduxjs/toolkit'

const initialState={
    token: null,
    logged: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login: (state, action) =>{
            return{
                ...state,
                token : action.payload,
                logged : true
            }
        },
        logout: (state) => {
            return{
                ...state,
                token : null,
                logged : false
            }
        }
    }
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer