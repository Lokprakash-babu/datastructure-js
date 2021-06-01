'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Add = /** @class */ (function () {
    function Add(a, b) {
        this.a = a;
        this.b = b;
    }
    Add.prototype.add = function () {
        return this.a + this.b;
    };
    return Add;
}());

var Sub = /** @class */ (function () {
    function Sub(a, b) {
        this.a = a;
        this.b = b;
    }
    Sub.prototype.add = function () {
        return this.a - this.b;
    };
    return Sub;
}());

exports.Stack = Sub;
exports.linkedList = Add;
