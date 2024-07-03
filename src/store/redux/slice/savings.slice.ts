import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	savings: {
		id: '',
		data: {},
	},
};
const savingsSlice = createSlice({
	name: 'savings',
	initialState,
	reducers: {
		setSavingsDetails: (state: any, action: any) => {
			state.savings = action?.payload;
		},
		resetSavingsDetails: () => initialState,
	},
});

export const { actions: savingsActions, reducer: savingsReducer } =
	savingsSlice;
