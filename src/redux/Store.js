import { configureStore } from '@reduxjs/toolkit'
import { profileReducer, subscriptionReducer, userReducer } from './Reducers/userReducer';
import { courseReducer } from './Reducers/courseReducer';
import { adminReducer } from './Reducers/adminReducer';
const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course : courseReducer,
        subscription : subscriptionReducer,
        admin : adminReducer
    }
})

export const server = `http://localhost:8000/api/v1`

export default store;