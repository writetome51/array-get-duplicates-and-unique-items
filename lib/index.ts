import { arrayHas } from '@writetome51/array-has';
import { errorIfNotArray } from 'error-if-not-array';
import { not } from '@writetome51/not';


// Will trigger error if array contains object.  Arrays are OK.

export function getUniqueItems(array): any[] {
	errorIfNotArray(array);
	let uniqueItems = [];

	array.forEach((item) => {
		if (not(arrayHas(item, uniqueItems)))  uniqueItems.push(item);
	});
	return uniqueItems;
}
