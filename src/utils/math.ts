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
