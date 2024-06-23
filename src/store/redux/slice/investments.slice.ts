import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	investments: {
		id: '',
		data: {},
	},
};
const investmentsSlice = createSlice({
	name: 'investments',
	initialState,
	reducers: {
		setInvestmentDetails: (state: any, action: any) => {
			state.investments = action?.payload;
		},
		resetInvestmentDetails: () => initialState,
	},
});

export const { actions: investmentActions, reducer: investmentReducer } =
	investmentsSlice;
