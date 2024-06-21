import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	balanceSheet: {
		id: '',
		data: {},
	},
};
const balanceSheetSlice = createSlice({
	name: 'balanceSheet',
	initialState,
	reducers: {
		setBalanceSheetDetails: (state: any, action: any) => {
			state.balanceSheet = action?.payload;
		},
		resetBalanceSheetDetails: () => initialState,
	},
});

export const { actions: balanceSheetActions, reducer: balanceSheetReducer } =
	balanceSheetSlice;
