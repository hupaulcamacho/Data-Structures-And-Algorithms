// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

const searchInsert = function(arr, target) {
    let min = 0;
    let max = arr.length - 1;

    while (min < max) {
        let mid = Math.floor((min + max) / 2);
        if (arr[mid] === target ) return mid;

        if(arr[mid] > target) {
            max = mid
        }
        min = mid
    }
    return min
};