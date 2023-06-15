import { server } from "../Store";
import axios from 'axios'

export const addCourse = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "createCourseRequest"
        })

        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${server}/createcourse`, formData, config)

        dispatch({
            type: "createCourseSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "createCourseFailure",
            payload: error.response.data.message
        })
    }
}


export const deleteCourse = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteCourseRequest"
        })

        const { data } = await axios.delete(`${server}/course/${id}`, { withCredentials: true })

        dispatch({
            type: "deleteCourseSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "deleteCourseFailure",
            payload: error.response.data.message
        })
    }
}

export const addLectureToCourse = (formData, id) => async (dispatch) => {
    try {
        dispatch({
            type: "addLectureRequest"
        })

        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            },
            withCredentials: true
        }
        const { data } = await axios.put(`${server}/course/${id}`, formData, config);

        dispatch({
            type: "addLectureSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "addLectureFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteLectureFromCourse = (courseId, lectureId) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteLectureRequest"
        })

        const { data } = await axios.delete(`${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`, { withCredentials: true })

        dispatch({
            type: "deleteLectureSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "deleteLectureFailure",
            payload: error.response.data.message
        })
    }
}

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllUsersRequest"
        })

        const { data } = await axios.get(`${server}/admin/users`, { withCredentials: true });

        dispatch({
            type: "getAllUsersSuccess",
            payload: data.users
        })
    } catch (error) {
        dispatch({
            type: "getAllUsersFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteUser = (id)=>async (dispatch)=>{
    try {
        dispatch({
            type : "deleteUserRequest"
        })

        const {data} = await axios.delete(`${server}/admin/user/${id}`, {withCredentials:true})

        dispatch({
            type : "deleteUserSuccess",
            payload : data.message
        })
    } catch (error) {
        dispatch({
            type : "deleteUserFailure",
            payload : error.response.data.message
        })
    }
}

export const updateUser = (id) => async (dispatch) =>{
    try {
        dispatch({
            type : "updateUserRequest"
        })

        const {data} = await axios.put(`${server}/admin/user/${id}`,{},{withCredentials:true})

        dispatch({
            type : "updateUserSuccess",
            payload : data.message
        })
    } catch (error) {
        dispatch({
            type : "updateUserFailure",
            payload : error.response.data.message
        })
    }
}