"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUniqueItems_1 = require("./getUniqueItems");
var arraysMatch_1 = require("@writetome51/arrays-match/arraysMatch");
var arr = ['', 1, 2, 3, '', [1], 1, 2, 3, '', [1]];
// Test 1
var uniqueItems = getUniqueItems_1.getUniqueItems(arr);
if (arraysMatch_1.arraysMatch(uniqueItems, ['', 1, 2, 3, [1]]))
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: Make sure the array hasn't been modified:
if (arraysMatch_1.arraysMatch(arr, ['', 1, 2, 3, '', [1], 1, 2, 3, '', [1]]))
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3
var result = getUniqueItems_1.getUniqueItems([]);
if (result.length === 0)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
arr = [1, 2, 3, 4, 5];
uniqueItems = getUniqueItems_1.getUniqueItems(arr);
if (arraysMatch_1.arraysMatch(uniqueItems, arr))
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5: should trigger error if array contains object:
arr = [1, 2, 3, 4, {}];
var errorTriggered = false;
try {
    uniqueItems = getUniqueItems_1.getUniqueItems(arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
