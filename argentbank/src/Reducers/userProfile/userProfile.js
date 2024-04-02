import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
    createdAt: null,
    id: null,
    updatedAt: null
}

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers:{
        setCurrentUser: (state, action) => {
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.userName = action.payload.userName
            state.createdAt = action.payload.createdAt
            state.id = action.payload.id
            state.updatedAt = action.payload.updatedAt
        },
        modifyCurrentUser: (state, action) => {
            // Add necessary modifiers
        }
    }
})

export const { setCurrentUser, modifyCurrentUser } = userProfileSlice.actions

export default userProfileSlice.reducer