import axios from 'axios'
import { server } from '../Store'
export const contactUs = (name, email, message) => async (dispatch) => {
    try {
        dispatch({
            type: "contactRequest"
        })

        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${server}/contact`, { name, email, message }, config)

        dispatch({
            type: "contactSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "contactFailure",
            payload: error.response.data.message
        })
    }
}


export const requestCourse = (name, email, course) => async (dispatch) => {
    try {
        dispatch({
            type: "courseRequest"
        })

        const config = {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${server}/courserequest`, { name, email, course }, config)
        dispatch({
            type: "courseSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: 'courseFailure',
            payload: error.response.data.message
        })
    }
}