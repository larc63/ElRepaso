#include "Calculator.h"

int Calculator::add(int a, int b) {
    return a + b;
}

int Calculator::subtract(int a, int b) {
    return a - b;
}

long Calculator::multiply(int a, int b) {
    // Note: Cast one of the operands to long to ensure the multiplication
    // is performed using long, preventing overflow for large inputs.
    return (long)a * b;
}
