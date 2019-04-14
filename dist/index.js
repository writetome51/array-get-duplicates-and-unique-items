"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_has_1 = require("@writetome51/array-has");
var error_if_not_array_1 = require("error-if-not-array");
var not_1 = require("@writetome51/not");
// Will trigger error if array contains object.  Arrays are OK.
function getUniqueItems(array) {
    error_if_not_array_1.errorIfNotArray(array);
    var uniqueItems = [];
    array.forEach(function (item) {
        if (not_1.not(array_has_1.arrayHas(item, uniqueItems)))
            uniqueItems.push(item);
    });
    return uniqueItems;
}
exports.getUniqueItems = getUniqueItems;
