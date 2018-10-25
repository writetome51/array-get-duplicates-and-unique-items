import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { arrayHas } from '@writetome51/array-has';
import { not } from '@writetome51/not';


// Will trigger error if array contains object.

export function getUniqueItems(array): any[] {
	errorIfNotArray(array);
	let uniqueItems = [];

	array.forEach((item) => {
		if (not(arrayHas(item, uniqueItems))) {
			uniqueItems.push(item);
		}
	});
	return uniqueItems;
}
