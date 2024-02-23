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
    BFS() {
        if(!this.root) return;
        let queue = [];
        let data = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        console.log('bfs',data)
        //return data;
    }
    DFSPreorder() {
        if(!this.root) return undefined;
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        console.log('Preorder ',data)
    }
    DFSPostorder() {
        if(!this.root) return undefined;
        let data = [];
        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(this.root);
        console.log('Post ',data)
    }
    DFSInOrder() {
        if(!this.root) return undefined;
        let data = [];
        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if(node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        console.log('Inorder ',data)
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
//bstree.find_recur(110);
bstree.BFS();
bstree.DFSPreorder();
bstree.DFSPostorder();
bstree.DFSInOrder();