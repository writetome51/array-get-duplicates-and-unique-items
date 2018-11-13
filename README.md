To include:

import {getUniqueItems} from '@writetome51/array-get-unique-items';

getUniqueItems(array): any[]

Returns every item in array without any duplicates.  
NOTICE:  Will trigger error if array contains object.  
Example:

let arr = ['', 1, 2, 3, '', [1], 1, 2, 3, '', [1]];  
let uniqueItems = getUniqueItems(arr);  
// uniqueItems is now ['', 1, 2, 3, [1]]
