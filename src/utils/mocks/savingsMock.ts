import { AllLabels, Codes } from '../../constants';

export const savingsMock = [
	{
		code: Codes.fy2024_25,
		label: AllLabels.fy2024_25,
		totalSavings: '1000.00',
		details: [
			{
				code: Codes.april,
				label: AllLabels.april,
				totalSavings: '1000.00',
				details: [
					{
						code: '1',
						label: AllLabels.tataLargeMidRegMF,
						total: '1000.00',
						details: [
							{
								date: '05-04-2024',
								amount: '5000.00',
							},
						],
					},
					{
						code: '2',
						label: AllLabels.tataSmallRegMF,
						total: '1000.00',
						details: [
							{
								date: '05-04-2024',
								amount: '5000.00',
							},
						],
					},
					{
						code: '3',
						label: AllLabels.fiSD,
						total: '3000.00',
						details: [
							{
								date: '01-04-2024',
								amount: '100.00',
							},
							{
								date: '02-04-2024',
								amount: '100.00',
							},
							{
								date: '03-04-2024',
								amount: '100.00',
							},
							{
								date: '04-04-2024',
								amount: '100.00',
							},
						],
					},
				],
			},
		],
	},
];
