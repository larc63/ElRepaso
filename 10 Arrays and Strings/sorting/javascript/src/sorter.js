class Sorter {
    /**
     * sort the input array using the merge sort algorithm
     * @param {any} a
     * @returns {any}
     */
    static mergeSort(a) {
        const merge = (arr, mid, left, right) => {
            const n1 = mid - left + 1;
            const n2 = right - mid;

            // Create temp arrays
            const L = new Array(n1);
            const R = new Array(n2);

            // Copy data to temp arrays L[] and R[]
            for (let i = 0; i < n1; i++) {
                L[i] = arr[left + i];
            }
            for (let j = 0; j < n2; j++) {
                R[j] = arr[mid + 1 + j];
            }

            let i = 0;
            let j = 0;
            let k = left;
            while (i < n1 && j < n2) {
                if (L[i] > R[j]) {
                    arr[k] = R[j];
                    j++;
                } else {
                    arr[k] = L[i];
                    i++;
                }
                k++;
            }

            // Copy the remaining elements of L[], if there are any
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }

            // Copy the remaining elements of R[], if there are any
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        };

        const mergeSortInternal = (arr, left, right) => {
            if (left >= right) {
                return;
            }
            // calculate midpoint
            const mid = Math.floor(left + (right - left) / 2);
            mergeSortInternal(arr, left, mid);
            mergeSortInternal(mid + 1, right);
            merge(arr, left, right);
        };

        mergeSortInternal(a, 0, a.length - 1);
    }
}

module.exports = Sorter;
