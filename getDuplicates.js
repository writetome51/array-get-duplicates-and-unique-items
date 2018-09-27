"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIndexesOf_1 = require("@writetome51/array-get-indexes-intermediate/getIndexesOf");
var getUniqueItems_1 = require("./getUniqueItems");
// Returns every extra instance of each array item.
function getDuplicates(array) {
    var uniqueItems = getUniqueItems_1.getUniqueItems(array);
    var duplicatedItems = [], i = -1;
    while (++i < uniqueItems.length) {
        var indexes = getIndexesOf_1.getIndexesOf(uniqueItems[i], array);
        if (indexes.length > 1) {
            var d = -1;
            // while there's still an extra instance of the item...
            while (++d < (indexes.length - 1)) {
                duplicatedItems.push(uniqueItems[i]);
            }
        }
    }
    return duplicatedItems;
}
exports.getDuplicates = getDuplicates;
