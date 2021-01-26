// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.result = []
    }

    add(record) {
        // unshift - add element into the beginning of an array
        this.result.unshift(record)
    }

    remove() {
        // pop - remove element in the end of an array 
        this.result.pop()
    }
}

module.exports = Queue;
