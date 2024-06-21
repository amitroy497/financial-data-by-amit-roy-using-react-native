import { BalanceSheetWrapper } from '../../components';

export const ViewBalanceSheet = ({ route }: { route: any }) => {
	return <BalanceSheetWrapper location={route?.name} />;
};
