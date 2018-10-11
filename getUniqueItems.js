"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var arrayHas_1 = require("@writetome51/array-has/arrayHas");
var not_1 = require("@writetome51/not");
// Will trigger error if array contains object.
function getUniqueItems(array) {
    errorIfNotArray_1.errorIfNotArray(array);
    var uniqueItems = [];
    array.forEach(function (item) {
        if (not_1.not(arrayHas_1.arrayHas(item, uniqueItems))) {
            uniqueItems.push(item);
        }
    });
    return uniqueItems;
}
exports.getUniqueItems = getUniqueItems;
