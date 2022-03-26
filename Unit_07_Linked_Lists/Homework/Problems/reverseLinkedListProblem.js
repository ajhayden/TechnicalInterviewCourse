// Write the code to reverse a linked list

class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (this.head) {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        } else {
            this.head = newNode
        }
    }
}

let ll = new LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
console.log(ll)
