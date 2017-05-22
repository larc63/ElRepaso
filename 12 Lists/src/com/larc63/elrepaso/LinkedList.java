package com.larc63.elrepaso;

public class LinkedList<T> {
	int size;

	public class Node {
		T value;
		Node next;

		Node(T v) {
			value = v;
			next = null;
		}
	}

	Node head;
	Node tail;

	public void add(T v) {
		if (head == null) {
			head = new Node(v);
			tail = head;
			size++;
			return;
		}
		Node current = head;
		while (current.next != null) {
			current = current.next;
		}
		current.next = new Node(v);
		tail = current.next;
		size++;
	}

	public void addAtIndex(T v, int index) {
		if (head == null) { // if the list is empty.. ignore the index
			head = new Node(v);
			tail = head;
			size++;
			return;
		}
		if (index > size || index < 0) {
			/// quit playin' around, put it at the end
			add(v);
			return;
		}
		if (index == 0) {
			Node current = new Node(v);
			current.next = head;
			size++;
			head = current;
			return;
		}
		Node current = head;
		while (index > 1) {
			current = current.next;
			index--;
		}
		if (current.next == null) {
			current.next = new Node(v);
			tail = current;
		} else {
			Node temp = current.next;
			current.next = new Node(v);
			current.next.next = temp;
		}
		size++;
	}

	public T removeFromIndex(int index) {
		Node current = head, last = head;
		int count = 0;
		T retVal = null;
		if (head == null) {
			return null;
		} else if (index == 0) {
			retVal = head.value;
			head = head.next;
			size--;
		} else {
			while (current.next != null && count < index) {
				last = current;
				current = current.next;
				count++;
			}
			retVal = current.value;
			last.next = current.next;
			size--;
		}
		return retVal;
	}

	public int size() {
		return size;
	}

	public void print() {
		Node current = head;
		StringBuilder sb = new StringBuilder();
		if (current != null) {
			while (current.next != null) {
				sb.append("| ");
				sb.append(current.value);
				sb.append(" | -> ");
				current = current.next;
			}
			sb.append("| ");
			sb.append(current.value);
			sb.append(" | ");
			System.out.println(sb.toString());
		}else{
			System.out.println("empty");
		}
	}
}