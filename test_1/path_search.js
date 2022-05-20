class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    getValue() {
        return this.value;
    }

    getChild(i) {
        return this.children[i];
    }

    getNumberOfChildren() {
        return this.children.length;
    }

    print(indent = 0) {
        console.log("-".repeat(indent), this.value);
        for (const child of this.children) {
            child.print(indent + 4);
        }
    }
}

const root = new Node(0);
const leftRoot = new Node(10);
const rightRoot = new Node(500);
root.addChild(leftRoot);
root.addChild(rightRoot);
const leftChild = new Node(150);
const rightChild = new Node(250);
leftRoot.addChild(leftChild);
leftRoot.addChild(rightChild);
const leftleftChild = new Node(200);
leftChild.addChild(leftleftChild);
const rightrightChild = new Node(300);
rightChild.addChild(rightrightChild);
console.log("Tree Structure:")
root.print();

function getPaths(root, pathsToFind) {
    // INSERT YOUR CODE HERE
}

// should return [ '0 -> 10 -> 150 -> 200', '0 -> 500' ]
console.log(getPaths(root, [150, 200, 500]));