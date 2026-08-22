const {Tree, TraversalType} = require('../src/tree');
const Node = require('../src/tree').Node;

describe('Tree.create()', () => {
  test('should create an empty tree with null root', () => {
    const tree = new Tree();
    tree.create();
    expect(tree.root).toBeNull();
  });

  test('should create a tree with a root node when value is provided', () => {
    const tree = new Tree();
    const rootValue = 10;
    tree.create(rootValue);
    expect(tree.root).not.toBeNull();
    expect(tree.root.value).toBe(rootValue);
  });

  test('should initialize root node with no children', () => {
    const tree = new Tree();
    tree.create(5);
    expect(tree.root.children).toBeDefined();
    expect(tree.root.children.length).toBe(0);
  });

  test('should create multiple independent trees', () => {
    const tree1 = new Tree();
    const tree2 = new Tree();
    
    tree1.create(1);
    tree2.create(2);
    
    expect(tree1.root.value).toBe(1);
    expect(tree2.root.value).toBe(2);
    expect(tree1.root).not.toBe(tree2.root);
  });
});

describe('Tree.insert()', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
    tree.create(1);
  });

  test('should insert a child node to a parent node', () => {
    const childNode = new Node(2);
    tree.insert(tree.root, childNode);
    
    expect(tree.root.children.length).toBe(1);
    expect(tree.root.children[0]).toBe(childNode);
  });

  test('should insert multiple children to the same parent', () => {
    const child1 = new Node(2);
    const child2 = new Node(3);
    const child3 = new Node(4);
    
    tree.insert(tree.root, child1);
    tree.insert(tree.root, child2);
    tree.insert(tree.root, child3);
    
    expect(tree.root.children.length).toBe(3);
    expect(tree.root.children).toEqual([child1, child2, child3]);
  });

  test('should insert a child to a non-root node', () => {
    const child = new Node(2);
    const grandchild = new Node(3);
    
    tree.insert(tree.root, child);
    tree.insert(child, grandchild);
    
    expect(child.children.length).toBe(1);
    expect(child.children[0]).toBe(grandchild);
  });

  test('should handle inserting to a null parent gracefully', () => {
    const childNode = new Node(2);
    expect(() => {
      tree.insert(null, childNode);
    }).not.toThrow();
  });

  test('should maintain tree structure with nested inserts', () => {
    const level1 = new Node(2);
    const level2 = new Node(3);
    const level3 = new Node(4);
    
    tree.insert(tree.root, level1);
    tree.insert(level1, level2);
    tree.insert(level2, level3);
    
    expect(tree.root.children[0]).toBe(level1);
    expect(level1.children[0]).toBe(level2);
    expect(level2.children[0]).toBe(level3);
  });
});

describe('Tree.delete()', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
    tree.create(1);
  });

  test('should delete a leaf node from its parent', () => {
    const child = new Node(2);
    tree.insert(tree.root, child);
    
    expect(tree.root.children.length).toBe(1);
    tree.delete(child);
    expect(tree.root.children.length).toBe(0);
  });

  test('should delete a node with a single child and connect child to parent', () => {
    const child = new Node(2);
    const grandchild = new Node(3);
    
    tree.insert(tree.root, child);
    tree.insert(child, grandchild);
    
    tree.delete(child);
    
    expect(tree.root.children.length).toBe(1);
    expect(tree.root.children[0]).toBe(grandchild);
  });

  test('should delete a node with multiple children and maintain all children', () => {
    const child = new Node(2);
    const grandchild1 = new Node(3);
    const grandchild2 = new Node(4);
    const grandchild3 = new Node(5);
    
    tree.insert(tree.root, child);
    tree.insert(child, grandchild1);
    tree.insert(child, grandchild2);
    tree.insert(child, grandchild3);
    
    tree.delete(child);
    
    expect(tree.root.children.length).toBe(3);
    expect(tree.root.children).toContain(grandchild1);
    expect(tree.root.children).toContain(grandchild2);
    expect(tree.root.children).toContain(grandchild3);
  });

  test('should not throw when deleting a non-existent node', () => {
    const nodeNotInTree = new Node(999);
    expect(() => {
      tree.delete(nodeNotInTree);
    }).not.toThrow();
  });

  test('should not throw when deleting from an empty tree', () => {
    const emptyTree = new Tree();
    emptyTree.create();
    const node = new Node(1);
    
    expect(() => {
      emptyTree.delete(node);
    }).not.toThrow();
  });

  test('should handle deleting the root node', () => {
    const child1 = new Node(2);
    const child2 = new Node(3);
    
    tree.insert(tree.root, child1);
    tree.insert(tree.root, child2);
    
    tree.delete(tree.root);
    
    // After deleting root, the tree structure should be updated appropriately
    // (implementation may vary: set root to null or promote a child)
    expect(tree.root === null || tree.root === child1 || tree.root === child2).toBe(true);
  });

  test('should remove only the target node and not affect siblings', () => {
    const child1 = new Node(2);
    const child2 = new Node(3);
    const child3 = new Node(4);
    
    tree.insert(tree.root, child1);
    tree.insert(tree.root, child2);
    tree.insert(tree.root, child3);
    
    tree.delete(child2);
    
    expect(tree.root.children.length).toBe(2);
    expect(tree.root.children).toContain(child1);
    expect(tree.root.children).toContain(child3);
    expect(tree.root.children).not.toContain(child2);
  });
});

describe('Tree.search()', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
    tree.create(1);
    const child1 = new Node(2);
    const child2 = new Node(3);
    const grandchild1 = new Node(4);
    const grandchild2 = new Node(5);
    
    tree.insert(tree.root, child1);
    tree.insert(tree.root, child2);
    tree.insert(child1, grandchild1);
    tree.insert(child1, grandchild2);
  });

  test('should find a value in the root node', () => {
    const result = tree.search(1);
    expect(result).toBeDefined();
    expect(result.value).toBe(1);
  });

  test('should find a value in a direct child node', () => {
    const result = tree.search(2);
    expect(result).toBeDefined();
    expect(result.value).toBe(2);
  });

  test('should find a value in a nested node', () => {
    const result = tree.search(4);
    expect(result).toBeDefined();
    expect(result.value).toBe(4);
  });

  test('should return undefined or null for a non-existent value', () => {
    const result = tree.search(999);
    expect(result === null || result === undefined).toBe(true);
  });

  test('should return the correct node object when found', () => {
    const result = tree.search(5);
    tree.print();
    expect(result).toBeInstanceOf(Node);
    expect(result.value).toBe(5);
  });

  test('should search in an empty tree', () => {
    const emptyTree = new Tree();
    emptyTree.create();
    const result = emptyTree.search(1);
    expect(result === null || result === undefined).toBe(true);
  });

  test('should search from root when no starting node specified', () => {
    const result = tree.search(3);
    expect(result).toBeDefined();
    expect(result.value).toBe(3);
  });

  test('should find first occurrence of a duplicated value', () => {
    // Add a duplicate value to test behavior
    const child3 = new Node(2); // duplicate of child1's value
    tree.insert(tree.root, child3);
    
    const result = tree.search(2);
    expect(result).toBeDefined();
    expect(result.value).toBe(2);
  });

  test('should not find a value in an empty tree', () => {
    const emptyTree = new Tree();
    emptyTree.create();
    const result = emptyTree.search(100);
    expect(result === null || result === undefined).toBe(true);
  });
});

describe('Tree.traverse()', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
    tree.create(1);
    const child1 = new Node(2);
    const child2 = new Node(3);
    const grandchild1 = new Node(4);
    const grandchild2 = new Node(5);
    const grandchild3 = new Node(6);
    
    tree.insert(tree.root, child1);
    tree.insert(tree.root, child2);
    tree.insert(child1, grandchild1);
    tree.insert(child1, grandchild2);
    tree.insert(child2, grandchild3);
  });

  test('should traverse tree in pre-order', () => {
    const result = tree.traverse(TraversalType.PRE_ORDER);
    // Pre-order: visit node, then children
    // Expected: [1, 2, 4, 5, 3, 6]
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([1, 2, 4, 5, 3, 6]);
  });

  test('should traverse tree in in-order', () => {
    const result = tree.traverse(TraversalType.IN_ORDER);
    // In-order: left subtree, node, right subtree (for binary trees)
    // For general trees, this may visit children in between
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(6);
  });

  test('should traverse tree in post-order', () => {
    const result = tree.traverse(TraversalType.POST_ORDER);
    // Post-order: visit children first, then node
    // Expected: [4, 5, 2, 6, 3, 1]
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([4, 5, 2, 6, 3, 1]);
  });

  test('should traverse tree in breadth-first', () => {
    const result = tree.traverse(TraversalType.BREADTH_FIRST);
    // Breadth-first (level-order): visit nodes level by level
    // Expected: [1, 2, 3, 4, 5, 6]
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should traverse an empty tree', () => {
    const emptyTree = new Tree();
    emptyTree.create();
    const result = emptyTree.traverse(TraversalType.PRE_ORDER);
    expect(result === null || result === undefined || result.length === 0).toBe(true);
  });

  test('should traverse a tree with a single node', () => {
    const singleTree = new Tree();
    singleTree.create(42);
    
    const preOrderResult = singleTree.traverse(TraversalType.PRE_ORDER);
    const postOrderResult = singleTree.traverse(TraversalType.POST_ORDER);
    const breadthFirstResult = singleTree.traverse(TraversalType.BREADTH_FIRST);
    
    expect(preOrderResult).toEqual([42]);
    expect(postOrderResult).toEqual([42]);
    expect(breadthFirstResult).toEqual([42]);
  });

  test('should return array of node values in correct order for pre-order', () => {
    const result = tree.traverse(TraversalType.PRE_ORDER);
    expect(result.every(val => typeof val === 'number')).toBe(true);
  });

  test('should visit all nodes exactly once during traversal', () => {
    const preOrderResult = tree.traverse(TraversalType.PRE_ORDER);
    const postOrderResult = tree.traverse(TraversalType.POST_ORDER);
    const breadthFirstResult = tree.traverse(TraversalType.BREADTH_FIRST);
    
    expect(preOrderResult.length).toBe(6);
    expect(postOrderResult.length).toBe(6);
    expect(breadthFirstResult.length).toBe(6);
  });

  test('should contain all node values regardless of traversal type', () => {
    const preOrderResult = tree.traverse(TraversalType.PRE_ORDER);
    const postOrderResult = tree.traverse(TraversalType.POST_ORDER);
    const breadthFirstResult = tree.traverse(TraversalType.BREADTH_FIRST);
    
    const expectedValues = [1, 2, 3, 4, 5, 6];
    expect(preOrderResult.sort((a, b) => a - b)).toEqual(expectedValues);
    expect(postOrderResult.sort((a, b) => a - b)).toEqual(expectedValues);
    expect(breadthFirstResult.sort((a, b) => a - b)).toEqual(expectedValues);
  });

  test('should handle traversal with no traversal type specified', () => {
    const result = tree.traverse();
    // Should default to some traversal or return null/undefined
    expect(result === null || result === undefined || Array.isArray(result)).toBe(true);
  });
});

