(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dataStructure = {}));
}(this, (function (exports) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
