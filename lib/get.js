"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./utils/curry");
var _get = function (key, data) {
    if (Array.isArray(key)) {
        if (key.length > 0) {
            var newData = data && data[key[0]];
            var newKey = key.slice(1);
            return _get(newKey, newData);
        }
        return data || null;
    }
    return data[key] || null;
};
exports.default = curry_1.curry2(_get);
