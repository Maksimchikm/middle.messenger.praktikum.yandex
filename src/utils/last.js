function last(list) {
	if (!Array.isArray(list)) return undefined;
	return list[list.length - 1];
}

const arr = [ 1, 2, 3, 4, 5 ];

console.log(last(arr));