import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    count: 0,
    itemcount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItemIndex = state.cart.findIndex(
                (item) => item._id === action.payload.data._id
            );
            if (existingItemIndex !== -1) {
                state.cart[existingItemIndex].quantity += 1;
                state.count += 1;
            } else {
                state.cart.push({ ...action.payload.data, quantity: 1 });
                state.itemcount += 1;
            }
        },
        removeItem: (state, action) => {
            const itemIndex = state.cart.findIndex(
                (item) => item._id === action.payload._id
            );
            if (itemIndex !== -1) {
                if (state.cart[itemIndex].quantity === 1) {
                    state.cart.splice(itemIndex, 1);
                    state.itemcount -= 1;
                } else {
                    state.cart[itemIndex].quantity -= 1;
                }
                state.count -= 1;
            }
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(
                (item) => item._id === action.payload.id
            );
            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity += 1;
            }
        },
    },
});

export const { addToCart, removeItem, increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
