#include "gtest/gtest.h"
#include "Calculator.h"

// Define a test fixture for the Calculator
class CalculatorTest : public ::testing::Test {
protected:
    // Instantiate the Calculator object used in the tests
    Calculator calc;
};

// Test case for the addition function
TEST_F(CalculatorTest, HandlesAddition) {
    // ASSERT_EQ checks if the expected value is equal to the actual value
    ASSERT_EQ(5, calc.add(2, 3));
    ASSERT_EQ(0, calc.add(-5, 5));
    ASSERT_EQ(-8, calc.add(-5, -3));
}

// Test case for the subtraction function
TEST_F(CalculatorTest, HandlesSubtraction) {
    ASSERT_EQ(-1, calc.subtract(2, 3));
    ASSERT_EQ(10, calc.subtract(5, -5));
    ASSERT_EQ(0, calc.subtract(10, 10));
}

// Test case for the multiplication function
TEST_F(CalculatorTest, HandlesMultiplication) {
    ASSERT_EQ(6, calc.multiply(2, 3));
    ASSERT_EQ(-15, calc.multiply(3, -5));
    ASSERT_EQ(0, calc.multiply(0, 100));
    
    // Test for a large result (which is why 'long' is used for the return type)
    ASSERT_EQ(2000000000L, calc.multiply(100000, 20000));
}

// The main function that runs all tests
// (Often handled by a framework, but included for completeness)
// This is not typically required if you link to gtest_main, but
// is useful if you want to explicitly control test execution.
/*
int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
*/