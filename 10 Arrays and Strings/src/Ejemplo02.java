
public class Ejemplo01 {

	public static boolean findUnique(String s){
		char[] visited = new char[128];
		for(int i = 0; i< s.length();i++){
			char c = s.charAt(i);
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
		System.out.println(findUnique("AB"));
		System.out.println(findUnique("AAB"));
		System.out.println(findUnique(""));
		
	}

}
