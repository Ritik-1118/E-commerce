import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice.jsx";
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
