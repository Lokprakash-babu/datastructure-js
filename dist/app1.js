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

export { Sub as Stack, Add as linkedList };
