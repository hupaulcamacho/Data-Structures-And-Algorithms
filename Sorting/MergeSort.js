const merge = function(left, right) {
    let resultArr = []
    let l = 0
    let r = 0
    // console.log(left)
    // console.log(right)

    while(l < left.length && r < right.lenth) {
        if(left[l] < right[r]) {
            resultArr.push(left[l])
            l++
        } else {
            resultArr.push(right[r])
            r++
        }

    }
    resultArr.push(left[l]);
    resultArr.push(right[r]);
    // console.log(resultArr)
    return resultArr
}


const mergeSort = function(arr) {
    if (arr.length < 2) { return arr }
    
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    let result = merge(mergeSort(left), mergeSort(right))

    console.log(merge(mergeSort(left), mergeSort(right)))
    console.log(arr)
    return result
}

mergeSort([1, 9, 3, 5, 4, 7])