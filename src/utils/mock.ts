export const balanceSheetMock = [
	{
		maintitle: 'Assets',
		mainvalue: '2000',
		maindetails: [
			{
				headerTitle: 'Current Assets',
				headerValue: '1000',
				headerdetails: [
					{
						subheadertitle: 'Cash',
						subheadervalue: '300',
						subdetails: [
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
						subheadertitle: 'Recurring Deposits',
						subheadervalue: '300',
						subdetails: [
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
						subheadertitle: 'Gold ETF',
						subheadervalue: '300',
					},
					{
						subheadertitle: 'Shoonya ETF',
						subheadervalue: '300',
					},
				],
			},
			{
				headerTitle: 'Long Term Assets',
				headerValue: '1000',
				headerdetails: [
					{
						subheadertitle: 'Fixed Deposits',
						subheadervalue: '300',
						subdetails: [
							{
								label: 'AU',
								value: '100',
							},
						],
					},
					{
						subheadertitle: 'Mutual Funds',
						subheadervalue: '300',
					},
					{
						subheadertitle: 'Public Provident Fund',
						subheadervalue: '300',
					},
					{
						subheadertitle: 'National Pension Scheme',
						subheadervalue: '300',
					},
				],
			},
		],
	},
	{
		maintitle: 'liabilities',
		mainvalue: '2000',
		maindetails: [
			{
				headerTitle: 'Current Liabilities',
				headerValue: '1000',
				headerdetails: [
					{
						subheadertitle: 'Credit Cards',
						subheadervalue: '300',
						subdetails: [
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
				headerdetails: [
					{
						subheadertitle: 'Loans',
						subheadervalue: '300',
						subdetails: [
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
];
