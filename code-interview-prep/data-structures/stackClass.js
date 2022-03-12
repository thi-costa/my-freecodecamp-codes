/*
This code implements a Stack class using custom functions
implemented
*/

function Stack() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function (elem) {
        collection.push(elem);
    };

    this.pop = function () {
        let removedElement = collection[collection.length - 1];
        collection.pop();
        return removedElement;
    };

    this.peek = function () {
        return collection[collection.length - 1];
    };

    this.clear = function () {
        collection = [];

        return collection;
    };

    this.isEmpty = function () {
        if (collection.length === 0) {
            return true;
        }
        return false;
    };

    // Only change code above this line
}
