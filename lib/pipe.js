"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("./compose");
var curry_1 = require("./utils/curry");
exports.default = curry_1.curry2(compose_1._compose(compose_1.Dir.LTR));
