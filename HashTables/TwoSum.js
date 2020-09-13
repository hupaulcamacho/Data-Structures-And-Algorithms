// Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.

const twoSum = function(nums, target) {
    const numObj = {}
    const result = []
    for (let i = 0; i < nums.length; i++) {
        numObj[nums[i]] = i
    }

    for (let j = 0; j < nums.length; j++) {
        let otherAddend = target - nums[j]
        if(numObj[otherAddend] && numObj.otherAddend !== j) {
            result.push(j)
            result.push(numObj[otherAddend])
        }
    }
    return (result)
};
