import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './Reducers/Login/login'
import userProfileReducer from './Reducers/userProfile/userProfile'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        userProfile: userProfileReducer
    },
})