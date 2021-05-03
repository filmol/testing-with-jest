var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.splice(0,1)
    // Ett medvetet fel som tar bort det första elementet i listan.
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}
