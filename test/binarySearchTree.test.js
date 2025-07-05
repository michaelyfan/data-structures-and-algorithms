const { BinarySearchTree } = require('../src/binarySearchTree');

describe('Binary search tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('contains', () => {
    it('should return true for existent elements', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      expect(bst.contains(10)).toBeTruthy();
      expect(bst.contains(5)).toBeTruthy();
      expect(bst.contains(15)).toBeTruthy();
    });

    it('should return false for nonexistent elements', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      expect(bst.contains(7)).toBeFalsy();
      expect(bst.contains(20)).toBeFalsy();
      expect(bst.contains(-3)).toBeFalsy();
    });
  });

  describe('insert', () => {
    it('should successfully insert into an empty tree', () => {
      bst.insert(10);
      expect(bst.head).not.toBeUndefined();
      expect(bst.head.data).toBe(10);
      expect(bst.head.left).toBeUndefined();
      expect(bst.head.right).toBeUndefined();
    });

    it('should successfully insert many elements', () => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      // Check structure
      expect(bst.head.data).toBe(10);
      expect(bst.head.left.data).toBe(5);
      expect(bst.head.right.data).toBe(15);

      expect(bst.head.left.left.data).toBe(3);
      expect(bst.head.left.right.data).toBe(7);

      expect(bst.head.right.left.data).toBe(12);
      expect(bst.head.right.right.data).toBe(18);

      // Check leaf nodes
      expect(bst.head.left.left.left).toBeUndefined();
      expect(bst.head.left.left.right).toBeUndefined();
      expect(bst.head.left.right.left).toBeUndefined();
      expect(bst.head.left.right.right).toBeUndefined();
      expect(bst.head.right.left.left).toBeUndefined();
      expect(bst.head.right.left.right).toBeUndefined();
      expect(bst.head.right.right.left).toBeUndefined();
      expect(bst.head.right.right.right).toBeUndefined();
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);
    });

    it('should delete a leaf node', () => {
      bst.delete(3);
      expect(bst.contains(3)).toBeFalsy();
      expect(bst.head.left.left).toBeUndefined();
    });

    it('should delete a node with one child', () => {
      bst.delete(5); // 5 has left child 3 and right child 7
      expect(bst.contains(5)).toBeFalsy();
      // After deletion, 7 should take 5's place as right child of 10
      expect(bst.head.left.data).not.toBe(5);
      expect(bst.head.left.data).toBe(7);
    });

    it('should delete a node with two children', () => {
      bst.delete(15); // 15 has children 12 and 18
      expect(bst.contains(15)).toBeFalsy();
      // 15 should be replaced by its successor (18 or 12 depending on implementation)
      expect([18]).toContain(bst.head.right.data);
    });

    it('should delete the root node', () => {
      bst.delete(10);
      expect(bst.contains(10)).toBeFalsy();
      // New root should be 12
      expect(bst.head.data).toBe(12);
    });

    it('should throw an error when deleting a nonexistent value', () => {
      expect(() => bst.delete(100)).toThrow('Data does not exist!');
    });

    it('should handle deleting all nodes until the tree is empty', () => {
      [3, 5, 7, 10, 12, 15, 18].forEach(val => bst.delete(val));
      expect(bst.head).toBeUndefined();
    });
  });

  describe('traversals', () => {
    beforeEach(() => {
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);
    });

    test('in order traversal', () => {
      expect(bst.inOrderTraversal()).toStrictEqual([3,5,7,10,12,15,18]);
    })

    test('post order traversal', () => {
      expect(bst.postOrderTraversal()).toStrictEqual([3,7,5,12,18,15,10]);
    })

    test('pre order traversal', () => {
      expect(bst.preOrderTraversal()).toStrictEqual([10,5,3,7,15,12,18]);
    })
  })
});