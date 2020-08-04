import {arrayHas} from '@writetome51/array-has';
import {not} from '@writetome51/not';


export function getUniqueItems(array) {
	let uniqueItems = [];

	array.forEach((item) => {
		if (not(arrayHas(item, uniqueItems))) uniqueItems.push(item);
	});
	return uniqueItems;
}
