package com.larc63.elrepaso;

/**
 * from http://www.programcreek.com/2014/02/leetcode-min-stack-java/
 * 
 */
public class MinStack {
	class Node {
		public int value;
		public int min;
		public Node next;

		public Node(int value, int min) {
			this.value = value;
			this.min = min;
		}
	}

	public Node top;

	public MinStack() {

	}

	public void push(int x) {
		if (top == null) {
			top = new Node(x, x);
		} else {
			Node e = new Node(x, Math.min(x, top.min));
			e.next = top;
			top = e;
		}

	}

	public void pop() {
		if (top == null) {
			return;
		}
		Node temp = top.next;
		top.next = null;
		top = temp;

	}

	public int top() {
		if (top == null)
			return -1;
		return top.value;
	}

	public int getMin() {
		if (top == null)
			return -1;
		return top.min;
	}
}