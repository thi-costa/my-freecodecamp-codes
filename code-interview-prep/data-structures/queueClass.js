/*
This code implements a Queue class using custom functions
*/
function Queue() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function (elem) {
        // Working
        collection.push(elem);
    };

    this.dequeue = function () {
        // Working
        let removedElement = collection[0];
        collection.shift();
        return removedElement;
    };

    this.front = function () {
        // Working
        return collection[0];
    };

    this.size = function () {
        // Working

        return collection.length;
    };

    this.isEmpty = function () {
        // Working
        if (collection.length === 0) {
            return true;
        }
        return false;
    };

    // Only change code above this line
}

const queue = new Queue();
console.log("Vazio?", queue.isEmpty());
queue.d;
console.log("Vazio?", queue.isEmpty());
