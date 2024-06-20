export const balanceSheetMock = {
	assets: {
		mainTitle: 'Assets',
		mainValue: '2000',
		mainDetails: [
			{
				headerTitle: 'Current Assets',
				headerValue: '1000',
				headerDetails: [
					{
						subHeaderTitle: 'Cash',
						subHeaderValue: '300',
						subDetails: [
							{
								label: 'Axis',
								value: '100',
							},
							{
								label: 'AU',
								value: '100',
							},
							{
								label: 'FI',
								value: '100',
							},
						],
					},
					{
						subHeaderTitle: 'Recurring Deposits',
						subHeaderValue: '300',
						subDetails: [
							{
								label: 'AU',
								value: '100',
							},
							{
								label: 'FI',
								value: '100',
							},
							{
								label: 'PNB',
								value: '100',
							},
						],
					},
					{
						subHeaderTitle: 'Gold ETF',
						subHeaderValue: '300',
					},
					{
						subHeaderTitle: 'Shoonya ETF',
						subHeaderValue: '300',
					},
				],
			},
			{
				headerTitle: 'Long Term Assets',
				headerValue: '1000',
				headerDetails: [
					{
						subHeaderTitle: 'Fixed Deposits',
						subHeaderValue: '300',
						subDetails: [
							{
								label: 'AU',
								value: '100',
							},
						],
					},
					{
						subHeaderTitle: 'Mutual Funds',
						subHeaderValue: '300',
					},
					{
						subHeaderTitle: 'Public Provident Fund',
						subHeaderValue: '300',
					},
					{
						subHeaderTitle: 'National Pension Scheme',
						subHeaderValue: '300',
					},
				],
			},
		],
	},

	liabilities: {
		mainTitle: 'liabilities',
		mainValue: '2000',
		mainDetails: [
			{
				headerTitle: 'Current Liabilities',
				headerValue: '1000',
				headerDetails: [
					{
						subHeaderTitle: 'Credit Cards',
						subHeaderValue: '300',
						subDetails: [
							{
								label: 'CITI',
								value: '100',
							},
							{
								label: 'SBI',
								value: '100',
							},
						],
					},
				],
			},
			{
				headerTitle: 'Long Term Liabilities',
				headerValue: '1000',
				headerDetails: [
					{
						subHeaderTitle: 'Loans',
						subHeaderValue: '300',
						subDetails: [
							{
								label: 'AXIS PL',
								value: '100',
							},
							{
								label: 'CITI HIS',
								value: '100',
							},
						],
					},
				],
			},
		],
	},
};
