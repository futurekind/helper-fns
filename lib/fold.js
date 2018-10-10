"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./utils/curry");
var isObj_1 = require("./utils/isObj");
var fold = function (reducer, initialValue, data) {
    if (Array.isArray(data)) {
        return data.reduce(reducer, initialValue);
    }
    if (isObj_1.default(data)) {
        return Object.keys(data).reduce(function (acc, key) {
            var val = data[key];
            return reducer(acc, val);
        }, initialValue);
    }
    return data;
};
exports.default = curry_1.curry3(fold);
