package com.larc63.elrepaso;

import static org.junit.Assert.*;

import org.junit.Test;

import com.larc63.elrepaso.LinkedListTest.LinkedListForTest;

public class StackTest {

	@Test
	public void test() {
		assertNotNull("creating a new list is not null", new LinkedList<Object>());
		Stack<Integer> s = new Stack<>();
		s.push(1);
		s.push(2);
		s.push(3);
		s.printList();
		int v = s.pop();
		s.printList();
		assertEquals(3, v);
		v = s.pop();
		s.printList();
		assertEquals(2, v);
		v = s.pop();
		s.printList();
		assertEquals(1, v);
		try {
			v = s.pop();
			s.printList();
			fail("should throw an exception at pop()");
		} catch (Exception e) {
			assertTrue(e instanceof NullPointerException);
		}
	}

	@Test
	public void test2() {
		assertNotNull("creating a new list is not null", new LinkedList<Object>());
		MinStack s = new MinStack();
		s.push(1);
		s.push(2);
		s.push(3);
		int v = s.getMin();
		assertEquals(1, v);
		v = s.top();
		s.pop();
		assertEquals(3, v);
		v = s.top();
		s.pop();
		assertEquals(2, v);
		v = s.top();
		s.pop();
		assertEquals(1, v);
		v = s.top();
		s.pop();
		assertEquals(-1, v);
	}
}
