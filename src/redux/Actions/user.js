import { server } from "../Store";
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        console.log(email, password)
        console.log('login')
        dispatch({
            type: "loginRequest"
        })

        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }

        const { data } = await axios.post(`${server}/login`, { email, password }, config)

        dispatch({
            type: "loginSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "loginFailure",
            payload: error.response.data.message
        })
    }
}


export const getMyProfile = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest"
        })

        const { data } = await axios.get(`${server}/me`, { withCredentials: true });

        dispatch({
            type: "loadUserSuccess",
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: "loadUserFailure",
            payload: error.response.data.message
        })
    }
}

export const registerUser = (formdata) => async (dispatch) => {
    try {
        dispatch({
            type: "registerRequest"
        })
        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${server}/register`, formdata, config);

        dispatch({
            type: "registerSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "registerFailure",
            payload: error.response.data.message
        })
    }
}


export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "logoutRequest"
        })
        const { data } = await axios.get(`${server}/logout`, { withCredentials: true })
        dispatch({
            type: "logoutSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "logoutFailure",
            payload: error.response.data.message
        })
    }
}

export const buySubscription = () => async (dispatch) => {
    try {
        dispatch({
            type: "buySubscriptionRequest"
        })


        const { data } = await axios.get(`${server}/subscribe`, { withCredentials: true });

        dispatch({
            type: "buySubscriptionSuccess",
            payload: data.subscriptionId
        })

    } catch (error) {
        dispatch({
            type: "buySubscriptionFailure",
            payload: error.response.data.message
        })
    }
}

export const cancelSubscription = () => async (dispatch) => {
    try {
        dispatch({
            type: "cancelSubscriptionRequest"
        })

        const { data } = await axios.get(`${server}/subscribe/cancel`, {withCredentials:true})

        dispatch({
            type: "cancelSubscriptionSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "cancelSubscriptionFailure",
            payload: error.response.data.message
        })
    }
}