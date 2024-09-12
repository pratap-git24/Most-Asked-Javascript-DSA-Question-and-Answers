//Find First and Last Position of an Element in a Sorted Array
function searchRangeUnsorted(arr, target) {
    let first = -1;
    let last = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            if (first === -1) {
                first = i;  // Set first occurrence
            }
            last = i;  // Update last occurrence
        }
    }

    return [first, last];
}

console.log(searchRangeUnsorted([1, 2, 3, 4], 2));
