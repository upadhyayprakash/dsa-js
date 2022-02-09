class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    #size;
    constructor() {
        this.head = null;
        this.#size = 0;
    }

    isEmpty() {
        return !this.#size;
    }

    getSize() {
        return this.#size;
    }

    printList() {
        let curr = this.head;
        let outputStr = "";
        while (curr) {
            outputStr += curr.data + " -> ";
            curr = curr.next;
        }
        outputStr += "END";
        console.log(`LinkedList(len: ${this.#size}): ${outputStr}`);
    }

    addNode(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let curr, prev;
            curr = prev = this.head;
            while (curr) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = node;
        }
        this.#size++;
        console.log(`Added Node(${data})`);
        this.printList();
    }

    removeNode() {
        // removes last Node
        if (this.isEmpty()){
            console.log(`LinkedList is Empty`);
            return null;
        }
        let curr, prev;
        curr = prev = this.head;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        this.#size--;
        console.log(`Removed Node(${curr.data})`);
        this.printList();
        return curr.data;
    }

    findNode(data) { // returns index of 1st match if found, or -1
        let curr = this.head;
        let index = 0;
        while(curr) {
            if(curr.data === data) {
                console.log(`Found at index: ${index}`)
                return index;
            }
            curr = curr.next;
            index++;
        }
        console.log(`Not Found`)
        return -1;
    }
}

// example run
let ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);
ll.addNode(5);
ll.addNode(4);
ll.addNode(6);

ll.getSize(); // 7
ll.isEmpty(); // false

ll.removeNode(); // 6
ll.removeNode(); // 4

ll.addNode(6);

ll.findNode(0); // -1
ll.findNode(5); // 4
ll.findNode(7); // -1

