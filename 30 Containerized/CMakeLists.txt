# Minimum required version for CMake
cmake_minimum_required(VERSION 3.10)

# Project name
project(CalculatorProject)

# GoogleTest requires at least C++17
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# include(FetchContent)
# FetchContent_Declare(
#   googletest
#   URL https://github.com/google/googletest/archive/03597a01ee50ed33e9dfd640b249b4be3799d395.zip
# )
# # For Windows: Prevent overriding the parent project's compiler/linker settings
# set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)
# FetchContent_MakeAvailable(googletest)

# Add the 'include' directory so the compiler can find 'Calculator.h'
include_directories(include)

# Find Google Test
# Note: This assumes Google Test is installed system-wide or available via FetchContent.
# For a quick start, you might need to install 'googletest' on your system (e.g., sudo apt install libgtest-dev on Debian/Ubuntu).
find_package(GTest REQUIRED)

# --- Library (Source Code) ---
# Add the source files for the main library
add_library(test_lib 
    src/Calculator.cpp
    src/Trie.cpp
)

# --- Test Executable ---
# Add the test executable
add_executable(local_tests 
    tests/CalculatorTests.cpp
    tests/TrieTests.cpp
)

# Link the test executable to the calculator library and Google Test libraries
target_link_libraries(local_tests
    test_lib
    GTest::gtest_main
)

# Enable testing
enable_testing()

# Add a test that will be run by CTest (the CMake test runner)
add_test(NAME run_local_tests COMMAND local_tests)