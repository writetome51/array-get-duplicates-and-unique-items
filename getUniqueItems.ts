import { isArray, notArray } from 'basic-data-handling/isArray_notArray';
import { arrayContainsPrimitive } from '@writetome51/array-analysis-basic/arrayContainsPrimitive';
import { arrayContainsArray } from '@writetome51/array-analysis-basic/arrayContainsArray';


// Won't work for array containing objects.  Objects will be ignored.

export function getUniqueItems(array): any[] {
	let uniqueItems = [];
	array.forEach((item) => {
		if ((isArray(item) && !arrayContainsArray(item, uniqueItems)) ||
			(notArray(item) && !arrayContainsPrimitive(item, uniqueItems))) {
			
			uniqueItems.push(item);
		}
	});
	return uniqueItems;
}
