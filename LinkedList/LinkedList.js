class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    append(value) {
        const newNode = new Node(value)
        if(this.isEmpty()) {
            this.head = newNode;
        } else {
            let currentNode = this.head

            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode;
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        } 
        if (index === 0) {
            this.prepend(value)
        } else {
            const newNode = new Node(value)
            let previousNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                previousNode = previousNode.next;
            }
            let remainingNode = previousNode.next;

            previousNode.next = newNode;
            newNode.next = remainingNode

        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            return 'List is empty'
        } else {
            let listArray = [];
            let currentNode = this.head;

            while (currentNode) {
                listArray.push(currentNode)
                currentNode = currentNode.next
            }
            return listArray
        }
    }



}

const newList = new LinkedList()

console.log(newList.getSize())

newList.prepend(1)
newList.prepend(2)

console.log(newList.getSize())

console.log(newList.print())