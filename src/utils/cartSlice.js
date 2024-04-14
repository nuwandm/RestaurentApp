import { createSlice } from "@reduxjs/toolkit";

// this cartSlice has name/ initialState/ and reducer functions

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItems: (state, action) => {
			state.items.push(action.payload);
		},
		removeItems: (state) => {
			state.items.pop();
		},
		clearCart: (state) => {
			state.items.length = 0;
		},
	},
});

// exporting actions
export const { addItems, removeItems, clearCart } = cartSlice.actions;

// exporting reducer
export default cartSlice.reducer;
