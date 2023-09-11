import { createSlice } from "@reduxjs/toolkit";
import { logInFetch, logOutFetch, refreshUser, registerFetch } from "./authOperations";
// import { ToastContainer, toast } from 'react-toastify';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder =>
        builder.addCase(registerFetch.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
        .addCase(logInFetch.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
            state.isLoggedIn = true;
            
        })
    .addCase(logOutFetch.fulfilled, (state, action) => {
                state.user = {name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
    })
    .addCase(refreshUser.pending, (state, action) => {
                state.isRefreshing = true;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true;
        state.isRefreshing = false;
    })
    .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
    })
})


export const authReducer = authSlice.reducer