import { configureStore } from '@reduxjs/toolkit'
import { profileReducer, subscriptionReducer, userReducer } from './Reducers/userReducer';
import { courseReducer } from './Reducers/courseReducer';
const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course : courseReducer,
        subscription : subscriptionReducer
    }
})

export const server = `http://localhost:8000/api/v1`

export default store;