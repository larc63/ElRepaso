package com.larc63.elrepaso;

import static org.junit.Assert.*;
import com.larc63.elrepaso.*;

import org.junit.Test;

public class LinkedListTest {
	class LinkedListForTest<T> extends LinkedList<T> {
		public Object getHead() {
			return head;
		}

		public Object getTail() {
			return tail;
		}
	}

	@Test
	public void testCreation() {
		assertNotNull("creating a new list is not null", new LinkedList<Object>());
		LinkedListForTest<Integer> l = new LinkedListForTest<>();
		l.add(1);
		assertEquals("adding 1 element", l.size(), 1);
		assertEquals("head is tail", l.getHead(), l.getTail());
	}

	@Test
	public void testAdd() {
		LinkedListForTest<Integer> l = new LinkedListForTest<>();
		l.add(1);
		l.add(2);
		l.add(3);
		// |1| -> |2| -> |3|
		assertEquals(3, l.size());
		l.add(4);
		// |1| -> |2| -> |3| -> |4|
		assertEquals(4, l.size());
	}

	@Test
	public void testAddAtIndex() {
		LinkedListForTest<Integer> l = new LinkedListForTest<>();
		l.add(2);
		l.add(3);
		// |1| -> |3|
		// l.print();
		assertEquals(2, l.size());
		l.addAtIndex(0, 0);
		// |0| -> |2| -> |3|
		// l.print();
		assertEquals(3, l.size());
		l.addAtIndex(1, 1);
		// |0| -> |1| -> |2| -> |3|
		// l.print();
		assertEquals(4, l.size());
		l.addAtIndex(4, 3);
		// |0| -> |1| -> |2| -> |4| -> |3|
		// l.print();
		assertEquals(5, l.size());
		l.addAtIndex(6, 5);
		// |0| -> |1| -> |2| -> |4| -> |3| -> |6|
		// l.print();
		assertEquals(6, l.size());

	}

	@Test
	public void test4() {
		LinkedListForTest<Integer> l = new LinkedListForTest<>();
		l.add(1);
		l.add(2);
		l.add(3);
		// |1| -> |2| -> |3|
		l.print();
		assertEquals(3, l.size());
		int v = l.removeFromIndex(1);
		// |1| -> |3|
		l.print();
		assertEquals(2, v);
		assertEquals(2, l.size());
		l.addAtIndex(2, 1);
		// |1| -> |2| -> |3|
		l.print();
		v = l.removeFromIndex(1);
		// |1| -> |3|
		l.print();
		assertEquals(2, v);
		assertEquals(2, l.size());
		l.addAtIndex(2, 1);
		// |1| -> |2| -> |3|
		l.print();
		v = l.removeFromIndex(0);
		// |2| -> |3|
		l.print();
		assertEquals(1, v);
		assertEquals(2, l.size());
		l.addAtIndex(1, 0);
		// |1| -> |2| -> |3|
		l.print();
		assertEquals(3, l.size());
		v = l.removeFromIndex(2);
		// |1| -> |2|
		l.print();
		assertEquals(3, v);
		assertEquals(2, l.size());
		v = l.removeFromIndex(0);
		// |2|
		l.print();
		assertEquals(1, v);
		assertEquals(1, l.size());
		v = l.removeFromIndex(0);
		// null
		l.print();
		assertEquals(0, l.size());
		assertEquals(2, v);
	}

}