# getUniqueItems(array): any[]

Returns every item in `array` without any duplicates.  
NOTICE:  Will trigger error if array contains object.  Arrays are OK.

## Example
```
let arr = [ '', 1, 2, 3, '', [1], 1, 2, 3, '', [1] ];  
let uniqueItems = getUniqueItems(arr);  
// uniqueItems is now [ '', 1, 2, 3, [1] ]
```

## Installation
`npm i  @writetome51/array-get-unique-items`

## Loading
```
// if using TypeScript:
import {getUniqueItems} from '@writetome51/array-get-unique-items';
// if using ES5 Javascript:
var getUniqueItems = require('@writetome51/array-get-unique-items').getUniqueItems;
```