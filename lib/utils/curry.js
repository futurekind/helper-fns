"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry = function (fn) {
    return function () {
        var xs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            xs[_i] = arguments[_i];
        }
        if (xs.length === 0) {
            throw Error('EMPTY INVOCATION');
        }
        if (xs.length >= fn.length) {
            return fn.apply(void 0, xs);
        }
        return curry(fn.bind.apply(fn, [null].concat(xs)));
    };
};
exports.default = curry;
