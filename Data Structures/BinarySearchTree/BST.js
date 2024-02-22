class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(current.value === value) return this;
                if(value > current.value) {
                    if(!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else{
                    if(!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }
    find(value) {
        if(!this.root) return 'No root node found';
        var current = this.root;
        while(current.value !== value) {
            if(value > current.value) {
                if(current.right!==null) {
                    current = current.right;
                } else {
                    return 'No node with value ' +value+' found';
                }
            } else {
                if(current.left) {
                    current = current.left;
                } else {
                    return 'No node with value ' +value+' found';
                }
            }
            console.log(current.value+'curr')
        }
        if(!current) {
            return 'No node with value' +value+' found';
        } 
         return current.value + ' Found!';
       
    }
    find_recur(value, head=this.root) {
        if(!head) return undefined;
        if(head.value === value) return 'Value :'+value+' found!';
        if(value > head.value) return this.find_recur(value, head.right);
        return this.find_recur(value, head.left);
    }
}

const bstree = new BST();
bstree.insert(10);
bstree.insert(20);
bstree.insert(1);
bstree.insert(13);
bstree.insert(5);
bstree.insert(5);
bstree.insert(28);
bstree.find_recur(110);