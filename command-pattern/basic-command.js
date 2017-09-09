var Manager = /** @class */ (function () {
    function Manager() {
        this.items = [];
    }
    Manager.prototype.do = function (name) {
        var args = Array.from(arguments).slice;
        if (this[name]) {
            return this[name]();
        }
    };
    Manager.prototype.add = function (item) {
        this.items.push(item);
    };
    return Manager;
}());
