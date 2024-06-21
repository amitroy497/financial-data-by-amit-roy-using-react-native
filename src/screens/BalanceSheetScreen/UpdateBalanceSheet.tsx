import { BalanceSheetWrapper } from '../../components';

export const UpdateBalanceSheet = ({ route }: { route: any }) => {
	return <BalanceSheetWrapper location={route?.name} />;
};
