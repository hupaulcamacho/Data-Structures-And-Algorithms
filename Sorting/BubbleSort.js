// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.


const bubbleSort = function(arr) {
    let numOfSwaps = 0
    const swap = function(a, b) {
        const swapElem = arr[b]
        arr[b] = arr[a]
        arr[a] = swapElem
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                numOfSwaps++
            }
        } 
    }
    let message1 = `Array is sorted in ${numOfSwaps} swaps`;
    console.log(message1, 'firstElem: ', arr[0], 'Last Elem: ', arr[arr.length - 1])
    return (message1, 'firstElem: ', arr[0], 'Last Elem: ', arr[arr.length - 1])
}

bubbleSort([4,6,1])