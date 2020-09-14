const merge = function(left, right) {
    let resultArr = []
    let l = 0
    let r = 0

    while(l < left.length && r < right.length) {
        if(left[l] < right[r]) {
            resultArr.push(left[l])
            l++
        } else {
            resultArr.push(right[r])
            r++
        }

    }

    return resultArr.concat(left.slice(l)).concat(right.slice(r));
}


const mergeSort = function(arr) {
    if (arr.length < 2) { return arr }
    
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    // console.log(merge(mergeSort(left), mergeSort(right)))
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([1, 9, 3, 5, 4, 7]))