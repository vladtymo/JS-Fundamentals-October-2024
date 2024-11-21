// ---------- Function Overloading
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(x, y, separator) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string' && separator) {
        return x + separator + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x + ' ' + y;
    }
    throw new TypeError();
}
console.log(add(3, 5));
console.log(add("red", "blue"));
console.log(add("red", "blue", "-"));
// function random(min: number, max: number): number; // 10, 20 = 17
// function random(min: string, max: string): string; // 'a', 'f' = 'c'
// ---------- Generic
// element<TypeName>
// ------ generic function
function pushToMiddle(arr, item) {
    var midIndex = arr.length / 2;
    var firstHalf = arr.slice(0, midIndex);
    var secondHalf = arr.slice(midIndex, arr.length);
    return __spreadArray(__spreadArray(__spreadArray([], firstHalf, true), [item], false), secondHalf, true);
}
console.log(pushToMiddle([1, 2, 3, 4, 5, 6, 7], 999));
console.log(pushToMiddle(["A", "B", "C", "D"], "FFF"));
// ------ generic class
// generic type limits: type extends {...}
var Chain = /** @class */ (function () {
    function Chain() {
        this.items = [];
    }
    Object.defineProperty(Chain.prototype, "size", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Chain.prototype.addNode = function (item) {
        console.log("Going to add " + item.title + " item!");
        this.items.push(item);
    };
    Chain.prototype.removeNode = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1)
            this.items.splice(index, 1);
    };
    Chain.prototype.print = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    return Chain;
}());
var Book = /** @class */ (function () {
    function Book() {
        this.title = "Blabla Title";
    }
    return Book;
}());
var library = new Chain();
var Avatar = /** @class */ (function () {
    function Avatar() {
        this.size = 0;
        this.name = "unknown";
        this.url = "https://localhost/";
    }
    Avatar.prototype.send = function (data) {
        throw new Error("Method not implemented.");
    };
    Avatar.prototype.getDate = function () {
        throw new Error("Method not implemented.");
    };
    Avatar.prototype.clear = function () {
        throw new Error("Method not implemented.");
    };
    return Avatar;
}());
var Video = /** @class */ (function () {
    function Video() {
        this.size = 0;
        this.name = "unknown";
        this.url = "https://localhost/";
        this.duration = 0;
    }
    Video.prototype.send = function (data) {
        throw new Error("Method not implemented.");
    };
    Video.prototype.getDate = function () {
        throw new Error("Method not implemented.");
    };
    Video.prototype.clear = function () {
        throw new Error("Method not implemented.");
    };
    return Video;
}());
// ---------- Decorators
// @decoratorName
// class Test {
//     @decoratorName
//     test: any;
//     @decoratorName  
//     get Test(): any { return this.test; }
//     @decoratorName
//     constructor(test: any) {
//         this.test = test;
//     }
//     @decoratorName
//     print(): void {
//     }
// }
// -------------- class decorator
// type ClassDecorator = (value: Function, context: {
//   kind: "class"
//   name: string | undefined
//   addInitializer(initializer: () => void): void
// }) => Function | void
function WithDate(target, context) {
    if (context.kind === "class") {
        target.prototype.date = new Date();
    }
}
var Order = function () {
    var _classDecorators = [WithDate];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Order = _classThis = /** @class */ (function () {
        function Order_1(id, client) {
            this.id = id;
            //this.date = new Date();
            this.client = client;
        }
        Order_1.prototype.showInfo = function () {
            var _a;
            console.log("Order [".concat(this.id, "] created at ").concat(this.date.toDateString(), " by ").concat((_a = this.client) !== null && _a !== void 0 ? _a : "anonymous"));
        };
        return Order_1;
    }());
    __setFunctionName(_classThis, "Order");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Order = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Order = _classThis;
}();
var order = new Order(122, "Vlad");
order.showInfo();
var order2 = new Order(333);
order2.showInfo();
