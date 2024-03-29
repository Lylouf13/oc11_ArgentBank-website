import { configureStore } from 'redux'

initialState={
    test:1,
    test2:2
}

configureStore(reducer, initialState)