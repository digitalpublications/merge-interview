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

/**
 * Given a json object representing a tree structure
 * returns the same structure implemented using the Node class
 * Returns an array of nodes
 * @param {*} jsonTree
 * @returns {Node[]}
 */
function jsonTreeToTree(jsonTree) {
    const nodes = [];
    for (const nodeId of Object.keys(jsonTree)) {
        if (!Number.isInteger(+nodeId)) throw new Error("InvalidNodeId");
        // generate a new node
        const node = new Node(nodeId);
        // if this node has children parse them
        if (jsonTree[nodeId]) {
            const children = jsonTreeToTree(jsonTree[nodeId]);
            // add children nodes to this node
            children.forEach((child) => node.addChild(child));
        }
        nodes.push(node);
    }
    return nodes;
}

module.exports = {
    jsonTreeToTree
};
