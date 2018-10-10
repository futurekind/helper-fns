"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./utils/curry");
var Dir;
(function (Dir) {
    Dir[Dir["RTL"] = -1] = "RTL";
    Dir[Dir["LTR"] = 1] = "LTR";
})(Dir = exports.Dir || (exports.Dir = {}));
exports._compose = function (dir) { return function (fns, data) {
    var d = data;
    if (dir === Dir.RTL) {
        for (var i = fns.length - 1; i >= 0; i--) {
            var fn = fns[i];
            d = fn(d);
        }
    }
    if (dir === Dir.LTR) {
        for (var i = 0; i < fns.length; i++) {
            var fn = fns[i];
            d = fn(d);
        }
    }
    return d;
}; };
exports.default = curry_1.curry2(exports._compose(Dir.RTL));
