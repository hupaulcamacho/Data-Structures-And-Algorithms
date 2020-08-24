// Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Linear
const peakIndexInMountainArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]) {
            return i
        }
    }
};

// Binary
const peakIndexInMountainArray = function(arr) {
    let min = 0;
    let max = arr.length - 1;

    while (min < max) {
        let mid = Math.floor((min + max) / 2);
        if (arr[mid] < arr[mid + 1]) {
            min = mid + 1
        } else {
            max = mid
        }
    }
    return min
};