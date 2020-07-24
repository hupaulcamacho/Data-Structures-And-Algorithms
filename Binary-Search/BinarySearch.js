// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

const search = function(arr, target) {
    let min = 0;
    let max = arr.length - 1;
    let notFound = -1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let guess = arr[mid];

        if (guess === target) {
            return mid;
        } else if (guess > target) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return notFound
}