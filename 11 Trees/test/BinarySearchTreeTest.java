import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Collections;

import org.junit.Test;

public class BinarySearchTreeTest {

	@Test
	public void testRoot() {
		BinarySearchTree bsr = new BinarySearchTree();
		bsr.add(1);
		String s = bsr.inOrderTraverse();
		assertEquals("1,", s);
	}
	@Test
	public void testadd1() {
		BinarySearchTree bsr = new BinarySearchTree();
		bsr.add(1);
		bsr.add(0);
		String s = bsr.inOrderTraverse();
		assertEquals("0,1,", s);
	}
	@Test
	public void testadd2() {
		BinarySearchTree bsr = new BinarySearchTree();
		bsr.add(1);
		bsr.add(0);
		bsr.add(10);
		String s = bsr.inOrderTraverse();
		assertEquals("0,1,10,", s);
	}
	@Test
	public void testadd3() {
		BinarySearchTree bsr = new BinarySearchTree();
		bsr.add(1);
		bsr.add(0);
		bsr.add(10);
		bsr.add(9);
		String s = bsr.inOrderTraverse();
		assertEquals("0,1,9,10,", s);
	}

	@Test
	public void testadd100() {
		BinarySearchTree bsr = new BinarySearchTree();
		ArrayList<Integer> data = new ArrayList<Integer>(100);
		StringBuilder sb = new StringBuilder();
		for(int i=0; i< 100; i++){
			data.add((int)Math.random()*1000);
		}
		Collections.sort(data);
		for(int d : data){
			bsr.add(d);
			sb.append(d);
			sb.append(",");
		}
		String s = bsr.inOrderTraverse();
		assertEquals(sb.toString(), s);
	}
}
