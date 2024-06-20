import { ViewBalanceSheetTypes } from '../../constants/types';
import { BalanceSheetWrapper } from '../../components';

export const UpdateBalanceSheet = ({ route }: ViewBalanceSheetTypes) => {
	return <BalanceSheetWrapper location={route?.name} />;
};
