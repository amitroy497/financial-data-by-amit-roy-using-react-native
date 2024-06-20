import { configureStore } from '@reduxjs/toolkit';
import { balanceSheetReducer } from './slice';

export const Store = configureStore({
	reducer: {
		balanceSheet: balanceSheetReducer,
	},
});
