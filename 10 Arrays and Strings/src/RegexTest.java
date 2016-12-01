import java.text.ParseException;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexTest {
	public static void main(String[] args) throws ParseException {
		Pattern p = Pattern.compile("\\d\\d\\d");
		Matcher m = p.matcher("a123b");
		System.out.println(m.find());
		System.out.println(m.matches());

		p = Pattern.compile("^\\d\\d\\d$");
		m = p.matcher("123");
		System.out.println(m.find());
		System.out.println(m.matches());

		String s = "bcda";

		ArrayList<String> ss = new ArrayList<String>();
		for (int i = 0; i < s.length(); i++) {
			String right = s.substring(i);
			String left = s.substring(0, i);
			System.out.println("Adding: " + right + left);
			ss.add(right + left);
		}
		String regex = "(";
		for (String a : ss) {
			regex += "(";
			regex += a;
			regex += ")";
			regex += "{";
			regex += s.length();
			regex += "}";
		}
		regex += "){4}";
		p = Pattern.compile(regex);
		m = p.matcher("baabcdbcda");
		// System.out.println(m.find());
		while (m.find()) {
			System.out.print("Start index: " + m.start());
			System.out.print(" End index: " + m.end());
			System.out.println(" Found: " + m.group());
		}
	}

}
