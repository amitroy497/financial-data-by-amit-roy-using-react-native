export const compareObjects = (obj1: Object, obj2: Object) => {
	const first = JSON.stringify(obj1);
	const second = JSON.stringify(obj2);
	return first === second;
};
