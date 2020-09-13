// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

const uniqueOccurrences = function(arr) {
    if (arr.length === 0) { return true }
    const occ= {}

    for (let i = 0; i < arr.length; i++) {
        if(!occ[arr[i]]) {
            occ[arr[i]] = 1
        } else if(occ[arr[i]]) {
            occ[arr[i]] = occ[arr[i]] + 1
        }
    }
    const seen = Object.values(occ)
    const seenSet = new Set(seen)

    if (seen.length === seenSet.size) {
        return true
    } else {
        return false
    }
};

uniqueOccurrences([1,2,2,1,1,3,2])