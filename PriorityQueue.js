class QElement {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PQueue {
    constructor() {
        this.items = [];
    }

    enqueue(value, priority) {
        let element = new QElement(value,priority);
        let inserted = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > element.priority) {
                this.items.splice(i, 0, element);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            this.items.push(element);
        }
    }

    dequeue() {
        if (!this.items.length) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (!this.items.length) {
            return "Queue is Empty";
        }
        return this.items[0];
    }

    rear() {
        if(!this.items.length) {
            return "Queue is Empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return !this.items.length;
    }

    printQueue() {
        let outputStr = "";
        for(let i = 0; i<this.items.length; i++) {
            outputStr += `${this.items[i].value}(${this.items[i].priority}), `;
        }
        console.log(outputStr);
    }
}
