import { configureStore } from '@reduxjs/toolkit';
import {
	balanceSheetReducer,
	investmentReducer,
	savingsReducer,
} from './slice';

export const Store = configureStore({
	reducer: {
		balanceSheet: balanceSheetReducer,
		investments: investmentReducer,
		savings: savingsReducer,
	},
});
