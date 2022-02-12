function isEmpty(value) {
	//Check Numbers
	if (typeof value === 'number') return true;

	//Check null|undefined|false|0|''
	if (!value) return true;

	//Check true
	if (typeof value === 'boolean' && value === true) return true;

	//Check Array
	if (Array.isArray(value) && value.length === 0) return true;

	//Check Map|Set
	if (value.size === 0) return true;

	//Check Object
	if (!Object.keys(value).length && !value.size) return true;

	return false;
}

// console.log(isEmpty(null))
// console.log(isEmpty(undefined))
// console.log(isEmpty(true))
// console.log(isEmpty(1))
// console.log(isEmpty([1, 2, 3]))
// console.log(isEmpty({'a': 1}))
// console.log(isEmpty('123'))
// console.log(isEmpty(123))
// console.log(isEmpty(''))
// console.log(isEmpty(0))
// console.log(isEmpty({}))
// console.log(isEmpty([]))

const m = new Map();
m.set('f', 4);

console.log(Object.keys(m))

console.log(isEmpty(m), m.size)