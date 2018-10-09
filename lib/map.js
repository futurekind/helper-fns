"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./utils/curry");
var isObj_1 = require("./utils/isObj");
var mapArray = function (mapper) { return function (arr) { return arr.map(mapper); }; };
var mapObject = function (mapper) { return function (obj) {
    return Object.keys(obj).reduce(function (acc, key, index) {
        var _a;
        return __assign({}, acc, (_a = {}, _a[key] = mapper(obj[key], index), _a));
    }, {});
}; };
var map = function (mapper, data) {
    if (Array.isArray(data)) {
        return mapArray(mapper)(data);
    }
    if (isObj_1.default(data)) {
        return mapObject(mapper)(data);
    }
    return data;
};
exports.default = curry_1.curry2(map);
