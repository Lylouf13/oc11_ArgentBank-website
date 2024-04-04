import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    createdAt: null,
    updatedAt: null,
    id: null
}

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers:{
        setCurrentUser: (state, action) => {
            return{
                ...state,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName:action.payload.lastName,
                userName:action.payload.userName,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,
                id: action.payload.id
            }
        },
        modifyCurrentUser: (state, action) => {
            return{
                ...state
            }
        },
        disconnectedUser: (state) => {
            return{
                ...state,
                state : initialState
            }
        }
    }
})

export const { setCurrentUser, modifyCurrentUser, disconnectedUser } = userProfileSlice.actions

export default userProfileSlice.reducer