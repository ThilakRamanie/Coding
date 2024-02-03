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
    shift() {
        if(!this.head) {
            return undefined;
        }
        const tempHead = this.head;
        this.head = this.head.next;
        tempHead.next = null;
        this.length--;
        if(this.length===0) {
            this.tail = null;
        }
        return tempHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
    }
    get(index) {
        if(this.length <= index || index<0) return false;
        let currentELement=this.head;
        for(let i=0;i<index;i++) {
            currentELement = currentELement.next;
        }
        return currentELement;
    }
    set(index, value) {
        const getNode = this.get(index);
        if(!getNode) {
            return false;
        }
        getNode.val = value;
    }
    insert(index, value) {
        if(index>this.length || index<0) {
            return false;
        } else if(index===0) {
          this.unshift(value);
        } else if(index === this.length) {
          this.push(value);
        }
        else {
        const newNode = new Node(value);
        let currentNode = this.head;
        for(let i=0;i<index-1;i++) {
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        }
        this.length++;
    }
    remove(index) {
      if(index > this.length || index <0) return undefined;
      if(index === this.length-1) return this.pop();
      if(index === 0) return this.shift();
      const node = this.get(index-1);
      const tempNode = node.next;
      node.next = tempNode.next;
      tempNode.next = null;
    }
}

var list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
//console.log(list);
list.traverse();
//list.get(1);
//list.set(1,'Love');
//list.set(2,'you');
console.log('Remove');
list.remove(3);
list.traverse();