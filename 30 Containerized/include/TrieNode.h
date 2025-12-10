#include <unordered_map>

class TrieNode
{
private:
public:
    TrieNode* children[26];
    bool isWord;
    TrieNode() {
        isWord = false;
        for (int i = 0; i < 26; i++) {
            children[i] = nullptr;
        }
    }
};
