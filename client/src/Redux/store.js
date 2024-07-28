import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice.jsx";
import cartReducer from "./Slice/cartSlice.jsx";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
    },
});
