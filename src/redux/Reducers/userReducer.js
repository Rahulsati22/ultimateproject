import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
export const userReducer = createReducer(initialState, {
    loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loginFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    },

    loadUserRequest: (state) => {
        state.loading = true;
    },
    loadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
    },
    loadUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    logoutRequest: (state) => {
        state.loading = true;
    },
    logoutSuccess: (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.message = action.payload.message
    },
    logoutFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    },

    registerRequest: (state) => {
        state.loading = true;
    },
    registerSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.message = action.payload.message;
    },
    registerFailure: (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
    }

})

export const profileReducer = createReducer(initialState, {
    updateProfileRequest: (state) => {
        state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    },

    changePasswordRequest: (state) => {
        state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    changePasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    updateProfilePictureRequest: (state) => {
        state.loading = true;
    },
    updateProfilePictureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateProfilePictureFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    forgetPasswordRequest: (state) => {
        state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    forgetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    resetPasswordRequest: (state) => {
        state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    removeFromPlayListRequest: (state) => {
        state.loading = true;
    },
    removeFromPlayListSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    removeFromPlayListFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
})


export const subscriptionReducer = createReducer(initialState, {
    buySubscriptionRequest: (state) => {
        state.loading = true;
    },
    buySubscriptionSuccess: (state, action) => {
        state.loading = false;
        state.subscriptionId = action.payload;
    },
    buySubscriptionFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    cancelSubscriptionRequest : (state)=>{
        state.loading = true;
    },

    cancelSubscriptionSuccess : (state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },

    cancelSubscriptionFailure : (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },


    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    }
})