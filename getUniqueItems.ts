import { isArray, notArray } from 'basic-data-handling/isArray_notArray';
import { arrayHasPrimitive } from '@writetome51/array-has/arrayHasPrimitive';
import { arrayHasArray } from '@writetome51/array-has/arrayHasArray';


// Won't work for array containing objects.  Objects will be ignored.

export function getUniqueItems(array): any[] {
	let uniqueItems = [];
	array.forEach((item) => {
		if ((isArray(item) && !arrayHasArray(item, uniqueItems)) ||
			(notArray(item) && !arrayHasPrimitive(item, uniqueItems))) {
			
			uniqueItems.push(item);
		}
	});
	return uniqueItems;
}
