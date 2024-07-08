import { createSlice } from "@reduxjs/toolkit";

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
        loginUserStart: (state) => {
            state.isLoading = true;
        },
        loginUserSuccess: (state, action) => {
            state.isLoading = false;
            state.loggedIn = true;
            state.user = action.payload;
        },
        loginUserFailure: (state) => {  
            state.isLoading = false; 
        },


        registerUserStart: (state) => {
            state.isLoading = true;
        },
        registeterUserSuccess: (state, action) => {
            state.isLoading = false;
            state.loggedIn = true;
            state.user = action.payload;
        },
        registerUserFailure: (state) => {  
            state.isLoading = false; 
            state.error = "error";  
        },
    }
});

export const { loginUserStart, loginUserSuccess, loginUserFailure,registerUserStart, registeterUserSuccess, registerUserFailure } = authSlice.actions;    
 export default authSlice.reducer; 

 // Example usage:
 // import { loginUserStart, loginUserSuccess, loginUserFailure } from './authSlice';
 // import { useDispatch } from 'react-redux';
 // 
 // function LoginForm() {
 //     const dispatch = useDispatch();
 //     const handleSubmit = (e) => {
 //         e.preventDefault();
 //         const { email, password } = e.target.elements;
 //         dispatch(loginUserStart());
 //         // Make API call to login user
 //         // ...
 //         // If login successful
 //         dispatch(loginUserSuccess({ id: 1, email: email.value }));
 //         // If login fails
 //         dispatch(loginUserFailure());
 //     };
 //     return (
 //         <form onSubmit={handleSubmit}>
 //             //