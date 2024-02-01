class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
          this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        if(this.length === 0) {
            return undefined;
        }
        var currentHead = this.head;
        var newTail = currentHead;
        while(currentHead.next) {
          newTail = currentHead;
          currentHead = currentHead.next;
        }
        // currentHead.next=null;
        this.tail = newTail;
        this.tail.next=null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }
}

var list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.traverse();
list.pop();
console.log(list)
list.traverse();