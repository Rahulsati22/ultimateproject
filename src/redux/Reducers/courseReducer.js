import { createReducer } from "@reduxjs/toolkit";
const initialState = { courses: [] };
export const courseReducer = createReducer(initialState, {
    allCoursesRequest: (state) => {
        state.loading = true;
    },
    allCoursesSuccess: (state, action) => {
        state.loading = false;
        state.courses = action.payload;
    },
    allCoursesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    addToPlayListRequest: (state) => {
        state.loading = true;
    },
    addToPlayListSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addToPlayListFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearMessage: (state) => { state.message = null },
    clearError: (state) => { state.error = null }
})