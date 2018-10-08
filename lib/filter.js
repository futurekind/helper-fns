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
var filterObj = function (pred, obj) {
    return Object.keys(obj).reduce(function (acc, key) {
        var _a;
        var item = obj[key];
        var result = pred(item);
        if (result) {
            return __assign({}, acc, (_a = {}, _a[key] = item, _a));
        }
        return acc;
    }, {});
};
var filter = function (pred, data) {
    if (Array.isArray(data)) {
        return data.filter(pred);
    }
    if (isObj_1.default(data)) {
        return filterObj(pred, data);
    }
    return data;
};
exports.default = curry_1.default(filter);
