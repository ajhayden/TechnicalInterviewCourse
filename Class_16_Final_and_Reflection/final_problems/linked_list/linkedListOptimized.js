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

    // Optimized
    // Time complexity: O(N)
    // Space complexity: O(1)
    findMiddle() {
        // edge case
        if (!this.head) return undefined
        
        // two pointers
        let slow = this.head
        let fast = this.head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        return slow.data
    }

    remove(index) {
        // if (index < 0 || index >= this.length) return undefined;
        // else if (index === 0) return this.shift();
        // else if (index === this.length - 1) return this.pop();

        let pen = this.get(index - 1);
        let removedNode = pen.next

        pen.next = removedNode.next;

        this.length -= 1;
        return removedNode;
    }
}

console.log('**************')
let ll = new LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)
console.log(ll)
console.log(ll.findMiddle()) // 3

console.log('**************')

let ll2 = new LinkedList()
ll2.insert(1)
ll2.insert(2)
ll2.insert(3)
ll2.insert(4)
ll2.insert(5)
ll2.insert(6)
console.log(ll2)
console.log(ll2.findMiddle()) // 4