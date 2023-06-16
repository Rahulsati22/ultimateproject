import { configureStore } from '@reduxjs/toolkit'
import { profileReducer, subscriptionReducer, userReducer } from './Reducers/userReducer';
import { courseReducer } from './Reducers/courseReducer';
import { adminReducer } from './Reducers/adminReducer';
import { otherReducer } from './Reducers/otherReducers';
const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course : courseReducer,
        subscription : subscriptionReducer,
        admin : adminReducer,
        other : otherReducer
    }
})

export const server = `https://ultimate-project-backend.vercel.app/api/v1`

export default store;