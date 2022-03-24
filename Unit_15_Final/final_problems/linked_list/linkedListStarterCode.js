class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insert(value) {
        const newNode = new Node(value)

        if (this.head) {
            let current = this.head
            
            while(current.next) {
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
ll.insert(5)
