import { server } from '../Store'
import axios from 'axios'

export const getAllCourses = (category = "", keyword = "") => async (dispatch) => {
    try {
        dispatch({
            type: "allCoursesRequest"
        })

        const { data } = await axios.get(`${server}/courses?keyword=${keyword}&category=${category}`, { withCredentials: true });

        dispatch({
            type: "allCoursesSuccess",
            payload: data.courses
        })
    } catch (error) {
        dispatch({
            type: "allCoursesFailure",
            payload: error.response.data.message
        })
    }
}


export const getCourseLectures = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "getCourseRequest"
        })

        const { data } = await axios.get(`${server}/course/${id}`, {withCredentials:true})

        dispatch({
            type: "getCourseSuccess",
            payload: data.lectures
        })
    } catch (error) {
        dispatch({
            type: "getCourseFailure",
            payload: error.response.data.message
        })
    }
}