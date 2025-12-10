#include "gtest/gtest.h"
#include "Trie.h"

// Define a test fixture for the Calculator
class TrieTest : public ::testing::Test {
protected:
    // Instantiate the Calculator object used in the tests
    Trie trie;
};

// Test case for the addition function
TEST_F(TrieTest, HandlesInsertion) {
    // ASSERT_EQ checks if the expected value is equal to the actual value
    EXPECT_NO_THROW(trie.insert("app"));
    EXPECT_NO_THROW(trie.insert("apple"));
    EXPECT_NO_THROW(trie.insert("application"));
}
TEST_F(TrieTest, HandlesSearch) {
    // ASSERT_EQ checks if the expected value is equal to the actual value
    EXPECT_NO_THROW(trie.insert("app"));
    // EXPECT_NO_THROW(trie.insert("apple"));
    EXPECT_NO_THROW(trie.insert("application"));
    ASSERT_EQ(true, trie.search("app"));
    ASSERT_EQ(false, trie.search("apple"));
}
TEST_F(TrieTest, HandlesSearchPrefix) {
    // ASSERT_EQ checks if the expected value is equal to the actual value
    EXPECT_NO_THROW(trie.insert("app"));
    EXPECT_NO_THROW(trie.insert("apple"));
    EXPECT_NO_THROW(trie.insert("application"));
    std::vector<std::string> w = trie.searchPrefix("app");
    ASSERT_EQ(3, w.size());
    // ASSERT_EQ(false, trie.search("apple"));
}

// // Test case for the subtraction function
// TEST_F(CalculatorTest, HandlesSubtraction) {
//     ASSERT_EQ(-1, calc.subtract(2, 3));
//     ASSERT_EQ(10, calc.subtract(5, -5));
//     ASSERT_EQ(0, calc.subtract(10, 10));
// }

// // Test case for the multiplication function
// TEST_F(CalculatorTest, HandlesMultiplication) {
//     ASSERT_EQ(6, calc.multiply(2, 3));
//     ASSERT_EQ(-15, calc.multiply(3, -5));
//     ASSERT_EQ(0, calc.multiply(0, 100));
    
//     // Test for a large result (which is why 'long' is used for the return type)
//     ASSERT_EQ(2000000000L, calc.multiply(100000, 20000));
// }