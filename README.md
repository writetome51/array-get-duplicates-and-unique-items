# getUniqueItems(array): any[]

Returns every item in `array` without any duplicates. Does not modify `array`. 

Note:  duplicate arrays do not have to match using the `===` operator.  
However, duplicate objects do.  See the examples.


## Examples
<details>
<summary>view examples</summary>

```
getUniqueItems( [ '', 1, 2, 3, '', 1, 2, 3, '' ] );  
// --> [ '', 1, 2, 3 ]

getUniqueItems( [ true, true, false, true, false, 'aa' ] );  
// --> [ true, false, 'aa' ]


// Objects appearing identical, but not identical in memory, are not 
// considered duplicates:

let obj1 = {name: 'steve'};
let obj2 = {name: 'steve'};

getUniqueItems([obj1, obj2]);
// --> [ {name: 'steve'}, {name: 'steve'} ]

// Try this:

let obj1 = {name: 'steve'};
let obj2 = obj1;

getUniqueItems([obj1, obj2]);
// --> [ {name: 'steve'} ]


// Arrays appearing identical, but not identical in memory, can still 
// be considered duplicates. This is because the algorithm loops thru 
// them, checking if array1[i] === array2[i].  If array1[i] and array2[i] 
// are both arrays of identical length, the algorithm recursively operates 
// on those arrays.

getUniqueItems( [ [[1,2,3]], [[1,2,3]] ] );
// --> [ [[1,2,3]] ]


// But, if the arrays contain objects not identical in memory, they're not 
// considered duplicates:

let arr = [ [[{name: 'steve'}]], [[{name: 'steve'}]] ];

getUniqueItems(arr);
// --> [ [[{name: 'steve'}]], [[{name: 'steve'}]] ]

// Let's try that again with objects identical in memory:

let obj1 = {name: 'steve'};
let obj2 = obj1;
let arr = [ [[obj1]], [[obj2]] ];
getUniqueItems(arr);
// --> [ [[{name: 'steve'}]] ]
```
</details>

## Installation
`npm i  @writetome51/array-get-unique-items`

## Loading
```js
import {getUniqueItems} from '@writetome51/array-get-unique-items';
```
