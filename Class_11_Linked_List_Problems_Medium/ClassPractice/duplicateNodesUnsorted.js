// Write a program to remove duplicates from a sorted list
// (Add a function to your Linked List class code)

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

    /** NEW STUFF HERE **/
    removeDuplicatesUnsorted() {
        let counts = {}
        let current = this.head
        let prev = null

        while (current !== null) {
            // if value already exists
            if (counts[current.data]) {
                prev.next = current.next
            } else {
                counts[current.data] = 1
            }
            prev = current
            current = current.next
        }
    }
}

let ull = new LinkedList()
ull.insert(2)
ull.insert(2)
ull.insert(1)
ull.insert(4)
ull.insert(3)
console.log(ull)
ull.removeDuplicatesUnsorted()
console.log(ull)