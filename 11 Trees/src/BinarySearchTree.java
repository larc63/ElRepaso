
public class BinarySearchTree extends BinaryTree {
	public void add(int v) {
		Node current = root;
		if (root == null) {
			root = new Node();
			root.value = v;
			return;
		}
		while (current != null) {
			if (v < current.value) {
				if (current.left != null) {
					current = current.left;
				} else {
					current.left = new Node();
					current.left.value = v;
					break;
				}
			} else {
				if (current.right != null) {
					current = current.right;
				} else {
					current.right = new Node();
					current.right.value = v;
					break;
				}
			}
		}
	}
}
