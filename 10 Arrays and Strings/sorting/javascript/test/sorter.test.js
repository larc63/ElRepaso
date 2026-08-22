const Sorter = require("../src/sorter");

describe("Sorter.mergeSort()", () => {
    test("should sort an empty array", () => {
        const arr = [];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([]);
    });

    test("should sort an array with a single element", () => {
        const arr = [5];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([5]);
    });

    test("should sort an array with two elements", () => {
        const arr = [2, 1];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([1, 2]);
    });

    test("should sort a small unsorted array", () => {
        const arr = [3, 1, 4, 1, 5, 9, 2, 6];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
    });

    test("should sort an already sorted array", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test("should sort a reverse-sorted array", () => {
        const arr = [5, 4, 3, 2, 1];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test("should sort an array with duplicate values", () => {
        const arr = [3, 1, 3, 2, 1, 2];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([1, 1, 2, 2, 3, 3]);
    });

    test("should sort an array with negative numbers", () => {
        const arr = [3, -1, 4, -5, 2];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([-5, -1, 2, 3, 4]);
    });

    test("should sort an array with mixed positive and negative numbers", () => {
        const arr = [-2, 0, 3, -1, 5, -3];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([-3, -2, -1, 0, 3, 5]);
    });

    test("should handle an array with all identical elements", () => {
        const arr = [5, 5, 5, 5];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([5, 5, 5, 5]);
    });

    test("should sort a larger array correctly", () => {
        const arr = [64, 34, 25, 12, 22, 11, 90];
        const result = Sorter.mergeSort(arr);
        expect(result).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });

    test("should return a new array (not mutate the original)", () => {
        const arr = [3, 1, 2];
        const original = [...arr];
        const result = Sorter.mergeSort(arr);
        expect(arr).toEqual(original);
    });
});
