export const SUM = (numberArray: any) => {
	const sumArray = numberArray
		.reduce((a: number, b: number) => a + b, 0)
		.toFixed(2);
	return sumArray.toString();
};

export const stringToNumberToString = (str: string) => {
	const num = +str;
	const fixed = num.toFixed(2);
	const strAgain = fixed.toString();
	return strAgain;
};

export const SUBTRACT = (numberArray: any) => {
	const subtractArray = numberArray
		.reduce((a: number, b: number) => b - a, 0)
		.toFixed(2);
	return subtractArray.toString();
};

export const PERCENTAGE = (difference: string, investment: string) => {
	const diff = +difference;
	const invest = +investment;
	const percentage = (diff / invest) * 100;
	return percentage.toFixed(2).toString();
};
