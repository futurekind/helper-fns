"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./utils/curry");
var sort = function (sortingFn, data) {
    return data.slice().sort(sortingFn);
};
exports.default = curry_1.curry2(sort);
