import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({}, {
    createCourseRequest: (state) => {
        state.loading = true;
    },
    createCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    createCourseFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    deleteCourseRequest: (state) => {
        state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteCourseFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    addLectureRequest: (state) => { 
        state.loading = true;
    },
    addLectureSuccess: (state, action) => { 
        state.loading = false;
        state.message = action.payload;
    },
    addLectureFailure: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteLectureRequest : (state)=>{
        state.loading = true;
    },
    deleteLectureSuccess : (state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    deleteLectureFailure : (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    getAllUsersRequest : (state)=>{
        state.loading = true;
    },
    getAllUsersSuccess : (state, action)=>{
        state.loading = false;
        state.users = action.payload;
    },
    getAllUsersFailure : (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    deleteUserRequest : (state, action)=>{
        state.loading = true;
    },
    deleteUserSuccess : (state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    deleteUserFailure : (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    updateUserRequest : (state, action)=>{
        state.loading = true;
    },
    updateUserSuccess : (state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    updateUserFailure : (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearMessage: (state) => { state.message = null; },
    clearError: (state) => { state.error = null },
})