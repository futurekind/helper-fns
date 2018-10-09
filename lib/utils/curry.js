"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry2 = function (f) {
    function fn(t1, t2) {
        switch (arguments.length) {
            case 1:
                return function (t2) {
                    return f(t1, t2);
                };
            case 2:
                return f(t1, t2);
        }
    }
    return fn;
};
