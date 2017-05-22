
public class Ejemplo01 {

	public static boolean findPermutation(String s1, String s2){
		char[] visited = new char[128];
		for(int i = 0; i< s1.length();i++){
			char c = s1.charAt(i);
			//System.out.println("checking " + c + " against " + visited[c]);
			if(visited[c] == c){
				return false;
			}
			visited[c] = c;
		}
		return true;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// find unique,
		System.out.println(findPermutation("ABC", "CBA"));
		System.out.println(findPermutation("ABC", "AAA"));
		//System.out.println(findPermutation(""));
		
	}

}
