#include <iostream>

int main()
{
    std::cout << "size of int, - " << sizeof(signed) << "\n";
    std::cout << "size of unsigned int, - " << sizeof(unsigned) << "\n";
    std::cout << "size of __int8, - " << sizeof(char) << "\n";
    std::cout << "size of unsigned __int8, - " << sizeof(unsigned char) << "\n";
    std::cout << "size of __int16, - " << sizeof(short int) << "\n";
    std::cout << "size of unsigned __int16, - " << sizeof(unsigned short) << "\n";
    std::cout << "size of __int32, - " << sizeof(signed) << "\n";
    std::cout << "size of unsigned __int32, - " << sizeof(unsigned) << "\n";
    std::cout << "size of __int64, - " << sizeof(signed long long) << "\n";
    std::cout << "size of unsigned __int64, - " << sizeof(unsigned long long) << "\n";
    std::cout << "size of short, - " << sizeof(signed short int) << "\n";
    std::cout << "size of unsigned short, - " << sizeof(unsigned short int) << "\n";
    std::cout << "size of long, - " << sizeof(signed long int) << "\n";
    std::cout << "size of unsigned long, - " << sizeof(unsigned long int) << "\n";
    std::cout << "size of long long, - " << sizeof(long long) << "\n";
    std::cout << "size of float, - " << sizeof(float) << "\n";
    std::cout << "size of double, - " << sizeof(double) << "\n";
    std::cout << "size of long double, - " << sizeof(long double) << "\n";
}
