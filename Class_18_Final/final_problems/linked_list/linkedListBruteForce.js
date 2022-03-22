// Solutions: https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/

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

    // Brute force
    // Time complexity: O(N)
    // Space complexity: O(1)
    findMiddleBruteForce() {
        // edge case
        if (!this.head) return undefined
        
        // traverse entire list, keep count
        let count = 0
        let current = this.head

        while(current.next) {
            count += 1
            current = current.next
        }

        // return to node where count / 2
        let middle = Math.ceil(count / 2)
        current = this.head
        count = 0

        while (count < middle) {
            count += 1
            current = current.next
        }

        return current.data
    }
}

let ll = new LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)
console.log(ll)

console.log(ll.findMiddleBruteForce()) // 3

let ll2 = new LinkedList()
ll2.insert(1)
ll2.insert(2)
ll2.insert(3)
ll2.insert(4)
ll2.insert(5)
ll2.insert(6)
console.log(ll2)

console.log(ll2.findMiddleBruteForce()) // 4