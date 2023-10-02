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