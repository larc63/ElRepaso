#include <string>
#include <vector>
#include <iostream>
#include "TrieNode.h"
class Trie
{
private:
    /* data */
    // std::unique_ptr<TrieNode> root;
    TrieNode *root;
    void findWords(TrieNode *n, std::vector<std::string> *words, std::string prefix)
    {

        if(n->isWord) {
            words->push_back(prefix);
        }
        for (int i = 0; i < 26; i++)
        {
            if (n->children[i] != nullptr)
            {
                char c = i + 'a';
                findWords(n->children[i], words, prefix + c);
            }
        }
    }

public:
    Trie(/* args */);
    ~Trie();

    void insert(std::string word);
    bool search(std::string word);
    std::vector<std::string> searchPrefix(std::string prefix);
};
