const TraversalType = {
    PRE_ORDER: "PRE_ORDER",
    IN_ORDER: "IN_ORDER",
    POST_ORDER: "POST_ORDER",
    BREADTH_FIRST: "BREADTH_FIRST",
};

class Node {
    constructor(v) {
        this.value = v;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    /**
     * Initializes an empty tree or a tree with a specified root node.
     * @param {*} value - Optional value for the root node
     */
    create(value = null) {
        if (value !== null && value !== undefined) {
            this.root = new Node(value);
        } else {
            this.root = null;
        }
    }
    /**
     * Adds a new node as a child of a specified parent node.
     * @param {*} parent
     * @param {*} new_node
     */
    insert(parent, node) {
        if (parent) {
            parent.children.push(node);
        }
    }
    /**
     * Removes a target node from the tree. This operation must handle connecting the target
     * node's children to its parent to maintain the tree's integrity.
     * @param {*} targetNode
     */
    delete(targetNode) {
        const findParent = (node, target) => {
            if (node.children.includes(target)) {
                return node;
            }
            for (let i = 0; i < node.children.length; i++) {
                const c = node.children[i];
                return findParent(c, target);
            }
            return null;
        };
        if (this.root) {
            if (targetNode == this.root) {
                this.root = null;
            } else {
                let parent = findParent(this.root, targetNode);
                if (parent) {
                    parent.children = parent.children.filter(
                        (c) => c != targetNode,
                    );
                    parent.children = [
                        ...parent.children,
                        ...targetNode.children,
                    ];
                }
            }
        }
    }
    /**
     * Finds a specific node within the tree based on its data or value.
     * The implementation varies by tree type (e.g., a Binary Search Tree has specific rules for efficient searching).
     * @param {*} value
     */
    search(value) {
        const searchInternal = (node, v) => {
            if (node == null) {
                return null;
            }
            if (node.value == v) {
                return node;
            }
            for (let i = 0; i < node.children.length; i++) {
                const c = node.children[i];
                const result = searchInternal(c, v);
                if (result !== null) {
                    return result;
                }
            }
            return null;
        };
        if (this.root) {
            if (value == this.root.value) {
                return this.root;
            } else {
                return searchInternal(this.root, value);
            }
        } else {
            return null;
        }
    }

    /**
     * Pre-order traversal (visit parent, then children)
     * In-order traversal
     * Post-order traversal (visit children, then parent)
     * Breadth-first traversal (level-by-level)
     */

    /**
     *  Visits all nodes in the tree in a specific order. Common traversal methods include:
     *  Explores as far as possible along each branch before backtracking. Includes
     *      - Pre-order
     *      - In-order
     *      - Post-order.
     *      - Breadth-First
     * @param {TraversalType} type
     * @returns {Array} with the values in the requested order
     */
    traverse(type) {
        let retVal = [];
        const traverseInternal = (n) => {
            if (n === null) {
                return;
            }

            switch (type) {
                case TraversalType.PRE_ORDER:
                case TraversalType.IN_ORDER:
                    retVal.push(n.value);
                    n.children.forEach((c) => {
                        traverseInternal(c);
                    });
                    break;
                case TraversalType.POST_ORDER:
                    n.children.forEach((c) => {
                        traverseInternal(c);
                    });
                    retVal.push(n.value);
                    break;

                default:
                    break;
            }
        };

        const traverseBreadthFirst = (n, l) => {
            if (n === null) {
                return;
            }
            if (retVal.length <= l) {
                retVal.push([]);
            }
            retVal[l].push(n.value);
            n.children.forEach((c) => {
                traverseBreadthFirst(c, l + 1);
            });
        };
        if (type === TraversalType.BREADTH_FIRST) {
            traverseBreadthFirst(this.root, 0);
            retVal = retVal.flat();
        } else {
            traverseInternal(this.root);
        }

        return retVal;
    }
    /**
     * Calculates the height of a given node (the length of the longest path to a leaf).
     * @param {*} node
     */
    get_height(node) {}
    /**
     * Calculates the depth of a given node (the length of the path from the root).
     * @param {*} node
     */
    get_depth(node) {}
    /**
     * Prints a representation of the tree to console.
     * @param {*} node - The node to start printing from (defaults to root)
     * @param {string} prefix - Prefix for tree formatting
     * @param {boolean} isLeft - Whether this node is a left child
     */
    print(node = this.root, prefix = "", isLeft = null) {
        if (!node) return;

        if (isLeft !== null) {
            console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
            prefix += isLeft ? "│   " : "    ";
        } else {
            console.log(node.value);
        }

        if (node.children && node.children.length > 0) {
            node.children.forEach((child, index) => {
                const isLeftChild = index < node.children.length - 1;
                this.print(child, prefix, isLeftChild);
            });
        }
    }
}

module.exports.Tree = Tree;
module.exports.TraversalType = TraversalType;
module.exports.Node = Node;
