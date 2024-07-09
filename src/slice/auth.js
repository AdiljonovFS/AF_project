import { createSlice } from "@reduxjs/toolkit";
import { setStorg } from "../helpers/storge";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        signUserStart:(state)=>{
            state.isLoading = true;
        },
        signUserSuccess:(state, action)=>{
            state.isLoading = false;
            state.loggedIn = true;
            state.user = action.payload;
            setStorg("token", action.payload.token)
        },  
        signUserFailure:(state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        signUserLogout:(state)=>{
            state.isLoading = false;
            state.loggedIn = false;
            state.user = null;
            state.error = null;
            setStorg("token", null)
        }
    }
});

export const {signUserFailure, signUserSuccess, signUserStart, signUserLogout } = authSlice.actions;    
 export default authSlice.reducer; 
