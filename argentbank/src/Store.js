import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './Reducers/Login/login'

export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
})