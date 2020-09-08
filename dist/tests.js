import {getUniqueItems} from './index.js';
import {arraysMatch} from '@writetome51/arrays-match';


let arr = ['', 1, 2, 3, '', [1], 1, 2, 3, '', [1]];
// Test 1
console.time('check');
let uniqueItems = getUniqueItems(arr);
console.timeEnd('check');
if (arraysMatch(uniqueItems, ['', 1, 2, 3, [1]])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: Make sure the array hasn't been modified:
if (arraysMatch(arr, ['', 1, 2, 3, '', [1], 1, 2, 3, '', [1]])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
let result = getUniqueItems([]);
if (result.length === 0) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
arr = [1, 2, 3, 4, 5, true, false, [1], 'hello'];
uniqueItems = getUniqueItems(arr);
if (arraysMatch(uniqueItems, arr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: duplicate objects can be identified, as long as they're identical in memory:
let obj = {name: 'steve'};
arr = [obj, obj];
uniqueItems = getUniqueItems(arr);
if (arraysMatch(uniqueItems, [obj])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 5A: objects appearing identical, but not identical in memory, are not considered duplicates:
let obj1 = {name: 'steve'};
let obj2 = {name: 'steve'};
uniqueItems = getUniqueItems([obj1, obj2]);
if (arraysMatch(uniqueItems, [obj1, obj2])) console.log('test 5A passed');
else console.log('test 5A FAILED');


obj1 = {name: 'steve'};
obj2 = obj1;
let obj3 = obj2;
uniqueItems = getUniqueItems([ [[obj1]], [[obj2]], [[obj3]] ]);
if (arraysMatch(uniqueItems, [ [[obj1]] ] )) console.log('test 5B passed');
else console.log('test 5B FAILED');
