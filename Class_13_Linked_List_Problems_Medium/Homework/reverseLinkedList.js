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

    reverse() {
        // iterate through each node
        // redirect .next to the previous node
        // head.next becomes null
        // tail becomes head

        let prev = null
        let current = this.head

        while (current !== null) {
            // reverse .next connection
            let temp = current.next
            current.next = prev

            // update pointers
            prev = current
            current = temp
        }

        this.head = prev
    }
}

let ll = new LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
console.log(ll)
ll.reverse()
console.log(ll)