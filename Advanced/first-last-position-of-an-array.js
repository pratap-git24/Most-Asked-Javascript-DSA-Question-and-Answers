//Find First and Last Position of an Element in a Sorted Array

function searchRange(arr, target) {
    const findPosition = (arr, target, findFirst) => {
        let left = 0;
        let right = arr.length - 1;
        let position = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                position = mid;
                if (findFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return position;
    };

    const first = findPosition(arr, target, true);
    const last = findPosition(arr, target, false);
    
    return [first, last];
}

console.log(searchRange([1,2,3,4],2));

