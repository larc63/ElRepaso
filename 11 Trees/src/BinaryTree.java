public abstract class BinaryTree {
	class Node {
		int value;
		Node left;
		Node right;
	}

	protected Node root;
	StringBuilder sb = new StringBuilder();

	public BinaryTree() {
		super();
	}

	public String inOrderTraverse() {
		sb = new StringBuilder();
		inOrderTraverse(root);
		return sb.toString();
	}

	private void inOrderTraverse(Node n) {
		if (n != null) {
			inOrderTraverse(n.left);
			sb.append(n.value + ",");
			inOrderTraverse(n.right);
		}
	}
	
	public abstract void add(int v);
}