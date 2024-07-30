import { createSlice } from "@reduxjs/toolkit";
// import { encryptData } from "../../utils/encryptData";

const initialState = {
    token:
        typeof window !== "undefined"
            ? localStorage.getItem( "token" ) || null
            : null,
    user:
        typeof window !== "undefined"
            ? localStorage.getItem("user")
            : null,
    isLogin: localStorage.getItem( "token" ) || localStorage.getItem( "isLogin" ) ? true : false,
    isAdmin: localStorage.getItem( "isAdmin" ) || false,
};

export const authSlice = createSlice( {
    name: "auth",
    initialState,
    reducers: {
        login: ( state, action ) => {
            const { user, token, isAdmin } = action.payload;
            state.user = user ;
            state.token = token;
            state.isLogin = true;
            state.isAdmin = isAdmin;
            localStorage.setItem( "user", JSON.stringify( user ) );
            localStorage.setItem( "token", token );
            localStorage.setItem( "isLogin", true );
            localStorage.setItem( "isAdmin", isAdmin );
            // localStorage.setItem( "user", encryptData( JSON.stringify( user ) ) );
        },
        logout: ( state ) => {
            state.user = null;
            state.token = null;
            state.isLogin = false;
            state.isAdmin = false;
            localStorage.removeItem( "token" );
            localStorage.removeItem( "user" );
        },
    },
} );

export const { login, logout, } = authSlice.actions;
export default authSlice.reducer;
