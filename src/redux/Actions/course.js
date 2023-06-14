import { server } from '../Store'
import axios from 'axios'

export const getAllCourses = (category="", keyword="") => async (dispatch) => {
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


