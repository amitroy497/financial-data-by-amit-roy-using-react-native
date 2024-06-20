export const SUM = (numberArray: any) => {
	const sumArray = numberArray
		.reduce((a: number, b: number) => a + b, 0)
		.toFixed(2);
	return sumArray.toString();
};
