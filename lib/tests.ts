import { getUniqueItems } from './getUniqueItems';
import { arraysMatch } from '@writetome51/arrays-match';


let arr: any[] = ['', 1, 2, 3, '', [1], 1, 2, 3, '', [1]];

// Test 1
let uniqueItems = getUniqueItems(arr);
if (arraysMatch(uniqueItems, ['', 1, 2, 3, [1]])) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: Make sure the array hasn't been modified:
if (arraysMatch(arr, ['', 1, 2, 3, '', [1], 1, 2, 3, '', [1]])) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3
let result = getUniqueItems([]);
if (result.length === 0) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4
arr = [1, 2, 3, 4, 5, true, false, [1], 'hello'];
uniqueItems = getUniqueItems(arr);
if (arraysMatch(uniqueItems, arr)) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: should trigger error if array contains object:
arr = [1, 2, 3, 4, {}];
let errorTriggered = false;
try {
	uniqueItems = getUniqueItems(arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');