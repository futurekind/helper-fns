"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./utils/curry");
var either = function (right, left, data) {
    if (data) {
        if (typeof right === 'function') {
            return right(data);
        }
        return right;
    }
    else {
        return left;
    }
};
exports.default = curry_1.curry3(either);
