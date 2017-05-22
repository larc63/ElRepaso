package com.larc63.elrepaso;

public class Stack<T> {
	LinkedList<T> list;
	
	Stack(){
		list = new LinkedList<T>();
	}
	
	public void printList(){
		list.print();
	}
	
	public void push(T v){
		list.addAtIndex(v, 0);
	}
	
	public T pop(){
		return list.removeFromIndex(0);
	}
}
