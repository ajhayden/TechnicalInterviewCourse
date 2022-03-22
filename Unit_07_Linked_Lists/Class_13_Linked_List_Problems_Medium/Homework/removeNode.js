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

    remove(val) {
        let current = this.head
        let prev = null

        // if head exists, and it matches the value
        if (current !== null && current.data === val) {
            this.head = current.next
            return
        }

        while (current !== null && current.data !== val) {
            prev = current
            current = current.next
        }

        if (current === null) return

        // else, we've found the right node
        prev.next = current.next
    }
}

let ll = new LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
console.log(ll)
ll.remove(2)
console.log(ll)
    