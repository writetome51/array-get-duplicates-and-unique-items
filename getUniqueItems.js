"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var arrayContainsPrimitive_1 = require("@writetome51/array-analysis-basic/arrayContainsPrimitive");
var arrayContainsArray_1 = require("@writetome51/array-analysis-basic/arrayContainsArray");
// Won't work for array containing objects.  Objects will be ignored.
function getUniqueItems(array) {
    var uniqueItems = [];
    array.forEach(function (item) {
        if ((isArray_notArray_1.isArray(item) && !arrayContainsArray_1.arrayContainsArray(item, uniqueItems)) ||
            (isArray_notArray_1.notArray(item) && !arrayContainsPrimitive_1.arrayContainsPrimitive(item, uniqueItems))) {
            uniqueItems.push(item);
        }
    });
    return uniqueItems;
}
exports.getUniqueItems = getUniqueItems;
