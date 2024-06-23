import { configureStore } from '@reduxjs/toolkit';
import { balanceSheetReducer, investmentReducer } from './slice';

export const Store = configureStore({
	reducer: {
		balanceSheet: balanceSheetReducer,
		investments: investmentReducer,
	},
});
