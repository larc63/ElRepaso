#include "Trie.h"

#include <iostream>

Trie::Trie(/* args */)
{
    root = new TrieNode();
}

Trie::~Trie()
{
}

void Trie::insert(std::string word)
{
    TrieNode *n = root;
    for (char c : word)
    {
        int i = c - 'a';
        if (n->children[i] == nullptr)
        {
            n->children[i] = new TrieNode();
        }
        n = n->children[i];
    }
    n->isWord = true;
}

bool Trie::search(std::string word)
{
    bool retVal = true;

    TrieNode *node = root;
    for (char c : word)
    {
        int i = c - 'a';
        if (node->children[i] == nullptr)
        {
            std::cout << "word not found\n";
            retVal = false;
            break;
        }
        else
        {
            node = node->children[i];
        }
    }
    return retVal && node->isWord;
}

std::vector<std::string> Trie::searchPrefix(std::string prefix)
{
    std::vector<std::string> words = {};
    TrieNode *node = root;
    for (char c : prefix)
    {
        int i = c - 'a';

        if (node->children[i] == nullptr)
        {
            // std::cout << "prefix not found\n";
            break;
        }
        node = node->children[i];
    }
    findWords(node, &words, prefix);
    return words;
}