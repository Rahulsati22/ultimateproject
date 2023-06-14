import { server } from '../Store'
import axios from 'axios'


export const updateProfile = (name, email) => async (dispatch) => {
    try {
        dispatch({
            type: "updateProfileRequest"
        })
        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }
        const { data } = await axios.put(`${server}/updateprofile`, { name, email }, config)

        dispatch({
            type: "updateProfileSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "updateProfileFailure",
            payload: error.response.data.message
        })
    }
}

export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
    try {
        dispatch({
            type: "changePasswordRequest"
        })
        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }
        const { data } = await axios.put(`${server}/changepassword`, { oldPassword, newPassword }, config);

        dispatch({
            type: "changePasswordSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "changePasswordFailure",
            payload: error.response.data.message
        })
    }
}

export const forgetPassword = (email) => async (dispatch) => {
    try {
        dispatch({
            type: "forgetPasswordRequest"
        })
        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        }
        const { data } = await axios.post(`${server}/forgetpassword`, { email }, config);

        dispatch({
            type: "forgetPasswordSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "forgetPasswordFailure",
            payload: error.response.data.message
        })
    }
}

export const resetPassword = (token, password) => async (dispatch) => {
    try {
        dispatch({
            type: "resetPasswordRequest"
        })

        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }
        const { data } = await axios.put(`${server}/resetpassword/${token}`, { password }, config);

        dispatch({
            type: "resetPasswordSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "resetPasswordFailure",
            payload: error.response.data.message
        })
    }
}

export const updateProfilePicture = (formData) => async (dispatch) => {
    try {
        console.log(formData, "I am formData")
        dispatch({
            type: "updateProfilePictureRequest"
        })

        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            },
            withCredentials: true
        }

        const { data } = await axios.put(`${server}/updateprofilepicture`, formData, config)

        dispatch({
            type: "updateProfilePictureSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "updateProfilePictureFailure",
            payload: error.response.data.message
        })
    }
}

export const addToPlayList = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "addToPlayListRequest"
        })
        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }

        const { data } = await axios.post(`${server}/addtoplaylist`, { id }, config)

        dispatch({
            type: "addToPlayListSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "addToPlayListFailure",
            payload: error.response.data.message
        })
    }
}

export const removeFromPlayList = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "removeFromPlayListRequest"
        })
        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }

        const { data } = await axios.post(`${server}/removefromplaylist`, { id }, config)

        dispatch({
            type: "removeFromPlayListSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "removeFromPlayListFailure",
            payload: error.response.data.message
        })
    }
}