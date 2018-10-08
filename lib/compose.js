"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./utils/curry");
var compose = function (fns, data) {
    var d = data;
    for (var i = fns.length - 1; i >= 0; i--) {
        var fn = fns[i];
        d = fn(d);
    }
    return d;
};
exports.default = curry_1.default(compose);
