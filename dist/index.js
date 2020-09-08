import {arrayHas} from '@writetome51/array-has';
import {not} from '@writetome51/not';


export function getUniqueItems(array) {

	for (var uniqueItems = [], i = 0, length = array.length; i < length; ++i) {
		let item = array[i];
		if (not(arrayHas(item, uniqueItems))) uniqueItems.push(item);
	}
	return uniqueItems;
}
