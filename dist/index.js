import {arrayHas} from '@writetome51/array-has';
import {not} from '@writetome51/not';


export function getUniqueItems(array) {
	let uniqueItems = [], i = -1, length = array.length;
	while (++i < length) {
		let item = array[i];
		if (not(arrayHas(item, uniqueItems))) uniqueItems.push(item);
	}
	return uniqueItems;
}
